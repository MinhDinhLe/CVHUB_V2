import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Tìm Việc Làm", url: "find-jobs" },
    { name: "Tuyển Nhân Sự", url: "find-talent" },
    { name: "Tải CV Lên", url: "upload-job" },
    { name: "Về Chúng Tôi", url: "about" },
    { name: "Đăng Kí", url: "sign-up" },
    { name: "Sửa Info", url: "info" }
  ];
  
  const location = useLocation();
  
  return (
    <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === `/${link.url}` || (link.url === "find-jobs" && location.pathname === "/")
              ? "border-bright-sun-400 text-bright-sun-400"
              : "border-transparent"
          } border-t-[3px] h-full flex items-center transition-colors duration-200`}
        >
          <Link to={`/${link.url}`}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;