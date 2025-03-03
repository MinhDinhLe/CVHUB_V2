import React, { useState } from 'react';
import { Upload, BarChart2, Send, MessageCircle } from 'lucide-react';

const CVUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* Banner section */}
        <div className="bg-emerald-700 text-white p-6 rounded-lg flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Upload CV để các cơ hội việc làm tự tìm đến bạn</h2>
            <p className="text-lg">Giảm đến 50% thời gian cần thiết để tìm được một công việc phù hợp</p>
          </div>
        </div>
        {/* Upload section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <p className="text-gray-700 mb-4">
            Bạn đã có sẵn CV của mình, chỉ cần tải CV lên, hệ thống sẽ tự động để xuất CV của bạn tới những nhà tuyển dụng uy tín.
            Tiết kiệm thời gian, tìm việc thông minh, nắm bắt cơ hội và làm chủ đường đua nghề nghiệp của chính mình.
          </p>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center">
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <p className="text-gray-700 font-medium mb-1">Tải lên CV từ máy tính, chọn hoặc kéo thả</p>
            <p className="text-gray-500 text-sm mb-4">Hỗ trợ định dạng .doc, .docx, pdf có kích thước dưới 5MB</p>
            
            <input 
              type="file" 
              id="cv-upload" 
              className="hidden" 
              accept=".doc,.docx,.pdf" 
              onChange={handleFileChange}
            />
            <label 
              htmlFor="cv-upload" 
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-300 transition-colors"
            >
              Chọn CV
            </label>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-green-500 text-white px-8 py-3 rounded font-medium hover:bg-green-600 transition-colors">
              Tải CV lên
            </button>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Nhận về các cơ hội tốt nhất</h3>
            <p className="text-gray-600">
              CV của bạn sẽ được ưu tiên hiển thị với các nhà tuyển 
              dụng đã xác thực. Nhận được lời mời với những cơ hội 
              việc làm hấp dẫn từ các doanh nghiệp uy tín.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <BarChart2 className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Theo dõi số liệu, tối ưu CV</h3>
            <p className="text-gray-600">
              Theo dõi số lượt xem CV. Biết chính xác nhà tuyển 
              dụng nào trên CVHub đang quan tâm đến CV của bạn.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Send className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Chia sẻ CV bất cứ nơi đâu</h3>
            <p className="text-gray-600">
              Upload một lần và sử dụng đường link gửi tới nhiều 
              nhà tuyển dụng.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Kết nối nhanh chóng với nhà tuyển dụng</h3>
            <p className="text-gray-600">
              Dễ dàng kết nối với các nhà tuyển dụng nào xem và 
              quan tâm tới CV của bạn
            </p>
          </div>
        </div>
      </div>

      {/* Floating buttons */}
      <div className="fixed right-5 bottom-5 flex flex-col gap-3">
        <button className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xs font-medium">
          Gọi<br/>tư vấn
        </button>
        <button className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CVUploadPage;