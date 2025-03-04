import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Search, MapPin, Heart, Info, MessageCircle, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';

interface JobListing {
    id: number;
    title: string;
    salary: number;
    location: string;
    organization: string;
}

interface Location {
    code: number;
    name: string;
    division_type: string;
}

interface JobRole {
    id: number;
    title: string;
    description: string;
    createdDate: string;
    modified: string;
}

interface ApiResponse {
    jobrequests: JobListing[];
    totalPages: number;
    currentPage: number;
    locations: Location[];
    jobRoles: JobRole[];
}

interface SearchParams {
    keyword: string;
    location: string;
    industry: string;
}

const DreamJob = () => {
    const navigate = useNavigate();
    const [jobListings, setJobListings] = useState<JobListing[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [selectedIndustry, setSelectedIndustry] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [locations, setLocations] = useState<Location[]>([]);
    const [industries, setIndustries] = useState<JobRole[]>([]);
    const [searchParams, setSearchParams] = useState<SearchParams>({
        keyword: '',
        location: '',
        industry: '',
    });

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<ApiResponse>(`http://localhost:8080/api/home?page=${currentPage}&limit=6`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                setJobListings(response.data.jobrequests);
                setTotalPages(response.data.totalPages);
                setCurrentPage(response.data.currentPage);
                setLocations(response.data.locations);
                setIndustries(response.data.jobRoles);

            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Lỗi khi tải dữ liệu ban đầu");
            } finally {
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [currentPage]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearchParams({
            ...searchParams,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearch = () => {
        // Validate location and industry if selected
        const locationValue = searchParams.location ? searchParams.location : null;
        const industryValue = searchParams.industry ? searchParams.industry : null;
        navigate('/jobsearch', {
            state: {
                keyword: searchParams.keyword || null,
                location: locationValue,
                industry: industryValue,
            },
        });
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
            window.scrollTo(0, 0);
        }
    };

    if (loading) return <div>Đang tải dữ liệu...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-16 text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Khám Phá Công Việc Mơ Ước</h1>
                <p className="text-emerald-100">Hàng ngàn cơ hội việc làm đang chờ đợi bạn</p>

                {/* Search Box */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-4 relative">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Vị trí tuyển dụng</label>
                            <input
                                type="text"
                                name="keyword"
                                placeholder="Nhập vị trí, công ty mong muốn..."
                                className="w-full rounded-lg px-4 py-3 border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-black" // Added text-black
                                onChange={handleSearchChange}
                            />
                            <Search className="absolute right-4 bottom-3 text-gray-400" size={20} />
                        </div>

                        <div className="md:col-span-3 relative">
                            <label className="block text-sm font-medium text-black mb-2">Địa điểm</label>
                            <select
                                name="location"
                                value={searchParams.location}
                                onChange={handleSearchChange}
                                className="w-full rounded-lg px-4 py-3 border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-black" // Added text-black
                            >
                                <option value="">Tất cả địa điểm</option>
                                {locations.map((location) => (
                                    <option key={location.code} value={location.code.toString()} className="text-black">
                                        {location.name}
                                    </option>
                                ))}
                            </select>
                            <MapPin className="absolute right-4 bottom-3 text-gray-400" size={20} />
                        </div>

                        <div className="md:col-span-3 relative">
                            <label className="block text-sm font-medium text-black mb-2">Ngành Nghề</label>
                            <select
                                name="industry"
                                value={searchParams.industry}
                                onChange={handleSearchChange}
                                className="w-full rounded-lg px-4 py-3 border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-black" // Added text-black
                            >
                                <option value="">Tất cả ngành nghề</option>
                                {industries.map((industry) => (
                                    <option key={industry.id} value={industry.id.toString()} className="text-black">
                                        {industry.title}
                                    </option>
                                ))}
                            </select>
                            <Briefcase className="absolute right-4 bottom-3 text-gray-400" size={20} />
                        </div>


                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2 invisible">Tìm kiếm</label>
                            <button
                                onClick={handleSearch}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-colors"
                            >
                                <Search size={20} />
                                Tìm việc ngay
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Việc Làm Nổi Bật</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobListings.map((job) => (
                            <div key={job.id} className="border rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
                                <h3 className="font-medium text-gray-800">{job.title}</h3>
                                <p className="text-gray-600 text-sm">{job.organization}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Info size={16} />
                                        <span>{job.salary ? `${job.salary.toLocaleString('vi-VN')} VNĐ` : "Thỏa thuận"}</span>
                                    </div>
                                </div>
                                <button
                                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                                    onClick={() => navigate(`/job-details/${job.id}`)}
                                >
                                    Xem chi tiết
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pagination Section */}
            {totalPages > 1 && (
                <div className="flex justify-center py-10">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 0}
                            className={`px-4 py-2 rounded-md flex items-center ${currentPage === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                }`}
                        >
                            <ChevronLeft size={20} className="mr-1" />
                            <span>Trang trước</span>
                        </button>

                        <div className="flex items-center space-x-1">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index)}
                                    className={`w-10 h-10 rounded-md ${currentPage === index ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages - 1}
                            className={`px-4 py-2 rounded-md flex items-center ${currentPage === totalPages - 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                }`}
                        >
                            <span>Trang sau</span>
                            <ChevronRight size={20} className="ml-1" />
                        </button>
                    </div>
                </div>
            )}

            <button className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors">
                <MessageCircle size={24} />
            </button>
        </div>
    );
};

export default DreamJob;