import React, { useState } from 'react';

const CVHubRegistrationForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [gender, setGender] = useState('');

  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* Form Container */}
      <div className="w-full lg:w-7/12 px-6 py-8 md:px-12 lg:px-16 mx-auto">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img src="/LogoEx.webp" alt="TopCV" className="h-8 mx-auto" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Đăng ký tài khoản Nhà tuyển dụng
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ tuyển dụng ứng dụng sâu AI & Hiring Funnel.
        </p>

        {/* Rules accordion */}
        <div className="mb-6 border rounded-md p-4 bg-gray-50">
          <h2 className="text-lg font-medium text-gray-800 mb-2">Quy định</h2>
          <p className="mb-3 text-gray-700">
            Để đảm bảo chất lượng dịch vụ, TopCV <span className="text-red-500">không cho phép một người dùng tạo nhiều tài khoản khác nhau</span>.
          </p>
          <p className="mb-3 text-gray-700">
            Nếu phát hiện vi phạm, TopCV sẽ ngừng cung cấp dịch vụ tới tất cả các tài khoản trùng lặp hoặc chặn toàn bộ truy cập tới hệ thống website của TopCV.
          </p>
          <p className="mb-3 text-gray-700">
            Sau khi đăng ký tài khoản nhà tuyển dụng (NTD) và cung cấp các thông tin cần thiết, NTD có thể được hỗ trợ hiển thị tin tuyển dụng cơ bản (standard), ngoại trừ một số vị trí nhất định. Số lượng tin đăng và cách thức hiển thị phụ thuộc vào quy định của TopCV tại từng thời điểm.
          </p>
          <p className="text-gray-700">
            Mọi thắc mắc vui lòng liên hệ Hotline CSKH:
          </p>
          <div className="flex gap-4 mt-2">
            <a href="tel:(024)71079799" className="flex items-center text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (024) 71079799
            </a>
            <a href="tel:0862691929" className="flex items-center text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              0862 691929
            </a>
          </div>
        </div>

        {/* Account details header */}
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Tài khoản</h2>

        {/* Terms and Conditions checkbox */}
        <div className="mb-6">
          <label className="flex items-start">
            <input type="checkbox" className="mt-1 h-4 w-4 text-green-500 border-gray-300 rounded" />
            <span className="ml-2 text-gray-700">
              Tôi đã đọc và đồng ý với 
              <a href="#" className="text-green-500 mx-1">Điều khoản dịch vụ</a>
              và
              <a href="#" className="text-green-500 ml-1">Chính sách bảo mật</a>
              của TopCV.
            </span>
          </label>
        </div>

        {/* Google sign up button */}
        <button className="w-full bg-blue-400 text-white py-3 rounded flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="mr-2">
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
          </svg>
          Đăng ký bằng Google
        </button>

        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-gray-500 text-sm">Hoặc bằng email</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Registration form */}
        <form>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Email đăng nhập <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <p className="text-xs text-red-500 mt-1">
              Trường hợp bạn đăng ký tài khoản bằng email không phải email tên miền công ty, một số dịch vụ trên tài khoản có thể sẽ bị giới hạn quyền mua hoặc sử dụng.
            </p>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Mật khẩu <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <input 
                type={passwordVisible ? "text" : "password"} 
                placeholder="Mật khẩu ( từ 6 đến 25 ký tự )" 
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button 
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  {passwordVisible ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">
              Nhập lại mật khẩu <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <input 
                type={confirmPasswordVisible ? "text" : "password"} 
                placeholder="Nhập lại mật khẩu" 
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button 
                type="button"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  {confirmPasswordVisible ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Recruiter Information heading */}
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Thông tin nhà tuyển dụng</h2>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Họ và tên <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Họ và tên" 
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Giới tính <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="gender" 
                  value="nam" 
                  checked={gender === 'nam'} 
                  onChange={() => setGender('nam')} 
                  className="h-4 w-4 text-green-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Nam</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="gender" 
                  value="nu" 
                  checked={gender === 'nu'} 
                  onChange={() => setGender('nu')} 
                  className="h-4 w-4 text-green-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Nữ</span>
              </label>
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Số điện thoại cá nhân <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <input 
                type="tel" 
                placeholder="Số điện thoại cá nhân" 
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Company */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Công ty <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Tên công ty" 
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-1">
                Địa điểm làm việc <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white">
                  <option value="">Chọn tỉnh/thành phố</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Quận/ huyện
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white">
                  <option value="">Chọn quận/huyện</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6">
            <label className="flex items-start">
              <input type="checkbox" className="mt-1 h-4 w-4 text-green-500 border-gray-300 rounded" />
              <span className="ml-2 text-gray-700">
                Tôi đã đọc và đồng ý với 
                <a href="#" className="text-green-500 mx-1">Điều khoản dịch vụ</a>
                và
                <a href="#" className="text-green-500 ml-1">Chính sách bảo mật</a>
                của TopCV.
              </span>
            </label>
          </div>

          {/* Submit button */}
          <button 
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition duration-200 mb-6"
          >
            Hoàn tất
          </button>

          {/* Login link */}
          <div className="text-center">
            <span className="text-gray-600">Đã có tài khoản? </span>
            <a href="#" className="text-green-500 font-medium">Đăng nhập ngay</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CVHubRegistrationForm;