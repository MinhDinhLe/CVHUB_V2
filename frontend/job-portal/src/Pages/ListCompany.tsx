import React, { useState } from 'react';
import { Search, MessageCircle } from 'lucide-react';

interface Company {
  name: string;
  image: string;
  description: string;
}

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => (
  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
    <img 
      src={company.image} 
      alt={company.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{company.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{company.description}</p>
    </div>
  </div>
);

const CompanyListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const companies: Company[] = [
    {
      name: 'CÔNG TY TNHH YAKULT VN',
      image: 'Yakult4x3.webp',
      description: 'Yakult là công ty được thành lập bởi Giáo sư. Bác sĩ người Nhật từ hơn 80 năm trước, hiện có mặt tại 38 quốc gia và vùng lãnh thổ trên toàn thế giới. Công ty mẹ: Yakult Honsha Co., Ltd.Năm thành lập: 1935.Địa chỉ: 1-19, Higashi-Shinbashi, 1-chome, Minato-ku, Tokyo, 105-8660 Nhật Bản.'
    },
    {
      name: 'CÔNG TY TNHH BOSCH GLOBAL SOFTWARE TECHNOLOGIES',
      image: 'bosch4x3.jpg',
      description: 'Bosch Global Software Technologies Company Limited (Previous name: RBVH - Robert Bosch Engineering and Business Solutions Vietnam Company Limited) is 100% owned subsidiary of Robert Bosch GmbH. BGSW Vietnam has started its operations from 19th October, 2010 at E-Town2 in HCMC.'
    },
    {
      name: 'CÔNG TY CỔ PHẦN STAVIAN HÓA CHẤT',
      image: 'Yakult4x3.webp',
      description: 'Stavian Chemical, được đổi tên từ Công ty Cổ phần Nhựa Opec vào ngày 1/7/2021, thành viên tập đoàn Stavian, với hơn 15 năm kinh nghiệm, là một trong những nhà phân phối hóa chất lớn nhất tại Việt Nam, đạt top 22 nhà phân phối hóa chất lớn nhất toàn cầu và đứng thứ 6 tại Châu Á.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-4">
            <a href="#" className="text-gray-600 hover:text-green-600">Danh sách công ty</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Top công ty</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-green-50 rounded-xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Khám phá 100.000+ công ty nổi bật
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho bạn
              </p>
              
              {/* Search Bar */}
              <div className="flex w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Nhập tên công ty"
                  className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="px-6 py-3 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition-colors">
                  Tìm kiếm
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="BGR.png"
                alt="Company illustration"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>

        {/* Company List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">DANH SÁCH CÁC CÔNG TY NỔI BẬT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <CompanyCard key={index} company={company} />
            ))}
          </div>
        </div>
      </div>

      {/* Chat Support */}
      <div className="fixed bottom-6 right-6 flex items-center">
        <div className="mr-4 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center">
          <img 
            src="/api/placeholder/32/32"
            alt="Support Agent"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <div className="text-sm font-medium">Ms. Hương Nguyễn</div>
            <div className="text-xs text-green-500">Hỗ trợ trực tuyến</div>
          </div>
        </div>
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CompanyListing;