import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CSS/form.css";
import loader from "../assets/Spinner-2.gif";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


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
    const [prediction, setprediction] = useState(null);
    const [recommendations, setrecommendations] = useState(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emptyFields = [];
        for (const key in formData) {
            if (formData.hasOwnProperty(key) && (formData[key] === "" || formData[key] === 0 || formData[key] === undefined)) {
                emptyFields.push(key);
            }
        }

        if (emptyFields.length > 0) {
            toast.error(`Please fill in the following fields: ${emptyFields.join(", ")}`);
            return;
        }

        try {
            setOpen(true);
            setLoading(true);
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'https://Vishwadeep17-agrotech.hf.space/predictFert',
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const data = await response.data;
            setprediction(data.prediction);
            setrecommendations(data.recommendations);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setOpen(false);
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
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <DialogTitle sx={{ m: 1, p: 3 }} id="customized-dialog-title" >
                                Report
                            </DialogTitle>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent dividers>
                                {loading && (
                                    <>
                                    <Typography gutterBottom>
                                        <img src={loader} alt="Loader" className="loader" />
                                    </Typography>
                                    <Typography gutterBottom>
                                        <div className="prediction-result">
                                            <h5>Please wait for some time we are generating Report for you</h5>
                                        </div>
                                    </Typography>
                                </>
                                )}
                                {!loading &&
                                    prediction &&
                                    recommendations &&
                                    (
                                        <>
                                            <Typography gutterBottom>
                                                <div className="prediction-result">
                                                    <h2>Recommended Fertilizer :</h2>
                                                    <h5>{prediction}</h5>
                                                </div>
                                            </Typography>
                                            <Typography gutterBottom>
                                                <div className="prediction-result">
                                                    <h2>Recommendations : </h2>
                                                    <h5>{recommendations}</h5>
                                                </div>
                                            </Typography>
                                        </>
                                    )}
                            </DialogContent>
                        </BootstrapDialog>
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
