import React from 'react';
import { Bell, Heart, BookmarkPlus, ChevronUp, Search, QrCode, MessageCircle } from 'lucide-react';

const MyCV = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with user info */}
      <div className="bg-white p-4 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Chào bạn trở lại,</span>
                <span className="text-gray-700">Tin Nguyễn</span>
                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">VERIFIED</span>
              </div>
              <span className="text-sm text-gray-500">Tài khoản đã xác thực</span>
            </div>
          </div>
          <button className="text-emerald-600 hover:underline text-sm">
            Nâng cấp tài khoản
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Stats Banner */}
        <div className="bg-emerald-700 rounded-lg p-6 mb-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-medium mb-2">
              Ứng viên được NTD chủ động tiếp cận tăng 22% trong tuần vừa rồi
            </h2>
            <p className="text-emerald-100 mb-4">Cập nhật CV để không bỏ lỡ cơ hội!</p>
            <div className="flex gap-3">
              <button className="bg-white text-emerald-700 px-4 py-2 rounded-md font-medium hover:bg-gray-50">
                Tạo CV online +
              </button>
              <button className="border border-white px-4 py-2 rounded-md font-medium hover:bg-emerald-600">
                Tải CV lên
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* CV Created Section */}
            <div className="bg-white rounded-lg border">
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="font-medium">CV đã tạo trên CVHub</h3>
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-600">
                  + Tạo mới
                </button>
              </div>
              <div className="p-12 flex flex-col items-center text-gray-500">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-10 h-10 text-gray-400" />
                </div>
                <p>Bạn chưa tạo CV nào</p>
              </div>
            </div>

            {/* Uploaded CV Section */}
            <div className="bg-white rounded-lg border">
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="font-medium">CV đã tải lên CVHub</h3>
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-600">
                  Tải CV lên
                </button>
              </div>
              <div className="p-12 flex flex-col items-center text-gray-500">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-10 h-10 text-gray-400" />
                </div>
                <p>Bạn chưa tải lên CV nào</p>
              </div>
            </div>

            {/* TopCV Profile Section */}
            <div className="bg-white rounded-lg border">
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="font-medium">CVHub Profile</h3>
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-600">
                  + Tạo mới
                </button>
              </div>
              <div className="p-12 flex flex-col items-center text-gray-500">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-10 h-10 text-gray-400" />
                </div>
                <p>Bạn chưa tạo CVHub Profile</p>
              </div>
            </div>

            {/* Job Listings */}
            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <h3 className="font-medium">Việc làm phù hợp với bạn</h3>
              </div>
              <div className="divide-y">
                {/* Job Item */}
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-red-700 rounded-lg flex-shrink-0">
                      <img src="OTLlogo.webp" alt="DT HOME" className="rounded-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-red-500 font-medium mb-1 truncate">
                        Nhân Viên Kinh Doanh Tư Vấn Bất Động Sản, Sales Bán Hàng Sản Phẩm - Thu Nhập 50...
                      </h4>
                      <p className="text-gray-700 mb-1">CÔNG TY TNHH ĐT HOME INVEST</p>
                      <div className="flex items-center gap-6 text-gray-500 text-sm mb-3">
                        <span>Hồ Chí Minh</span>
                        <span>Còn 20 ngày để ứng tuyển</span>
                        <span className="text-gray-400">Cập nhật 11 phút trước</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-600 font-medium">60 - 500 triệu</span>
                        <div className="flex gap-2">
                          <button className="bg-emerald-500 text-white px-6 py-1.5 rounded-md text-sm hover:bg-emerald-600">
                            Ứng tuyển
                          </button>
                          <button className="border border-gray-200 p-1.5 rounded-md hover:bg-gray-50">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="border border-gray-200 p-1.5 rounded-md hover:bg-gray-50">
                            <BookmarkPlus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* More job items... */}
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex-shrink-0">
                      <img src="OTLlogo.webp" alt="Company" className="rounded-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-emerald-600 font-medium mb-1 truncate">
                        Nhân Viên Kỹ Thuật Điện Lạnh - Nhận Việc Ngay
                      </h4>
                      <p className="text-gray-700 mb-1">CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ KỸ THUẬT NAM THÀNH PHÁT</p>
                      <div className="flex items-center gap-6 text-gray-500 text-sm mb-3">
                        <span>Hồ Chí Minh</span>
                        <span>Còn 21 ngày để ứng tuyển</span>
                        <span className="text-gray-400">Cập nhật 11 phút trước</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-600 font-medium">Tới 15 triệu</span>
                        <div className="flex gap-2">
                          <button className="bg-emerald-500 text-white px-6 py-1.5 rounded-md text-sm hover:bg-emerald-600">
                            Ứng tuyển
                          </button>
                          <button className="border border-gray-200 p-1.5 rounded-md hover:bg-gray-50">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="border border-gray-200 p-1.5 rounded-md hover:bg-gray-50">
                            <BookmarkPlus className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Job Search Status */}
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Đang Tắt tìm việc</h3>
                <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow" />
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Bật tìm việc giúp hồ sơ của bạn nổi bật hơn và được chú ý nhiều hơn trong danh sách tìm kiếm của NTD.
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 mb-2">Khi có cơ hội việc làm phù hợp, NTD sẽ liên hệ và trao đổi với bạn qua:</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    Nhắn tin qua Top Connect trên TopCV
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    Email và Số điện thoại của bạn
                  </li>
                </ul>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-emerald-900 rounded-lg p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <img src="/api/placeholder/120/120" alt="TopCV QR" className="mb-2" />
                  <h4 className="font-medium mb-1">Tải App TopCV ngay!</h4>
                  <p className="text-sm text-emerald-100">
                    Để không bỏ lỡ bất cứ cơ hội nào từ Nhà tuyển dụng
                  </p>
                </div>
                <QrCode className="w-24 h-24 text-white" />
              </div>
            </div>

            {/* Career Guidance */}
            <div className="bg-emerald-900 rounded-lg p-4 text-white">
              <h4 className="text-xl font-medium mb-4">Định hướng nghề nghiệp theo tử vi</h4>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full" />
                  Hiểu rõ lĩnh vực sự nghiệp
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full" />
                  Định hướng nghề nghiệp theo tử vi
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full" />
                  Làm chủ sự nghiệp trong chuyên gia
                </li>
              </ul>
              <button className="w-full bg-white text-emerald-900 py-2 rounded-lg font-medium">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Elements - Continued */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
          {/* Support Chat Button */}
          <div className="bg-white rounded-lg shadow-lg p-2">
            <div className="flex items-center gap-2 mb-2">
              <img src="ms-reception.webp" alt="Support" className="w-8 h-8 rounded-full" />
              <div className="text-sm">
                <div>Reception</div>
                <div className="text-emerald-500">Hỗ trợ trực tuyến</div>
              </div>
            </div>
            <button className="w-full bg-emerald-500 text-white py-1.5 rounded text-sm hover:bg-emerald-600">
              <MessageCircle className="w-4 h-4 inline-block mr-1" />
              Gửi tin nhắn
            </button>
          </div>
        </div>


        {/* Hide CV Section */}
        <div className="bg-white rounded-lg border p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="font-medium">Ẩn hồ sơ với NTD</h3>
              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
                Mở
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Tôi không muốn CV của tôi hiển thị với danh sách các NTD có tên miền email và thuộc các công ty dưới đây:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Các NTD với email có tên miền</h4>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Nhập tên miền email"
                  className="flex-1 border rounded px-3 py-2 text-sm"
                />
                <button className="text-gray-500 border rounded px-3 py-2 text-sm hover:bg-gray-50">
                  Thêm
                </button>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Ví dụ: Để ẩn hồ sơ của bạn với NTD có email admin@tenmiencongtv.com, vui lòng nhập tenmiencongtv.com
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Các NTD thuộc công ty</h4>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Nhập tên công ty"
                  className="flex-1 border rounded px-3 py-2 text-sm"
                />
                <button className="text-gray-500 border rounded px-3 py-2 text-sm hover:bg-gray-50">
                  Thêm
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CV Stats */}
        <div className="bg-white rounded-lg border p-4">
          <h3 className="font-medium mb-4">CV của bạn đã đủ tốt?</h3>
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-gray-300 mb-2">0</div>
            <div className="text-sm text-gray-500">lượt</div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Mỗi lượt Nhà tuyển dụng xem CV mang đến cơ hội việc làm tốt có thể bạn gần hơn với công việc phù hợp.
          </p>
          <button className="w-full mt-4 text-emerald-500 border border-emerald-500 py-2 rounded text-sm hover:bg-emerald-50">
            Khám phá ngay
          </button>
        </div>
      </div>
  );
};

export default MyCV;

