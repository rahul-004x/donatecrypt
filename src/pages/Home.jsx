import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/button';
import WalletConnect from '../components/WalletConnect';

const Home = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen w-full flex flex-col">
            {/* Using the Navbar component instead of inline nav */}
            <Navbar />
            
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center p-10 w-full flex-grow">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">JOIN THE FUTURE OF GIVING</h1>
                    <p className="text-xl mb-6">Join the movement of giving back with our web3-based donation platform for NGOs and easy signup process for accepting donations.</p>
                    <div className="space-x-4">
                        <Link to="/donate">
                            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Get Started
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded border border-white">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img 
                        src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1350&h=900&q=80" 
                        alt="People holding hands together in unity" 
                        className="w-full h-auto rounded-lg shadow-lg" 
                    />
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-16 px-10 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Make a real impact by supporting these verified projects that need your help.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                id: 1,
                                title: "Clean Water Initiative",
                                description: "Providing clean drinking water to communities in developing regions.",
                                image: "https://images.unsplash.com/photo-1544351363-967cef743bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                                organization: "WaterAid Global",
                                category: "Health",
                                progress: { current: 38500, goal: 50000 }
                            },
                            {
                                id: 2,
                                title: "Rainforest Preservation",
                                description: "Protecting endangered rainforest ecosystems through conservation.",
                                image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                                organization: "EcoDefenders",
                                category: "Environment",
                                progress: { current: 124000, goal: 200000 }
                            },
                            {
                                id: 3,
                                title: "Education for All",
                                description: "Building schools and providing resources for children in underserved communities.",
                                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                                organization: "Teach & Learn Foundation",
                                category: "Education",
                                progress: { current: 87300, goal: 100000 }
                            }
                        ].map(project => (
                            <div key={project.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="bg-blue-500 text-xs text-white px-2 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                        <span className="text-sm text-gray-400">by {project.organization}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    
                                    <div className="mb-4">
                                        <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                                            <div 
                                                className="bg-blue-500 h-2 rounded-full" 
                                                style={{ width: `${(project.progress.current / project.progress.goal) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>${project.progress.current.toLocaleString()} raised</span>
                                            <span>{Math.round((project.progress.current / project.progress.goal) * 100)}% of ${project.progress.goal.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    
                                    <Link to={`/donate?project=${project.id}`}>
                                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                            Donate Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <Link to="/projects">
                            <Button className="bg-transparent hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-400 hover:border-transparent py-2 px-6 rounded-lg">
                                View All Projects
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our blockchain-powered platform ensures your donations go directly to verified NGOs with complete transparency.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: "💼",
                                title: "Connect Your Wallet",
                                description: "Link your crypto wallet to make secure, transparent blockchain transactions."
                            },
                            {
                                icon: "🔍",
                                title: "Choose a Project",
                                description: "Browse verified NGO projects and select causes that resonate with you."
                            },
                            {
                                icon: "📊",
                                title: "Track Your Impact",
                                description: "Monitor how your donations are used and the real-world impact they create."
                            }
                        ].map((step, index) => (
                            <div key={index} className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NGO Partners Section */}
            <section className="py-16 px-10 bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our NGO Partners</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            We work with trusted organizations worldwide to bring you verified projects that make a real difference.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-8">
                        {[1, 2, 3, 4, 5, 6].map(id => (
                            <div key={id} className="bg-gray-700 p-4 rounded-lg">
                                <img 
                                    src={`https://picsum.photos/seed/ngo${id}/200/100`} 
                                    alt={`NGO Partner ${id}`} 
                                    className="h-16 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <Link to="/ngos">
                            <Button className="bg-transparent hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-400 hover:border-transparent py-2 px-6 rounded-lg">
                                View All NGO Partners
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 px-10 bg-blue-900 bg-opacity-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of donors using blockchain technology to make transparent, impactful donations.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/donate">
                            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
                                Donate Now
                            </Button>
                        </Link>
                        <Link to="/ngos/apply">
                            <Button className="bg-transparent hover:bg-white text-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg border border-white">
                                Register Your NGO
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Adding Footer component */}
            <Footer />
        </div>
    );
};

export default Home;