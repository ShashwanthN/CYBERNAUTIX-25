import React, { useState } from 'react';
import { auth } from '../backend/firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../backend/firebase';

function Login({ onLogin, onNavigate }) {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const userId = userCredential.user.uid;
      
      // Get user data to access unique_id
      const userRef = doc(db, 'Users', userId);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      
      // Store login state for 3 days
      localStorage.setItem('user', JSON.stringify({
        uid: userId,
        unique_id: userData.unique_id,
        expires: Date.now() + 3 * 24 * 60 * 60 * 1000
      }));
      
      onLogin(); // Update parent state
      onNavigate(`/user/${userData.unique_id}`);
    } catch (error) {
      console.error('Error logging in:', error);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 min-h-3/4">
        
        {/* Left side - 3D illustration */}
        <div className="hidden lg:flex h-full flex-col justify-center items-center relative">
          <div className="relative w-full h-full aspect-square">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 backdrop-blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl animate-float"></div>
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg animate-bounce"></div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-xl  p-8 shadow-2xl ">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="text-gray-400 mt-2">Sign in to continue your journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Sign In
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
