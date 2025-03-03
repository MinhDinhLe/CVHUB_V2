import React, { useState } from 'react';
import { Eye, EyeOff, Mail, User, Shield } from 'lucide-react';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    agreeToSocialTerms: false
  });

  return (
    <div className="min-h-screen flex">
      {/* Left side - Register Form */}
      <div className="w-full lg:w-5/6 p-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-medium text-emerald-500">
              Chào mừng bạn đến với TopCV
            </h2>
            <p className="text-gray-600">
              Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="block text-gray-700">Họ và tên</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                <input
                  type="text"
                  placeholder="Nhập họ tên"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="block text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                <input
                  type="email"
                  placeholder="Nhập email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="block text-gray-700">Mật khẩu</label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="block text-gray-700">Xác nhận mật khẩu</label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Nhập lại mật khẩu"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                className="mt-1"
              />
              <span className="text-sm text-gray-600">
                Tôi đã đọc và đồng ý với{' '}
                <a href="#" className="text-emerald-500 hover:text-emerald-600">
                  Điều khoản dịch vụ
                </a>{' '}
                và{' '}
                <a href="#" className="text-emerald-500 hover:text-emerald-600">
                  Chính sách bảo mật
                </a>{' '}
                của TopCV
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Đăng ký
            </button>
          </form>

          {/* Social Login */}
          <div className="space-y-4">
            <div className="text-center text-gray-500">Hoặc đăng nhập bằng</div>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
                Google
              </button>
              <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Facebook
              </button>
              <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800">
                Linkedin
              </button>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center space-y-1">
            <p>
              Bạn đã có tài khoản?{' '}
              <a href="/login" className="text-emerald-500 hover:text-emerald-600">
                Đăng nhập ngay
              </a>
            </p>
          </div>

          {/* Support */}
          <div className="text-center space-y-1">
            <p className="text-gray-600">Bạn gặp khó khăn khi tạo tài khoản?</p>
            <p className="text-gray-600">
              Vui lòng gọi tới số{' '}
              <a href="tel:02466805588" className="text-emerald-500 hover:text-emerald-600">
                (024) 6680 5588
              </a>
              {' '}(giờ hành chính).
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            © 2016. All Rights Reserved. TopCV Vietnam JSC.
          </div>
        </div>
      </div>

      {/* Right side remains unchanged */}
      <div className="hidden lg:block lg:w-1/2 bg-emerald-900 relative overflow-hidden">
        {/* Existing right side content */}
      </div>
    </div>
  );
};

export default RegisterPage;