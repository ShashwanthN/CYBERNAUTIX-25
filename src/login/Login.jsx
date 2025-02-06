import React, { useState } from 'react';
import './Login.css'; // Ensure you have the corresponding CSS file
import { auth } from '../backend/firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation to ensure email and password are not empty
    if (!formData.email || !formData.password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User logged in:', userCredential);

      // Extract userId from the logged-in user
      const userId = userCredential.user.uid;

      // Navigate to the user profile page using the userId
      nav(`/user/${userId}`);  // Correct navigation path with dynamic userId

    } catch (error) {
      console.error('Error logging in:', error);
      alert(error.message);  // Show specific Firebase error message
    }
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
