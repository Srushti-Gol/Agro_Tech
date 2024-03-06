from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import io
import os

app = Flask(__name__)
CORS(app)

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai_client = OpenAI(api_key = OPENAI_API_KEY)

loaded_model = load_model('../models/plantDisease_model')
class_names = ['brown spots', 'deficiency calcium', 'xanthomonas', 'stemphylium solani', 'mosaic vena kuning', 'virus king keriting']

def generate_report(disease):
    prompt_Symptoms = f"You are a Plant pathology and an expert working for a very reputed laboratory of plants .Give Symptoms for the plant leaf disease:{disease}"
    prompt_Cause = f"You are a Plant pathology and an expert working for a very reputed laboratory of plants .Give Cause for the plant leaf disease:{disease}"
    prompt_Treatment = f"You are a Plant pathology and an expert working for a very reputed laboratory of plants .Give Treatment for the plant leaf disease:{disease}"
    prompt_Recommendation = f"You are a Plant pathology and an expert working for a very reputed laboratory of plants .Give Recommendation for the plant leaf disease:{disease}"

    Symptoms = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",  
        messages=[
           {"role": "system", "content": "Answer the question in less than 20 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user","content": prompt_Symptoms}
        ],
    )

    Cause = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",  
        messages=[
           {"role": "system", "content": "Answer the question in less than 20 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user","content": prompt_Cause}
        ],
    )

    Treatment = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",  
        messages=[
           {"role": "system", "content": "Answer the question in less than 30 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user","content": prompt_Treatment}
        ],
    )

    Recommendation = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",  
        messages=[
           {"role": "system", "content": "Answer the question in less than 40 words based on the content below, and if the question can't be answered based on the content, say \"I don't know\"\n\n"},
            {"role": "user","content": prompt_Recommendation}
        ],
       
    )
    return {'Symptoms' : Symptoms.choices[0].message.content, 'predicted_category' : disease , 'Cause' : Cause.choices[0].message.content, 'Treatment' : Treatment.choices[0].message.content, 'Recommendation' : Recommendation.choices[0].message.content}


@app.route('/predictDisease', methods=['POST'])
def predict_disease():
    try:
        file = request.files['image']
        img_bytes = file.read()
        img = image.load_img(io.BytesIO(img_bytes), target_size=(150, 150)) 
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0  
        predictions = loaded_model.predict(img_array)
        print(predictions)
        predicted_class_index = np.argmax(predictions)
        predicted_class_name = class_names[predicted_class_index]
        
        report = generate_report(predicted_class_name)
        print(report)
        return jsonify(report), 200
    
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True , port=5003)
