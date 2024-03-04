from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import io

app = Flask(__name__)
CORS(app)

# Load the saved model
loaded_model = load_model('../models/plantDisease_model')
class_names = ['brown spots', 'deficiency calcium', 'xanthomonas', 'stemphylium solani', 'mosaic vena kuning', 'virus king keriting']

@app.route('/predictDisease', methods=['POST'])
def predict_disease():
    try:
        # Load image data from the request
        file = request.files['image']
        
        # Ensure that the file is in memory as bytes
        img_bytes = file.read()
        
        # Load image from bytes
        img = image.load_img(io.BytesIO(img_bytes), target_size=(150, 150)) # Adjust target_size as needed
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize the image
        
        # Make predictions
        predictions = loaded_model.predict(img_array)
        
        # Display the predicted probabilities for each class
        print(predictions)
        
        # Get the predicted class index
        predicted_class_index = np.argmax(predictions)
        
        # Get the final predicted class name
        predicted_class_name = class_names[predicted_class_index]
        
        return jsonify({'prediction': predicted_class_name}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True , port=5003)
