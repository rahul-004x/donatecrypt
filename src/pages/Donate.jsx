import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Donate = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeProject, setActiveProject] = useState(null);
    const [donationAmount, setDonationAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [donorInfo, setDonorInfo] = useState({
        name: '',
        email: '',
        anonymous: false
    });
    const [step, setStep] = useState(1);
    const [donationComplete, setDonationComplete] = useState(false);

    const projects = [
        {
            id: 1,
            name: "Clean Water Initiative",
            ngo: "WaterAid Global",
            description: "Providing clean drinking water to communities in developing regions through sustainable infrastructure.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Clean+Water+Initiative",
            raised: 38500,
            goal: 50000,
            category: "Health"
        },
        {
            id: 2,
            name: "Rainforest Preservation",
            ngo: "EcoDefenders",
            description: "Protecting endangered rainforest ecosystems through conservation and sustainable management practices.",
            image: "https://fakeimg.pl/500x300/282828/eae0d0/?text=Rainforest+Preservation",
            raised: 124000,
            goal: 200000,
            category: "Environment"
        },
        {
            id: 3,
            name: "Education for All",
            ngo: "Teach & Learn Foundation",
            description: "Building schools and providing educational resources for children in underserved communities.",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            raised: 87300,
            goal: 100000,
            category: "Education"
        },
        {
            id: 4,
            name: "COVID-19 Relief Fund",
            ngo: "Global Health Network",
            description: "Providing medical supplies and support to healthcare workers fighting the pandemic.",
            image: "https://images.unsplash.com/photo-1584634731339-252898e515b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            raised: 215000,
            goal: 250000,
            category: "Health"
        },
        {
            id: 5,
            name: "Refugee Support Program",
            ngo: "United Relief",
            description: "Providing shelter, food, and essential services to displaced families and individuals.",
            image: "https://images.unsplash.com/photo-1526817575615-7fce93b66a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            raised: 156000,
            goal: 300000,
            category: "Humanitarian"
        },
        {
            id: 6,
            name: "Ocean Cleanup Initiative",
            ngo: "Blue Planet Alliance",
            description: "Removing plastic waste from oceans and implementing sustainable waste management systems.",
            image: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            raised: 78500,
            goal: 120000,
            category: "Environment"
        }
    ];

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const projectId = searchParams.get('id');
        
        if (projectId) {
            const project = projects.find(p => p.id === parseInt(projectId));
            if (project) {
                setActiveProject(project);
                setStep(2);
            } else {
                navigate('/projects');
            }
        }
    }, [location, navigate]);

    const handleProjectSelect = (project) => {
        setActiveProject(project);
        setStep(2);
        window.scrollTo(0, 0);
    };

    const handleAmountSelect = (amount) => {
        setDonationAmount(amount);
        if (amount === 'custom') {
            setCustomAmount('');
        }
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value.replace(/[^0-9.]/g, '');
        setCustomAmount(value);
    };

    const handleDonorInfoChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDonorInfo({
            ...donorInfo,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would process the payment here
        console.log('Processing donation:', {
            project: activeProject,
            amount: donationAmount === 'custom' ? customAmount : donationAmount,
            donorInfo
        });
        setDonationComplete(true);
    };

    const handleBackToProjects = () => {
        navigate('/projects');
        setActiveProject(null);
        setStep(1);
        setDonationAmount('');
        setCustomAmount('');
        window.scrollTo(0, 0);
    };

    const handleNextStep = () => {
        setStep(3);
        window.scrollTo(0, 0);
    };

    const calculateProgress = (raised, goal) => {
        return (raised / goal) * 100;
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Header Section */}
            <div className="bg-blue-900 py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <defs>
                            <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                                <circle cx="50" cy="50" r="20" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#pattern)"/>
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Your donation, powered by blockchain technology, ensures complete transparency 
                            and direct impact to those in need.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {donationComplete ? (
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                        <div className="mb-6">
                            <div className="bg-green-500 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center">
                                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Thank You for Your Donation!</h2>
                        <p className="text-xl mb-6">Your contribution to {activeProject.name} will make a real impact.</p>
                        <p className="mb-8">
                            Transaction Hash: <span className="text-blue-400">0x8f2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b</span>
                            <br />
                            You can track your donation on the blockchain using this hash.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button 
                                onClick={handleBackToProjects}
                                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg"
                            >
                                Donate to Another Project
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
                                View Your Impact
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        {step === 1 && (
                            <>
                                <h2 className="text-3xl font-bold mb-8">Select a Project to Support</h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {projects.map(project => (
                                        <div 
                                            key={project.id} 
                                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                        >
                                            <div className="h-48 overflow-hidden">
                                                <img 
                                                    src={project.image} 
                                                    alt={project.name}
                                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="bg-blue-500 text-xs text-white px-2 py-1 rounded-full">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-sm text-gray-400">by {project.ngo}</span>
                                                </div>
                                                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                                <p className="text-gray-300 mb-4">{project.description}</p>
                                                
                                                <div className="mb-4">
                                                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                                                        <div 
                                                            className="bg-blue-500 h-2 rounded-full" 
                                                            style={{ width: `${calculateProgress(project.raised, project.goal)}%` }}
                                                        ></div>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span>${project.raised.toLocaleString()} raised</span>
                                                        <span>{Math.round(calculateProgress(project.raised, project.goal))}% of ${project.goal.toLocaleString()}</span>
                                                    </div>
                                                </div>
                                                
                                                <button 
                                                    onClick={() => handleProjectSelect(project)}
                                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Donate Now
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        
                        {step === 2 && activeProject && (
                            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                                <button 
                                    onClick={handleBackToProjects}
                                    className="flex items-center text-blue-400 mb-6"
                                >
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Projects
                                </button>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <img 
                                            src={activeProject.image} 
                                            alt={activeProject.name} 
                                            className="w-full h-64 object-cover rounded-lg mb-6"
                                        />
                                        <h2 className="text-2xl font-bold mb-2">{activeProject.name}</h2>
                                        <p className="text-sm text-gray-400 mb-4">by {activeProject.ngo}</p>
                                        <p className="text-gray-300 mb-6">{activeProject.description}</p>
                                        
                                        <div className="mb-6">
                                            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                                                <div 
                                                    className="bg-blue-500 h-2 rounded-full" 
                                                    style={{ width: `${calculateProgress(activeProject.raised, activeProject.goal)}%` }}
                                                ></div>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>${activeProject.raised.toLocaleString()} raised</span>
                                                <span>${activeProject.goal.toLocaleString()} goal</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-bold mb-6">Select Donation Amount</h3>
                                        
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            {['10', '25', '50', '100', '250', 'custom'].map(amount => (
                                                <button 
                                                    key={amount}
                                                    onClick={() => handleAmountSelect(amount)}
                                                    className={`py-3 px-4 rounded-lg border ${
                                                        donationAmount === amount 
                                                        ? 'bg-blue-500 border-blue-500' 
                                                        : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                                                    }`}
                                                >
                                                    {amount === 'custom' ? 'Custom' : `$${amount}`}
                                                </button>
                                            ))}
                                        </div>
                                        
                                        {donationAmount === 'custom' && (
                                            <div className="mb-6">
                                                <label className="block text-gray-300 mb-2">Enter Amount</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                        <span className="text-gray-400">$</span>
                                                    </div>
                                                    <input 
                                                        type="text"
                                                        value={customAmount}
                                                        onChange={handleCustomAmountChange}
                                                        className="w-full bg-gray-700 border border-gray-600 rounded pl-8 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="0.00"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        
                                        <button 
                                            onClick={handleNextStep}
                                            disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
                                            className={`w-full py-3 px-4 rounded-lg font-bold ${
                                                (!donationAmount || (donationAmount === 'custom' && !customAmount))
                                                ? 'bg-gray-600 cursor-not-allowed'
                                                : 'bg-blue-500 hover:bg-blue-600'
                                            }`}
                                        >
                                            Continue
                                        </button>
                                        
                                        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                                            <h4 className="font-bold mb-2">Why donate with cryptocurrency?</h4>
                                            <ul className="text-gray-300 space-y-2">
                                                <li className="flex items-start">
                                                    <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>Complete transparency in how funds are used</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>Lower transaction fees compared to traditional methods</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>Faster global transfers directly to projects</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>Immutable record of your contribution</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {step === 3 && activeProject && (
                            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                                <button 
                                    onClick={() => setStep(2)}
                                    className="flex items-center text-blue-400 mb-6"
                                >
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Amount Selection
                                </button>
                                
                                <h2 className="text-2xl font-bold mb-6">Donation Summary</h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <div className="bg-gray-700 p-6 rounded-lg mb-8">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-lg">Selected Project:</span>
                                                <span className="font-bold">{activeProject.name}</span>
                                            </div>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-lg">Organization:</span>
                                                <span>{activeProject.ngo}</span>
                                            </div>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-lg">Donation Amount:</span>
                                                <span className="text-xl font-bold">
                                                    ${donationAmount === 'custom' ? customAmount : donationAmount}
                                                </span>
                                            </div>
                                            <div className="border-t border-gray-600 my-4 pt-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg">Total:</span>
                                                    <span className="text-xl font-bold text-blue-400">
                                                        ${donationAmount === 'custom' ? customAmount : donationAmount}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <form onSubmit={handleSubmit}>
                                            <h3 className="text-xl font-bold mb-4">Your Information</h3>
                                            
                                            <div className="mb-4">
                                                <label className="block text-gray-300 mb-2" htmlFor="name">Name (Optional)</label>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    name="name"
                                                    value={donorInfo.name}
                                                    onChange={handleDonorInfoChange}
                                                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            
                                            <div className="mb-4">
                                                <label className="block text-gray-300 mb-2" htmlFor="email">Email (Optional)</label>
                                                <input 
                                                    type="email" 
                                                    id="email" 
                                                    name="email"
                                                    value={donorInfo.email}
                                                    onChange={handleDonorInfoChange}
                                                    className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                                <p className="text-sm text-gray-400 mt-1">For donation receipt (never shared with third parties)</p>
                                            </div>
                                            
                                            <div className="mb-6">
                                                <label className="flex items-center">
                                                    <input 
                                                        type="checkbox" 
                                                        name="anonymous"
                                                        checked={donorInfo.anonymous}
                                                        onChange={handleDonorInfoChange}
                                                        className="bg-gray-700 border-gray-600 rounded mr-2"
                                                    />
                                                    <span className="text-gray-300">Make my donation anonymous</span>
                                                </label>
                                            </div>
                                            
                                            <button 
                                                type="submit" 
                                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg"
                                            >
                                                Complete Donation with Wallet
                                            </button>
                                        </form>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-bold mb-6">Connect Your Wallet</h3>
                                        
                                        <div className="space-y-4">
                                            <button className="w-full flex items-center justify-between bg-gray-700 hover:bg-gray-600 py-3 px-6 rounded-lg border border-gray-600">
                                                <div className="flex items-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="h-8 w-8 mr-3" />
                                                    <span>MetaMask</span>
                                                </div>
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                            
                                            <button className="w-full flex items-center justify-between bg-gray-700 hover:bg-gray-600 py-3 px-6 rounded-lg border border-gray-600">
                                                <div className="flex items-center">
                                                    <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" alt="Trust Wallet" className="h-8 w-8 mr-3" />
                                                    <span>Trust Wallet</span>
                                                </div>
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                            
                                            <button className="w-full flex items-center justify-between bg-gray-700 hover:bg-gray-600 py-3 px-6 rounded-lg border border-gray-600">
                                                <div className="flex items-center">
                                                    <img src="https://cdn.worldvectorlogo.com/logos/coinbase-1.svg" alt="Coinbase Wallet" className="h-8 w-8 mr-3" />
                                                    <span>Coinbase Wallet</span>
                                                </div>
                                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                        
                                        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                                            <h4 className="font-bold mb-2">How it Works</h4>
                                            <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                                                <li>Connect your cryptocurrency wallet</li>
                                                <li>Approve the transaction in your wallet</li>
                                                <li>Transaction is recorded on the blockchain</li>
                                                <li>Funds are transferred directly to the project</li>
                                                <li>Track your donation's impact in real-time</li>
                                            </ol>
                                        </div>
                                        
                                        <div className="mt-6 p-4 bg-blue-900/30 border border-blue-800 rounded-lg">
                                            <div className="flex items-start">
                                                <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-sm text-gray-300">
                                                    Your donation will be processed securely on the Ethereum blockchain. 
                                                    A small gas fee will apply to cover the transaction cost on the network.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Donate;