import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight, FiChevronDown, FiFile, FiFolder, FiLogOut } from 'react-icons/fi';

export const IDEFileTree = ({ files, activeTab, setActiveTab, openFiles, setOpenFiles, isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const [showGuide, setShowGuide] = useState(() => {
    return localStorage.getItem('fileTreeGuideShown') !== 'true';
  });

  const handleGuideClose = () => {
    setShowGuide(false);
    localStorage.setItem('fileTreeGuideShown', 'true');
  };

  const handleFileClick = (file) => {
    if (file.path.startsWith('/user/') && !isLoggedIn) {
      navigate('/login');
      return;
    }

    if (!openFiles.some(p => p === file.path)) {
      setOpenFiles([...openFiles, file.path]);
    }
    setActiveTab(file.path);
    navigate(file.path);
  };

  return (
    <div className="w-full min-w-[150px] max-w-[200px] bg-[#252526] !border-r !border-[#333] p-2.5 h-full flex flex-col relative">
      {showGuide && (
        <div 
          className="fixed left-[200px] top-1/4 backdrop-blur-2xl !border !border-zinc-600 p-4 rounded-md shadow-lg w-60 z-50 animate-fadeIn"
          style={{
            animation: 'slideIn 0.3s ease-out',
          }}
        >
          <div 
            className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45"
            style={{
              background: '#1e1e1e',
              borderLeft: '1px solid #454545',
              borderBottom: '1px solid #454545',
            }}
          />
          <p className="text-white text-sm">
            Navigate through pages by clicking on files in the file tree
          </p>
          <button 
            onClick={handleGuideClose}
            className="mt-2 text-xs text-[#858585] hover:text-white transition-colors duration-200"
          >
            Got it
          </button>
        </div>
      )}
      
      <div className='flex flex-col flex-grow'>
        <div className="text-xs uppercase mb-2.5 text-[#858585]">EXPLORER</div>
        {files.map((file) => (
          <div
            key={file.path}
            className={`py-1.5 px-2.5 cursor-pointer flex items-center text-xs
              ${activeTab === file.path ? 'bg-[#37373d]' : 'hover:bg-[#2a2d2e]'}`}
            onClick={() => handleFileClick(file)}
          >
            <FiFile className="mr-2" />
            <span>
              {file.name}.{file.extension}
            </span>
          </div>
        ))}
      </div>
      
      {isLoggedIn && (
        <div 
          className="py-1.5 px-2.5 cursor-pointer flex items-center text-xs hover:bg-[#2a2d2e] mt-auto"
          onClick={onLogout}
        > 
          <FiLogOut className="mr-2" />
          Logout
        </div>
      )}
    </div>
  );
};

// Add this at the top of your CSS file or in your global styles
const styles = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet); 