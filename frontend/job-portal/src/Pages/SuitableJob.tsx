import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, CheckCircle, Heart, Bookmark, CornerUpRight } from 'lucide-react';

const JobSearchPage = () => {
  const [isTimViecEnabled, setIsTimViecEnabled] = useState(false);
  const [isNTDSearchEnabled, setIsNTDSearchEnabled] = useState(true);
  
  const jobs = [
    {
      id: 1,
      title: 'Chuyên Viên Kinh Doanh Và Chăm Sóc Khách Hàng Cấp Cao - Thu Nhập Từ 16-25 Triệu/Tháng',
      company: 'CÔNG TY TNHH BẢO HIỂM NHÂN THỌ SUN LIFE VIỆT NAM',
      logo: 'logoITL.png',
      location: 'Hà Nội',
      remainingDays: 9,
      updatedTime: '12 phút trước',
      salaryRange: '16 - 25 triệu'
    },
    {
      id: 2,
      title: 'Nhân Viên Kinh Doanh/ Tư Vấn (Không Yêu Cầu Kinh Nghiệm) Thu Nhập Hấp Dẫn Tại Hà Nội Và Các Tỉnh',
      company: 'Công ty Cổ Phần Dmack',
      logo: 'logoITL.png',
      location: 'Hà Nội, Bắc Ninh',
      remainingDays: 22,
      updatedTime: '12 phút trước',
      salaryRange: '10 - 15 triệu'
    },
    {
      id: 3,
      title: 'Nhân Viên Kinh Doanh Dự Án - Sản Phẩm Ngành M&E',
      company: 'CÔNG TY TNHH THƯƠNG MẠI KỸ THUẬT NTT VIỆT NAM',
      logo: 'logoITL.png',
      location: 'Hà Nội',
      remainingDays: 15,
      updatedTime: '20 phút trước',
      salaryRange: '15 - 18 triệu'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2">
            {/* Search Inputs */}
            <div className="flex flex-1 bg-white rounded-md overflow-hidden">
              <div className="relative flex items-center border-r px-3 min-w-44">
                <span className="text-gray-600 font-medium">Danh mục Nghề</span>
                <ChevronDown className="w-5 h-5 ml-2 text-gray-500" />
              </div>
              
              <div className="flex-1 flex items-center px-3">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Vị trí tuyển dụng" 
                  className="flex-1 py-2 focus:outline-none"
                />
              </div>
              
              <div className="relative flex items-center border-l px-3 min-w-44">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-500">Địa điểm</span>
                <ChevronDown className="w-5 h-5 ml-2 text-gray-500" />
              </div>
            </div>
            
            {/* Search Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded-md">
              Tìm kiếm
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-6 px-4 flex gap-6">
        {/* Main Content */}
        <div className="flex-1">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-gray-800 to-green-600 rounded-lg overflow-hidden relative mb-6">
            <div className="absolute right-0 top-0 w-full h-full">
              <div className="absolute right-0 top-0 w-2/3 h-full opacity-20 bg-[radial-gradient(circle,_white_4px,_transparent_4px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative p-8 text-white">
              <h1 className="text-3xl font-bold mb-3">Việc làm phù hợp</h1>
              <p className="text-gray-100 opacity-90 max-w-2xl">
                Khám phá cơ hội việc làm được gợi ý dựa trên mong muốn, kinh nghiệm và kỹ năng của bạn. Đón lấy sự nghiệp thành công với công việc phù hợp nhất dành cho bạn!
              </p>
            </div>
          </div>

          {/* Search Results */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <p className="text-gray-700 mb-4">
              Tìm thấy <span className="text-green-500 font-medium">120</span> việc làm phù hợp với yêu cầu của bạn.
            </p>

            {/* Job Listings */}
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job.id} className="border rounded-lg p-4 hover:border-green-200 transition-colors">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded flex items-center justify-center overflow-hidden bg-gray-100">
                        <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium text-green-700 hover:text-green-600">{job.title}</h3>
                        <span className="text-green-600 font-medium whitespace-nowrap">{job.salaryRange}</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-2">{job.company}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>{job.location}</span>
                        <span>Còn {job.remainingDays} ngày để ứng tuyển</span>
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-gray-500 text-sm">Cập nhật {job.updatedTime}</span>
                        
                        <div className="flex items-center gap-2">
                          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded text-sm">
                            Ứng tuyển
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Bookmark className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 shrink-0">
          {/* TopCV Advertisement */}
          <div className="bg-green-600 rounded-lg overflow-hidden mb-6">
            <div className="p-6 text-white relative">
              <div className="absolute top-0 right-0 w-full h-full">
                <div className="absolute top-0 right-0 w-full h-full opacity-30 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:10px_10px]"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center mb-3">
                  <span className="text-xl font-bold mr-1">CV</span>
                  <span className="text-xl font-bold text-green-400">Hub</span>
                </div>
                
                <h3 className="text-lg font-medium mb-1">Sở hữu CV độc đáo</h3>
                <p className="text-sm mb-4">lọt top 20% được gọi mời phỏng vấn</p>
                
                <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded">
                  Tìm hiểu ngay
                </button>
                </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0">
                <img src="\Profile\avatar-default.jpg" alt="User profile" className="w-full h-full rounded-full" />
              </div>
              
              <div>
                <div className="flex items-center">
                  <p className="font-medium">Chào bạn trở lại,</p>
                  <span className="ml-1 px-1.5 py-0.5 bg-gray-200 text-gray-700 text-xs rounded">VERIFIED</span>
                </div>
                <p className="font-bold">Tin Nguyễn</p>
                <div className="mt-1">
                  <span className="text-xs px-2 py-0.5 bg-gray-200 text-gray-700 rounded">Tài khoản đã xác thực</span>
                </div>
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 border border-green-500 text-green-600 rounded py-1.5 hover:bg-green-50 transition-colors">
              <CornerUpRight className="w-4 h-4" />
              <span className="text-sm">Nâng cấp tài khoản</span>
            </button>
          </div>

          {/* Job Preferences */}
          <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Đăng tải tìm việc</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox"
                  checked={isTimViecEnabled}
                  onChange={() => setIsTimViecEnabled(!isTimViecEnabled)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Bật tìm việc giúp hồ sơ của bạn nổi bật hơn và được chú ý nhiều hơn trong danh sách tìm kiếm của NTD.
            </p>
            
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Cho phép NTD tìm kiếm hồ sơ</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox"
                  checked={isNTDSearchEnabled}
                  onChange={() => setIsNTDSearchEnabled(!isNTDSearchEnabled)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Khi có cơ hội việc làm phù hợp, NTD sẽ liên hệ và trao đổi với bạn qua:
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Nhận tin qua Top Connect trên CVHub</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Email và Số điện thoại của bạn</span>
              </div>
            </div>
        
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          <button className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors">
            <span className="text-2xl">💬</span>
          </button>
          
          <div className="absolute -top-2 -right-2 bg-green-100 text-green-800 text-xs font-medium rounded-full px-2 py-0.5 border border-green-500">
            QUAY NGAY
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchPage;