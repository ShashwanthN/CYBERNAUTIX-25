import React, { useState } from 'react';
import { auth } from '../backend/firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../backend/firebase';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

function Login({ onLogin, onNavigate }) {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      setIsSubmitting(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        formData.email.trim(), 
        formData.password
      );
      
      const userId = userCredential.user.uid;
      
      const userRef = doc(db, 'Users', userId);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        setError('User data not found');
        setIsSubmitting(false);
        return;
      }

      const userData = userSnap.data();
      
      const userState = {
        uid: userId,
        unique_id: userData.unique_id,
        expires: Date.now() + (3 * 24 * 60 * 60 * 1000)
      };
      
      localStorage.setItem('user', JSON.stringify(userState));
      
      onLogin();
      nav(`/user/${userData.unique_id}`);
      
    } catch (error) {
      console.error('Login error:', error);
      
      switch (error.code) {
        case 'auth/user-not-found':
          setError('No account found with this email');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/too-many-requests':
          setError('Too many failed attempts. Please try again later');
          break;
        default:
          setError('Failed to login. Please try again');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-100  flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,rgba(0,255,128,0.05)_0%,rgba(0,0,0,0)_50%,rgba(0,255,128,0.05)_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,128,0.1),transparent_50%)]"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,128,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [transform-origin:0_0] animate-grid-flow"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className={`absolute w-1 h-1 bg-green-500/30 rounded-full
                animate-float-particle${i % 3}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Left side - Cyberpunk illustration */}
        <div className="hidden lg:flex flex-col justify-center items-center relative">
          <div className="relative w-full aspect-square">
            {/* Hexagon grid */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBhdGggZD0iTTI1IDJMMi42OCAxMy41djI1TDI1IDUwbDIyLjMyLTExLjV2LTI1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMTI4LCAwLjEpIi8+PC9zdmc+')] opacity-30"></div>
            
            {/* Glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-xl"></div>
                <div className="absolute inset-4 rounded-full border border-green-500/30 animate-spin-slow"></div>
                <div className="absolute inset-0 rounded-full border border-green-500/20 animate-reverse-spin"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-1/4 right-1/4 w-16 h-16">
              <div className="relative w-full h-full animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-lg"></div>
                <div className="absolute inset-0 border border-green-500/30 rounded-lg"></div>
              </div>
            </div>

            <div className="absolute bottom-1/4 left-1/4 w-20 h-20">
              <div className="relative w-full h-full animate-float-delay">
                <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-lg"></div>
                <div className="absolute inset-0 border border-emerald-500/30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Enhanced Login form */}
        <div className="w-full max-w-md mx-auto relative">
          <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-lg border border-green-500/20 shadow-[0_0_50px_rgba(0,255,128,0.1)]">
            {/* Animated corner borders */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent animate-border-flow"></div>
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-green-500 to-transparent animate-border-flow"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent animate-border-flow"></div>
              <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-green-500 to-transparent animate-border-flow"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent animate-border-flow"></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-green-500 to-transparent animate-border-flow"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent animate-border-flow"></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-green-500 to-transparent animate-border-flow"></div>
            </div>

            <div className="mb-8 text-center relative">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-400 animate-gradient-x">
                Welcome Back
              </h2>
              <p className="mt-2 text-green-400/60 font-light tracking-wider">Sign in to continue your journey</p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-green-400/80 mb-2 tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg 
                      focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 
                      transition-all duration-300 text-white placeholder-green-500/50
                      outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-green-400/80 mb-2 tracking-wide">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg 
                      focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 
                      transition-all duration-300 text-white placeholder-green-500/50
                      outline-none"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full py-3 px-6 rounded-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 transition-transform duration-300 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer"></div>
                <span className="relative text-white font-medium tracking-wider">
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full mx-auto"
                    />
                  ) : (
                    'Sign In'
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
