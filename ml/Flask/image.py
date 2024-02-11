from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import io

app = Flask(__name__)
CORS(app)

# Load the saved model for soil prediction
soil_model = tf.keras.models.load_model('../models/model.h5')

@app.route('/predictSoil', methods=['POST'])
def predict_soil():
    try:
        # Load image data from the request
        file = request.files['soilImage']
        
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
        
        return jsonify({'prediction': predicted_class_label}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
