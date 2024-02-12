import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../assets/h.svg';
import axios from 'axios';
import './CSS/navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/logout');
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      // history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <b>AgroTech</b>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="dropdown">
              <NavLink to="/services">Services</NavLink>
              <div className="dropdown-content">
                <NavLink to="/crop-recommendation">Crop Recommendation</NavLink>
                <NavLink to="/fertilizer-recommendation">Fertilizer Recommendation</NavLink>
                <NavLink to="/plant-disease-detection">Plant Disease Detection</NavLink>
                <NavLink to="/soil-analysis">Soil Analysis</NavLink>
                <NavLink to="/crop-yield-prediction">Crop Yield Prediction</NavLink>
              </div>
            </li>
            <li>
              <NavLink to="/agribot">AgriBot</NavLink>
            </li>
            <li>
              <NavLink to="/sf">SmartFarming</NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/login">SignIn</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
