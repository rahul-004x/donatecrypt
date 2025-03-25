import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NGOs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const ngos = [
        {
            id: 1,
            name: "WaterAid Global",
            logo: "https://images.unsplash.com/photo-1563355809-03230f7d4916?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=60",
            description: "Providing clean water solutions to communities in need across the globe.",
            projects: 8,
            raised: 253000,
            category: "Health",
            location: "Global",
            website: "https://wateraid.org",
            verified: true
        },
        {
            id: 2,
            name: "EcoDefenders",
            logo: "https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=60",
            description: "Protecting and preserving endangered ecosystems and wildlife habitats.",
            projects: 12,
            raised: 428000,
            category: "Environment",
            location: "International",
            website: "https://ecodefenders.org",
            verified: true
        },
        {
            id: 3,
            name: "Teach & Learn Foundation",
            logo: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=60",
            description: "Building schools and providing educational materials in underserved areas.",
            projects: 15,
            raised: 389000,
            category: "Education",
            location: "Africa, Asia",
            website: "https://teachlearn.org",
            verified: true
        },
        {
            id: 4,
            name: "Global Health Network",
            logo: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=60",
            description: "Improving healthcare access and medical supplies in crisis situations.",
            projects: 10,
            raised: 512000,
            category: "Health",
            location: "Global",
            website: "https://globalhealthnet.org",
            verified: true
        },
        {
            id: 5,
            name: "United Relief",
            logo: "https://images.unsplash.com/photo-1587578855694-7e8a0991c309?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=60",
            description: "Providing emergency support and long-term assistance to refugees.",
            projects: 7,
            raised: 327000,
            category: "Humanitarian",
            location: "Middle East, Europe",
            website: "https://unitedrelief.org",
            verified: true
        },
        {
            id: 6,
            name: "Blue Planet Alliance",
            logo: "https://images.unsplash.com/photo-1551614208-94ea55f91637?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=60",
            description: "Combating ocean pollution and preserving marine biodiversity.",
            projects: 9,
            raised: 275000,
            category: "Environment",
            location: "Global",
            website: "https://blueplanetalliance.org",
            verified: true
        },
        {
            id: 7,
            name: "Children First",
            logo: "https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=60",
            description: "Protecting children's rights and providing essential services to children in need.",
            projects: 11,
            raised: 310000,
            category: "Children",
            location: "South America, Africa",
            website: "https://childrenfirst.org",
            verified: true
        },
        {
            id: 8,
            name: "Feed the World",
            logo: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=60",
            description: "Fighting hunger through sustainable agriculture and food distribution programs.",
            projects: 14,
            raised: 482000,
            category: "Food Security",
            location: "Global",
            website: "https://feedtheworld.org",
            verified: true
        },
        {
            id: 9,
            name: "Women Empowerment Initiative",
            logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=60",
            description: "Supporting women's education, health, and economic independence.",
            projects: 8,
            raised: 215000,
            category: "Gender Equality",
            location: "Asia, Africa",
            website: "https://womenempowerment.org",
            verified: true
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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredNGOs = ngos.filter(ngo => {
        const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             ngo.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = selectedCategory === 'All' || ngo.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Header Section */}
            <div className="bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Verified NGO Partners</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Explore our network of verified non-governmental organizations making a difference 
                            around the world. All partners are thoroughly vetted to ensure transparency and impact.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Search and Filter */}
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
                                    placeholder="Search for NGOs by name or description..."
                                />
                            </div>
                        </div>
                        
                        <div>
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
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-8">
                    <p className="text-gray-400">
                        Showing {filteredNGOs.length} out of {ngos.length} organizations
                    </p>
                </div>

                {/* NGO List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNGOs.map(ngo => (
                        <div key={ngo.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <img src={ngo.logo} alt={ngo.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                                    <div>
                                        <div className="flex items-center">
                                            <h3 className="text-xl font-bold">{ngo.name}</h3>
                                            {ngo.verified && (
                                                <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-400">{ngo.location}</p>
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 mb-6">
                                    {ngo.description}
                                </p>
                                
                                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                    <div className="bg-gray-700 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold">{ngo.projects}</div>
                                        <div className="text-gray-400">Projects</div>
                                    </div>
                                    <div className="bg-gray-700 p-4 rounded-lg text-center">
                                        <div className="text-2xl font-bold">${(ngo.raised / 1000).toFixed(0)}K</div>
                                        <div className="text-gray-400">Raised</div>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between">
                                    <Link to={`/ngos/${ngo.id}`} className="text-blue-400 hover:text-blue-300">
                                        View Projects
                                    </Link>
                                    <a href={ngo.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                        Visit Website
                                        <svg className="inline-block ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredNGOs.length === 0 && (
                    <div className="text-center py-16">
                        <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-4 text-xl font-medium">No NGOs found</h3>
                        <p className="mt-2 text-gray-400">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                    </div>
                )}

                {/* Apply to Join */}
                <div className="mt-16 bg-blue-900/30 border border-blue-800 p-8 rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h2 className="text-2xl font-bold mb-2">Are you an NGO?</h2>
                            <p className="text-gray-300">
                                Join our platform to receive transparent blockchain-based donations and 
                                connect with supporters around the world.
                            </p>
                        </div>
                        <Link to="/ngos/apply" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg whitespace-nowrap">
                            Apply to Join
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NGOs;