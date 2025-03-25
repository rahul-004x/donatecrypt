import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Organization Info */}
                    <div className="col-span-1">
                        <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 w-10 mb-4" />
                        <h3 className="text-xl font-bold mb-4">NGO Donations</h3>
                        <p className="text-gray-400 mb-4">Empowering change through transparent blockchain-based donations.</p>
                        <div className="flex space-x-4">
                            {/* Social Media Icons */}
                            {['twitter', 'facebook', 'instagram', 'linkedin'].map(platform => (
                                <a 
                                    key={platform}
                                    href="#" 
                                    className="text-gray-400 hover:text-white"
                                    aria-label={platform}
                                >
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'FAQs', 'Contact'].map(item => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Resources */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {['How It Works', 'Partner With Us', 'Impact Reports', 'Terms of Service', 'Privacy Policy'].map(item => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-white">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Newsletter */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates on projects and impact.</p>
                        <form className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} NGO Donations. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link to="#" className="text-gray-400 hover:text-white text-sm">
                                Terms of Service
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-white text-sm">
                                Privacy Policy
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-white text-sm">
                                Cookies Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;