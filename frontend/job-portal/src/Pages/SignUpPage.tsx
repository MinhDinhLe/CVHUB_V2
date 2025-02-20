import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-poppins">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-2xl font-medium text-green-500 text-center mb-2">
          Chào mừng bạn đến với CVHub
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
        </p>
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 mb-2">Họ và tên</label>
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Nhập họ tên"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Nhập email"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 mb-2">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Nhập mật khẩu"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-gray-700 mb-2">Xác nhận mật khẩu</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Nhập lại mật khẩu"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
            />
            <label className="ml-2 text-sm text-gray-600">
              Tôi đã đọc và đồng ý với{' '}
              <a href="#" className="text-green-500 hover:underline">Điều khoản dịch vụ</a>
              {' '}và{' '}
              <a href="#" className="text-green-500 hover:underline">Chính sách bảo mật</a>
              {' '}của TopCV
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
          >
            Đăng ký
          </button>

          {/* Social Login */}
          <div className="mt-6">
            <div className="text-center text-gray-600 mb-4">Hoặc đăng nhập bằng</div>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                <img src="/api/placeholder/24/24" alt="Google" className="w-6 h-6" />
              </button>
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                <img src="/api/placeholder/24/24" alt="Facebook" className="w-6 h-6" />
              </button>
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                <img src="/api/placeholder/24/24" alt="LinkedIn" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center text-gray-600">
            Bạn đã có tài khoản?{' '}
            <a href="#" className="text-green-500 hover:underline">
              Đăng nhập ngay
            </a>
          </div>

          {/* Help Text */}
          <div className="text-center text-gray-600 text-sm">
            Bạn gặp khó khăn khi tạo tài khoản?<br />
            Vui lòng gọi tới số{' '}
            <a href="tel:(024) 6680 5588" className="text-green-500 hover:underline">
              (024) 6680 5588
            </a>
            {' '}(giờ hành chính).
          </div>
        </form>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2016. All Rights Reserved. TopCV Vietnam JSC.
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;