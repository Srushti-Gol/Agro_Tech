from flask import Flask, request, jsonify ,session
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
import os
from dotenv import load_dotenv
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity, unset_jwt_cookies
from pymongo import MongoClient
from bson import json_util
from openai import OpenAI

app = Flask(__name__)
app.secret_key = 'secret_key'
CORS(app)  



# Connect to MongoDB
load_dotenv()
MONGODB_URI = os.getenv('MONGODB_URI')
client = MongoClient(MONGODB_URI)
db = client.get_default_database()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai_client = OpenAI(api_key = OPENAI_API_KEY)

auth_collection = db['user']

# Initialize JWTManager
app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this to a random secret key
jwt = JWTManager(app)

# Function to get user identity for JWT token
@jwt.user_identity_loader
def user_identity_lookup(user):
    return user['email']

@app.route('/protected', methods=['GET'])
@jwt_required()  # This will protect the route with JWT token authentication
def protected():
    # Access the current user identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

# Login route with JWT token creation
@app.route('/login', methods=['POST'])
def api_login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400

    user = auth_collection.find_one({'email': email})

    if user:
        if user['password'] == password:
            # Create JWT token
            access_token = create_access_token(identity=user)
            return jsonify({'message': 'Login successful', 'access_token': access_token})
        else:
            return jsonify({'message': 'Incorrect password'}), 401
    else:
        return jsonify({'message': 'User not found'}), 404

#for Signup
@app.route('/signup', methods=['POST'])
def api_signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    user = {
        'name': name,
        'email': email,
        'password': password
    }
    
    auth_collection.insert_one(user)
    print("Signup successful")
    return jsonify({'message': 'Signup successful'})

#logout
@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    # Remove the JWT cookies from the response
    resp = jsonify({'message': 'Logout successful'})
    unset_jwt_cookies(resp)
    return resp, 200

def generate_crop_report(predicted_crop):
    prompt_crop_practices = f"You are an agriculture expert recommending crop practices for the {predicted_crop} crop."
    prompt_irrigation_practices = f"You are an agriculture expert analyzing soil. Based on the predicted crop '{predicted_crop}', recommend suitable irrigation practices."
    prompt_pest_control_methods = f"You are an agriculture expert analyzing soil. Based on the predicted crop '{predicted_crop}', suggest effective pest control methods."
    prompt_fertilizer_recommendation = f"You are an agriculture expert providing fertilizer recommendations for the {predicted_crop} crop."

    response_1 = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Answer the question in less than 40 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user", "content": prompt_crop_practices}
        ],
    )

    response_2 = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Answer the question in less than 40 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user", "content": prompt_irrigation_practices}
        ],
    )

    response_3 = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Answer the question in less than 40 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user", "content": prompt_pest_control_methods}
        ],
    )

    response_4 = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Answer the question in less than 40 words based on the content below, and if the question can't be answered based on the content, say \"urea\"\n\n"},
            {"role": "user", "content": prompt_fertilizer_recommendation}
        ],
    )

    return {
        'predicted_crop': predicted_crop,
        'crop_practices_recommendation': response_1.choices[0].message.content,
        'irrigation_practices_recommendation': response_2.choices[0].message.content,
        'pest_control_methods_recommendation': response_3.choices[0].message.content,
        'fertilizer_recommendation': response_4.choices[0].message.content,
    }

# for Crop Recommendation
CropRecModel = joblib.load('../models/CropRecModel.joblib')
@app.route('/predictCrop', methods=['POST'])
@jwt_required()
def predict_crop():
    data = request.get_json()
    # Convert values to float
    features = [float(data[key]) for key in ['Nitrogen', 'Phosphorous', 'Potassium', 'Temperature', 'Humidity', 'ph', 'Rainfall']]
    
    # Print the features
    print("Features:", features)

    # Make prediction
    prediction = CropRecModel.predict([features])

    report = generate_crop_report(prediction[0])
    
    return jsonify(report), 200


