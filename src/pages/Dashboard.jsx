import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [walletConnected, setWalletConnected] = useState(true);
    
    // Mock user data
    const userData = {
        name: "Alex Thompson",
        walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        joinedDate: "January 2024",
        totalDonations: 1250,
        totalProjects: 8,
        favoriteCategories: ["Health", "Education", "Environment"],
        impactScore: 78
    };
    
    // Mock donation data
    const recentDonations = [
        {
            id: 1,
            projectName: "Clean Water Initiative",
            ngo: "WaterAid Global",
            amount: 250,
            date: "2024-03-15",
            status: "Confirmed",
            txHash: "0x2b618b5e7c98a7ec094a198fea65c0fac6ca6c5cb03bc813239f321b7f23dd46"
        },
        {
            id: 2,
            projectName: "Education for All",
            ngo: "Teach & Learn Foundation",
            amount: 100,
            date: "2024-03-01",
            status: "Confirmed",
            txHash: "0x5d622d9b78df8f6bb9eb52c7d5061a3313a13ddd2acc34e28f9ec139bd4990f7"
        },
        {
            id: 3,
            projectName: "Rainforest Preservation",
            ngo: "EcoDefenders",
            amount: 500,
            date: "2024-02-18",
            status: "Confirmed",
            txHash: "0x7f1f27e8d1a4c1888562b22f89d391d5f9a0f82ae7e5602dbcfb21896f5b3d75"
        },
        {
            id: 4,
            projectName: "Children's Medical Center",
            ngo: "Children First",
            amount: 400,
            date: "2024-01-25",
            status: "Confirmed",
            txHash: "0x3a8e6d8c363e396dd34f5325a1343ebb06b1a0d3a3cf0e5f36cc5ef9be4db976"
        }
    ];
    
    // Mock impact data
    const impactMetrics = [
        {
            id: 1,
            icon: "💧",
            metric: "1,250",
            description: "People with access to clean water",
            relatedProject: "Clean Water Initiative"
        },
        {
            id: 2,
            icon: "📚",
            metric: "325",
            description: "Students with access to education",
            relatedProject: "Education for All"
        },
        {
            id: 3,
            icon: "🌳",
            metric: "500",
            description: "Trees planted",
            relatedProject: "Rainforest Preservation"
        },
        {
            id: 4,
            icon: "🏥",
            metric: "40",
            description: "Medical treatments provided",
            relatedProject: "Children's Medical Center"
        }
    ];
    
    // Mock certificates
    const impactCertificates = [
        {
            id: 1,
            name: "Clean Water Supporter",
            image: "https://images.unsplash.com/photo-1544351363-967cef743bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60",
            issuedBy: "WaterAid Global",
            date: "2024-03-15",
            tokenId: "WATER-2024-003421"
        },
        {
            id: 2,
            name: "Education Champion",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60",
            issuedBy: "Teach & Learn Foundation",
            date: "2024-03-01",
            tokenId: "EDU-2024-002158"
        },
        {
            id: 3,
            name: "Forest Protector",
            image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60",
            issuedBy: "EcoDefenders",
            date: "2024-02-18",
            tokenId: "ECO-2024-005793"
        }
    ];
    
    // Mock project updates
    const projectUpdates = [
        {
            id: 1,
            projectName: "Clean Water Initiative",
            date: "2024-03-10",
            content: "We've completed the installation of 5 new water purification systems in rural Ethiopia, providing clean water to over 1,000 people. Thank you for your support!",
            image: "https://images.unsplash.com/photo-1567952701686-133d449e5c10?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60"
        },
        {
            id: 2,
            projectName: "Education for All",
            date: "2024-02-25",
            content: "The new school building in Kenya is now 75% complete. We've also received the first shipment of textbooks and computers for the classrooms.",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60"
        }
    ];

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const truncateAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Top section with user info */}
            <div className="bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <img 
                                src={userData.profileImage} 
                                alt="Profile" 
                                className="h-16 w-16 rounded-full border-2 border-blue-400"
                            />
                            <div className="ml-4">
                                <h1 className="text-2xl font-bold">{userData.name}</h1>
                                <div className="flex items-center">
                                    <span className="text-gray-400 mr-2">Wallet:</span>
                                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm font-mono">
                                        {truncateAddress(userData.walletAddress)}
                                    </span>
                                    <button className="ml-2 text-blue-400 hover:text-blue-300">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-blue-900/50 mr-4 px-4 py-2 rounded-lg text-center">
                                <div className="text-2xl font-bold">${userData.totalDonations}</div>
                                <div className="text-xs text-gray-400">Total Donated</div>
                            </div>
                            <div className="bg-blue-900/50 mr-4 px-4 py-2 rounded-lg text-center">
                                <div className="text-2xl font-bold">{userData.totalProjects}</div>
                                <div className="text-xs text-gray-400">Projects Supported</div>
                            </div>
                            <div className="bg-blue-900/50 px-4 py-2 rounded-lg text-center">
                                <div className="text-2xl font-bold">{userData.impactScore}</div>
                                <div className="text-xs text-gray-400">Impact Score</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Navigation tabs */}
            <div className="border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex overflow-x-auto">
                        <button 
                            onClick={() => setActiveTab('overview')}
                            className={`py-4 px-6 font-medium text-sm border-b-2 ${
                                activeTab === 'overview' 
                                    ? 'border-blue-500 text-blue-500' 
                                    : 'border-transparent text-gray-400 hover:text-gray-300'
                            } whitespace-nowrap`}
                        >
                            Overview
                        </button>
                        <button 
                            onClick={() => setActiveTab('donations')}
                            className={`py-4 px-6 font-medium text-sm border-b-2 ${
                                activeTab === 'donations' 
                                    ? 'border-blue-500 text-blue-500' 
                                    : 'border-transparent text-gray-400 hover:text-gray-300'
                            } whitespace-nowrap`}
                        >
                            Donations
                        </button>
                        <button 
                            onClick={() => setActiveTab('impact')}
                            className={`py-4 px-6 font-medium text-sm border-b-2 ${
                                activeTab === 'impact' 
                                    ? 'border-blue-500 text-blue-500' 
                                    : 'border-transparent text-gray-400 hover:text-gray-300'
                            } whitespace-nowrap`}
                        >
                            Impact
                        </button>
                        <button 
                            onClick={() => setActiveTab('certificates')}
                            className={`py-4 px-6 font-medium text-sm border-b-2 ${
                                activeTab === 'certificates' 
                                    ? 'border-blue-500 text-blue-500' 
                                    : 'border-transparent text-gray-400 hover:text-gray-300'
                            } whitespace-nowrap`}
                        >
                            Certificates
                        </button>
                        <button 
                            onClick={() => setActiveTab('updates')}
                            className={`py-4 px-6 font-medium text-sm border-b-2 ${
                                activeTab === 'updates' 
                                    ? 'border-blue-500 text-blue-500' 
                                    : 'border-transparent text-gray-400 hover:text-gray-300'
                            } whitespace-nowrap`}
                        >
                            Project Updates
                        </button>
                        <button 
                            onClick={() => setActiveTab('settings')}
                            className={`py-4 px-6 font-medium text-sm border-b-2 ${
                                activeTab === 'settings' 
                                    ? 'border-blue-500 text-blue-500' 
                                    : 'border-transparent text-gray-400 hover:text-gray-300'
                            } whitespace-nowrap`}
                        >
                            Settings
                        </button>
                    </nav>
                </div>
            </div>
            
            {/* Main content area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Recent Donations Section */}
                            <div className="lg:col-span-2">
                                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-bold">Recent Donations</h2>
                                        <button 
                                            onClick={() => setActiveTab('donations')}
                                            className="text-blue-400 hover:text-blue-300 text-sm"
                                        >
                                            View All
                                        </button>
                                    </div>
                                    
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-700">
                                            <thead>
                                                <tr>
                                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Project</th>
                                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-700">
                                                {recentDonations.slice(0, 3).map(donation => (
                                                    <tr key={donation.id}>
                                                        <td className="px-3 py-4 whitespace-nowrap">
                                                            <div>
                                                                <div className="font-medium">{donation.projectName}</div>
                                                                <div className="text-sm text-gray-400">{donation.ngo}</div>
                                                            </div>
                                                        </td>
                                                        <td className="px-3 py-4 whitespace-nowrap">
                                                            <div className="font-medium">${donation.amount}</div>
                                                        </td>
                                                        <td className="px-3 py-4 whitespace-nowrap">
                                                            <div className="text-sm">{formatDate(donation.date)}</div>
                                                        </td>
                                                        <td className="px-3 py-4 whitespace-nowrap">
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                                                                {donation.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                {/* Impact Metrics */}
                                <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-bold">Your Impact</h2>
                                        <button 
                                            onClick={() => setActiveTab('impact')}
                                            className="text-blue-400 hover:text-blue-300 text-sm"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {impactMetrics.map(metric => (
                                            <div key={metric.id} className="bg-gray-700 p-4 rounded-lg text-center">
                                                <div className="text-3xl mb-2">{metric.icon}</div>
                                                <div className="text-xl font-bold">{metric.metric}</div>
                                                <div className="text-sm text-gray-400">{metric.description}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right sidebar */}
                            <div>
                                {/* Donation Categories */}
                                <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                                    <h2 className="text-xl font-bold mb-4">Favorite Categories</h2>
                                    <div className="space-y-2">
                                        {userData.favoriteCategories.map((category, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                                                <span>{category}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Project Updates */}
                                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-bold">Project Updates</h2>
                                        <button 
                                            onClick={() => setActiveTab('updates')}
                                            className="text-blue-400 hover:text-blue-300 text-sm"
                                        >
                                            View All
                                        </button>
                                    </div>
                                    {projectUpdates.slice(0, 1).map(update => (
                                        <div key={update.id} className="bg-gray-700 rounded-lg p-4">
                                            <div className="flex items-start">
                                                <img 
                                                    src={update.image} 
                                                    alt={update.projectName} 
                                                    className="h-16 w-16 rounded-md object-cover mr-4" 
                                                />
                                                <div>
                                                    <h3 className="font-medium">{update.projectName}</h3>
                                                    <p className="text-sm text-gray-400 mb-2">{formatDate(update.date)}</p>
                                                    <p className="text-sm text-gray-300 line-clamp-3">{update.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Donations Tab */}
                {activeTab === 'donations' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Your Donation History</h2>
                        
                        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead className="bg-gray-700">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Project</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Transaction</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700">
                                        {recentDonations.map((donation) => (
                                            <tr key={donation.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div>
                                                        <div className="font-medium">{donation.projectName}</div>
                                                        <div className="text-sm text-gray-400">{donation.ngo}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="font-medium">${donation.amount}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm">{formatDate(donation.date)}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                                                        {donation.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                                    <a
                                                        href={`https://etherscan.io/tx/${donation.txHash}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-400 hover:text-blue-300"
                                                    >
                                                        View on Etherscan
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="mt-8 bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-bold mb-4">Download Donation Reports</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg">
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                    </svg>
                                    PDF Report
                                </button>
                                <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg">
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                    </svg>
                                    CSV Export
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Impact Tab */}
                {activeTab === 'impact' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Your Impact Metrics</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {impactMetrics.map(metric => (
                                <div key={metric.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <div className="text-5xl mb-4">{metric.icon}</div>
                                    <div className="text-3xl font-bold mb-2">{metric.metric}</div>
                                    <div className="text-gray-400 mb-4">{metric.description}</div>
                                    <div className="text-sm text-blue-400">{metric.relatedProject}</div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
                            <h3 className="text-xl font-bold mb-6">Impact Score Breakdown</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gray-700 rounded-lg p-4">
                                    <div className="text-center mb-4">
                                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-900 text-blue-300 text-2xl font-bold">
                                            {userData.impactScore}
                                        </div>
                                    </div>
                                    <h4 className="text-center font-medium mb-1">Overall Impact Score</h4>
                                    <p className="text-sm text-gray-400 text-center">Based on your donation history and project outcomes</p>
                                </div>
                                
                                <div className="col-span-2">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium">Donation Frequency</span>
                                                <span className="text-sm text-gray-400">35/40</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87.5%' }}></div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium">Donation Amount</span>
                                                <span className="text-sm text-gray-400">25/40</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '62.5%' }}></div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-sm font-medium">Project Diversity</span>
                                                <span className="text-sm text-gray-400">18/20</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold mb-4">SDG Goals Contributed To</h3>
                            <p className="text-gray-400 mb-6">Your donations have contributed to these UN Sustainable Development Goals:</p>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                <div className="bg-blue-900/20 p-3 rounded-lg text-center">
                                    <div className="text-3xl mb-2">💧</div>
                                    <div className="text-sm font-medium">Clean Water & Sanitation</div>
                                </div>
                                <div className="bg-blue-900/20 p-3 rounded-lg text-center">
                                    <div className="text-3xl mb-2">📚</div>
                                    <div className="text-sm font-medium">Quality Education</div>
                                </div>
                                <div className="bg-blue-900/20 p-3 rounded-lg text-center">
                                    <div className="text-3xl mb-2">🌳</div>
                                    <div className="text-sm font-medium">Climate Action</div>
                                </div>
                                <div className="bg-blue-900/20 p-3 rounded-lg text-center">
                                    <div className="text-3xl mb-2">🏥</div>
                                    <div className="text-sm font-medium">Good Health</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Impact Certificates Tab */}
                {activeTab === 'certificates' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Your Impact Certificates</h2>
                        <p className="text-gray-400 mb-8">These NFT certificates are verifiable proof of your contributions to various causes.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {impactCertificates.map(certificate => (
                                <div key={certificate.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                                    <img 
                                        src={certificate.image} 
                                        alt={certificate.name} 
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-1">{certificate.name}</h3>
                                        <p className="text-gray-400 text-sm mb-4">Issued by {certificate.issuedBy} on {formatDate(certificate.date)}</p>
                                        
                                        <div className="bg-gray-700 px-4 py-3 rounded-lg mb-4">
                                            <div className="text-xs text-gray-400">Token ID</div>
                                            <div className="font-mono">{certificate.tokenId}</div>
                                        </div>
                                        
                                        <div className="flex space-x-2">
                                            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                                View
                                            </button>
                                            <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 p-2 rounded">
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                </svg>
                                            </button>
                                            <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 p-2 rounded">
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Project Updates Tab */}
                {activeTab === 'updates' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Updates from Projects You've Supported</h2>
                        
                        <div className="space-y-6">
                            {projectUpdates.map(update => (
                                <div key={update.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                    <div className="md:flex">
                                        <div className="md:flex-shrink-0">
                                            <img 
                                                src={update.image} 
                                                alt={update.projectName} 
                                                className="h-full w-full md:w-48 object-cover" 
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xl font-bold mb-1">{update.projectName}</h3>
                                                    <p className="text-gray-400 text-sm">Posted on {formatDate(update.date)}</p>
                                                </div>
                                                <button className="bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded">
                                                    Go to Project
                                                </button>
                                            </div>
                                            <p className="mt-4">{update.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Settings Tab */}
                {activeTab === 'settings' && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                {/* Profile Settings */}
                                <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold mb-6">Profile Settings</h3>
                                    
                                    <form>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                                    Display Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    defaultValue={userData.name}
                                                    className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                                    Email (optional)
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="your@email.com"
                                                    className="w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                                Profile Picture
                                            </label>
                                            <div className="flex items-center">
                                                <img 
                                                    src={userData.profileImage} 
                                                    alt="Profile" 
                                                    className="h-16 w-16 rounded-full object-cover mr-4"
                                                />
                                                <button
                                                    type="button"
                                                    className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
                                                >
                                                    Change Picture
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-medium"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                
                                {/* Notification Settings */}
                                <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold mb-6">Notification Settings</h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium">Project Updates</div>
                                                <div className="text-sm text-gray-400">Receive updates about projects you've supported</div>
                                            </div>
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input 
                                                    type="checkbox" 
                                                    name="projectUpdates" 
                                                    id="projectUpdates" 
                                                    defaultChecked={true}
                                                    className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-700 appearance-none cursor-pointer"
                                                />
                                                <label htmlFor="projectUpdates" className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium">Impact Reports</div>
                                                <div className="text-sm text-gray-400">Receive periodic reports about your donation impact</div>
                                            </div>
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input 
                                                    type="checkbox" 
                                                    name="impactReports" 
                                                    id="impactReports" 
                                                    defaultChecked={true}
                                                    className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-700 appearance-none cursor-pointer"
                                                />
                                                <label htmlFor="impactReports" className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium">New Certificate Alerts</div>
                                                <div className="text-sm text-gray-400">Get notified when you receive new impact certificates</div>
                                            </div>
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input 
                                                    type="checkbox" 
                                                    name="newCertificates" 
                                                    id="newCertificates" 
                                                    defaultChecked={true}
                                                    className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-700 appearance-none cursor-pointer"
                                                />
                                                <label htmlFor="newCertificates" className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium">Marketing Communications</div>
                                                <div className="text-sm text-gray-400">Receive newsletters and promotional content</div>
                                            </div>
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input 
                                                    type="checkbox" 
                                                    name="marketing" 
                                                    id="marketing" 
                                                    defaultChecked={false}
                                                    className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-700 appearance-none cursor-pointer"
                                                />
                                                <label htmlFor="marketing" className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right sidebar for settings */}
                            <div>
                                {/* Wallet Connection */}
                                <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                                    <h3 className="text-xl font-bold mb-4">Connected Wallet</h3>
                                    {walletConnected ? (
                                        <>
                                            <div className="bg-gray-700 p-4 rounded-lg mb-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center">
                                                        <img 
                                                            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" 
                                                            alt="MetaMask" 
                                                            className="h-6 w-6 mr-2"
                                                        />
                                                        <span>MetaMask</span>
                                                    </div>
                                                    <span className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded-full">Connected</span>
                                                </div>
                                                <div className="text-sm font-mono text-gray-400">
                                                    {truncateAddress(userData.walletAddress)}
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded text-sm">
                                                    Change Wallet
                                                </button>
                                                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded text-sm">
                                                    Disconnect
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center py-8">
                                            <div className="mb-4">
                                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-400 mb-4">Connect your wallet to view your dashboard</p>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-medium">
                                                Connect Wallet
                                            </button>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Privacy Settings */}
                                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold mb-4">Privacy Settings</h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm">Public Profile</div>
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input 
                                                    type="checkbox" 
                                                    name="publicProfile" 
                                                    id="publicProfile" 
                                                    defaultChecked={true}
                                                    className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-700 appearance-none cursor-pointer"
                                                />
                                                <label htmlFor="publicProfile" className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm">Show Donation Amounts</div>
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input 
                                                    type="checkbox" 
                                                    name="showAmounts" 
                                                    id="showAmounts" 
                                                    defaultChecked={false}
                                                    className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-700 appearance-none cursor-pointer"
                                                />
                                                <label htmlFor="showAmounts" className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm">Anonymous Donations</div>
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input 
                                                    type="checkbox" 
                                                    name="anonymous" 
                                                    id="anonymous" 
                                                    defaultChecked={false}
                                                    className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-700 appearance-none cursor-pointer"
                                                />
                                                <label htmlFor="anonymous" className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;