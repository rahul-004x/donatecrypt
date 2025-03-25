import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Projects = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Retrieve state from location or set default values
    const initialSearchTerm = location.state?.searchTerm || '';
    const initialSelectedCategory = location.state?.selectedCategory || 'All';
    const initialSortBy = location.state?.sortBy || 'newest';

    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [selectedCategory, setSelectedCategory] = useState(initialSelectedCategory);
    const [sortBy, setSortBy] = useState(initialSortBy);
    
    const projects = [
        {
            id: 1,
            name: "Clean Water Initiative",
            ngo: "WaterAid Global",
            description: "Providing clean drinking water to communities in developing regions through sustainable infrastructure.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Clean+Water+Initiative",
            raised: 38500,
            goal: 50000,
            category: "Health",
            location: "Ethiopia",
            createdAt: "2024-01-15",
            daysLeft: 42
        },
        {
            id: 2,
            name: "Rainforest Preservation",
            ngo: "EcoDefenders",
            description: "Protecting endangered rainforest ecosystems through conservation and sustainable management practices.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Rainforest+Preservation",
            raised: 124000,
            goal: 200000,
            category: "Environment",
            location: "Brazil",
            createdAt: "2024-02-03",
            daysLeft: 78
        },
        {
            id: 3,
            name: "Education for All",
            ngo: "Teach & Learn Foundation",
            description: "Building schools and providing educational resources for children in underserved communities.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Education+for+All",
            raised: 87300,
            goal: 100000,
            category: "Education",
            location: "Kenya",
            createdAt: "2023-11-20",
            daysLeft: 15
        },
        {
            id: 4,
            name: "COVID-19 Relief Fund",
            ngo: "Global Health Network",
            description: "Providing medical supplies and support to healthcare workers fighting the pandemic.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=COVID-19+Relief+Fund",
            raised: 215000,
            goal: 250000,
            category: "Health",
            location: "India",
            createdAt: "2023-12-01",
            daysLeft: 31
        },
        {
            id: 5,
            name: "Refugee Support Program",
            ngo: "United Relief",
            description: "Providing shelter, food, and essential services to displaced families and individuals.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Refugee+Support+Program",
            raised: 156000,
            goal: 300000,
            category: "Humanitarian",
            location: "Syria",
            createdAt: "2024-02-28",
            daysLeft: 90
        },
        {
            id: 6,
            name: "Ocean Cleanup Initiative",
            ngo: "Blue Planet Alliance",
            description: "Removing plastic waste from oceans and implementing sustainable waste management systems.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Ocean+Cleanup+Initiative",
            raised: 78500,
            goal: 120000,
            category: "Environment",
            location: "Indonesia",
            createdAt: "2023-10-15",
            daysLeft: 10
        },
        {
            id: 7,
            name: "Children's Medical Center",
            ngo: "Children First",
            description: "Building a specialized medical center for treating children with rare diseases.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Children's+Medical+Center",
            raised: 320000,
            goal: 500000,
            category: "Health",
            location: "South Africa",
            createdAt: "2024-01-05",
            daysLeft: 120
        },
        {
            id: 8,
            name: "Sustainable Agriculture Project",
            ngo: "Feed the World",
            description: "Implementing sustainable farming methods to improve food security in rural communities.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Sustainable+Agriculture+Project",
            raised: 95000,
            goal: 150000,
            category: "Food Security",
            location: "Ghana",
            createdAt: "2023-11-05",
            daysLeft: 25
        },
        {
            id: 9,
            name: "Women's Vocational Training",
            ngo: "Women Empowerment Initiative",
            description: "Providing skills training and economic opportunities for women in marginalized communities.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Women's+Vocational+Training",
            raised: 45000,
            goal: 80000,
            category: "Gender Equality",
            location: "Bangladesh",
            createdAt: "2024-03-01",
            daysLeft: 60
        },
        {
            id: 10,
            name: "Solar Power for Villages",
            ngo: "EcoDefenders",
            description: "Installing solar panels to provide renewable electricity to off-grid communities.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Solar+Power+for+Villages",
            raised: 112000,
            goal: 200000,
            category: "Environment",
            location: "Tanzania",
            createdAt: "2024-02-15",
            daysLeft: 45
        },
        {
            id: 11,
            name: "Emergency Food Relief",
            ngo: "Feed the World",
            description: "Providing emergency food supplies to communities facing acute food shortages.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Emergency+Food+Relief",
            raised: 58000,
            goal: 75000,
            category: "Food Security",
            location: "Yemen",
            createdAt: "2024-01-20",
            daysLeft: 8
        },
        {
            id: 12,
            name: "Digital Literacy Program",
            ngo: "Teach & Learn Foundation",
            description: "Providing computers and digital skills training to schools in underserved areas.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Digital+Literacy+Program",
            raised: 67000,
            goal: 90000,
            category: "Education",
            location: "Peru",
            createdAt: "2023-12-15",
            daysLeft: 30
        }
    ];

    const categories = [
        'All', 
        'Health', 
        'Environment', 
        'Education', 
        'Humanitarian', 
        'Children', 
        'Food Security', 
        'Gender Equality'
    ];

    const sortOptions = [
        { value: 'newest', label: 'Newest First' },
        { value: 'endingSoon', label: 'Ending Soon' },
        { value: 'mostFunded', label: 'Most Funded' },
        { value: 'leastFunded', label: 'Least Funded' }
    ];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             project.ngo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             project.location.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    const sortedProjects = [...filteredProjects].sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return new Date(b.createdAt) - new Date(a.createdAt);
            case 'endingSoon':
                return a.daysLeft - b.daysLeft;
            case 'mostFunded':
                return (b.raised / b.goal) - (a.raised / a.goal);
            case 'leastFunded':
                return (a.raised / a.goal) - (b.raised / b.goal);
            default:
                return 0;
        }
    });

    const calculateProgress = (raised, goal) => {
        return (raised / goal) * 100;
    };

    const handleNavigateToDonate = (projectId) => {
        navigate(`/donate?id=${projectId}`, {
            state: { searchTerm, selectedCategory, sortBy },
        });
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Header Section */}
            <div className="bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Projects Making a Difference</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Explore a wide range of verified blockchain-powered humanitarian projects. 
                            Every donation is tracked on the blockchain for complete transparency.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Search, Filter, and Sort */}
                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-md leading-5 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search for projects by name, description, or location..."
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <select
                                value={selectedCategory}
                                onChange={(e) => handleCategoryChange(e.target.value)}
                                className="block w-full px-3 py-3 border border-gray-700 rounded-md leading-5 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'All' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={sortBy}
                                onChange={handleSortChange}
                                className="block w-full px-3 py-3 border border-gray-700 rounded-md leading-5 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-8">
                    <p className="text-gray-400">
                        Showing {sortedProjects.length} out of {projects.length} projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedProjects.map(project => (
                        <div 
                            key={project.id} 
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                                />
                                <div className="absolute top-0 right-0 bg-blue-500 text-xs text-white m-2 px-2 py-1 rounded-full">
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <span className="text-sm text-gray-400">by {project.ngo}</span>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        <span className={project.daysLeft <= 10 ? "text-red-400" : "text-gray-400"}>
                                            {project.daysLeft} days left
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-300 mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>${project.raised.toLocaleString()} raised</span>
                                        <span>{Math.round(calculateProgress(project.raised, project.goal))}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div 
                                            className="bg-blue-500 h-2 rounded-full" 
                                            style={{ width: `${calculateProgress(project.raised, project.goal)}%` }}
                                        ></div>
                                    </div>
                                    <div className="text-right text-xs text-gray-400 mt-1">
                                        Goal: ${project.goal.toLocaleString()}
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-400">{project.location}</span>
                                    <button 
                                        onClick={() => handleNavigateToDonate(project.id)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Donate
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {sortedProjects.length === 0 && (
                    <div className="text-center py-16">
                        <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-4 text-xl font-medium">No projects found</h3>
                        <p className="mt-2 text-gray-400">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                    </div>
                )}

                {/* Start Your Own Project */}
                <div className="mt-16 bg-blue-900/30 border border-blue-800 p-8 rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h2 className="text-2xl font-bold mb-2">Want to start your own project?</h2>
                            <p className="text-gray-300">
                                If you represent an NGO, you can apply to start a new fundraising project and 
                                receive transparent blockchain-based donations.
                            </p>
                        </div>
                        <Link to="/ngos/apply" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg whitespace-nowrap">
                            Start Project
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;