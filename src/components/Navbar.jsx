import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WalletConnect from './WalletConnect';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Add state to track wallet connection
    const [isWalletConnected, setIsWalletConnected] = useState(
        localStorage.getItem('walletConnected') === 'true'
    );

    // Function to be passed to WalletConnect component
    const handleWalletConnectionChange = (connected) => {
        setIsWalletConnected(connected);
    };

    return (
        <nav className="flex justify-between items-center p-6 bg-gray-800 w-full">
            <div className="flex items-center">
                <img src="https://via.placeholder.com/32" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold text-white">NGO Donations</span>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
                <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
                <li><Link to="/about" className="text-white hover:text-gray-400">About</Link></li>
                <li><Link to="/projects" className="text-white hover:text-gray-400">Projects</Link></li>
                <li><Link to="/ngos" className="text-white hover:text-gray-400">NGOs</Link></li>
                <li><Link to="/faq" className="text-white hover:text-gray-400">FAQ</Link></li>
                <li><Link to="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
                {/* Show Profile link only when wallet is connected */}
                {isWalletConnected && (
                    <li><Link to="/profile" className="text-white hover:text-gray-400">Profile</Link></li>
                )}
            </ul>
            
            <div className="flex items-center space-x-4">
                {/* Remove the Profile link here as requested */}
                
                {/* Integrating WalletConnect component with connection status callback */}
                <WalletConnect onConnectionChange={handleWalletConnectionChange} />
                
                {/* Mobile menu button */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="absolute top-20 left-0 right-0 bg-gray-800 p-4 md:hidden shadow-lg z-50">
                    <ul className="flex flex-col space-y-4">
                        <li><Link to="/" className="text-white hover:text-gray-400 block py-2">Home</Link></li>
                        <li><Link to="/about" className="text-white hover:text-gray-400 block py-2">About</Link></li>
                        <li><Link to="/projects" className="text-white hover:text-gray-400 block py-2">Projects</Link></li>
                        <li><Link to="/ngos" className="text-white hover:text-gray-400 block py-2">NGOs</Link></li>
                        <li><Link to="/faq" className="text-white hover:text-gray-400 block py-2">FAQ</Link></li>
                        <li><Link to="/contact" className="text-white hover:text-gray-400 block py-2">Contact</Link></li>
                        {/* Show Profile link in mobile menu only when wallet is connected */}
                        {isWalletConnected && (
                            <li><Link to="/profile" className="text-white hover:text-gray-400 block py-2">Profile</Link></li>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;