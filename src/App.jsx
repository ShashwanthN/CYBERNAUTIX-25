import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/Navbar';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor';
import Event from './event/Event';
import Home from './home/Home';

function App() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <SplashCursor />
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
