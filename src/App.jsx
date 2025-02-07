import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import AdminDashboard from './AdminPage/AdminDashboard';
import UserDetails from './UserDetails/UserDetails';
import ParticlesComponent from './blocks/background/ParticlesComponent';
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from './components/magicui/particles';
import { WarpBackground } from './components/magicui/warp-background';
import { AnimatedGridPattern } from './components/magicui/animated-grid-pattern';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Only show loading screen on home page ('/')
    if (location.pathname === '/') {
      // Check if this is the first visit or a page reload
      const isFirstVisit = !sessionStorage.getItem('visited');
      const isPageReload = performance.navigation.type === 1;

      if (isFirstVisit || isPageReload) {
        setIsLoading(true);
        sessionStorage.setItem('visited', 'true');
        
        // Hide loading screen after animation
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500); // Adjust timing as needed

        return () => clearTimeout(timer);
      }
    } else {
      setIsLoading(false);
    }
  }, [location.pathname]);

  return (
    <>
      {isLoading && location.pathname === '/' && <Loading />}
      
      <div style={{ position: 'fixed', overflow: 'hidden', minHeight: '100vh', width: '100vw' }}>
        {/* <ParticlesComponent/> */}
        
        {/* <div className="fixed blur-sm inset-0 w-screen h-screen overflow-hidden">
          <WarpBackground
            perspective={80}
            beamsPerSide={8}
            beamSize={2}
            beamDelayMax={2}
            beamDelayMin={0}
            beamDuration={2}
            gridColor="transparent"
            className="w-full h-full scale-110"
          />
        </div> */}
       
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <Meteors 
            number={20}
          />
        </div>
        {/* <div className="fixed opacity-50 inset-0 overflow-hidden pointer-events-none">
          <AnimatedGridPattern 
            
          /> 
        </div> */}

        <Navbar />
        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Event />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tech" element={<Technical />} />
            <Route path="/nontech" element={<NonTecnical/>} />
            <Route path='/admin' element={<AdminDashboard/>} />
            <Route path="/user/:userId" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
