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
import loader from "../assets/loader.svg";
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

function PlantDiseaseDetection() {
  const [formData, setFormData] = useState({
    plantImage: null,
  });
  const [Symptoms, setSymptoms] = useState();
  const [predicted_category, setpredicted_category] = useState();
  const [Treatment, setTreatment] = useState();
  const [Recommendation, setRecommendation] = useState();
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

    if (!formData.plantImage) {
      toast.error("Please upload an image.");
      return;
    }

    try {
      setOpen(true);
      setLoading(true);
      const formDataToSend = new FormData();
      formDataToSend.append("image", formData.plantImage);
      const token = localStorage.getItem('token');
      const response = await axios.post(
        "https://Vishwadeep17-agrotech.hf.space/predictDisease",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await response.data;

      setSymptoms(data.Symptoms);
      setpredicted_category(data.predicted_category);
      setTreatment(data.Treatment);
      setRecommendation(data.Recommendation);
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

    const predicted_categoryLines = doc.splitTextToSize(
      predicted_category,
      maxWidth
    );
    const SymptomsLines = doc.splitTextToSize(Symptoms, maxWidth);
    const TreatmentLines = doc.splitTextToSize(Treatment, maxWidth);
    const RecommendationLines = doc.splitTextToSize(Recommendation, maxWidth);

    doc.setFont("helvetica");
    doc.setFontSize(20);

    let yPos = 30;
    doc.text("REPORT", 87, yPos);

    // Convert the image to base64 data URL
    const imageBase64 = await getImageBase64(formData.plantImage);

    // Add image to PDF
    doc.addImage(imageBase64, "JPG", 10, 40, 60, 60);

    doc.setFontSize(12);

    yPos += 80;
    doc.setTextColor(255, 0, 0);
    doc.text("", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text("", 10, yPos);
    yPos += 12;

    doc.setTextColor(255, 0, 0);
    doc.text("Predicted Category of Disease:", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text(predicted_categoryLines, 10, yPos);
    yPos += predicted_categoryLines.length * 12;

    doc.setTextColor(255, 0, 0);
    doc.text("Symptoms:", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text(SymptomsLines, 10, yPos);
    yPos += SymptomsLines.length * 12;

    doc.setTextColor(255, 0, 0);
    doc.text("Treatment:", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text(TreatmentLines, 10, yPos);
    yPos += TreatmentLines.length * 10;

    doc.setTextColor(255, 0, 0);
    doc.text("Recommendation:", 10, yPos);
    yPos += 7;
    doc.setTextColor(0, 0, 0);
    doc.text(RecommendationLines, 10, yPos);

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
                  <div className="report-loader" >
                                                <img src={loader} alt="Loader" className="loader" />
                                            </div>                  </Typography>
                  <Typography gutterBottom>
                      <div className="prediction-result">
                          <h5>Please wait for some time we are generating Report for you</h5>
                      </div>
                  </Typography>
              </>
                )}
                {!loading &&
                  Symptoms &&
                  predicted_category &&
                  Treatment &&
                  Recommendation && (
                    <>
                      <Typography gutterBottom>
                        <div className="prediction-result">
                          <h2>Predicted Category :</h2>
                          <h5>{predicted_category}</h5>
                        </div>
                      </Typography>
                      <Typography gutterBottom>
                        <div className="prediction-result">
                          <h2>Symptoms :</h2>
                          <h5>{Symptoms}</h5>
                        </div>
                      </Typography>
                      <Typography gutterBottom>
                        <div className="prediction-result">
                          <h2>Treatment :</h2>
                          <h5>{Treatment}</h5>
                        </div>
                      </Typography>
                      <Typography gutterBottom>
                        <div className="prediction-result">
                          <h2>Recommendation :</h2>
                          <h5>{Recommendation}</h5>
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
                </Button> )}
              </DialogActions>
            </BootstrapDialog>

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
