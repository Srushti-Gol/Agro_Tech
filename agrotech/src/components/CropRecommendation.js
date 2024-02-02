import React, { useState } from "react";
import "./CSS/form.css";

function CropRecommendation() {
    const [formData, setFormData] = useState({
        Nitrogen: "",
        Phosphorous: "",
        Potassium: "",
        Temperature: "",
        Humidity: "",
        ph: "",
        Rainfall: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(JSON.stringify(formData));
            const response = await fetch('http://localhost:8080/predictCrop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to fetch prediction');
            }
            const data = await response.json();
            console.log('Prediction:', data.prediction);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="d-form-container">
            <div className="d-form-text-section">
                <div className="col-xxl-8 col-xl-9 col-lg-9 col-md-7 col-sm-9">
                    <div className="card-body p-5">
                        <h1 className="fs-10 card-title fw-bold mb-5">
                            Crop Recommendation
                        </h1>
                        <form
                            method="POST"
                            className="needs-validation"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >

                            <div className="mb-3 d-flex">
                                <div className="mr-3 flex-grow-1">
                                    <label className="mb-2 label-large" >
                                        Nitrogen(N)<span>*</span>
                                    </label>
                                    <input
                                        id="Nitrogen"
                                        placeholder="Enter ratio of Nitrogen content in soil"
                                        type="number"
                                        className="form-control"
                                        name="Nitrogen"
                                        value={formData.Nitrogen}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Nitrogen is required</div>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="flex-grow-1">
                                    <label className="mb-2 label-large">
                                        Phosphorous(P)  <span>*</span>
                                    </label>
                                    <input
                                        id="Phosphorous"
                                        placeholder="Enter ratio of Phosphorous content in soil"
                                        type="number"
                                        className="form-control"
                                        name="Phosphorous"
                                        value={formData.Phosphorous}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Phosphorous is required</div>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="mr-3 flex-grow-1">
                                    <label className="mb-2 label-large" >
                                        Potassium(K) <span>*</span>
                                    </label>
                                    <input
                                        id="Potassium"
                                        placeholder="Enter ratio of Potassium content in soil"
                                        type="number"
                                        className="form-control"
                                        name="Potassium"
                                        value={formData.Potassium}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Potassium is required</div>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="flex-grow-1">
                                    <label className="mb-2 label-large" >
                                        Temperature <span>*</span>
                                    </label>
                                    <input
                                        id="Temperature"
                                        placeholder="Enter temperature in degree Celsius"
                                        type="number"
                                        className="form-control"
                                        name="Temperature"
                                        value={formData.Temperature}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Temperature is required</div>
                                </div>
                            </div>

                            <div className="mb-3 d-flex">
                                <div className="mr-3 flex-grow-1">
                                    <label className="mb-2 label-large">
                                        Humidity <span>*</span>
                                    </label>
                                    <input
                                        id="Humidity"
                                        placeholder="Enter relative humidity in %"
                                        type="number"
                                        className="form-control"
                                        name="Humidity"
                                        value={formData.Humidity}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">humidity is required</div>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="flex-grow-1">
                                    <label className="mb-2 label-large" >
                                        ph <span>*</span>
                                    </label>
                                    <input
                                        id="ph"
                                        placeholder="Enter  ph value of the soil"
                                        type="number"
                                        className="form-control"
                                        name="ph"
                                        value={formData.ph}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">ph is required</div>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="mr-3 flex-grow-1">
                                    <label className="mb-2 label-large" >
                                        Rainfall <span>*</span>
                                    </label>
                                    <input
                                        id="Rainfall"
                                        placeholder="Enter rainfall in mm"
                                        type="number"
                                        className="form-control"
                                        name="Rainfall"
                                        value={formData.Rainfall}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Rainfall is required</div>
                                </div>
                            </div>

                            <div className="align-items-center">
                                <button type="submit" className="btn btn-primary">
                                    Predict
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="steps-container">
                <h2>Steps to Follow</h2>
                <ol>
                    <li>
                        <strong>Collect Soil Samples:</strong> Gather soil samples from different areas of your farm.
                    </li>
                    <li>
                        <strong>NPK Ratio Measurement:</strong> Measure the Nitrogen (N), Phosphorous (P), and Potassium (K) levels in the soil.
                    </li>
                    <li>
                        <strong>Temperature Recording:</strong> Record the current temperature of the soil in degrees Celsius.
                    </li>
                    <li>
                        <strong>Humidity Measurement:</strong> Measure the relative humidity of the environment.
                    </li>
                    <li>
                        <strong>pH Level Testing:</strong> Test the pH level of the soil to determine its acidity or alkalinity.
                    </li>
                    <li>
                        <strong>Rainfall Data Collection:</strong> Collect data on the amount of rainfall in millimeters in your region.
                    </li>
                    <li>
                        <strong>Enter Data in Form:</strong> Enter the collected data into the corresponding fields in the form.
                    </li>
                    <li>
                        <strong>Submit Form for Analysis:</strong> Submit the form for analysis to receive personalized crop recommendations.
                    </li>
                    <li>
                        <strong>Review Recommendations:</strong> Review the recommended crops based on the provided data.
                    </li>
                    <li>
                        <strong>Adjust as Needed:</strong> If necessary, make adjustments to the farming practices based on the recommendations.
                    </li>
                    <li>
                        <strong>Repeat Annually:</strong> Repeat the soil testing and form submission annually for updated recommendations.
                    </li>
                </ol>
            </div>

        </div>
    );
}

export default CropRecommendation
