import React from 'react';
import { FiX } from 'react-icons/fi';

export const IDETabs = ({ files, activeTab, setActiveTab, setOpenFiles, tabHistory }) => {
  const handleCloseTab = (path, e) => {
    e.stopPropagation();
    if (path === '/') return;

    setOpenFiles(prev => {
      const newOpenFiles = prev.filter(p => p !== path);
      
      if (activeTab === path) {
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
    <div className="flex bg-[#2d2d2d] border-b border-[#333] h-[35px]">
      {files.map((file) => (
        <div
          key={file}
          className={`flex items-center px-4 text-xs border-r border-[#333] cursor-pointer
            ${activeTab === file ? 'bg-[#252526] border-b border-[#007acc]' : 'bg-[#1e1e1e]'}`}
          onClick={() => setActiveTab(file)}
        >
          <span className="tab-name">
            {file === '/' ? 'Home' : file.split('/').pop()}
          </span>
          <FiX 
            className="ml-2 opacity-60 hover:opacity-100 transition-opacity"
            onClick={(e) => handleCloseTab(file, e)}
          />
        </div>
      ))}
    </div>
  );
}; 