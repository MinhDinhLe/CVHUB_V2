import React from 'react';
import { Phone, Mail, Facebook, Youtube, Linkedin, MessageCircle } from 'lucide-react';

const CVHubFooter = () => {
  return (
    <footer className="bg-white py-10 px-4 md:px-6 font-sans text-sm border-2 border-black">
      <div className="max-w-7xl mx-auto">
        {/* PHẦN 1: LOGO + MENU CHÍNH NGANG */}
        <div className="flex flex-col lg:flex-row gap-x-16 gap-y-8 mb-12">
          {/* Logo và Slogan */}
          <div className="lg:w-1/4">
            <div className="mb-4">
              <span className="text-5xl font-bold">
                <span className="text-gray-800">CV</span>
                <span className="text-green-500">Hub</span>
              </span>
            </div>
            <p className="text-gray-700 font-medium text-lg">Tiếp lợi thế - Nối thành công</p>
            
            {/* Thông tin liên hệ */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4 text-base">Liên hệ</h3>
              <div className="space-y-3">
                <p className="flex items-start text-gray-700">
                  <span className="mr-2 min-w-16">Hotline:</span>
                  <span className="font-medium">(024) 6680 5588 (Giờ hành chính)</span>
                </p>
                <p className="flex items-start text-gray-700">
                  <span className="mr-2 min-w-16">Email:</span>
                  <a href="mailto:hotro@topcv.vn" className="text-gray-700 hover:text-green-500 font-medium">
                    hotro@topcv.vn
                  </a>
                </p>
              </div>
            </div>
            
            {/* Mạng xã hội */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4 text-base">Cộng đồng CVHub</h3>
              <div className="flex space-x-3">
                {[Facebook, Youtube, Linkedin, MessageCircle].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <Icon size={20} className="text-gray-700" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Menu Footer - 3 cột */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {/* Cột 1: Về CVHub */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 text-base">Về CVHub</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-500">Giới thiệu</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Góc báo chí</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Tuyển dụng</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Liên hệ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Hỏi đáp</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Chính sách bảo mật</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Điều khoản dịch vụ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Quy chế hoạt động</a></li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-8 mb-4 text-base">Đối tác</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-500">TestCenter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">TopHR</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">ViecNgay</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Happy Time</a></li>
              </ul>
            </div>

            {/* Cột 2: Hồ sơ và CV */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4 text-base">Hồ sơ và CV</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-500">Quản lý CV của bạn</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">CVHub Profile</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Hướng dẫn viết CV</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Thư viện CV theo ngành nghề</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Review CV</a></li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-8 mb-4 text-base">Khám phá</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-500">Ứng dụng di động CVHub</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Tính lương Gross - Net</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Tính lãi suất kép</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Lập kế hoạch tiết kiệm</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Tính bảo hiểm thất nghiệp</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Tính bảo hiểm xã hội một lần</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Trắc nghiệm MBTI</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Trắc nghiệm MI</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4 text-base">Xây dựng sự nghiệp</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-500">Việc làm tốt nhất</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Việc làm lương cao</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Việc làm quản lý</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Việc làm IT</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Việc làm Senior</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-500">Việc làm bán thời gian</a></li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-8 mb-4 text-base">Phát triển bản thân</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-500">CVHub Contest</a></li>
              </ul>
            </div>
          </div>
        </div>
          <h3 className="font-semibold text-gray-800 mb-6 text-base">Hệ sinh thái HR Tech của CVHub</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {/* CVHub */}
            <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <span className="text-lg font-medium text-gray-800">cv</span>
                <span className="text-lg font-medium text-green-500">hub</span>
              </div>
              <p className="text-xs text-gray-600">Nền tảng công nghệ tuyển dụng thông minh CVHub.vn</p>
            </div>
            
            {/* HappyTime */}
            <div className="bg-orange-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-orange-500 h-8 w-8 rounded flex items-center justify-center mb-2">
                <span className="text-white text-sm">HT</span>
              </div>
              <p className="text-xs text-gray-600">Nền tảng quản lý & gắn lắng trải nghiệm nhân viên HappyTime.vn</p>
            </div>
            
            {/* TestCenter */}
            <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-blue-500 h-8 w-8 rounded flex items-center justify-center mb-2">
                <span className="text-white text-sm">TC</span>
              </div>
              <p className="text-xs text-gray-600">Nền tảng thiết lập và đánh giá năng lực nhân viên TestCenter.vn</p>
            </div>
            
            {/* SHiring */}
            <div className="bg-green-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-green-500 h-8 w-8 rounded flex items-center justify-center mb-2">
                <span className="text-white text-sm">SH</span>
              </div>
              <p className="text-xs text-gray-600">Giải pháp quản trị tuyển dụng hiệu suất cao SHiring.ai</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/4 mb-6 md:mb-0">
              {/* Có thể thêm nội dung hoặc để trống */}
            </div>
            
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm pt-6 mt-6 border-t border-gray-100">
            © 2014-2025 CVHub Vietnam JSC. All rights reserved.
          </div>
        </div>
    </footer>
  );
};

export default CVHubFooter;