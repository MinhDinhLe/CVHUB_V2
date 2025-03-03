import React, { useState } from 'react';
import { Bookmark, MapPin, Clock, MessageCircle } from 'lucide-react';

type FilterType = 'recent' | 'urgent' | 'salary';

interface SavedJob {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  savedTime: string;
  lastUpdated: string;
}

const SavedJobs: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('recent');
  
  const savedJobs: SavedJob[] = [
    {
      id: 1,
      title: 'Nhân Viên Sale Logitics/ Nhân Viên Kinh Doanh/ Telesales (Thu Nhập Từ 10 Triệu - 20 Triệu)',
      company: 'CÔNG TY TNHH THƯƠNG MẠI VÀ XUẤT NHẬP KHẨU THG',
      companyLogo: 'logoITL.png',
      location: 'Hà Nội',
      salary: '10 - 20 triệu',
      savedTime: '24/02/2025 - 15:38',
      lastUpdated: '11 phút trước'
    },
    {
      id: 2,
      title: 'Nhân Viên Kinh Doanh Logistics (Không Kinh Nghiệm)',
      company: 'CÔNG TY CỔ PHẦN GIAO NHẬN TOÀN CẦU VẠN LONG',
      companyLogo: 'logoITL.png',
      location: 'Hồ Chí Minh',
      salary: '20 - 40 triệu',
      savedTime: '24/02/2025 - 15:38',
      lastUpdated: '12 phút trước'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-9">
            {/* Banner Section */}
            <div className="bg-gradient-to-r from-emerald-800 to-green-500 rounded-2xl overflow-hidden relative">
              {/* Decorative Pattern */}
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
                <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(circle,_white_2px,_transparent_2px)] bg-[length:16px_16px] transform rotate-12"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">Việc làm đã lưu</h1>
                <p className="text-green-50/90 text-sm sm:text-base max-w-2xl">
                  Xem lại danh sách những việc làm mà bạn đã lưu trước đó. Ứng tuyển ngay để không bỏ lỡ cơ hội nghề nghiệp dành cho bạn.
                </p>
              </div>
            </div>

            {/* Filter Section */}
            <div className="mt-8 space-y-4">
              <p className="text-gray-700">
                Danh sách <span className="font-medium">4</span> việc làm đã lưu
              </p>
              
              <div className="flex items-center gap-6 text-sm">
                <span className="text-gray-500">Ưu tiên hiển thị:</span>
                <div className="flex flex-wrap gap-6">
                  {[
                    { id: 'recent', label: 'Cập nhật gần nhất' },
                    { id: 'urgent', label: 'Cần tuyển gấp' },
                    { id: 'salary', label: 'Lương cao nhất' }
                  ].map((filter) => (
                    <label key={filter.id} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="filter"
                        className="hidden"
                        checked={activeFilter === filter.id as FilterType}
                        onChange={() => setActiveFilter(filter.id as FilterType)}
                      />
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors
                          ${activeFilter === filter.id ? 'border-green-500' : 'border-gray-300 group-hover:border-gray-400'}`}>
                          {activeFilter === filter.id && (
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          )}
                        </div>
                        <span className={`transition-colors ${
                          activeFilter === filter.id 
                            ? 'text-green-600 font-medium' 
                            : 'text-gray-600 group-hover:text-gray-900'
                        }`}>
                          {filter.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Job List */}
            <div className="mt-6 space-y-4">
              {savedJobs.map(job => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:border-green-100 transition-colors p-4">
                  <div className="flex gap-4">
                    <img 
                      src={job.companyLogo} 
                      alt={job.company}
                      className="w-16 h-16 rounded-lg object-cover bg-gray-50"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-base font-medium text-gray-900 mb-1 line-clamp-2">
                            {job.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">{job.company}</p>
                        </div>
                        <span className="whitespace-nowrap text-green-600 font-medium text-sm">
                          {job.salary}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          Cập nhật {job.lastUpdated}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <button className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors">
                        Ứng tuyển
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 active:text-gray-800 transition-colors p-1">
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-green-50 rounded-2xl p-6 sticky top-6">
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                    src="no-spotlight-mau-cv.webp" 
                    alt="CV Templates"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-50/50 to-transparent rounded-lg"></div>
                </div>
                <button className="w-full bg-green-500 text-white rounded-lg py-2.5 px-4 font-medium hover:bg-green-600 active:bg-green-700 transition-colors">
                  Xem ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Support Button */}
      <div className="fixed bottom-6 right-6 flex items-center gap-3">
        <div className="bg-white rounded-full shadow-lg py-2 px-4 flex items-center gap-2">
          <img 
            src="/api/placeholder/32/32" 
            alt="Support Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium text-gray-900">Ms. Hương Nguyễn</p>
            <p className="text-green-600 text-xs">Hỗ trợ trực tuyến</p>
          </div>
        </div>
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 active:bg-green-700 transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SavedJobs;