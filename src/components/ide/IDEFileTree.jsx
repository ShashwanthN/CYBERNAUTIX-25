import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight, FiChevronDown, FiFile, FiFolder, FiLogOut } from 'react-icons/fi';

export const IDEFileTree = ({ files, activeTab, setActiveTab, openFiles, setOpenFiles, isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

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
    <div className="w-full min-w-[150px] max-w-[200px] bg-[#252526] border-r border-[#333] p-2.5 flex flex-col justify-between">
      <div>
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
          className="mt-4 p-2 text-xs cursor-pointer hover:bg-[#2a2d2e] flex items-center"
          onClick={onLogout}
        >
          <FiLogOut className="mr-2" />
          Logout
        </div>
      )}
    </div>
  );
}; 