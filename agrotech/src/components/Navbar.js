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
    const user = localStorage.getItem('token');
    setIsLoggedIn(!!user);
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/logout', {}, { headers: { Authorization: `Bearer ${token}` } });
      localStorage.removeItem('token'); // Remove the JWT token from local storage
      setIsLoggedIn(false); // Update isLoggedIn state to indicate user is logged out
      window.location.href = '/login';
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
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
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