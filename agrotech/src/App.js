import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Services from './components/Services';
import SmartFarming from './components/SmartFarming';
import CropRecommendation from './components/CropRecommendation';
import FertilizerRecommendation from './components/FertilizerRecommendation';
import CropYieldPrediction from './components/CropYieldPrediction';
import PlantDiseaseDetection from './components/PlantDiseaseDetection';
import SoilAnalysis from './components/SoilAnalysis';
import Agribot from './components/Agribot';
import Community from './components/Community';

function App() {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<Services />} />
              {isAuthenticated ? (
                <>
                  <Route path="/crop-recommendation" element={<CropRecommendation />} />
                  <Route path="/fertilizer-recommendation" element={<FertilizerRecommendation />} />
                  <Route path="/crop-yield-prediction" element={<CropYieldPrediction />} />
                  <Route path="/plant-disease-detection" element={<PlantDiseaseDetection />} />
                  <Route path="/soil-analysis" element={<SoilAnalysis />} />
                  <Route path="/sf" element={<SmartFarming />} />
                  <Route path="/agribot" element={<Agribot />} />
                  <Route path="/community" element={<Community />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/login" />} />
              )}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
