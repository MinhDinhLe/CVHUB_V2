import React, { useState } from 'react';
import { ArrowRight, Calendar, ExternalLink, Heart, MapPin, MessageCircle, Send } from 'lucide-react';

const JobListingPage = () => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main content */}
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column */}
          <div className="md:w-2/3">
            {/* Job header */}
            <div className="bg-white rounded shadow-sm mb-6">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
                  <h1 className="text-2xl font-bold">
                    Nhân Viên Kinh Doanh (Lương Cứng 10 - 15 Triệu + Hoa Hồng) - Đi Làm Ngay Tại Hà Nội Và Hải Phòng
                  </h1>
                  <div className="flex">
                    <div className="inline-flex">
                      <img src="logoITL.png" alt="ALBERTA VIET NAM" className="w-16 h-16 rounded-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div>
                    <div className="font-bold">CÔNG TY TNHH ALBERTA VIỆT NAM</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Hạn nộp hồ sơ: 28/03/2025</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-green-600 text-white py-2 px-4 rounded flex items-center hover:bg-green-700">
                      <ArrowRight className="mr-2 w-5 h-5" />
                      Ứng tuyển ngay
                    </button>
                    <button 
                      className="border border-gray-300 p-2 rounded hover:bg-gray-100"
                      onClick={() => setSaved(!saved)}
                    >
                      <Heart className={`w-5 h-5 ${saved ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center bg-gray-50 p-4 rounded">
                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Thu nhập</p>
                      <p className="font-medium">Thoả thuận</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded">
                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Địa điểm</p>
                      <p className="font-medium">Hà Nội, Hải Phòng</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded">
                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Kinh nghiệm</p>
                      <p className="font-medium">1 năm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job details */}
            <div className="bg-white rounded shadow-sm mb-6">
              <div className="border-l-4 border-green-600 px-4 py-3">
                <h2 className="text-xl font-bold">Chi tiết tin tuyển dụng</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Chuyên môn Kinh doanh/Bán hàng khác</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">B2B</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Tuổi 26 - 35</span>
                </div>

                <h3 className="font-bold text-lg mb-3">Mô tả công việc</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Thực hiện bán các sản phẩm dầu mỡ nhớt vào các kênh B2B. Lĩnh vực: Hàng hải, Vận tải và Công nghiệp...</li>
                  <li>Tìm kiếm khách hàng và lập kế hoạch bán hàng.</li>
                  <li>Phát triển, xây dựng hệ thống Nhà phân phối.</li>
                  <li>Kiểm soát hiệu quả kinh doanh và chỉ tiêu doanh số bán hàng.</li>
                  <li>Theo dõi, quản lý đơn hàng và quản lý thu hồi công nợ.</li>
                  <li>Thực hiện các công việc khác theo sự phân công của Công ty.</li>
                </ul>

                <h3 className="font-bold text-lg mb-3">Yêu cầu ứng viên</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Giới tính: Nam.</li>
                  <li>Độ tuổi: Từ 26 đến 35 tuổi.</li>
                  <li>Khu vực: Hà Nội, Hải Phòng.</li>
                  <li>Kinh nghiệm: 1 năm.</li>
                  <li>Hiểu biết và có kinh nghiệm về ngành nghề kinh doanh, kỹ thuật.</li>
                  <li>Ngoại hình ưa nhìn, năng động.</li>
                  <li>Có kỹ năng giao tiếp tốt, xây dựng mối quan hệ tốt với khách hàng.</li>
                  <li>Có khả năng làm việc độc lập, kiên trì và chịu được áp lực công việc.</li>
                </ul>
                
                <h3 className="font-bold text-lg mb-3">Thu nhập</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Thu nhập khi đạt 100% KPI: Thoả thuận</li>
                  <li>Lương cứng: 10 - 15 triệu VND</li>
                  <li>Lương cứng phụ thuộc vào doanh số</li>
                </ul>

                <h3 className="font-bold text-lg mb-3">Quyền lợi</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Lương cơ bản: từ 10 – 15 triệu + (thỏa thuận).</li>
                  <li>Lương theo doanh số.</li>
                  <li>Chế độ xét tăng lương mỗi năm một lần.</li>
                  <li>Thưởng sinh nhật, các ngày lễ tết và các sự kiện đặc biệt của Công ty.</li>
                  <li>Môi trường làm việc năng động, thân thiện, cơ hội thăng tiến cao.</li>
                  <li>Được đào tạo, nâng cao nghiệp vụ chuyên môn.</li>
                  <li>Trợ cấp ăn trưa; xăng xe; điện thoại.</li>
                  <li>Đóng BHXH, BHYT, BHTN theo quy định của Nhà nước.</li>
                </ul>

                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Phụ cấp</h3>
                    <p>Ăn trưa</p>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Quyền lợi</h3>
                    <p>Bảo hiểm xã hội, Bảo hiểm sức khỏe, Du lịch hàng năm</p>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-3">Địa điểm làm việc</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>- Hà Nội: Tòa Times Tower, 35 Lê Văn Lương, phường Nhân Chính, Thanh Xuân</li>
                  <li>- Hải Phòng: Tòa nhà Thành Đạt 1, số 3 Lê Thánh Tông, Phường Máy Tơ, Ngô Quyền</li>
                </ul>

                <h3 className="font-bold text-lg mb-3">Thời gian làm việc</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Thứ 2 - Thứ 6 (từ 08:00 đến 17:15)</li>
                  <li>Nghỉ trưa 12h đến 13h15</li>
                </ul>

                <h3 className="font-bold text-lg mb-3">Cách thức ứng tuyển</h3>
                <p className="mb-4">Ứng viên nộp hồ sơ trực tuyển bằng cách bấm <span className="font-medium">Ứng tuyển</span> ngay dưới đây.</p>
                <p className="mb-4">Hạn nộp hồ sơ: 28/03/2025</p>
                <div className="flex justify-end gap-3 mb-6">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded font-medium">
                    Ứng tuyển ngay
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-100 px-5 py-3 rounded font-medium">
                    Lưu tin
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded flex items-center">
                    <Send className="mr-2 w-5 h-5" />
                    Gửi tôi việc làm tương tự
                  </button>
                </div>
            </div>
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-1/3">
            {/* Company info */}
            <div className="bg-white rounded shadow-sm mb-6">
              <div className="p-4">
                <div className="flex gap-4 items-center">
                  <img src="logoITL.png" alt="ALBERTA VIET NAM" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold">CÔNG TY TNHH ALBERTA VIỆT NAM</h3>
                    <a href="#" className="text-green-600 text-sm font-medium flex items-center">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Xem trang công ty
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 p-4">
                <div className="space-y-4">
                  <div className="flex">
                    <svg className="w-5 h-5 mr-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <div>
                      <p className="text-gray-500 text-sm">Quy mô</p>
                      <p className="font-medium">100-499 nhân viên</p>
                    </div>
                  </div>
                  <div className="flex">
                    <svg className="w-5 h-5 mr-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <div>
                      <p className="text-gray-500 text-sm">Lĩnh vực</p>
                      <p className="font-medium">Sản xuất</p>
                    </div>
                  </div>
                  <div className="flex">
                    <MapPin className="w-5 h-5 mr-3 text-gray-500" />
                    <div>
                      <p className="text-gray-500 text-sm">Địa điểm</p>
                      <p className="font-medium">Tầng 3, tháp T1, tòa nhà Time Tower 35 Lê Văn Lương P...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* General info */}
            <div className="bg-white rounded shadow-sm mb-6">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-lg">Thông tin chung</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 mt-1 mr-4">
                      <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 12h-4"></path>
                        <path d="M18 8v8"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Cấp bậc</p>
                      <p className="font-medium">Nhân viên</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 mt-1 mr-4">
                      <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Học vấn</p>
                      <p className="font-medium">Đại Học trở lên</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 mt-1 mr-4">
                      <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Số lượng tuyển</p>
                      <p className="font-medium">4 người</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 mt-1 mr-4">
                      <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Hình thức làm việc</p>
                      <p className="font-medium">Toàn thời gian</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 mt-1 mr-4">
                      <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Giới tính</p>
                      <p className="font-medium">Nam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related job categories */}
            <div className="bg-white rounded shadow-sm mb-6">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-lg">Danh mục Nghề liên quan</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  <li><a href="#" className="text-green-600 hover:underline">Nhân viên kinh doanh</a></li>
                  <li><a href="#" className="text-green-600 hover:underline">Sales thị trường</a></li>
                  <li><a href="#" className="text-green-600 hover:underline">Bán hàng B2B</a></li>
                  <li><a href="#" className="text-green-600 hover:underline">Kinh doanh quốc tế</a></li>
                  <li><a href="#" className="text-green-600 hover:underline">Kinh doanh thương mại</a></li>
                </ul>
              </div>
            </div>

            {/* Suggested jobs */}
            <div className="bg-white rounded shadow-sm mb-6">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-lg">Gợi ý việc làm liên quan</h3>
              </div>
              <div className="p-4">
                {/* Job 1 */}
                <div className="mb-6 border-b border-gray-100 pb-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded overflow-hidden">
                        <img src="logoITL.png" alt="Company logo" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-base font-medium text-gray-900 hover:text-green-600 cursor-pointer">
                        <a href="#">Nhân Viên Tư Vấn/Telesales</a>
                      </h4>
                      <p className="text-sm text-gray-600">Công ty CP Khoa học Dữ liệu</p>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Thoả thuận</span>
                          <span className="text-sm text-gray-600">Hà Nội</span>
                        </div>
                        <button className="text-gray-400 hover:text-red-500">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="mb-6 border-b border-gray-100 pb-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded overflow-hidden">
                        <img src="logoITL.png" alt="Company logo" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-base font-medium text-gray-900 hover:text-green-600 cursor-pointer">
                        <a href="#">Kế Toán Tổng Hợp (Mức Lương Từ 20-30 Triệu)</a>
                      </h4>
                      <p className="text-sm text-gray-600">Công ty cổ phần công nghệ 111</p>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">20 - 30 triệu</span>
                          <span className="text-sm text-gray-600">Hà Nội</span>
                        </div>
                        <button className="text-gray-400 hover:text-red-500">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job 3 */}
                <div className="mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded overflow-hidden">
                        <img src="logoITL.png" alt="Company logo" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-base font-medium text-gray-900 hover:text-green-600 cursor-pointer">
                        <a href="#">Booking Account - Nhân Viên Kinh Doanh</a>
                      </h4>
                      <p className="text-sm text-gray-600">CÔNG TY TNHH SO NATURAL VIỆT NAM</p>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">10 - 12 triệu</span>
                          <span className="text-sm text-gray-600">Hồ Chí Minh</span>
                        </div>
                        <button className="text-gray-400 hover:text-red-500">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a href="#" className="text-green-600 font-medium flex items-center justify-center hover:underline">
                    Xem thêm công việc
                    <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default JobListingPage;