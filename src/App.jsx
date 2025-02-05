import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/Navbar';
import Loading from './components/Loading';

import Event from './event/Event';
import Home from './home/Home';
import Register from './register/Register';
import Contact from './contact/Contact';
import Bus from './bus/Bus';
import Login from './login/Login';
import Technical from './event/Technical';
import NonTecnical from './event/NonTechnical';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation duration (1.1s = 500ms delay + 600ms animation)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/bus" element={<Bus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tech" element={<Technical />} />
          <Route path="/nontech" element={<NonTecnical/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