# for Fertilizer recommendation
FertRecModel = joblib.load('../models/FertRecModel.joblib')

ds_f = pd.read_csv('../Datasets/Fertilizer Prediction.csv')
y_f = ds_f['Fertilizer Name'].copy()
X_f = ds_f.drop('Fertilizer Name', axis=1).copy()

# Preprocessing steps
ct_f = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [3, 4])], remainder='passthrough')
X_f = np.array(ct_f.fit_transform(X_f))

sc_f = StandardScaler()
X_f = sc_f.fit_transform(X_f)

@app.route('/predictFert', methods=['POST'])
@jwt_required()
def predict_fert():
    data = request.get_json()

    # Convert the received data to the format required by the model
    new_data = [
        [
            int(data['Temperature']),
            int(data['Humidity']),
            int(data['Moisture']),
            data['Soil_Type'],
            data['Crop_Type'],
            int(data['Nitrogen']),
            int(data['Phosphorous']),
            int(data['Potassium'])
        ]
    ]
    new_data = ct_f.transform(new_data)
    new_data = sc_f.transform(new_data)
    
    # Make prediction
    prediction = FertRecModel.predict(new_data)
    
    # Generate recommendations
    recommendations = generate_fertilizer_recommendations(data['Crop_Type'], prediction[0])
    
    # Return the prediction along with recommendations
    return jsonify({'prediction': prediction[0], 'recommendations': recommendations})


def generate_fertilizer_recommendations(crop_type, prediction):
    prompt_fertilizer_recommendation = f"You are an agriculture expert providing fertilizer recommendations for {crop_type} crop. and fertilizer {prediction}"
    
    response = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Answer the question in less than 70 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user", "content": prompt_fertilizer_recommendation}
        ],
    )
    
    return response.choices[0].message.content


# for Yield Prediction
YieldPreModel = joblib.load('../models/YieldPreModel.pkl')

ds_yield = pd.read_csv("../Datasets/crop_production.csv")
ds_yield = ds_yield.drop(['Crop_Year'], axis=1)
ds_yield = ds_yield.drop(['State_Name'], axis=1)
ds_yield = ds_yield.dropna()

X_yield = ds_yield.drop(['Production'], axis=1)
Y_yield = ds_yield['Production']

x_train_yield, x_test_yield, y_train_yield, y_test_yield = train_test_split(X_yield, Y_yield, test_size=0.25, random_state=0)

categorical_cols_yield = ['District_Name', 'Season', 'Crop']

ohe_yield = OneHotEncoder(handle_unknown='ignore')
ohe_yield.fit(x_train_yield[categorical_cols_yield])

@app.route('/predictYield', methods=['POST'])
@jwt_required()
def predict_yield():
    data = request.get_json()

    print(data)
    user_input_yield = pd.DataFrame([[data['District_Name'], data['Season'], data['Crop'], int(data['Area'])]], columns=['District_Name', 'Season', 'Crop', 'Area'])
    user_input_categorical_yield = ohe_yield.transform(user_input_yield[categorical_cols_yield])
    user_input_final_yield = np.hstack((user_input_categorical_yield.toarray(), user_input_yield.drop(categorical_cols_yield, axis=1)))

    # Make the prediction
    prediction_yield = YieldPreModel.predict(user_input_final_yield)
    print(prediction_yield)
    return jsonify({'prediction': prediction_yield[0]})

#Calling API
def generate_response(user_message):
    response = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_message}]
    )
    return response.choices[0].message.content

#For AgriBot
@app.route('/chat', methods=['POST'])
@jwt_required()
def chat():
    data = request.get_json()
    user_message = data.get('text')
    bot_message = generate_response(user_message)
    print("Bot's response:", bot_message)  
    return jsonify({'message': bot_message})


if __name__ == '__main__':
    app.run(debug=True)