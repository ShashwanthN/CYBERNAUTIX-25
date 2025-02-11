import React, { useState } from 'react';

const CloseDialog = ({ onClose, onProceed }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-[1000]">
    <div className="bg-[#252526] p-8 rounded border border-[#007acc] max-w-[400px] text-[#d4d4d4]">
      <h3 className="m-0 mb-6 text-lg text-[#ff6b6b]">
        Nu-uh... You ain't getting away without registering!
      </h3>
      <div className="flex gap-4 justify-end">
        <button 
          className="bg-[#5a5a5a] border-none py-2 px-4 text-white cursor-pointer rounded hover:bg-[#4a4a4a] transition-colors"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export const IDETitleBar = () => {
  const [showCloseDialog, setShowCloseDialog] = useState(false);

  const handleMinimize = () => {
    const app = document.querySelector('.ide-container');
    app.style.display = 'none';
    setTimeout(() => app.style.display = 'flex', 1000);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="flex justify-between items-center h-[30px] bg-[#3c3c3c] webkit-app-region-drag px-2.5 text-xs">
      {showCloseDialog && (
        <CloseDialog 
          onClose={() => setShowCloseDialog(false)}
          onProceed={() => {
            window.location.href = '/register';
            setShowCloseDialog(false);
          }}
        />
      )}
      <div className="flex gap-4">
        <span className="webkit-app-region-no-drag cursor-pointer">File</span>
        <span className="webkit-app-region-no-drag cursor-pointer">Edit</span>
        <span className="webkit-app-region-no-drag cursor-pointer">View</span>
        <span className="webkit-app-region-no-drag cursor-pointer">Run</span>
        <span className="webkit-app-region-no-drag cursor-pointer">Help</span>
      </div>
      <div className="flex">
        <button 
          className="bg-transparent border-none text-white px-2.5 webkit-app-region-no-drag hover:bg-[#4a4a4a]"
          onClick={handleMinimize}
        >
          ─
        </button>
        <button 
          className="bg-transparent border-none text-white px-2.5 webkit-app-region-no-drag hover:bg-[#4a4a4a]"
          onClick={toggleFullscreen}
        >
          □
        </button>
        <button 
          className="bg-transparent border-none text-white px-2.5 webkit-app-region-no-drag hover:bg-[#4a4a4a]"
          onClick={() => setShowCloseDialog(true)}
        >
          ⨉
        </button>
      </div>
    </div>
  );
}; 