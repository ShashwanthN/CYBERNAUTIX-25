import React, { useState } from 'react';

const CloseDialog = ({ onClose, onProceed }) => (
  <div className="ide-dialog-overlay">
    <div className="ide-dialog">
      <h3>Nu-uh... You ain't getting away without registering! </h3>
      <div className="dialog-buttons">
        
        <button className="cancel-button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export const IDETitleBar = () => {
  const [showCloseDialog, setShowCloseDialog] = useState(false);

  const handleMinimize = () => {
    // For web implementation, you might want to toggle visibility
    const app = document.querySelector('.ide-container');
    app.style.display = 'none';
    setTimeout(() => app.style.display = 'flex', 1000); // Demo effect
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleClose = () => {
    setShowCloseDialog(true);
  };

  const handleProceed = () => {
    window.location.href = '/register';
    setShowCloseDialog(false);
  };

  return (
    <div className="ide-titlebar">
      {showCloseDialog && (
        <CloseDialog 
          onClose={() => setShowCloseDialog(false)}
          onProceed={handleProceed}
        />
      )}
      <div className="menu-items">
        <span className="menu-item">File</span>
        <span className="menu-item">Edit</span>
        <span className="menu-item">View</span>
        <span className="menu-item">Run</span>
        <span className="menu-item">Help</span>
      </div>
      <div className="window-controls">
        <button className="minimize" onClick={handleMinimize}>─</button>
        <button className="maximize" onClick={toggleFullscreen}>□</button>
        <button className="close" onClick={handleClose}>⨉</button>
      </div>
    </div>
  );
}; 