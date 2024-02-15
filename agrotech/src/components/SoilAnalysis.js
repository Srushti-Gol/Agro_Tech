import React, { useState } from "react";
import "./CSS/form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import Axios library

function SoilAnalysis() {
  const [formData, setFormData] = useState({
    soilImage: null,
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

    if (!formData.soilImage) {
      toast.error("Please upload soil image.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('soilImage', formData.soilImage);

      const response = await axios.post('http://localhost:5000/predictSoil', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(formDataToSend);
      const data = await response.json(); 
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error analyzing soil:', error);
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
              Soil Analysis
            </h1>
            <form
              method="POST"
              className="needs-validation"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label className="mb-2 label-large" htmlFor="soilImage">
                  Soil Photo <span>*</span>
                </label>
                <input
                  id="soilImage"
                  type="file"
                  accept="image/*"
                  className="form-control"
                  name="soilImage"
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Soil image is required</div>
              </div>

              <div className="align-items-center">
                <button type="submit" className="btn btn-primary">
                  Analyze Soil
                </button>
              </div>
            </form>
            {prediction && (
              <div className="prediction-result">
                <h2>Soil:</h2>
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
            <strong>Collect Soil Photo:</strong> Capture a clear photo of the soil from different areas of your farm.
          </li>
          <li>
            <strong>Upload Soil Photo:</strong> Use the "Soil Photo" field to upload the captured soil image.
          </li>
          <li>
            <strong>Click Analyze Soil:</strong> Initiate the soil analysis process by clicking the "Analyze Soil" button.
          </li>
          <li>
            <strong>Wait for Analysis:</strong> Allow the system to analyze the uploaded soil image for soil type identification.
          </li>
          <li>
            <strong>Review Analysis Results:</strong> Examine the results to identify the soil type and recommended crops.
          </li>
          <li>
            <strong>Follow Recommendations:</strong> Consider the recommended crops based on the soil analysis.
          </li>
          <li>
            <strong>Repeat as Needed:</strong> For ongoing farming, repeat soil analysis periodically for updated recommendations.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default SoilAnalysis;
