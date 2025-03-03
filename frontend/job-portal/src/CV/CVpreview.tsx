import React, { useState } from 'react';
import { X, Phone, Mail, Globe, Home, Upload } from 'lucide-react';

const CVPreviewDialog = () => {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' hoặc 'create'
  const [selectedOption, setSelectedOption] = useState('suggested');
  const [selectedLanguage, setSelectedLanguage] = useState('Tiếng Việt');
  const [selectedPosition, setSelectedPosition] = useState('Nhân viên kinh doanh');
  const [isOpen, setIsOpen] = useState(true); 
  
  const handleClose = () => {
    console.log('Đóng dialog');
    setIsOpen(false); // Đóng dialog
  }
  
  // Function để hiển thị tab xem trước CV
  const renderPreviewTab = () => {
    return (
      <div className="flex flex-col h-full overflow-auto">
        {/* Mẫu CV phần 1 - Thông tin liên hệ */}
        <div className="bg-blue-50 p-4">
          <div className="flex space-x-3 text-sm mb-4">
            <div className="flex items-center text-gray-700">
              <Phone className="w-4 h-4 text-orange-500 mr-2" /> 
              (024) 6680 5588
            </div>
            <div className="flex items-center text-gray-700">
              <Mail className="w-4 h-4 text-orange-500 mr-2" /> 
              hotro@topcv.vn
            </div>
            <div className="flex items-center text-gray-700">
              <Globe className="w-4 h-4 text-orange-500 mr-2" /> 
              https://fb.com/topcv.vn
            </div>
            <div className="flex items-center text-gray-700">
              <Home className="w-4 h-4 text-orange-500 mr-2" /> 
              Số 10, đường 10, TopCV
            </div>
          </div>

          {/* Thông tin cá nhân */}
          <div className="flex">
            <div className="flex-1">
              <h1 className="text-4xl font-medium text-blue-500 mb-2">Nguyễn Văn A</h1>
              <p className="text-gray-800 mb-1">Nhân viên kinh doanh</p>
              <hr className="border-gray-300 my-3 w-3/4" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.
              </p>
            </div>
            <div className="w-40">
            <a href="#" className="block">
            <img 
                src="Profile\avatar-default.jpg" 
                className="w-32 h-32 object-cover rounded-full mx-auto border-2 border-gray-200"
      />
    </a>
  </div>
          </div>
        </div>

        {/* Mẫu CV phần 2 - Kinh nghiệm làm việc */}
        <div className="bg-blue-50 p-4 mt-3">
          <h2 className="text-lg text-blue-500 font-medium border-b border-orange-300 pb-1 mb-4">KINH NGHIỆM LÀM VIỆC</h2>
          
          <div className="relative pl-6 ml-3 mb-6">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="border-l-2 border-gray-200 pl-8 pb-4">
              <div className="flex">
                <div className="w-36 text-gray-600">
                  <p>03/2015 - Hiện tại</p>
                  <p className="font-medium">Công ty TOPCV</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Nhân viên bán hàng</p>
                  <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                    <li>Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,... </li>
                    <li>Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative pl-6 ml-3">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="border-l-2 border-gray-200 pl-8">
              <div className="flex">
                <div className="w-36 text-gray-600">
                  <p>06/2014 - 02/2015</p>
                  <p className="font-medium">Cửa hàng TOPCV</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Nhân viên bán hàng</p>
                  <ul className="list-disc pl-5 text-sm mt-1 text-gray-700">
                    <li>Bán hàng trực tiếp tại cửa hàng cho người nước ngoài và người Việt.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mẫu CV phần 3 - Grid của học vấn, kỹ năng, chứng chỉ */}
        <div className="grid grid-cols-3 gap-4 mt-3">
          <div className="bg-blue-50 p-4">
            <h2 className="text-lg text-blue-500 font-medium border-b border-orange-300 pb-1 mb-4">HỌC VẤN</h2>
            <div className="text-gray-700">
              <p className="font-medium">Đại học TOPCV</p>
              <p>Quản trị Doanh nghiệp</p>
              <p className="text-sm mt-1">10/2010 - 05/2014</p>
              <p className="text-sm mt-1">Tốt nghiệp loại Giỏi, điểm trung bình 8.0</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4">
            <h2 className="text-lg text-blue-500 font-medium border-b border-orange-300 pb-1 mb-4">CÁC KỸ NĂNG</h2>
            <div className="text-gray-700">
              <p className="font-medium">Tin học văn phòng TOPCV</p>
              <p className="text-sm">- Sử dụng thành thạo các công cụ Word, Excel, Power Point</p>
              
              <p className="font-medium mt-4">Tiếng Anh</p>
              <p className="text-sm">- Khả năng giao tiếp Tiếng Anh trôi chảy</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4">
            <h2 className="text-lg text-blue-500 font-medium border-b border-orange-300 pb-1 mb-4">CHỨNG CHỈ</h2>
            <div className="text-gray-700">
              <p className="font-medium">2013</p>
              <p>Giải nhất Tài năng TOPCV</p>
            </div>
          </div>
        </div>

        {/* Mẫu CV phần 4 - Dự án */}
        <div className="bg-blue-50 p-4 mt-3">
          <h2 className="text-lg text-blue-500 font-medium border-b border-orange-300 pb-1 mb-4">DỰ ÁN</h2>
          
          <div className="relative pl-6 ml-3">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="border-l-2 border-gray-200 pl-8">
              <div className="flex">
                <div className="w-36 text-gray-600">
                  <p>2014 - 2015</p>
                  <p className="font-medium">Rainway Group</p>
                  <p>ANZ TOPCV</p>
                  <p>8</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Lập trình viên</p>
                  <p className="text-sm">- Phân tích và thiết kế hệ thống - Phát triển module - Tối ưu code - Sửa lỗi</p>
                  <p className="text-sm">- Android Studio 1.4, Java, Android 4.0 - Google Cloud Message</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mẫu CV phần 5 - Hoạt động, sở thích, người giới thiệu */}
        <div className="mt-3">
          {/* Hoạt động */}
          <div className="bg-blue-50 p-4 mb-3">
            <h2 className="text-lg text-blue-500 font-medium border-b border-orange-300 pb-1 mb-4">HOẠT ĐỘNG</h2>
            
            <div className="relative pl-6 ml-3">
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-orange-400 rounded-full"></div>
              <div className="border-l-2 border-gray-200 pl-8">
                <div className="flex">
                  <div className="w-36 text-gray-600">
                    <p>2015 - 2017</p>
                    <p className="font-medium">Câu lạc bộ Kinh doanh, ĐH Kinh Tế Quốc Dân</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Ban truyền thông</p>
                    <ul className="list-disc pl-5 text-sm mt-1 text-gray-700 space-y-1">
                      <li>Tham gia giao lưu, chia sẻ kiến thức kinh doanh</li>
                      <li>Tìm kiếm nhà tài trợ, kêu gọi tài trợ để thêm ngân sách tổ chức các hoạt động cho câu lạc bộ</li>
                      <li>Hỗ trợ các công ty Startup tổ chức các chương trình hướng nghiệp cùng sinh viên của NEU</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid của Sở thích, người giới thiệu, danh hiệu */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4">
              <h2 className="text-lg text-blue-500 font-medium border-b border-orange-300 pb-1 mb-4">SỞ THÍCH</h2>
              <p className="text-gray-700">Đọc sách, Du lịch, Thể thao</p>
            </div>
            
            <div className="bg-blue-50 p-4">
              <h2 className="text-lg text-blue-500 font-medium border-b border-orange-300 pb-1 mb-4">NGƯỜI GIỚI THIỆU</h2>
              <div className="text-gray-700 text-sm">
                <p className="font-medium">Ông Lê Quang Q</p>
                <p>Sales Manager H GROUP</p>
                <p>Email: abc@gmail.com</p>
                <p>Điện thoại: 0123 456 789</p>
                
                <p className="font-medium mt-3">Bà Mai Ngọc H</p>
                <p>Sales Manager S GROUP</p>
                <p>Email: xyz@gmail.com</p>
                <p>Điện thoại: 0123 456 789</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4">
              <h2 className="text-lg text-blue-500 font-medium border-b border-orange-300 pb-1 mb-4">DANH HIỆU VÀ GIẢI THƯỞNG</h2>
              <div className="text-gray-700">
                <p className="font-medium">2022</p>
                <p>Nhân viên Kinh doanh xuất sắc nhất Quý 3/2022</p>
              </div>
            </div>
          </div>
          
          <div className="text-right text-gray-500 text-sm mt-3">
            © topcv.vn
          </div>
        </div>
      </div>
    );
  };

  const renderCreateTab = () => {
    return (
      <div className="flex flex-col h-full">
        {/* Header với styling cải thiện và nút thoát */}
        <div className="mb-5 border-b pb-3 flex justify-between items-center">
          <h2 className="text-green-500 text-lg font-medium">Bạn muốn tạo CV từ?</h2>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Các tùy chọn để tạo CV - Layout cải tiến */}
        <div className="space-y-3">
          {/* Option 1: Suggested content */}
          <label className="border rounded-lg p-3 block relative cursor-pointer hover:border-green-500 transition-colors">
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedOption === 'suggested' ? 'border-green-500' : 'border-gray-300'}`}>
                  {selectedOption === 'suggested' && <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Nội dung gợi ý bởi TopCV</p>
                
                {selectedOption === 'suggested' && (
                  <div className="mt-3 pl-1">
                    <p className="mb-1 text-xs text-gray-600">Chọn ngôn ngữ</p>
                    <div className="flex space-x-2 mb-4">
                      {['Tiếng Việt', 'Tiếng Anh', 'Tiếng Nhật'].map((lang) => (
                        <button 
                          key={lang}
                          onClick={() => setSelectedLanguage(lang)}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            selectedLanguage === lang 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                    
                    <p className="mb-1 text-xs text-gray-600">Chọn vị trí</p>
                    <div className="relative">
                      <select 
                        value={selectedPosition}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded-lg appearance-none bg-white"
                      >
                        <option>Nhân viên kinh doanh</option>
                        <option>Kế toán</option>
                        <option>Marketing</option>
                        <option>Lập trình viên</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <input 
              type="radio" 
              name="cvOption" 
              className="sr-only"
              checked={selectedOption === 'suggested'}
              onChange={() => setSelectedOption('suggested')}
            />
          </label>
          
          
          {/* Option 2: Upload */}
          <label className="border rounded-lg p-3 block relative cursor-pointer hover:border-green-500 transition-colors">
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedOption === 'upload' ? 'border-green-500' : 'border-gray-300'}`}>
                  {selectedOption === 'upload' && <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-800">Tải CV từ máy tính hoặc </p>
                  <a href="#" className="text-blue-600 ml-1 text-sm font-medium">LinkedIn</a>
                </div>
                
                {selectedOption === 'upload' && (
                  <div className="mt-3 border border-dashed border-gray-300 rounded-lg p-3 text-center">
                    <div className="flex flex-col items-center">
                      <Upload className="w-7 h-7 text-gray-400 mb-2" />
                      <p className="text-xs text-gray-600 mb-1">Tải lên CV từ máy tính, chọn hoặc kéo thả</p>
                      <p className="text-xs text-gray-500 mb-3">Hỗ trợ định dạng .doc, .docx, .pdf có kích thước dưới 5MB</p>
                      
                      <button className="bg-gray-200 text-gray-700 px-4 py-1.5 text-xs rounded-md hover:bg-gray-300 transition-colors">
                        Chọn CV
                      </button>
                    </div>
                    
                    <div className="mt-3 text-blue-600 text-center text-xs font-medium">
                      <a href="#">Hướng dẫn tạo CV từ LinkedIn Profile</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <input 
              type="radio" 
              name="cvOption" 
              className="sr-only"
              checked={selectedOption === 'upload'}
              onChange={() => setSelectedOption('upload')}
            />
          </label>
          
          {/* Option 3: Start from scratch */}
          <label className="border rounded-lg p-3 block relative cursor-pointer hover:border-green-500 transition-colors">
            <div className="flex items-start gap-2.5">
              <div className="mt-0.5">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedOption === 'scratch' ? 'border-green-500' : 'border-gray-300'}`}>
                  {selectedOption === 'scratch' && <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Tạo CV từ đầu</p>
              </div>
            </div>
            <input 
              type="radio" 
              name="cvOption" 
              className="sr-only"
              checked={selectedOption === 'scratch'}
              onChange={() => setSelectedOption('scratch')}
            />
          </label>
        </div>
        
        {/* Tạo CV Button - Cải tiến với shadow và hiệu ứng */}
        <div className="mt-auto pt-6">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-medium transition-colors shadow-sm hover:shadow">
            Tạo CV
          </button>
        </div>
      </div>
    );
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex">
        {/* Left side - CV Preview */}
        <div className="w-2/3 border-r overflow-auto p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold text-gray-800">Mẫu CV Trang trọng</h1>
            <button className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="h-[calc(90vh-100px)] overflow-auto">
            {renderPreviewTab()}
          </div>
        </div>

        {/* Right side - Create Options */}
        <div className="w-1/3 p-6 overflow-auto">
          {renderCreateTab()}
        </div>
      </div>
    </div>
  );
};

export default CVPreviewDialog;