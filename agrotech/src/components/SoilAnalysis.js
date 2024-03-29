import React, { useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CSS/form.css";
import loader from "../assets/Spinner-2.gif";
import { jsPDF } from "jspdf";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function SoilAnalysis() {
  const [formData, setFormData] = useState({
    soilImage: null,
  });
  const [soil_type, setsoil_type] = useState();
  const [crop_recommendation, setcrop_recommendation] = useState();
  const [fertilizer_recommendation, setfertilizer_recommendation] = useState();
  const [irrigation_practices, setirrigation_practices] = useState();
  const [pest_control_methods, setpest_control_methods] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

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
      setOpen(true);
      setLoading(true);
      const formDataToSend = new FormData();
      formDataToSend.append("image", formData.soilImage);
      const token = localStorage.getItem('token');
      const response = await axios.post(
        "https://srushti3113-agrotech.hf.space/predictSoil",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await response.data;

      setsoil_type(data.soil_type);
      setcrop_recommendation(data.crop_recommendation);
      setfertilizer_recommendation(data.fertilizer_recommendation);
      setirrigation_practices(data.irrigation_practices);
      setpest_control_methods(data.pest_control_methods);

    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    const doc = new jsPDF();

    const maxWidth = 300;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);

    const soil_typeLines = doc.splitTextToSize(
      soil_type,
      maxWidth
    );
    const crop_recommendationLines = doc.splitTextToSize(crop_recommendation, maxWidth);
    const fertilizer_recommendationLines = doc.splitTextToSize(fertilizer_recommendation, maxWidth);
    const irrigation_practicesLines = doc.splitTextToSize(irrigation_practices, maxWidth);
    const pest_control_methodsLines = doc.splitTextToSize(pest_control_methods, maxWidth);

    doc.setFont("helvetica");
    doc.setFontSize(20);

    let yPos = 30;
    doc.text("REPORT", 87, yPos);

    // Convert the image to base64 data URL
    const imageBase64 = await getImageBase64(formData.soilImage);

    // Add image to PDF
    doc.addImage(imageBase64, "JPG", 10, 40, 60, 60);

    doc.setFontSize(12);

    yPos += 80;
    doc.setTextColor(255, 0, 0);
    doc.text("Soil Type", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text(soil_typeLines, 10, yPos);
    yPos += 12;

    doc.setTextColor(255, 0, 0);
    doc.text("Recommended Crop:", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text(crop_recommendationLines, 10, yPos);
    yPos += crop_recommendationLines.length * 12;

    doc.setTextColor(255, 0, 0);
    doc.text("Recommended Fertilizer", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text(fertilizer_recommendationLines, 10, yPos);
    yPos += fertilizer_recommendationLines.length * 12;

    doc.setTextColor(255, 0, 0);
    doc.text("Irrigation Practices :", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text(irrigation_practicesLines, 10, yPos);
    yPos += irrigation_practicesLines.length * 10;

    doc.setTextColor(255, 0, 0);
    doc.text("Pest Control Methods : ", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text(pest_control_methodsLines, 10, yPos);

    doc.save("Report.pdf");
  };

  const getImageBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
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
                  soil_type &&
                  crop_recommendation &&
                  fertilizer_recommendation &&
                  irrigation_practices &&
                  pest_control_methods && (
                    <>
                      <Typography gutterBottom>
                        <div className="prediction-result">
                          <h2>Soil Type :</h2>
                          <h5>{soil_type}</h5>
                        </div>
                      </Typography>
                      <Typography gutterBottom>
                        <div className="prediction-result">
                          <h2>Recommended Crop : </h2>
                          <h5>{crop_recommendation}</h5>
                        </div>
                      </Typography>
                      <Typography gutterBottom>
                        <div className="prediction-result">
                          <h2>Recommended Fertilizer:</h2>
                          <h5>{fertilizer_recommendation}</h5>
                        </div>
                      </Typography>
                      <Typography gutterBottom>
                        <div className="prediction-result">
                          <h2>Irrigation Practices :</h2>
                          <h5>{irrigation_practices}</h5>
                        </div>
                      </Typography>
                      <Typography gutterBottom>
                        <div className="prediction-result">
                          <h2>Pest Control Methods :</h2>
                          <h5>{pest_control_methods}</h5>
                        </div>
                      </Typography>
                    </>
                  )}
              </DialogContent>
              <DialogActions>
                {!loading &&
                  (
                    <Button autoFocus onClick={handleDownloadPDF}>
                      Download Report PDF
                    </Button>)}
              </DialogActions>
            </BootstrapDialog>

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
