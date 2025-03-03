import React, { useState } from 'react';
import { Search, MapPin, Bell, ChevronDown, Heart } from 'lucide-react';
import Footer from '../Footer/Footer';

const JobSearch = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'Kế toán trưởng',
    location: 'Hà Nội'
  });

  const jobCategories = [
    'kế toán quản trị',
    'kế toán tài chính',
    'kế toán nội bộ',
    'kế toán kho',
    'kế toán bán hàng',
    'kế toán tổng hợp',
    'kế toán tiền lương',
    'kế toán thuế'
  ];

  const jobs = [
    {
      title: 'Kế Toán Trưởng (22 - 30 Triệu)',
      company: 'CÔNG TY CỔ PHẦN Ô TÔ KCV THẮNG LONG',
      location: 'Hà Nội',
      experience: '5 năm',
      salary: '22 - 30 triệu',
      logo: '/logoITL.png',
      postedTime: 'Đăng 15 giờ trước',
      requirements: 'Tuổi 35 - 40'
    },
    {
      title: 'Kế Toán Trưởng Tại Hà Nội ( Lương 25-30 Triệu + Thưởng )',
      company: 'CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ XÂY DỰNG VINA2',
      location: 'Hà Nội',
      experience: 'Trên 5 năm',
      salary: '25 - 30 triệu',
      logo: 'logoITL.png',
      postedTime: 'Đăng 1 tuần trước'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <button className="flex items-center text-white gap-2">
              <span>Danh mục Nghề</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <div className="flex-1 flex gap-2">
              <div className="bg-white rounded-lg flex-1 flex items-center p-2">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="kế toán trưởng"
                  className="flex-1 outline-none px-2"
                />
              </div>
              
              <div className="bg-white rounded-lg flex items-center p-2 gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value="Hà Nội"
                  className="outline-none"
                />
              </div>
              
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span>Trang chủ</span>
            <span>›</span>
            <span>Việc làm Hà Nội</span>
            <span>›</span>
            <span>Kế Toán Trưởng</span>
          </div>
          
          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
            <Bell className="w-5 h-5" />
            <span>Tạo thông báo việc làm</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-4 overflow-x-auto">
          {jobCategories.map((category) => (
            <button
              key={category}
              className="whitespace-nowrap px-4 py-2 rounded-full bg-white hover:bg-gray-50"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg mb-4">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-bold">Lọc nâng cao</h2>
            <button className="text-gray-500">Xóa lọc</button>
          </div>
          
          <div className="flex gap-4">
            <button className="px-4 py-2 border rounded-full">Tên việc làm</button>
            <button className="px-4 py-2 border rounded-full">Tên công ty</button>
            <button className="px-4 py-2 border rounded-full">Cả hai</button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-green-100 hover:border-green-500">
              <div className="flex gap-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 rounded"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <span className="text-green-600 font-medium">{job.salary}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <span>{job.location}</span>
                    <span>{job.experience}</span>
                    {job.requirements && <span>{job.requirements}</span>}
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-500">{job.postedTime}</span>
                    <button className="text-gray-400 hover:text-red-500">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default JobSearch;