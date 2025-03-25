import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('overview');

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

    // Mock donation history
    const donationHistory = [
        {
            id: 1,
            projectName: "Clean Water Initiative",
            ngo: "WaterAid Global",
            amount: 250,
            date: "2024-03-15",
            status: "Confirmed",
            txHash: "0x2b618b5e...23dd46"
        },
        {
            id: 2,
            projectName: "Education for All",
            ngo: "Teach & Learn Foundation",
            amount: 100,
            date: "2024-03-01",
            status: "Confirmed",
            txHash: "0x5d622d9b...4990f7"
        }
    ];

    // Mock impact metrics
    const impactMetrics = [
        {
            id: 1,
            icon: "💧",
            metric: "1,250",
            description: "People with access to clean water"
        },
        {
            id: 2,
            icon: "📚",
            metric: "325",
            description: "Students supported"
        },
        {
            id: 3,
            icon: "🌳",
            metric: "500",
            description: "Trees planted"
        }
    ];

    // Additional mock data for donations tab
    const allDonations = [
        ...donationHistory,
        {
            id: 3,
            projectName: "Rainforest Preservation",
            ngo: "EcoDefenders",
            amount: 500,
            date: "2024-02-18",
            status: "Confirmed",
            txHash: "0x7f1f27e8...5b3d75"
        },
        {
            id: 4,
            projectName: "Children's Medical Center",
            ngo: "Children First",
            amount: 400,
            date: "2024-01-25",
            status: "Confirmed",
            txHash: "0x3a8e6d8c...4db976"
        }
    ];

    // Additional mock data for impact tab
    const detailedImpact = {
        overallScore: 78,
        scoreBreakdown: [
            { name: "Donation Frequency", score: 35, maxScore: 40 },
            { name: "Donation Amount", score: 25, maxScore: 40 },
            { name: "Project Diversity", score: 18, maxScore: 20 }
        ],
        sdgGoals: [
            { icon: "💧", name: "Clean Water & Sanitation" },
            { icon: "📚", name: "Quality Education" },
            { icon: "🌳", name: "Climate Action" },
            { icon: "🏥", name: "Good Health" }
        ]
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const truncateAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Navbar />
            
            {/* Profile Header */}
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
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-900/50 px-4 py-2 rounded-lg text-center">
                                <div className="text-2xl font-bold">${userData.totalDonations}</div>
                                <div className="text-xs text-gray-400">Total Donated</div>
                            </div>
                            <div className="bg-blue-900/50 px-4 py-2 rounded-lg text-center">
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

            {/* Navigation Tabs */}
            <div className="border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex overflow-x-auto">
                        {['overview', 'donations', 'impact', 'settings'].map((tab) => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                                    activeTab === tab 
                                        ? 'border-blue-500 text-blue-500' 
                                        : 'border-transparent text-gray-400 hover:text-gray-300'
                                } whitespace-nowrap capitalize`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Recent Donations */}
                        <div className="lg:col-span-2">
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                                <h2 className="text-xl font-bold mb-4">Recent Donations</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead>
                                            <tr>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase">Project</th>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase">Amount</th>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase">Date</th>
                                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-700">
                                            {donationHistory.map(donation => (
                                                <tr key={donation.id}>
                                                    <td className="px-3 py-4">
                                                        <div className="font-medium">{donation.projectName}</div>
                                                        <div className="text-sm text-gray-400">{donation.ngo}</div>
                                                    </td>
                                                    <td className="px-3 py-4">${donation.amount}</td>
                                                    <td className="px-3 py-4">{formatDate(donation.date)}</td>
                                                    <td className="px-3 py-4">
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
                                <h2 className="text-xl font-bold mb-6">Your Impact</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

                        {/* Sidebar */}
                        <div>
                            {/* Favorite Categories */}
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

                            {/* Quick Actions */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                                <div className="space-y-3">
                                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Make a Donation
                                    </button>
                                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center justify-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        View Impact Report
                                    </button>
                                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center justify-center">
                                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Donation History
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'donations' && (
                    <div className="space-y-8">
                        {/* Donation Summary */}
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold mb-6">Donation History</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead className="bg-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Project</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Amount</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Transaction</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700">
                                        {allDonations.map(donation => (
                                            <tr key={donation.id}>
                                                <td className="px-6 py-4">
                                                    <div className="font-medium">{donation.projectName}</div>
                                                    <div className="text-sm text-gray-400">{donation.ngo}</div>
                                                </td>
                                                <td className="px-6 py-4">${donation.amount}</td>
                                                <td className="px-6 py-4">{formatDate(donation.date)}</td>
                                                <td className="px-6 py-4">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900 text-green-300">
                                                        {donation.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <a
                                                        href={`https://etherscan.io/tx/${donation.txHash}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-400 hover:text-blue-300 text-sm"
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

                        {/* Download Reports */}
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-bold mb-4">Download Reports</h3>
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

                {activeTab === 'impact' && (
                    <div className="space-y-8">
                        {/* Impact Score */}
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold mb-6">Impact Score</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gray-700 rounded-lg p-4">
                                    <div className="text-center mb-4">
                                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-900 text-blue-300 text-2xl font-bold">
                                            {detailedImpact.overallScore}
                                        </div>
                                    </div>
                                    <h4 className="text-center font-medium mb-1">Overall Impact Score</h4>
                                    <p className="text-sm text-gray-400 text-center">Based on your donation history and project outcomes</p>
                                </div>
                                
                                <div className="md:col-span-2">
                                    <div className="space-y-4">
                                        {detailedImpact.scoreBreakdown.map((item, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm font-medium">{item.name}</span>
                                                    <span className="text-sm text-gray-400">{item.score}/{item.maxScore}</span>
                                                </div>
                                                <div className="w-full bg-gray-700 rounded-full h-2">
                                                    <div 
                                                        className="bg-blue-500 h-2 rounded-full" 
                                                        style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Impact Metrics */}
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold mb-6">Impact Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {impactMetrics.map(metric => (
                                    <div key={metric.id} className="bg-gray-700 p-6 rounded-lg text-center">
                                        <div className="text-4xl mb-4">{metric.icon}</div>
                                        <div className="text-2xl font-bold mb-2">{metric.metric}</div>
                                        <div className="text-gray-400">{metric.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SDG Goals */}
                        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold mb-4">SDG Goals Contributed To</h3>
                            <p className="text-gray-400 mb-6">Your donations have contributed to these UN Sustainable Development Goals:</p>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {detailedImpact.sdgGoals.map((goal, index) => (
                                    <div key={index} className="bg-blue-900/20 p-4 rounded-lg text-center">
                                        <div className="text-3xl mb-2">{goal.icon}</div>
                                        <div className="text-sm font-medium">{goal.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Profile Settings */}
                        <div className="md:col-span-2">
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                                <h3 className="text-xl font-bold mb-6">Profile Settings</h3>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                                Display Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                defaultValue={userData.name}
                                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
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
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-bold mb-6">Notification Settings</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Project Updates", description: "Receive updates about projects you've supported" },
                                        { name: "Impact Reports", description: "Receive periodic reports about your donation impact" },
                                        { name: "New Certificate Alerts", description: "Get notified when you receive new impact certificates" },
                                        { name: "Marketing Communications", description: "Receive newsletters and promotional content" }
                                    ].map((setting, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div>
                                                <div className="font-medium">{setting.name}</div>
                                                <div className="text-sm text-gray-400">{setting.description}</div>
                                            </div>
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input 
                                                    type="checkbox" 
                                                    name={setting.name.toLowerCase().replace(/\s+/g, '')} 
                                                    id={setting.name.toLowerCase().replace(/\s+/g, '')} 
                                                    defaultChecked={index < 3}
                                                    className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-700 appearance-none cursor-pointer"
                                                />
                                                <label className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div>
                            {/* Wallet Connection */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                                <h3 className="text-xl font-bold mb-4">Connected Wallet</h3>
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
                            </div>

                            {/* Privacy Settings */}
                            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Privacy Settings</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: "Public Profile", description: "Allow others to view your profile" },
                                        { name: "Show Donation Amounts", description: "Display your donation amounts publicly" },
                                        { name: "Anonymous Donations", description: "Make all donations anonymous by default" }
                                    ].map((setting, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="text-sm">
                                                <div className="font-medium">{setting.name}</div>
                                                <div className="text-gray-400">{setting.description}</div>
                                            </div>
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input 
                                                    type="checkbox" 
                                                    name={setting.name.toLowerCase().replace(/\s+/g, '')} 
                                                    id={setting.name.toLowerCase().replace(/\s+/g, '')} 
                                                    defaultChecked={index === 0}
                                                    className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-700 appearance-none cursor-pointer"
                                                />
                                                <label className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer"></label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;