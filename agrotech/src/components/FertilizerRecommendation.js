import React, { useState } from "react";
import "./CSS/form.css";

function FertilizerRecommendation() {
    const [formData, setFormData] = useState({
        Temperature: "",
        Humidity: "",
        Moisture: "",
        Soil_Type: "",
        Crop_Type: "",
        Nitrogen: "",
        Phosphorous: "",
        Potassium: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Data:", formData);
    };

    return (
        <div className="d-form-container">
            <div className="d-form-text-section">
                <div className="col-xxl-8 col-xl-9 col-lg-9 col-md-7 col-sm-9">
                    <div className="card-body p-5">
                        <h1 className="fs-10 card-title fw-bold mb-5">
                            Fertilizer Recommendation
                        </h1>
                        <form
                            method="POST"
                            className="needs-validation"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
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
                                    <label className="mb-2 label-large" >
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
                                        Moisture <span>*</span>
                                    </label>
                                    <input
                                        id="Moisture"
                                        placeholder="Enter Moisture value of the soil"
                                        type="number"
                                        className="form-control"
                                        name="Moisture"
                                        value={formData.Moisture}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Moisture is required</div>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <div className="mr-3 flex-grow-1">
                                    <label className="mb-2 label-large" htmlFor="Stroke">
                                        Soil Type <span>*</span>
                                    </label>
                                    <select
                                        id="Soil_Type"
                                        className="form-control custom-dropdown"
                                        name="Soil_Type"
                                        value={formData.Soil_Type}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Sandy">Sandy</option>
                                        <option value="Loamy">Loamy</option>
                                        <option value="Black">Black</option>
                                        <option value="Red">Red</option>
                                        <option value="Clayey">Clayey</option>
                                    </select>
                                    <div className="invalid-feedback">Soil Type is required</div>
                                </div>

                            </div>
                            <div className="mb-3 d-flex">
                                <div className="mr-3 flex-grow-1">
                                    <label className="mb-2 label-large" htmlFor="Stroke">
                                        Crop Type <span>*</span>
                                    </label>
                                    <select
                                        id="Crop_Type"
                                        className="form-control custom-dropdown"
                                        name="Crop_Type"
                                        value={formData.Crop_Type}
                                        onChange={handleChange}
                                        required
                                    >
                                        {/* ['Maize', 'Sugarcane', 'Cotton', 'Tobacco', 'Paddy', 'Barley', 'Wheat', 'Millets', 'Oil seeds', 'Pulses', 'Ground Nuts'] */}
                                        <option value="">Select an option</option>
                                        <option value="Maize">Maize</option>
                                        <option value="Sugarcane">Sugarcane</option>
                                        <option value="Cotton">Cotton</option>
                                        <option value="Tobacco">Tobacco</option>
                                        <option value="Paddy">Paddy</option>
                                        <option value="Barley">Barley</option>
                                        <option value="Wheat">Wheat</option>
                                        <option value="Millets">Millets</option>
                                        <option value="Oil seeds">Oil seeds</option>
                                        <option value="Pulses">Pulses</option>
                                        <option value="Ground Nuts">Ground Nuts</option>
                                    </select>
                                    <div className="invalid-feedback">Crop Type is required</div>
                                </div>

                            </div>
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
                                    <label className="mb-2 label-large" >
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
                        <strong>Collect Environmental Data:</strong> Gather information about temperature, humidity, and moisture in the target area.
                    </li>
                    <li>
                        <strong>Identify Soil Type:</strong> Determine the soil type from the options: ['Sandy', 'Loamy', 'Black', 'Red', 'Clayey'].
                    </li>
                    <li>
                        <strong>Choose Crop Type:</strong> Select the crop type from the options: ['Maize', 'Sugarcane', 'Cotton', 'Tobacco', 'Paddy', 'Barley', 'Wheat', 'Millets', 'Oil seeds', 'Pulses', 'Ground Nuts'].
                    </li>
                    <li>
                        <strong>Enter Soil Nutrient Levels:</strong> Input the levels of Nitrogen (N), Phosphorous (P), and Potassium (K) in the soil.
                    </li>
                    <li>
                        <strong>Submit Data in Form:</strong> Fill out the form with the collected data.
                    </li>
                    <li>
                        <strong>Click Predict:</strong> Use the "Predict" button to generate fertilizer recommendations based on the entered information.
                    </li>
                    <li>
                        <strong>Review Recommendations:</strong> Evaluate the recommended fertilizers for the selected crop.
                    </li>
                    <li>
                        <strong>Adjust as Needed:</strong> If necessary, make adjustments to the fertilizer application plan.
                    </li>
                    <li>
                        <strong>Submit for Analysis:</strong> Submit the form for further analysis and receive detailed fertilizer recommendations.
                    </li>
                    <li>
                        <strong>Follow Annual Review:</strong> Periodically review and update fertilizer plans based on changing soil conditions.
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default FertilizerRecommendation
