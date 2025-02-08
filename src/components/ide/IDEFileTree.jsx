import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight, FiChevronDown, FiFile, FiFolder } from 'react-icons/fi';

export const IDEFileTree = ({ files, activeTab, setActiveTab, openFiles, setOpenFiles }) => {
  const navigate = useNavigate();

  const handleFileClick = (file) => {
    if (!openFiles.some(p => p === file.path)) {
      setOpenFiles([...openFiles, file.path]);
    }
    setActiveTab(file.path);
    navigate(file.path);
  };

  return (
    <div className="file-tree">
      <div className="tree-header">EXPLORER</div>
      {files.map((file) => (
        <div
          key={file.path}
          className={`file-item ${activeTab === file.path ? 'active' : ''}`}
          onClick={() => handleFileClick(file)}
        >
          <FiFile className="file-icon" />
          <span className="file-name">
            {file.name}.{file.extension}
          </span>
        </div>
      ))}
    </div>
  );
}; 