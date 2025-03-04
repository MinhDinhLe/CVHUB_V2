import React, { useState, useEffect } from 'react';
import { Search, MapPin, Bell, ChevronDown, Heart } from 'lucide-react';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

interface Job {
    id: number;
    title: string;
    experience: string;
    salary: string;
    logo: string;
    postedTime: string;
    requirements?: string;
    location: {
        code: number;
        name: string;
    };
    organization: {
        id: number;
        title: string;
        logoID: null;
        logoFile: null;
        website: string;
        summary: string;
        detail: string;
        location: string;
    };
}

interface Location {
    code: number;
    name: string;
}

interface Organization {
    id: number;
    title: string;
    logoID: null;
    logoFile: null;
    website: string;
    summary: string;
    detail: string;
    location: string;
}

interface SearchParams {
    keyword: string | null;
    location: string | null;
    industry: string | null;
}

const JobSearch = () => {
    const location = useLocation();
    const [searchResults, setSearchResults] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Get the search parameters from the location state
    const searchParams = location.state as SearchParams;
    console.log("SearchParams in JobSearch:", searchParams);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8080/api/search', {
                    params: {
                        keyword: searchParams?.keyword || null, // Use optional chaining
                        location: searchParams?.location || null,
                        industry: searchParams?.industry || null,
                    },
                });

                if (response.data && response.data.searchResults) {
                    setSearchResults(response.data.searchResults);
                } else {
                    setSearchResults([]);
                    setError("Không tìm thấy kết quả phù hợp.");
                }

            } catch (error) {
                console.error('Search error:', error);
                setError('Error occurred during search.');
                setSearchResults([]); // Ensure an empty array is set on error
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [searchParams?.keyword, searchParams?.location, searchParams?.industry]); // Dependency array:  re-run effect when search params change


    const jobCategories = [
        'kế toán quản trị',
        'kế toán tài chính',
        'kế toán nội bộ',
        'kế toán kho',

        'kế toán tiền lương',
        'kế toán thuế'
    ];

    const jobs = searchResults; // Now jobs is directly the searchResults

    if (loading) return <div>Đang tải dữ liệu...</div>;
    if (error) return <div className="text-red-500">{error}</div>;


    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-green-600 p-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center text-white gap-2">
                            <span>Danh mục Nghề</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        <div className="flex-1 flex gap-2">
                            <div className="bg-white rounded-lg flex-1 flex items-center p-2">
                                <Search className="w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="kế toán trưởng"
                                    className="flex-1 outline-none px-2"
                                />
                            </div>

                            <div className="bg-white rounded-lg flex items-center p-2 gap-2">
                                <MapPin className="w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value="Hà Nội"
                                    className="outline-none"
                                />
                            </div>

                            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto py-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span>Trang chủ</span>
                        <span>›</span>
                        <span>Việc làm Hà Nội</span>
                        <span>›</span>
                        <span>Kế Toán Trưởng</span>
                    </div>

                    <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
                        <Bell className="w-5 h-5" />
                        <span>Tạo thông báo việc làm</span>
                    </button>
                </div>

                {/* Categories */}
                <div className="flex gap-4 mb-4 overflow-x-auto">
                    {jobCategories.map((category) => (
                        <button
                            key={category}
                            className="whitespace-nowrap px-4 py-2 rounded-full bg-white hover:bg-gray-50"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="font-bold">Lọc nâng cao</h2>
                        <button className="text-gray-500">Xóa lọc</button>
                    </div>

                    <div className="flex gap-4">
                        <button className="px-4 py-2 border rounded-full">Tên việc làm</button>
                        <button className="px-4 py-2 border rounded-full">Tên công ty</button>
                        <button className="px-4 py-2 border rounded-full">Cả hai</button>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="space-y-4">
                    {jobs.map((job, index) => (
                        <div key={job.id} className="bg-white p-4 rounded-lg border border-green-100 hover:border-green-500">
                            <div className="flex gap-4">
                                <img
                                    src={job.logo}
                                    alt={job.organization.title}  // Access company title from organization object
                                    className="w-16 h-16 rounded"
                                />

                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-medium text-lg">{job.title}</h3>
                                            <p className="text-gray-600">{job.organization.title}</p> {/* Access title from organization */}
                                        </div>
                                        <span className="text-green-600 font-medium">{job.salary}</span>
                                    </div>

                                    <div className="flex items-center gap-4 mt-2">
                                        {/* <span>{job.location}</span>  // This would render the entire location object */}
                                        <span>{job.location.name}</span>  {/* Access the name property */}
                                        <span>{job.experience}</span>
                                        {job.requirements && <span>{job.requirements}</span>}
                                    </div>

                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-gray-500">{job.postedTime}</span>
                                        <button className="text-gray-400 hover:text-red-500">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
};

export default JobSearch;