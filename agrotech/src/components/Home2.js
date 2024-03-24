import React from "react";
import { useState, useEffect } from "react";
import "./CSS/home2.css";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ChatIcon from '@mui/icons-material/Chat';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';


const Home2 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="home2-container">
      <div className="home2-center-content">
        {loaded && (
          <div className="home2-animated-text">
            <br />
            <br />
            <br />
            <h1>
              Empowering Agriculture with Smart Solutions
            </h1>
            <br />
            <div className="home2-content-wrapper">
              <p>Revolutionizing the agricultural landscape by integrating advanced technologies. Transforming traditional farming practices with cutting-edge solutions for increased efficiency, productivity, and sustainability.</p>
              <br />
              <br />
            </div>
          </div>
        )}
      </div>
      <div className="home2-row">
        <div className="home2-column">
          <div className="home2-icon-container">
            <AcUnitIcon sx={{ color: "#274135", fontSize: 30 }} />
          </div>
          <div className="home2-content">
            <h1>Crop Recommendation</h1>
            <p>
            Discover the best crops for your farm based on numeric data entered in the form. The
              accuracy of Our Prediction Model is <span>95%</span>
            </p>
          </div>
        </div>
        <div className="home2-column">
          <div className="home2-icon-container">
            <AgricultureIcon sx={{ color: "#274135", fontSize: 30 }} />
          </div>
          <div className="home2-content">
            <h1>Crop Yield Prediction</h1>
            <p>
              Predict and plan your harvest based on numeric data entered in the form. The
              accuracy of Our Prediction Model is <span>90%</span>
            </p>
          </div>
        </div>
        <div className="home2-column">
          <div className="home2-icon-container">
            <PsychologyAltIcon sx={{ color: "#274135", fontSize: 30 }} />
          </div>
          <div className="home2-content">
            <h1>Fertilizer Recommendation</h1>
            <p>
              Optimize fertilizer usage for maximum yield based on numeric data entered in the form. The
              accuracy of Our Prediction Model is <span>92%</span>
            </p>
          </div>
        </div>
        <div className="home2-column">
          <div className="home2-icon-container">
            <PsychologyIcon sx={{ color: "#274135", fontSize: 30 }} />
          </div>
          <div className="home2-content">
            <h1>Soil Analysis</h1>
            <p>
              Understand your soil health for effective management based on The image provided. The
              accuracy of Our Prediction Model is <span>89%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="home2-row">
        <div className="home2-column">
          <div className="home2-icon-container">
            <CoronavirusIcon sx={{ color: "#274135", fontSize: 30 }} />
          </div>
          <div className="home2-content">
            <h1>Plant Disease Detection</h1>
            <p>
            Detect and diagnose plant diseases early based on The image provided. The
              accuracy of Our Prediction Model is <span>87%</span>
            </p>
          </div>
        </div>
        <div className="home2-column">
          <div className="home2-icon-container">
            <ChatIcon sx={{ color: "#274135", fontSize: 30 }} />
          </div>
          <div className="home2-content">
            <h1>Agribot</h1>
            <p>
            Get instant answers to your farming queries. for that you just need to talk with our chat bot in any language that you are confertable in. 
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Home2;