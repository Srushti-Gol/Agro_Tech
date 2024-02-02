from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# for Crop Recommendation
CropRecModel = joblib.load('../models/CropRecModel.joblib')

@app.route('/predictCrop', methods=['POST'])
def predict_crop():
    data = request.get_json()
    
    # Convert values to float
    features = [float(data[key]) for key in ['nitrogen', 'phosphorous', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall']]
    
    # Print the features
    print("Features:", features)

    # Make prediction
    prediction = CropRecModel.predict([features])
    
    return jsonify({'prediction': prediction[0]})


# for Fertilizer recommendation
FertRecModel = joblib.load('../models/FertRecModel.joblib')

ds_f = pd.read_csv('../../../../Dataset/Fertilizer Prediction.csv')
y_f = ds_f['Fertilizer Name'].copy()
X_f = ds_f.drop('Fertilizer Name', axis=1).copy()

# Preprocessing steps
ct_f = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [3, 4])], remainder='passthrough')
X_f = np.array(ct_f.fit_transform(X_f))

sc_f = StandardScaler()
X_f = sc_f.fit_transform(X_f)

@app.route('/predictFert', methods=['POST'])
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
    print(new_data)
    new_data = ct_f.transform(new_data)
    new_data = sc_f.transform(new_data)
    
    # Make prediction
    prediction = FertRecModel.predict(new_data)
    print(prediction)
    # Return the prediction
    return jsonify({'prediction': prediction[0]})


if __name__ == '__main__':
    app.run(debug=True)
