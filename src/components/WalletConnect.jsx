import React, { useState, useEffect } from 'react';
import Button from './button';

const WalletConnect = ({ onConnectionChange }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Check localStorage on component mount
    useEffect(() => {
        const walletConnected = localStorage.getItem('walletConnected') === 'true';
        const address = localStorage.getItem('walletAddress');
        
        if (walletConnected && address) {
            setIsConnected(true);
            setWalletAddress(address);
            
            // Notify parent component of connection status
            if (onConnectionChange) {
                onConnectionChange(true);
            }
        }
    }, [onConnectionChange]);

    // Mock function to simulate connecting to a wallet
    const connectWallet = async (walletType) => {
        // In a real implementation, this would use Web3 or ethers.js to connect to the actual wallet
        try {
            // Simulate connection process
            console.log(`Connecting to ${walletType}...`);
            
            // Mock successful connection with a random wallet address
            const mockAddress = '0x' + Array(40).fill(0).map(() => 
                Math.floor(Math.random() * 16).toString(16)).join('');
            
            setWalletAddress(mockAddress);
            setIsConnected(true);
            setShowModal(false);
            
            // Store in local storage for persistence
            localStorage.setItem('walletConnected', 'true');
            localStorage.setItem('walletAddress', mockAddress);
            
            // Notify parent component of connection status
            if (onConnectionChange) {
                onConnectionChange(true);
            }
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };

    const disconnectWallet = () => {
        setIsConnected(false);
        setWalletAddress('');
        localStorage.removeItem('walletConnected');
        localStorage.removeItem('walletAddress');
        
        // Notify parent component of connection status
        if (onConnectionChange) {
            onConnectionChange(false);
        }
    };

    // Function to display shortened wallet address
    const shortenAddress = (address) => {
        return address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : '';
    };

    return (
        <div>
            {isConnected ? (
                <div className="flex items-center space-x-2">
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm font-mono">
                        {shortenAddress(walletAddress)}
                    </span>
                    <Button 
                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
                        onClick={disconnectWallet}
                    >
                        Disconnect
                    </Button>
                </div>
            ) : (
                <div>
                    <Button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setShowModal(true)}
                    >
                        Connect Wallet
                    </Button>

                    {showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
                                <h3 className="text-xl font-bold text-white mb-4">Connect Your Wallet</h3>
                                <p className="text-gray-300 mb-6">
                                    Choose a wallet to connect to our platform:
                                </p>

                                <div className="space-y-4">
                                    <button 
                                        className="w-full flex items-center justify-between bg-gray-700 hover:bg-gray-600 py-3 px-6 rounded-lg text-white"
                                        onClick={() => connectWallet('MetaMask')}
                                    >
                                        <div className="flex items-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="h-8 w-8 mr-3" />
                                            <span>MetaMask</span>
                                        </div>
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    
                                    <button 
                                        className="w-full flex items-center justify-between bg-gray-700 hover:bg-gray-600 py-3 px-6 rounded-lg text-white"
                                        onClick={() => connectWallet('Trust Wallet')}
                                    >
                                        <div className="flex items-center">
                                            <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.png" alt="Trust Wallet" className="h-8 w-8 mr-3" />
                                            <span>Trust Wallet</span>
                                        </div>
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    
                                    <button 
                                        className="w-full flex items-center justify-between bg-gray-700 hover:bg-gray-600 py-3 px-6 rounded-lg text-white"
                                        onClick={() => connectWallet('Coinbase Wallet')}
                                    >
                                        <div className="flex items-center">
                                            <img src="https://cdn.worldvectorlogo.com/logos/coinbase-1.svg" alt="Coinbase Wallet" className="h-8 w-8 mr-3" />
                                            <span>Coinbase Wallet</span>
                                        </div>
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                
                                <button 
                                    className="mt-6 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default WalletConnect;