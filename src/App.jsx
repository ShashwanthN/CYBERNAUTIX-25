import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SplashScreen from './components/splashscreen';
import Home from './home/Home'; // Changed to Home      
import Register from './register/Register';
import Contact from './contact/Contact';
import Bus from './bus/Bus';
import Login from './login/Login';
import Technical from './event/Technical';
import SupriseEvent from './event/SupriseEvent';
import AdminDashboard from './AdminPage/AdminDashboard';
import UserDetails from './UserDetails/UserDetails';
import { Meteors } from "@/components/magicui/meteors";
// import { IDEBar } from './components/ide/IDEBar';
import { IDEFileTree } from './components/ide/IDEFileTree';
import { IDETabs } from './components/ide/IDETabs';
import { IDETitleBar } from './components/ide/IDETitleBar';
import EventPage from './event/Event';
import { StatusBar } from './components/ide/StatusBar';
import { useMediaQuery } from './hooks/useMediaQuery';
import Navbar from './navbar/Navbar';
import { auth } from './backend/firebase';
import Rules from './Rules';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('/');
  const [openFiles, setOpenFiles] = useState(['/']);
  const [tabHistory, setTabHistory] = useState([activeTab]);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // File structure for the sidebar
  const getAvailableFiles = useCallback(() => {
    const baseFiles = [
      { name: 'Home', path: '/', extension: 'jsx' },
      { name: 'Events', path: '/events', extension: 'jsx' },
      { name: 'Technical', path: '/tech', extension: 'jsx' },
      { name: 'Surprise-Event', path: '/suprise', extension: 'jsx' },
      { name: 'Register', path: '/register', extension: 'jsx' },
      { name: 'Contact', path: '/contact', extension: 'jsx' },
      { name: 'Bus', path: '/bus', extension: 'jsx' },
      { name: 'Login', path: '/login', extension: 'jsx' },
      { name: 'Rules', path: '/generalnorms', extension: 'jsx' },
    ];

    if (isLoggedIn) {
      return [...baseFiles, { name: 'User Details', path: '/user/:userId', extension: 'jsx' }];
    }

    return baseFiles;
  }, [isLoggedIn]);

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     const isFirstVisit = !sessionStorage.getItem('visited');
  //     // Modern method to detect page reload
  //     const navigationEntry = performance.getEntriesByType('navigation')[0];
  //     const isPageReload = navigationEntry?.type === 'reload';

  //     if (isFirstVisit || isPageReload) {
  //       setIsLoading(true);
  //       sessionStorage.setItem('visited', 'true');

  //       // Reduce timer to 2 seconds (2000ms)
  //       const timer = setTimeout(() => {
  //         setIsLoading(false);
  //       }, 2000);

  //       return () => clearTimeout(timer);
  //     }
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, [location.pathname]);

  useEffect(() => {
    setTabHistory(prev => {
      if (prev[prev.length - 1] === activeTab) return prev;
      return [...prev, activeTab];
    });
  }, [activeTab]);

  useEffect(() => {
    // Set initial active tab based on current path
    if (location.pathname !== activeTab) {
      setActiveTab(location.pathname);
      if (!openFiles.includes(location.pathname)) {
        setOpenFiles(prev => [...prev, location.pathname]);
      }
    }
  }, []); // Empty dependency array runs only on mount

  useEffect(() => {
    // Prevent infinite loop by checking if path actually changed
    if (activeTab !== location.pathname) {
      navigate(activeTab);
    }
  }, [activeTab, navigate, location.pathname]);

  // Add useEffect to check login status on app load
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const { expires } = JSON.parse(userData);
      if (Date.now() < expires) {
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Update handleInternalNavigation to handle user details path
  const handleInternalNavigation = useCallback((path) => {
    // Convert user details path to actual URL
    if (path === '/user/:userId') {
        const userData = localStorage.getItem('user');
        if (userData) {
            const { unique_id } = JSON.parse(userData);
            path = `/user/${unique_id}`;
        } else {
            navigate('/login');
            return;
        }
    }

    // Normalize path for tab system
    const normalizedPath = path.startsWith('/user/') ? '/user/:userId' : path;
    
    setOpenFiles(prev => {
        const exists = prev.some(p => 
            p === normalizedPath || 
            (normalizedPath === '/user/:userId' && p.startsWith('/user/'))
        );
        return exists ? prev : [...prev, normalizedPath];
    });
    
    setActiveTab(normalizedPath);
    navigate(path);
  }, [navigate, setOpenFiles, setActiveTab]);

  // Update the handleLogout function to be in App.jsx and pass it down
  const handleLogout = useCallback(async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      // Remove user-related tabs and set active tab to home
      setOpenFiles(prev => prev.filter(p => !p.startsWith('/user/')));
      setActiveTab('/');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, [navigate, setOpenFiles, setActiveTab]);

  // if (isLoading) {
  //   return <SplashScreen />;
  // }

  return (
    <div className="ide-container">
      {isMobile && (
        <Navbar 
          onNavigate={handleInternalNavigation} 
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
      )}
      {!isMobile && <IDETitleBar />}
      
      <div className="ide-content">
        {!isMobile && (
          <IDEFileTree 
            files={getAvailableFiles()} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            openFiles={openFiles}
            setOpenFiles={setOpenFiles}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        )}

        <div className="editor-container">
          {!isMobile && (
            <IDETabs
              files={openFiles}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setOpenFiles={setOpenFiles}
              tabHistory={tabHistory}
            />
          )}
          
          <div className="code-editor">
            <div className="editor-content" style={{ 
              padding: isMobile ? '48px 0 0 0' : '10px'
            }}>
              
              
              <Routes>
                <Route path="/" element={<Home onNavigate={handleInternalNavigation} />} />
                <Route path="/events" element={<EventPage onNavigate={handleInternalNavigation} />} />
                <Route path="/tech" element={<Technical onNavigate={handleInternalNavigation} />} />
                <Route path="/suprise" element={<SupriseEvent onNavigate={handleInternalNavigation} />} />
                <Route path="/register" element={
                  <Register 
                    onLogin={(path) => {
                      setIsLoggedIn(true);
                      if (path) handleInternalNavigation(path);
                    }} 
                  />
                } />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bus" element={<Bus />} />
                <Route path="/login" element={
                  <Login 
                    onLogin={() => setIsLoggedIn(true)} 
                    onNavigate={handleInternalNavigation}
                  />
                } />
                <Route path='/admin' element={<AdminDashboard/>} />
                <Route path="/user/:userId" element={<UserDetails onNavigate={handleInternalNavigation} />} />
                <Route path="/generalnorms" element={<Rules />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      
      {!isMobile && <StatusBar />}
    </div>
  );
}

export default App;
