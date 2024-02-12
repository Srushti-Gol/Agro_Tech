import React, { useState } from 'react';
import axios from 'axios';
import farmImage from '../assets/farm1.jpg';
import './CSS/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isRegister, setIsRegister] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(isRegister ? `http://localhost:5000/signup` : `http://localhost:5000/login`, formData);
      console.log(response.data);
      localStorage.setItem("user",response.data)
      console.log(localStorage.getItem("user"))
      window.location.href = '/';
      setIsRegister(true);
      
    } catch (error) {
      console.log(error);
    }
  };



  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="login-container">
      <div className="login-image-section">
        <img src={farmImage} alt="hello" />
      </div>
      <div className="login-text-section">
        <div className="col-xxl-8 col-xl-9 col-lg-9 col-md-7 col-sm-9">
          <div className="card-body p-5">
            <h1 className="fs-10 card-title fw-bold mb-4">{isRegister ? 'Register' : 'Login'}</h1>
            <form
              method="POST"
              className="needs-validation"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              {isRegister && (
                <div className="mb-3">
                  <label className="mb-2 label-large " htmlFor="name">
                    Name <span>*</span>
                  </label>
                  <input
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">Name is required</div>
                </div>
              )}

              <div className="mb-3">
                <label className="mb-2 label-large" htmlFor="email">
                  E-Mail Address <span>*</span>
                </label>
                <input
                  id="email"
                  placeholder="Enter your Email address "
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoFocus
                />
                <div className="invalid-feedback">Email is invalid </div>
              </div>

              <div className="mb-3">
                <div className="mb-2 w-100">
                  <label className=" label-large" htmlFor="password">
                    Password <span>*</span>
                  </label>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">Password is required</div>
              </div>

              <div className="align-items-center">
                <button type="submit" className="btn btn-primary">
                  {isRegister ? 'Register' : 'Login'}
                </button>
              </div>
            </form>
            <div className="card-footer py-3 border-0">
              <div className="text-center">
                {isRegister ? (
                  <>
                    Already have an account?{' '}
                    <span className="text-dark underline" onClick={toggleForm}>
                      Login
                    </span>
                  </>
                ) : (
                  <>
                    Don't have an account?{' '}
                    <span className="text-dark underline" onClick={toggleForm}>
                      Create One
                    </span>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;