import React, { useState } from 'react';
import { Eye, Download, Save, Plus, Minus } from 'lucide-react';

const CVBuilder = () => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedLanguage, setSelectedLanguage] = useState('vi');
  const [fontFamily, setFontFamily] = useState('Roboto');
  const [lineSpacing, setLineSpacing] = useState('1.5');
  
  // State cho các trường có thể chỉnh sửa
  const [position, setPosition] = useState('');
  const [careerGoal, setCareerGoal] = useState('');
  const [workPosition, setWorkPosition] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [workDescription, setWorkDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [major, setMajor] = useState('');
  const [educationPeriod, setEducationPeriod] = useState('');
  const [educationDescription, setEducationDescription] = useState('');
  const [skillName, setSkillName] = useState('');
  const [skillDescription, setSkillDescription] = useState('');
  const [certificateTime, setCertificateTime] = useState('');
  const [certificateName, setCertificateName] = useState('');
  const [activityOrganization, setActivityOrganization] = useState('');
  const [activityPosition, setActivityPosition] = useState('');
  const [activityDescription, setActivityDescription] = useState('');
  const [activityStart, setActivityStart] = useState('');
  const [activityEnd, setActivityEnd] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [referenceInfo, setReferenceInfo] = useState('');
  const [awardTime, setAwardTime] = useState('');
  const [awardName, setAwardName] = useState('');

  const increaseZoom = () => zoomLevel < 150 && setZoomLevel(zoomLevel + 10);
  const decreaseZoom = () => zoomLevel > 70 && setZoomLevel(zoomLevel - 10);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <h1 className="text-gray-600 px-4 py-2 border border-gray-300 rounded-md w-64">CV chưa đặt tên</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
              <Eye className="w-5 h-5" /> Xem trước
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition">
              <Download className="w-5 h-5" /> Lưu và tải xuống
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
              <Save className="w-5 h-5" /> Lưu lại
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex gap-12">
        {/* Sidebar */}
        <aside className="w-72 flex-shrink-0 bg-white rounded-xl shadow-md p-6">
          <div className="space-y-6">
            {/* Language Selector */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Ngôn ngữ CV</label>
              <div className="flex gap-2">
                {[
                  { code: 'vi', label: 'VN', color: 'bg-red-500' },
                  { code: 'en', label: 'EN', color: 'bg-blue-500' },
                  { code: 'jp', label: 'JP', color: 'bg-red-600' },
                ].map(lang => (
                  <button
                    key={lang.code}
                    className={`w-12 h-10 rounded-md flex items-center justify-center text-white text-sm ${lang.color} ${selectedLanguage === lang.code ? 'ring-2 ring-offset-2 ring-teal-500' : 'opacity-80 hover:opacity-100'}`}
                    onClick={() => setSelectedLanguage(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Selector */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Font</label>
              <select
                className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                <option value="Roboto">Roboto</option>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
            </div>

            {/* Line Spacing */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">Khoảng cách dòng</label>
              <select
                className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={lineSpacing}
                onChange={(e) => setLineSpacing(e.target.value)}
              >
                <option value="1.0">1.0</option>
                <option value="1.5">1.5</option>
                <option value="2.0">2.0</option>
              </select>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              {['Thêm mục', 'Đổi mẫu', 'Thư viện'].map((action, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-2 text-teal-600 text-sm hover:bg-teal-50 rounded-md transition"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* CV Preview */}
        <main className="flex-1 bg-white rounded-xl shadow-md p-10" style={{ fontFamily }}>
          <div style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top left', lineHeight: lineSpacing }}>
            {/* Contact Info */}
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <h1 className="text-5xl font-bold text-blue-500 mb-6">Tín Nguyễn</h1>
                  <p className="text-gray-600 mb-4 text-sm">Vị trí ứng tuyển</p>
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-72 border border-gray-400 rounded-md p-2 text-sm"
                    placeholder="Nhập vị trí ứng tuyển"
                  />
                  <textarea
                    value={careerGoal}
                    onChange={(e) => setCareerGoal(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-3 mt-6 text-sm"
                    placeholder="Nhập mục tiêu nghề nghiệp của bạn, bao gồm mục tiêu ngắn hạn và dài hạn"
                    rows={4}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-56 h-56 bg-gray-200 rounded-full" />
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-8">
                {[
                  '0123 456 789',
                  'nguyenlephuctin2003@gmail.com',
                  'facebook.com/TopCV.vn',
                  'Quận A, thành phố Hà Nội',
                ].map((info, index) => (
                  <div key={index} className="flex items-center">
                    <span className="bg-red-400 w-4 h-4 rounded-full mr-2" />
                    {info}
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-blue-500 mb-3 uppercase border-b-2 border-blue-500 pb-2">KINH NGHIỆM LÀM VIỆC</h2>
              <div className="flex mt-6">
                <div className="mr-8">
                  <div className="relative">
                    <div className="w-4 h-4 bg-red-400 rounded-full" />
                    <div className="absolute top-4 bottom-0 left-2 w-0.5 bg-gray-300 h-full" />
                  </div>
                  <div className="mt-8 text-gray-500 text-sm">
                    <input
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full border border-gray-400 rounded-md p-2 mb-3 text-sm"
                      placeholder="Bắt đầu"
                    />
                    <input
                      type="text"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full border border-gray-400 rounded-md p-2 text-sm"
                      placeholder="Kết thúc"
                    />
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-500">
                  <input
                    type="text"
                    value={workPosition}
                    onChange={(e) => setWorkPosition(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-2 mb-3 text-sm"
                    placeholder="Vị trí công việc"
                  />
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-2 mb-3 text-sm"
                    placeholder="Tên công ty"
                  />
                  <textarea
                    value={workDescription}
                    onChange={(e) => setWorkDescription(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-3 mt-6 text-sm"
                    placeholder="Mô tả kinh nghiệm làm việc của bạn"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Education, Skills, Certificates */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              {[
                { 
                  title: 'HỌC VẤN', 
                  fields: [
                    { label: 'Tên trường học', value: schoolName, onChange: setSchoolName, type: 'input', placeholder: 'Nhập tên trường học' },
                    { label: 'Ngành học / Môn học', value: major, onChange: setMajor, type: 'input', placeholder: 'Nhập ngành học / môn học' },
                    { label: 'Bắt đầu - Kết thúc', value: educationPeriod, onChange: setEducationPeriod, type: 'input', placeholder: 'Nhập thời gian' },
                    { label: 'Mô tả', value: educationDescription, onChange: setEducationDescription, type: 'textarea', placeholder: 'Mô tả quá trình học tập hoặc thành tích của bạn', rows: 4 }
                  ]
                },
                { 
                  title: 'CÁC KỸ NĂNG', 
                  fields: [
                    { label: 'Tên kỹ năng', value: skillName, onChange: setSkillName, type: 'input', placeholder: 'Nhập tên kỹ năng' },
                    { label: 'Mô tả', value: skillDescription, onChange: setSkillDescription, type: 'textarea', placeholder: 'Mô tả kỹ năng', rows: 4 }
                  ]
                },
                { 
                  title: 'CHỨNG CHỈ', 
                  fields: [
                    { label: 'Thời gian', value: certificateTime, onChange: setCertificateTime, type: 'input', placeholder: 'Nhập thời gian' },
                    { label: 'Tên chứng chỉ', value: certificateName, onChange: setCertificateName, type: 'input', placeholder: 'Nhập tên chứng chỉ' }
                  ]
                },
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <h2 className="text-xl font-medium text-blue-500 mb-3 uppercase border-b-2 border-blue-500 pb-2">{item.title}</h2>
                  <div className="text-gray-500 text-sm mt-6 space-y-2">
                    {item.fields.map((field, i) => (
                      field.type === 'input' ? (
                        <input
                          key={i}
                          type="text"
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full border border-gray-400 rounded-md p-2 mb-3 text-sm"
                          placeholder={field.placeholder}
                        />
                      ) : (
                        <textarea
                          key={i}
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full border border-gray-400 rounded-md p-3 mb-3 text-sm"
                          placeholder={field.placeholder}
                          rows={'rows' in field ? field.rows : undefined}
                        />
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Activities */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-medium text-blue-500 mb-3 uppercase border-b-2 border-blue-500 pb-2">HOẠT ĐỘNG</h2>
              <div className="flex mt-6">
                <div className="mr-8">
                  <div className="relative">
                    <div className="w-4 h-4 bg-red-400 rounded-full" />
                    <div className="absolute top-4 bottom-0 left-2 w-0.5 bg-gray-300 h-full" />
                  </div>
                  <div className="mt-8 text-gray-500 text-sm">
                    <input
                      type="text"
                      value={activityStart}
                      onChange={(e) => setActivityStart(e.target.value)}
                      className="w-full border border-gray-400 rounded-md p-2 mb-3 text-sm"
                      placeholder="Bắt đầu"
                    />
                    <input
                      type="text"
                      value={activityEnd}
                      onChange={(e) => setActivityEnd(e.target.value)}
                      className="w-full border border-gray-400 rounded-md p-2 text-sm"
                      placeholder="Kết thúc"
                    />
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-500">
                  <input
                    type="text"
                    value={activityOrganization}
                    onChange={(e) => setActivityOrganization(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-2 mb-3 text-sm"
                    placeholder="Tên tổ chức"
                  />
                  <input
                    type="text"
                    value={activityPosition}
                    onChange={(e) => setActivityPosition(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-2 mb-3 text-sm"
                    placeholder="Vị trí của bạn"
                  />
                  <textarea
                    value={activityDescription}
                    onChange={(e) => setActivityDescription(e.target.value)}
                    className="w-full border border-gray-400 rounded-md p-3 mt-6 text-sm"
                    placeholder="Mô tả hoạt động"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Hobbies, References, Awards */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { 
                  title: 'SỞ THÍCH', 
                  fields: [
                    { label: 'Sở thích', value: hobbies, onChange: setHobbies, type: 'textarea', placeholder: 'Điền các sở thích của bạn', rows: 4 }
                  ]
                },
                { 
                  title: 'NGƯỜI GIỚI THIỆU', 
                  fields: [
                    { label: 'Thông tin', value: referenceInfo, onChange: setReferenceInfo, type: 'textarea', placeholder: 'Thông tin người tham chiếu bao gồm tên, chức vụ và thông tin liên hệ', rows: 4 }
                  ]
                },
                { 
                  title: 'DANH HIỆU VÀ GIẢI THƯỞNG', 
                  fields: [
                    { label: 'Thời gian', value: awardTime, onChange: setAwardTime, type: 'input', placeholder: 'Nhập thời gian' },
                    { label: 'Tên giải thưởng', value: awardName, onChange: setAwardName, type: 'input', placeholder: 'Nhập tên giải thưởng' }
                  ]
                },
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <h2 className="text-xl font-medium text-blue-500 mb-3 uppercase border-b-2 border-blue-500 pb-2">{item.title}</h2>
                  <div className="text-gray-500 text-sm mt-6 space-y-2">
                    {item.fields.map((field, i) => (
                      field.type === 'input' ? (
                        <input
                          key={i}
                          type="text"
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full border border-gray-400 rounded-md p-2 mb-3 text-sm"
                          placeholder={field.placeholder}
                        />
                      ) : (
                        <textarea
                          key={i}
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full border border-gray-400 rounded-md p-3 mb-3 text-sm"
                          placeholder={field.placeholder}
                          rows={'rows' in field ? field.rows : undefined}
                        />
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Controls */}
      <div className="fixed right-12 bottom-12 flex flex-col gap-5">
        <div className="bg-teal-600 text-white rounded-lg shadow-lg p-3">
          <button className="p-3 hover:bg-teal-700 rounded-t-md" onClick={increaseZoom}>
            <Plus className="w-5 h-5" />
          </button>
          <div className="text-center py-2 text-xs font-medium">{zoomLevel}%</div>
          <button className="p-3 hover:bg-teal-700 rounded-b-md" onClick={decreaseZoom}>
            <Minus className="w-5 h-5" />
          </button>
        </div>
        <button className="bg-teal-600 text-white p-4 rounded-lg shadow-lg hover:bg-teal-700 transition flex items-center gap-3">
          <Plus className="w-6 h-6" /> <span className="font-medium">Thêm mục</span>
        </button>
      </div>
    </div>
  );
};

export default CVBuilder;