import React, { useState } from 'react';
import { MapPin, Globe, Users, Search, ChevronDown, ChevronUp, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const AlbertaCompanyPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Company Header */}
      <div className="container mx-auto px-4 mb-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          {/* Banner */}
          <div className="w-full h-64 bg-teal-800 relative">
            <img 
              src="cong-ty-tnhh-alberta-viet-nam.webp" 
              alt="Alberta Team" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Company Info */}
          <div className="px-6 pb-6 pt-4 relative">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="flex flex-col md:flex-row">
                {/* Logo */}
                <div className="relative -mt-20 mb-4 md:mb-0">
                  <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                    <img 
                      src="logoITL.png" 
                      alt="ALBERTA VIỆT NAM Logo" 
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                </div>
                
                {/* Company Name and Details */}
                <div className="md:ml-6 md:pt-6">
                  <h1 className="text-2xl font-bold text-gray-800">CÔNG TY TNHH ALBERTA VIỆT NAM</h1>
                  
                  <div className="mt-2 flex flex-wrap items-center gap-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Globe className="w-4 h-4 mr-2" />
                      <a href="http://alberta.com.vn/vi" className="hover:text-teal-600">http://alberta.com.vn/vi</a>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>100-499 nhân viên</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Follow Button */}
              <div className="mt-4 md:mt-6">
                <button className="flex items-center justify-center gap-2 px-4 py-2 border border-emerald-500 text-emerald-500 bg-white rounded-md hover:bg-emerald-50">
                  <span className="text-xl">+</span> Theo dõi công ty
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Left Column - Company Info */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button 
                  className="px-6 py-4 text-sm font-medium border-b-2 border-emerald-500 text-emerald-600"
                >
                  Giới thiệu công ty
                </button>
              </nav>
            </div>
            
            {/* Company Introduction */}
            <div className="p-6">
              <h2 className="text-sm uppercase text-gray-700 font-medium mb-4">VỀ ALBERTA VIỆT NAM</h2>
              
              <p className="text-gray-700 text-sm mb-4">
                ALBERTA là công ty thương mại phân phối độc quyền các nhân sản phẩm dầu nhớt cao cấp nhập khẩu để 
                cung cấp cho thị trường Việt Nam bao gồm các loại dầu:
              </p>
              
              <ul className="list-none mb-4 text-sm text-gray-700">
                <li className="mb-2">Dầu động cơ cao cấp</li>
                <li className="mb-2">Dầu công nghiệp</li>
                <li className="mb-2">Dầu hàng hải</li>
                <li className="mb-2">Các loại dầu đặc thù</li>
                <li className="mb-2">Mỡ bôi trơn</li>
              </ul>
              
              <p className="text-gray-700 text-sm mb-4">
                Hiện nay Công ty ALBERTA đang phân phối và cung cấp các sản phẩm dầu nhớt của Texas Petrochemical 
                Singapore, đáp ứng đầy đủ các tiêu chí:
              </p>
              
              <p className="text-gray-700 text-sm mb-4">
                Với tôn chỉ kinh doanh Quality First, Chúng tôi luôn đặt chất lượng sản phẩm là trọng tâm và là kim chỉ nam 
                cho sự phát triển lâu dài của công ty. Với đội ngũ nhân viên trách nhiệm, nhiệt tình, có trình độ, cơ sở vật 
                chất đảm bảo, chúng tôi luôn nỗ lực đáp ứng mọi nhu cầu và đem lại sự hài lòng cho khách hàng khi sử 
                dụng sản phẩm, dịch vụ của công ty với chi phí tối ưu tạo ra giá trị kinh tế cho khách hàng.
              </p>
              
              <button 
                className="text-emerald-500 flex items-center mt-4 text-sm font-medium"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                Thu gọn {isCollapsed ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
              </button>
            </div>
          </div>
          
          {/* Jobs Section */}
          <div className="bg-white rounded-lg shadow-sm mt-6 overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium text-gray-800">Tuyển dụng</h2>
            </div>
            
            {/* Search bar */}
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Tên công việc, vị trí ứng tuyển..." 
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div className="md:w-64 relative">
                  <div className="w-full flex items-center justify-between p-2 border border-gray-300 rounded-md text-sm bg-white cursor-pointer">
                    <span className="text-gray-700">Tất cả tỉnh/thành phố</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 md:w-auto w-full flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  <span>Tìm kiếm</span>
                </button>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="p-6">
              <div className="bg-gray-50 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center border border-gray-200">
                    <img 
                      src="/alberta-logo.png" 
                      alt="ALBERTA VIỆT NAM" 
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-1 text-base">
                      Nhân Viên Kinh Doanh (Lương Cứng 10 - 15 Triệu + Hoa Hồng) - Đi Làm Ngay Tại Hà Nội
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">CÔNG TY TNHH ALBERTA VIỆT NAM</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-gray-200 text-xs rounded-md">Hà Nội</span>
                      <span className="inline-block px-2 py-1 bg-gray-200 text-xs rounded-md">Hải Phòng</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="inline-flex items-center text-emerald-500 text-sm font-medium">
                          <span className="w-2 h-2 mr-1 bg-emerald-500 rounded-full"></span>
                          Thỏa thuận
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Còn 29 ngày để ứng tuyển
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 bg-emerald-500 text-white rounded-md text-sm hover:bg-emerald-600">
                      Ứng tuyển
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 flex items-center justify-center">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-6">
                <button className="p-1 text-gray-400 hover:text-gray-700">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="mx-2 text-sm text-gray-600">1/1 trang</span>
                <button className="p-1 text-gray-400 hover:text-gray-700">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Featured Companies */}
          <div className="bg-white rounded-lg shadow-sm mt-6 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-teal-800 text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-medium">Thương hiệu lớn tiêu biểu cùng lĩnh vực</h2>
                  <p className="text-sm mt-1 opacity-80">Những thương hiệu tuyển dụng đã khẳng định được vị thế trên thị trường.</p>
                </div>
                <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-md">Pro Company</span>
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src="/company-logo-1.png" 
                    alt="AUSTDOOR" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <h3 className="font-medium text-gray-800 text-sm">CÔNG TY CỔ PHẦN TẬP ĐOÀN AUSTDOOR</h3>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src="/company-logo-2.png" 
                    alt="PHƯƠNG HOÀNG XANH" 
                    className="max-w-full max-h-full"
                  />
                </div>
                <h3 className="font-medium text-gray-800 text-sm">CTCP TẬP ĐOÀN PHƯƠNG HOÀNG XANH A&A</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Contact Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium text-gray-800">Thông tin liên hệ</h2>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-700 mb-1 text-sm">Địa chỉ công ty</h3>
                  <p className="text-gray-600 text-sm">
                    Tầng 3, tháp T1, tòa nhà Time Tower 35 Lê Văn Lương P. Nhân Chính, Q Thanh Xuân Hà nội
                  </p>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-4">
                <h3 className="font-medium text-emerald-500 mb-2 text-sm">Xem bản đồ</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg relative overflow-hidden">
                  <img 
                    src="/map-preview.jpg" 
                    alt="Map location" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-md shadow-md text-sm">
                    35 lê văn lương
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <a href="#" className="text-xs text-emerald-500 bg-white px-2 py-1 rounded-md shadow-md">
                      Xem bản đồ lớn hơn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Share */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">Chia sẻ công ty tới bạn bè</h2>
            </div>
            <div className="px-6 py-4">
              <div className="mb-4">
                <h3 className="text-sm text-gray-600 mb-2">Sao chép đường dẫn</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    readOnly 
                    value="http://www.topcv.vn/cong-ty/cong-t..." 
                    className="flex-1 p-2 border border-gray-300 rounded-l-md text-sm" 
                  />
                  <button className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-600 mb-2">Chia sẻ qua mạng xã hội</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    <span className="text-lg">f</span>
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-500">
                    <span className="text-lg">t</span>
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-blue-800">
                    <span className="text-lg">in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Support Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs font-bold text-black">QUAY NGAY</span>
        </button>
        <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xl">💬</span>
        </button>
      </div>
      
      {/* Green Side Buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <div className="bg-emerald-500 text-white py-2 px-3 rounded-l-md shadow-md">
          <div className="transform -rotate-90 text-xs font-semibold">GÓP Ý</div>
        </div>
      </div>
    </div>
  );
};

export default AlbertaCompanyPage;