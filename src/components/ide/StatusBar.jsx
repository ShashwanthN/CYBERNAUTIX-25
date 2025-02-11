import React from 'react';
import { FiGitBranch, FiSettings } from 'react-icons/fi';
import { VscSourceControl } from 'react-icons/vsc';
import { SiPrettier } from 'react-icons/si';
import { VscExtensions } from 'react-icons/vsc';

export const StatusBar = () => {
  return (
    <div className="bg-[#0078D4] border-t border-[#333] text-[#cccccc] flex justify-between px-2.5 h-[22px] text-xs items-center">
      <div className="flex items-center">
        <div className="flex items-center gap-1.5 px-1.5">
          <FiGitBranch className="text-sm" />
          <span>main*</span>
        </div>
        <div className="w-px h-[15px] bg-white/90 mx-1.5" />
        <div className="flex items-center gap-1.5 px-1.5">
          <VscSourceControl className="text-sm" />
          <span>0↓ 0↑</span>
        </div>
        <div className="w-px h-[15px] bg-white/90 mx-1.5" />
        <div className="flex items-center gap-1.5 px-1.5">
          <span>Ln 206, Col 1</span>
        </div>
      </div>
      
      <div className="flex items-center ml-auto">
        <div className="flex items-center gap-1.5 px-1.5">
          <span>Spaces: 2</span>
          <div className="w-px h-[15px] bg-white/90 mx-1.5" />
          <span>UTF-8</span>
          <div className="w-px h-[15px] bg-white/90 mx-1.5" />
          <span>LF</span>
          <div className="w-px h-[15px] bg-white/90 mx-1.5" />
          <span>JavaScript JSX</span>
        </div>
        <div className="w-px h-[15px] bg-white/90 mx-1.5" />
        <div className="flex items-center gap-1.5 px-1.5">
          <VscExtensions className="text-sm" />
          <span>Extensions</span>
        </div>
        <div className="w-px h-[15px] bg-white/90 mx-1.5" />
        <div className="flex items-center gap-1.5 px-1.5">
          <SiPrettier className="text-sm" />
          <span>Prettier</span>
        </div>
        <div className="w-px h-[15px] bg-white/90 mx-1.5" />
        <div className="flex items-center gap-1.5 px-1.5">
          <FiSettings className="text-sm" />
        </div>
      </div>
    </div>
  );
}; 