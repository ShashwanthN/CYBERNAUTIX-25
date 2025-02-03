import React, { useState } from 'react';
import './Login.css'; // Ensure you have the corresponding CSS file

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-container fade-in">
      <div className="page-content login-page">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <i className="fas fa-user-circle"></i>
              <h1>Login</h1>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <div className="input-group">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="login-btn">
                Login
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
