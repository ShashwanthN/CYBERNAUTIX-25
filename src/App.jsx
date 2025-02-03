import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/Navbar';

import Event from './event/Event';
import Home from './home/Home';
import Register from './register/Register';
import Contact from './contact/Contact';
import Bus from './bus/Bus';
import Login from './login/Login';



function App() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/bus" element={<Bus />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      
    </div>
  );
}

export default App;
