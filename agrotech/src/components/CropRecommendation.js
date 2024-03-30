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
    const [predicted_crop, setpredicted_crop] = useState();
    const [crop_practices_recommendation, setcrop_practices_recommendation] = useState();
    const [irrigation_practices_recommendation, setirrigation_practices_recommendation] = useState();
    const [pest_control_methods_recommendation, setpest_control_methods_recommendation] = useState();
    const [fertilizer_recommendation, setfertilizer_recommendation] = useState();
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
                'https://Vishwadeep17-agrotech.hf.space/predictCrop',
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const data = await response.data;
            setpredicted_crop(data.predicted_crop);
            setcrop_practices_recommendation(data.crop_practices_recommendation);
            setirrigation_practices_recommendation(data.irrigation_practices_recommendation);
            setpest_control_methods_recommendation(data.pest_control_methods_recommendation);
            setfertilizer_recommendation(data.fertilizer_recommendation);
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
                                    predicted_crop &&
                                    crop_practices_recommendation &&
                                    irrigation_practices_recommendation &&
                                    pest_control_methods_recommendation &&
                                    fertilizer_recommendation && (
                                        <>
                                            <Typography gutterBottom>
                                                <div className="prediction-result">
                                                    <h2>Recommended Crop :</h2>
                                                    <h5>{predicted_crop}</h5>
                                                </div>
                                            </Typography>
                                            <Typography gutterBottom>
                                                <div className="prediction-result">
                                                    <h2>Crop Practices Recommendation : </h2>
                                                    <h5>{crop_practices_recommendation}</h5>
                                                </div>
                                            </Typography>
                                            <Typography gutterBottom>
                                                <div className="prediction-result">
                                                    <h2>Irrigation Practices Recommendation:</h2>
                                                    <h5>{irrigation_practices_recommendation}</h5>
                                                </div>
                                            </Typography>
                                            <Typography gutterBottom>
                                                <div className="prediction-result">
                                                    <h2>Pest Control Methods Recommendation :</h2>
                                                    <h5>{pest_control_methods_recommendation}</h5>
                                                </div>
                                            </Typography>
                                            <Typography gutterBottom>
                                                <div className="prediction-result">
                                                    <h2>Fertilizer Recommendation :</h2>
                                                    <h5>{fertilizer_recommendation}</h5>
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
