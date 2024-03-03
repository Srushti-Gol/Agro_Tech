import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CSS/form.css";

function PlantDiseaseDetection() {
    const [formData, setFormData] = useState({
        plantImage: null,
      });
      const [prediction, setPrediction] = useState(null);
    
      const handleChange = (e) => {
        const { name, files } = e.target;
        setFormData({
          ...formData,
          [name]: files[0],
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.plantImage) {
          toast.error("Please upload an image.");
          return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("image", formData.plantImage);
    
            const response = await fetch("http://localhost:5003/predictDisease", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error("Failed to detect plant disease.");
            }

            const data = await response.json();
            console.log("Detection Result:", data);
            setPrediction(data.prediction);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };
    
      return (
        <div className="d-form-container">
          <ToastContainer 
                className="Toastify__toast-container" 
                toastClassName="Toastify__toast" 
                bodyClassName="Toastify__toast-body"
          />
          <div className="d-form-text-section">
            <div className="col-xxl-8 col-xl-9 col-lg-9 col-md-7 col-sm-9">
              <div className="card-body p-5">
                <h1 className="fs-10 card-title fw-bold mb-5">
                  Plant Disease Detection
                </h1>
                <form
                  method="POST"
                  className="needs-validation"
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <label className="mb-2 label-large" htmlFor="plantImage">
                      Plant Leaf Photo <span>*</span>
                    </label>
                    <input
                      id="plantImage"
                      type="file"
                      accept="image/*"
                      className="form-control"
                      name="plantImage"
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">Plant image is required</div>
                  </div>
    
                  <div className="align-items-center">
                    <button type="submit" className="btn btn-primary">
                      Detect Disease
                    </button>
                  </div>
                </form>
                {prediction && (
                            <div className="prediction-result">
                                <h2>Disease :</h2>
                                <h5>{prediction}</h5>
                            </div>
                        )}
              </div>
            </div>
          </div>
          <div className="steps-container">
      <h2>Steps to Follow</h2>
      <ol>
        <li>
          <strong>Collect Plant Leaf Photo:</strong> Capture a clear photo of the plant leaf showing signs of disease.
        </li>
        <li>
          <strong>Upload Plant Leaf Photo:</strong> Use the "Plant Leaf Photo" field to upload the captured image.
        </li>
        <li>
          <strong>Click Detect Disease:</strong> Initiate the disease detection process by clicking the "Detect Disease" button.
        </li>
        <li>
          <strong>Wait for Analysis:</strong> Allow the system to analyze the uploaded image for potential diseases.
        </li>
        <li>
          <strong>Review Detection Results:</strong> Examine the results to identify the detected plant disease.
        </li>
        <li>
          <strong>Follow Recommended Actions:</strong> If applicable, follow any recommended actions or treatments provided.
        </li>
        <li>
          <strong>Repeat as Needed:</strong> For ongoing plant health monitoring, repeat the detection process as needed.
        </li>
      </ol>
    </div>
        </div>
    )
}

export default PlantDiseaseDetection
