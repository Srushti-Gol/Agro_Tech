from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import io
from dotenv import load_dotenv
from openai import OpenAI
import os

app = Flask(__name__)
CORS(app)
soil_model = tf.keras.models.load_model('../models/model.h5')

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai_client = OpenAI(api_key=OPENAI_API_KEY)

def generate_soil_insights(soil_type):
    prompt_crop = f"You are an agricultural expert advising a farmer on the best crop to grow in {soil_type} soil."
    prompt_fertilizer = f"You are an agricultural expert advising a farmer on the best fertilizer to use for {soil_type} soil."
    irrigation_prompt = f"You are an agriculture expert analyzing soil. Based on the soil type '{soil_type}', recommend suitable irrigation practices."
    pest_control_prompt = f"You are an agriculture expert analyzing soil. Based on the soil type '{soil_type}', suggest effective pest control methods."    
    
    crop_recommendation = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",  
        messages=[
           {"role": "system", "content": "Answer the question in less than 25 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user","content": prompt_crop}
        ],
    )
    
    fertilizer_recommendation = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",  
        messages=[
           {"role": "system", "content": "Answer the question in less than 25 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user","content": prompt_fertilizer}
        ],
    )
    
    irrigation_response = openai_client.chat.completions.create(
       model="gpt-3.5-turbo",  
        messages=[
           {"role": "system", "content": "Answer the question in less than 25 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user","content": irrigation_prompt}
        ],
    )

    pest_control_response = openai_client.chat.completions.create(
       model="gpt-3.5-turbo",  
        messages=[
           {"role": "system", "content": "Answer the question in less than 25 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user","content": pest_control_prompt}
        ],
    )

    return {'soil_type': soil_type,
            'crop_recommendation': crop_recommendation.choices[0].message.content,
            'fertilizer_recommendation': fertilizer_recommendation.choices[0].message.content,
            'irrigation_practices': irrigation_response.choices[0].message.content,
            'pest_control_methods': pest_control_response.choices[0].message.content,
            }

@app.route('/predictSoil', methods=['POST'])
def predict_soil():
    try:
        # Load image data from the request
        file = request.files['image']
        
        # Ensure that the file is in memory as bytes
        img_bytes = file.read()
        
        # Load image from bytes
        img = image.load_img(io.BytesIO(img_bytes), target_size=(256, 256))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array /= 255.0  # Normalize the pixel values
        
        # Make predictions
        predictions = soil_model.predict(img_array)
        
        # Get the predicted class index
        predicted_class_index = np.argmax(predictions)
        
        # Map the predicted class index to the class label
        class_labels = ['Black Soil', 'Cinder Soil', 'Laterite Soil', 'Peat Soil', 'Yellow Soil']
        predicted_class_label = class_labels[predicted_class_index]
        
        report = generate_soil_insights(predicted_class_label)
        
        return jsonify(report), 200
    
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5002)
