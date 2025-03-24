import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen w-full">
            <nav className="flex justify-between items-center p-6 bg-gray-800 w-full">
                <div className="flex items-center">
                    <img src="path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="text-xl font-bold">Workflow</span>
                </div>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                    <li><Link to="/features" className="hover:text-gray-400">Features</Link></li>
                    <li><Link to="/faq" className="hover:text-gray-400">FAQ</Link></li>
                    <li><Link to="/ngos" className="hover:text-gray-400">NGOs</Link></li>
                    <li><Link to="/profile" className="hover:text-gray-400">Profile</Link></li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Connect Wallet
                </button>
            </nav>
            <section className="flex flex-col md:flex-row items-center justify-center p-10 w-full min-h-screen">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">JOIN THE FUTURE OF GIVING</h1>
                    <p className="text-xl mb-6">Join the movement of giving back with our web3-based donation platform for NGOs and easy signup process for accepting donations.</p>
                    <div className="space-x-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Get Started
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded border border-white">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img src="path/to/your/image.jpg" alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </section>
        </div>
    );
};

export default Home;