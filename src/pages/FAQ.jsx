import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: "What is blockchain-based donation?",
            answer: "Blockchain-based donation is a transparent way of giving to charities using cryptocurrency. Each transaction is recorded on a public ledger, allowing donors to track exactly how their funds are utilized by NGOs."
        },
        {
            question: "How do I create a wallet to donate?",
            answer: "You can create a cryptocurrency wallet using platforms like MetaMask, Trust Wallet, or Coinbase Wallet. After installation, follow the instructions to create your wallet and purchase or transfer cryptocurrency to make donations."
        },
        {
            question: "Which cryptocurrencies do you accept?",
            answer: "Currently, we accept Ethereum (ETH), Bitcoin (BTC), and several stable coins like USDC and DAI. We're constantly working to expand the range of accepted cryptocurrencies."
        },
        {
            question: "How can I verify my donation was received?",
            answer: "All donations are recorded on the blockchain and can be verified using blockchain explorers. After donating, you'll receive a transaction hash that you can use to track and verify your donation."
        },
        {
            question: "Are donations tax-deductible?",
            answer: "Tax deductibility depends on your local regulations and the NGO's status. Most NGOs on our platform provide donation receipts that can be used for tax purposes. Please consult with a tax professional for specific advice."
        },
        {
            question: "How are NGOs vetted on your platform?",
            answer: "We have a thorough vetting process that includes verification of legal status, financial transparency reviews, and impact assessment. We only partner with organizations that meet our strict criteria for accountability and transparency."
        },
        {
            question: "Can I donate anonymously?",
            answer: "Yes, blockchain technology allows for pseudo-anonymous donations. While transactions are recorded on the public ledger, your personal identity isn't necessarily linked to your wallet address."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6 md:p-10">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
                <p className="text-xl mb-10">Get answers to the most common questions about our blockchain-based donation platform.</p>
                
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                            <button 
                                className="w-full p-4 text-left bg-gray-800 hover:bg-gray-700 flex justify-between items-center"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg font-medium">{item.question}</span>
                                <svg 
                                    className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div 
                                className={`bg-gray-800 px-4 overflow-hidden transition-all ${
                                    activeIndex === index ? 'max-h-96 py-4' : 'max-h-0'
                                }`}
                            >
                                <p className="text-gray-300">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 p-6 bg-gray-800 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
                    <p className="mb-4">Can't find the answer you're looking for? Please reach out to our customer support team.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;