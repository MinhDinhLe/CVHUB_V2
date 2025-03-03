import React, { useState } from 'react';
import { ChevronDown, Zap, MessageCircle, Eye, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CVTemplatesPage = () => {
  const [activeTab, setActiveTab] = useState('style');
  const [language, setLanguage] = useState('Tiếng Việt');
  const [design, setDesign] = useState('Tất cả thiết kế');
  const [sortBy, setSortBy] = useState('popular');
  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      name: 'Tối giản',
      image: 'cv-template.webp',
      tags: ['Chuyên nghiệp', 'Đơn giản'],
      plusCount: 8,
    },
    {
      id: 2,
      name: 'Thanh lịch',
      image: 'cv-template.webp',
      tags: ['Chuyên nghiệp', 'Đơn giản'],
      plusCount: 8,
    },
    {
      id: 3,
      name: 'Thanh Lịch 1',
      image: 'cv-template.webp',
      tags: ['Chuyên nghiệp', 'Đơn giản'],
      plusCount: 8,
    },
    {
      id: 4,
      name: 'Chuyên gia',
      image: 'cv-template.webp',
      tags: ['Chuyên nghiệp', 'Đơn giản'],
      plusCount: 9,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-green-800 to-teal-900 text-white py-14 relative overflow-hidden">
        {/* Dots pattern overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 w-1/3 h-full opacity-20 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:12px_12px]"></div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:12px_12px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-4">Danh sách mẫu CV xin việc chuẩn 2023</h1>
            <p className="text-lg mb-1">Các mẫu CV được thiết kế chuẩn theo từng ngành nghề.</p>
            <p className="text-lg">Phù hợp với cả sinh viên và người đi làm.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex">
            <button
              className={`pb-4 px-6 text-lg font-medium ${
                activeTab === 'style'
                  ? 'text-green-500 border-b-2 border-green-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('style')}
            >
              Mẫu CV theo style
            </button>
            <button
              className={`pb-4 px-6 text-lg font-medium flex items-center ${
                activeTab === 'position'
                  ? 'text-green-500 border-b-2 border-green-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('position')}
            >
              Mẫu CV theo vị trí ứng tuyển
              <span className="ml-2 bg-orange-400 text-white text-xs px-2 py-0.5 rounded">Mới</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Left filters */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <div className="relative">
              <select
                className="appearance-none bg-gray-100 border border-gray-200 rounded-md py-2.5 pl-4 pr-10 w-40 text-gray-800"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>Tiếng Việt</option>
                <option>English</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select
                className="appearance-none bg-gray-100 border border-gray-200 rounded-md py-2.5 pl-4 pr-10 w-40 text-gray-800"
                value={design}
                onChange={(e) => setDesign(e.target.value)}
              >
                <option>Tất cả thiết kế</option>
                <option>Đơn giản</option>
                <option>Hiện đại</option>
                <option>Sáng tạo</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
          
          {/* Right filters */}
          <div className="flex items-center space-x-6">
            <label className="flex items-center cursor-pointer">
              <input 
                type="radio" 
                name="sortBy" 
                value="recent" 
                checked={sortBy === 'recent'} 
                onChange={() => setSortBy('recent')}
                className="h-4 w-4 mr-2"
              />
              <span className="text-gray-700">Mới cập nhật</span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input 
                type="radio" 
                name="sortBy" 
                value="popular" 
                checked={sortBy === 'popular'} 
                onChange={() => setSortBy('popular')}
                className="h-4 w-4 mr-2 text-green-500"
              />
              <span className="text-gray-700">Được dùng nhiều nhất</span>
            </label>
          </div>
        </div>

        {/* CV Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {templates.map((template) => (
            <div key={template.id} className="rounded-lg border border-green-100 overflow-hidden cursor-pointer">
              {/* Template Preview with hover effect */}
              <div className="relative group">
                {/* Badge */}
                <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-xs py-1 px-2 rounded flex items-center">
                  <Zap className="w-3 h-3 mr-1" /> 
                  Powered by CV Builder 2.0
                </div>
                
                {/* CV Image */}
                <img 
                  src={template.image} 
                  alt={template.name} 
                  className="w-full h-auto object-cover"
                />
                
                {/* Hover Actions - Initially hidden, shown on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                  {/* Preview Button */}
                  <button 
                    onClick={() => navigate('/preview-cv')}
                    className="bg-white text-gray-800 rounded-md py-2 px-4 mb-3 flex items-center font-medium">
                        <Eye className="w-5 h-5 mr-2" /> Xem trước</button>
                  
                  {/* Use Template Button */}
                  <button className="bg-green-500 text-white rounded-md py-2 px-4 flex items-center font-medium">
                    <FileCheck className="w-5 h-5 mr-2" />
                    Dùng mẫu
                  </button>
                </div>
              </div>
              
              {/* Template tags and info */}
              <div className="p-3 bg-gray-50">
                <div className="flex flex-wrap gap-2 mb-2">
                  {template.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                    +{template.plusCount}
                  </span>
                </div>
                
                <h3 className="text-green-600 font-medium">
                  {template.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default CVTemplatesPage;