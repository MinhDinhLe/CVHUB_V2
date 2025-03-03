import React, { useEffect, useState } from 'react';
import DreamJob from "../LandingPage/DreamJob";
import { Info, CheckCircle, Upload } from 'lucide-react';
import axios from 'axios';

const MyInfoPage = () => {
  localStorage.getItem('user');
  const [formData, setFormData] = useState({
    fullName: 'Phúc Tín',
    phone: '',
    email: '',
    searchStatus: true,
    allowRecruiterSearch: true
  });

  const [apiData, setApiData] = useState(null); // State để lưu dữ liệu API
  const [error, setError] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý lưu thông tin
    console.log('Đã lưu thông tin:', formData);
  };

  // TODO: get api user info
  // const fetchUserProfile = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/api/user/profile', {
  //       withCredentials: true, // Nếu API yêu cầu cookie hoặc session
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Thêm header Authorization nếu cần token (ví dụ: 'Authorization': `Bearer ${token}`)
  //       },
  //     });
  
  //     const data = response.data;
  //     setFormData({
  //       fullName: data.userSettings.fullName || '',
  //       phone: data.userSettings.phone || '',
  //       email: data.userSettings.email || '',
  //       searchStatus: data.userSettings.searchStatus ?? true, // Lấy từ API hoặc mặc định true
  //     allowRecruiterSearch: data.userSettings.allowRecruiterSearch ?? true, // Giả định mặc định là true, có thể điều chỉnh logic
  //     });
  //   } catch (err) {
  //     setError((err as any).message);
  //     console.error('Lỗi khi gọi API:', err);
  //   }
  // };
  const token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJuZ3V5ZW52YW5hQGV4YW1wbGUuY29tIiwiaWF0IjoxNzQxMDA2NzU5LCJleHAiOjE3NDEwOTMxNTksInJvbGUiOiJST0xFX1VTRVIifQ.PzzHGEoJT3OAN7VSBI03CIfO-VUmqsafazgpIeikHD96pc9IeUdiUR7hoPIIxHR4";
  localStorage.setItem('token', token);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user/profile', {
          withCredentials: true, // Nếu API yêu cầu cookie hoặc session
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Thêm header Authorization nếu cần token (ví d
            // Thêm header Authorization nếu cần token (ví dụ: 'Authorization': `Bearer ${token}`)
          },
        });

        const data = response.data;
        console.log(data);
        setApiData(data); // Lưu toàn bộ dữ liệu API vào state
        setFormData({
          fullName: data.userSettings.fullName || 'Phúc Tín',
          phone: data.userSettings.phone,
          email: data.userSettings.email || '',
          searchStatus: data.userSettings.searchStatus ?? true,
          allowRecruiterSearch: data.userSettings.allowRecruiterSearch ?? true,
        });
      } catch (err) {
        setError((err as any).message);
        console.error('Lỗi khi gọi API:', err);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="min-h-[100vh]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Form bên trái */}
          <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6 text-gray-800">
            <h1 className="text-2xl font-semibold mb-4">Cài đặt thông tin cá nhân</h1>
            <p className="text-red-500 mb-6">(*) Các thông tin bắt buộc</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={localStorage.getItem('user') || "Nhập số điện thoại "}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
                  disabled
                />
                <p className="text-sm text-gray-500 mt-1">Email không thể thay đổi</p>
              </div>


              <button 
                type="submit"
                className="bg-green-500 text-white font-medium py-3 px-8 rounded-md hover:bg-green-600 transition duration-200"
              >
                Lưu
              </button>
            </form>
          </div>
          
          {/* Thông tin bên phải */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-gray-800">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img
                    src="/api/placeholder/100/100"
                    alt="Avatar"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="absolute right-0 bottom-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">Chào bạn trở lại,</p>
                  <h2 className="text-xl font-semibold">{formData.fullName}</h2>
                  <p className="text-gray-500 text-sm">Tài khoản chưa xác thực</p>
                  <button className="flex items-center mt-2 text-sm text-gray-700 gap-1 font-medium">
                    <Upload className="w-4 h-4" /> Nâng cấp tài khoản
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-gray-800">
              <div className="flex items-center justify-between mb-6">
                <span className="font-medium">Đang Tắt tìm việc</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="searchStatus"
                    checked={formData.searchStatus}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
              
              <p className="text-gray-600 text-sm mb-6">
                Bật tìm việc giúp hồ sơ của bạn nổi bật hơn và được chú ý nhiều hơn trong danh sách tìm kiếm của NTD.
              </p>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Cho phép NTD tìm kiếm hồ sơ</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="allowRecruiterSearch"
                      checked={formData.allowRecruiterSearch}
                      onChange={handleChange}
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Khi có cơ hội việc làm phù hợp, NTD sẽ liên hệ và trao đổi với bạn qua:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Nhận tin qua Top Connect trên TopCV</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Email và Số điện thoại của bạn</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-blue-900 rounded-lg p-4 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <img src="/api/placeholder/90/30" alt="TopCV Logo" className="mb-2" />
                    <p className="text-sm">Tải App TopCV ngay!</p>
                    <p className="text-xs">Để không bỏ lỡ bất cứ cơ hội nào từ Nhà tuyển dụng</p>
                  </div>
                  <div>
                    <img src="/api/placeholder/100/100" alt="QR Code" className="w-20 h-20" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-gray-500 text-sm">
                <Info className="w-4 h-4" />
                <span>Khởi tạo TopCV Profile để gia tăng 300% cơ hội việc làm tốt</span>
              </div>
              <button className="mt-4 w-full border border-green-500 text-green-500 font-medium py-2 rounded-md hover:bg-green-50 transition duration-200">
                Tạo TopCV Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfoPage;

function setError(message: any) {
  throw new Error('Function not implemented.');
}
function setApiData(data: any) {
  throw new Error('Function not implemented.');
}

