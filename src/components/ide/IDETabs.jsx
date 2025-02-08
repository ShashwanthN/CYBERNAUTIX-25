import React from 'react';
import { FiX } from 'react-icons/fi';

export const IDETabs = ({ files, activeTab, setActiveTab, setOpenFiles, tabHistory }) => {
  const handleCloseTab = (path, e) => {
    e.stopPropagation();
    if (path === '/') return; // Prevent closing home tab

    setOpenFiles(prev => {
      const newOpenFiles = prev.filter(p => p !== path);
      
      if (activeTab === path) {
        // Find the most recent valid tab from history
        const validHistory = tabHistory
          .filter(p => newOpenFiles.includes(p))
          .reverse();
        const newActive = validHistory.length > 0 ? validHistory[0] : '/';
        setActiveTab(newActive);
      }
      
      return newOpenFiles;
    });
  };

  return (
    <div className="ide-tabs">
      {files.map((file) => (
        <div
          key={file}
          className={`tab-item ${activeTab === file ? 'active' : ''}`}
          onClick={() => setActiveTab(file)}
        >
          <span className="tab-name">
            {file === '/' ? 'Home' : file.split('/').pop()}
          </span>
          <FiX 
            className="tab-close" 
            onClick={(e) => handleCloseTab(file, e)}
          />
        </div>
      ))}
    </div>
  );
}; 