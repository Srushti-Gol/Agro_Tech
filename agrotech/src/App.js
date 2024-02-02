import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
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
              <Route path='/crop-recommendation' element={<CropRecommendation />}></Route>
              <Route path='/fertilizer-recommendation' element={<FertilizerRecommendation />}></Route>
              <Route path='/crop-yield-prediction' element={<CropYieldPrediction />}></Route>
              <Route path='/plant-disease-detection' element={<PlantDiseaseDetection />}></Route>
              <Route path='/soil-analysis' element={<SoilAnalysis />}></Route>
              <Route path="/sf" element={<SmartFarming />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
