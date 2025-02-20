import React, { useState, useEffect, useRef } from 'react';
import { BriefcaseIcon, Settings, BellRing } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import NavLinks from './NavLinks';
import SignUpPage from '../Pages/SignUpPage';
import HomePage from '../Pages/HomePage';

const Header = () => {
  const pathname = useLocation().pathname;
  const [showSettings, setShowSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  
  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingsRef]);

  return (
    <div className="relative pt-20">
      <div className="w-full bg-lime-500 px-6 h-20 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
        {/* Logo section */}
        <div className="flex items-center gap-2">
          <BriefcaseIcon className="h-8 w-8 text-white" strokeWidth={2.5} />
          <span className="text-3xl font-semibold text-white">CvHub</span>
        </div>
        {/* Navigation Links */}
        <NavLinks/>
        {/* User section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white">Tôi</span>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <img src="/api/placeholder/40/40" alt="avatar.png" className="w-8 h-8 rounded-full" />
            </div>
          </div>

          <div className="relative" ref={settingsRef}>
            <button 
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="h-6 w-6 text-white" />
            </button>
            
            {showSettings && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="#" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100">
                  <span className="mr-3 text-green-600">📄</span>
                  <span className="text-green-600 font-medium">CV của tôi</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100">
                  <span className="mr-3 text-green-600">📝</span>
                  <span className="text-green-600 font-medium">Cover Letter của tôi</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100">
                  <span className="mr-3 text-green-600">❤️</span>
                  <span className="text-green-600 font-medium">Việc làm đã lưu</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100">
                  <span className="mr-3 text-green-600">💼</span>
                  <span className="text-green-600 font-medium">Việc làm đã ứng tuyển</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100">
                  <span className="mr-3 text-green-600">✏️</span>
                  <span className="text-green-600 font-medium">Cài đặt thông tin cá nhân</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100">
                  <span className="mr-3 text-green-600">⭐</span>
                  <span className="text-green-600 font-medium">Nâng cấp tài khoản VIP</span>
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-800 hover:bg-gray-100">
                  <span className="mr-3 text-green-600">🎁</span>
                  <span className="text-green-600 font-medium">Kích hoạt quà tặng</span>
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <BellRing className="h-6 w-6 text-white" />
            </button>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;