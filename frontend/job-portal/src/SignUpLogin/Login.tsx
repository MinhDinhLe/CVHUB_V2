import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn chặn form submit mặc định
    try {
      console.log("Đang gửi request đến:", "http://localhost:8080/api/v1/users/login");
      console.log("Dữ liệu gửi đi:", { email, password });
      const response = await axios.post("http://localhost:8080/api/v1/users/login", {
        email,
        password,
      });
      
      console.log("Phản hồi:", response);
      setMessage("Đăng nhập thành công: " + JSON.stringify(response.data));
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/find-jobs');

    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      if (axios.isAxiosError(error)) {
        setMessage("Đăng nhập thất bại: " + (error.response?.data?.message || error.message));
      } else {
        setMessage("Đăng nhập thất bại: " + error);
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-5/6 p-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-medium text-emerald-500">
              Chào mừng bạn đã quay trở lại
            </h2>
            <p className="text-gray-600">
              Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
            </p>
          </div>

          {/* Hiển thị thông báo lỗi hoặc thành công */}
          {message && (
            <div className={`p-3 rounded ${message.includes("thành công") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {message}
            </div>
          )}

          {/* Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-gray-700">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <div className="text-right">
                <a href="/forgot-password" className="text-emerald-500 hover:text-emerald-600 text-sm">
                  Quên mật khẩu
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Đăng nhập
            </button>
          </form>

          {/* Social Login */}
          <div className="space-y-4">
            <div className="text-center text-gray-500">Hoặc đăng nhập bằng</div>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-red-500 bg-red-500 text-white">
                Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg  hover:bg-blue-600 bg-blue-600 text-white">
                Facebook
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-blue-700 bg-blue-700 text-white">
                Linkedin
              </button>
            </div>
          </div>

          {/* Rest of the component remains the same... */}

        </div>
      </div>

      {/* Right side - Brand Image */}
      <div className="hidden lg:block lg:w-1/2 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 p-12 text-black space-y-4 z-10">
            <img src="/CVHub.png" alt="TopCV" className="h-12" />
            <h1 className="text-4xl font-bold">
              Tiếp lợi thế
              <br />
              Nối thành công
            </h1>
            <p className="text-lg">
              CVHub - Hệ sinh thái nhân sự tiên phong ứng dụng công nghệ tại Việt Nam
            </p>
          </div>
          {/* Decorative Pattern */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
            {/* Add your pattern/gradient here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;