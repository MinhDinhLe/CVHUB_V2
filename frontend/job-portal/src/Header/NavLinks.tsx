import React, { useState } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { Search, Briefcase, Heart, Monitor, Medal, Building, Trophy, FileText, Upload, BookOpen } from 'lucide-react';

const menuItems = [
  {
    name: "Việc làm",
    url: "find-jobs",
    submenu: [
      { name: "Tìm việc làm", url: "find-jobs", icon: Search },
      { name: "Việc làm đã ứng tuyển", url: "jobs-applyed", icon: Briefcase, badge: "4" },
      { name: "Việc làm đã lưu", url: "saved-jobs", icon: Heart },
      { name: "Việc làm phù hợp", url: "suitable-jobs", icon: Monitor },
      { name: "Danh sách công ty", url: "list-company", icon: Building },
    ] 
  },
  {
    name: "Hồ sơ & CV",
    url: "find-talent",
    submenu: [
      { name: "Tạo CV", url: "template-cv", icon: FileText },
      { name: "Tải CV lên", url: "upload-cv", icon: Upload },
      { name: "Tạo Cover Letter", url: "create-cover-letter", icon: FileText },
      { name: "Quản lý CV", url: "myCV", icon: Monitor },
      { name: "Quản lý Cover Letter", url: "manage-cover-letter", icon: FileText },
      { name: "Dịch vụ tư vấn CV", url: "cv-consulting", icon: FileText },
      { name: "Hướng dẫn viết CV theo ngành nghề", url: "cv-guides", icon: BookOpen },
      { name: "Thư viện CV theo ngành nghề", url: "cv-library", icon: BookOpen, badge: "MỚI" },
    ]
  },
  {
    name: "Công cụ",
    url: "tools",
    submenu: [
      { name: "Tính lương Gross-Net", url: "tools/salary", icon: Monitor },
      { name: "Tính thuế TNCN", url: "tools/tax", icon: Monitor },
      { name: "Tư vấn nghề nghiệp", url: "tools/career", icon: Medal },
    ]
  },
  {
    name: "Cẩm nang",
    url: "guides",
    submenu: [
      { name: "Mẹo tìm việc", url: "guides/tips", icon: Monitor },
      { name: "Tin tức", url: "guides/news", icon: Monitor },
      { name: "Tiện ích", url: "guides/utilities", icon: Medal },
    ]
  },
];  

const NavHeader = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className=" bg-lime-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-14 items-center">
          {/* Main Navigation */}
          <div className="flex h-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative h-full"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div
                  className={`h-full flex items-center px-4 cursor-pointer
                    ${location.pathname === `/${item.url}` || (item.url === "find-jobs" && location.pathname === "/")
                      ? "text-emerald-500 border-b-2 border-emerald-500"
                      : "text-gray-700 border-b-2 border-transparent"}
                    hover:text-emerald-500 transition-colors duration-200`}
                >
                  <span>{item.name}</span>
                </div>

                {/* Dropdown Menu */}
                {activeMenu === index && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg w-72 py-2 z-50">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/${subItem.url}`}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-emerald-500 gap-3"
                      >
                        <subItem.icon className="w-5 h-5 text-gray-400" />
                        <span className="flex-1">{subItem.name}</span>
                        {subItem.badge && (
                          <span className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded">
                            {subItem.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="ml-auto flex items-center gap-4">
  <button 
    onClick={() => navigate('/login')}
    className="text-gray-700 hover:text-emerald-500"
  >
    Đăng nhập
  </button>
  <button 
    onClick={() => navigate('/sign-up')} 
    className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
  >
    Đăng ký
  </button>
</div>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;