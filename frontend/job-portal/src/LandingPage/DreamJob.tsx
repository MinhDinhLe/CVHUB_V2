import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ChevronLeft, ChevronRight, Heart, Info, MessageCircle } from 'lucide-react';

const DreamJob = () => {
  const navigate = useNavigate();
  const handleViewDetails = (jobId: number) => {
    // Navigate to job details page with the job ID
    navigate(`/job-details/${jobId}`);
  };
  const [selectedLocation, setSelectedLocation] = useState('Ngẫu Nhiên');
  const locations = [
    'Ngẫu Nhiên',
    'Hà Nội',
    'Thành phố Hồ Chí Minh',
    'Miền Bắc',
    'Miền Nam'
  ];
  const categories = [  
    'Dược/Y tế/Sức khỏe/Công nghệ',
    'Thiết kế',
    'Nhà hàng/Khách sạn/Du lịch',
    'Năng lượng/Môi trường/Nông nghiệp',
    'Nhóm nghề khác'
  ];
  const jobListings = [
    {
      id: 1,
      title: 'Giáo Viên Toàn Mầm Non - Tiểu Học - THCS',
      company: 'Mathnasium Việt Nam',
      salary: '8 - 12 triệu',
      location: 'Hà Nội & 2 nơi khác',
      logo: 'logoITL.png'
    },
    {
      id: 2,
      title: 'Quản Lý Khu Vực Miền Trung và Tây Nguyên',
      company: 'CÔNG TY PHẨM THIÊN NHIÊN',
      salary: 'Thỏa thuận',
      location: 'Hà Nội',
      logo: 'OTLlogo.webp'
    },
    {
      id: 3,
      title: 'Quản Lý Cửa Hàng/ Store Manager (HCM)',
      company: 'CÔNG TY TNHH WIND SUPPLY CHAIN',
      salary: 'Thỏa thuận',
      location: 'Hồ Chí Minh',
      logo: 'logoITL.png'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Gradient Background */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Khám Phá Công Việc Mơ Ước
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl">
              Hàng ngàn cơ hội việc làm đang chờ đợi bạn
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Vị trí tuyển dụng</label>
                <input
                  type="text"
                  placeholder="Nhập vị trí, công ty mong muốn..."
                  className="w-full rounded-lg px-4 py-3 border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <Search className="absolute right-4 bottom-3 text-gray-400" size={20} />
              </div>

              <div className="md:col-span-4 relative">
              <label className="block text-sm font-medium text-black mb-2">Địa điểm</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-lg px-4 py-3 border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                >
                  {locations.map((location) => (
                    <option key={location} value={location} className="text-black">{location}</option>
                  ))}
                </select>
                <MapPin className="absolute right-4 bottom-3 text-gray-400" size={20} />
              </div>

              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tìm kiếm</label>
                <button 
                  onClick={() => window.location.href = '/jobsearch'}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-colors">
                  <Search size={20} />
                  Tìm việc ngay
                </button> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Light Pattern Background */}
      <section className="bg-emerald-50 py-16 relative">
        <div className="absolute inset-0 opacity-10 "></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Khám Phá Theo Danh Mục
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-emerald-100">
                <h3 className="text-gray-800 font-medium mb-2">{category}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 text-sm">12 việc làm mới</span>
                  <ChevronRight className="text-emerald-600" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section - White Background */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Việc Làm Nổi Bật
            </h2>
            <p className="text-gray-600">
              Những cơ hội việc làm hàng đầu từ các công ty uy tín
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobListings.map((job) => (
        <div 
          key={job.id} 
          className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white"
        >
          <div className="flex items-start gap-4 mb-4">
            <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <h3 className="font-medium text-gray-800 line-clamp-2">{job.title}</h3>
              <p className="text-gray-600 text-sm">{job.company}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Info size={16} />
              <span>{job.salary}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button 
              className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              onClick={() => handleViewDetails(job.id)}
            >
              Xem chi tiết
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Heart size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Background */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">10K+</div>
              <div className="text-gray-300">Việc làm đang tuyển</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">5K+</div>
              <div className="text-gray-300">Công ty hàng đầu</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">20K+</div>
              <div className="text-gray-300">Ứng viên thành công</div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section - Light Background */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Công Ty Nổi Bật
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Google',
              'Spotify',
              'Oracle',
              'Amazon',
              'Slack',
              'Netflix'
            ].map((company: string, index: number) => (
              <div key={index} 
                className="bg-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
                <img 
                  src={`/Companies/${company}.png`} 
                  alt={company} 
                  className="h-12 w-auto transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng cho công việc mới?
          </h2>
          <p className="text-emerald-100 mb-8">
            Tạo hồ sơ ngay hôm nay và khám phá cơ hội việc làm phù hợp với bạn
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
            Tạo Hồ Sơ Ngay
          </button>
        </div>
      </section>

      {/* Chat Support Button */}
      <button className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors">
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default DreamJob;