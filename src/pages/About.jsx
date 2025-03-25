import React from 'react';

const About = () => {
    const teamMembers = [
        {
            name: "Alex Johnson",
            role: "Founder & CEO",
            bio: "Former fintech executive with 10+ years experience in blockchain technology.",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name: "Sarah Chen",
            role: "CTO",
            bio: "Blockchain developer and architect with experience at major cryptocurrency platforms.",
            image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            name: "Michael Okonjo",
            role: "Head of NGO Relations",
            bio: "15 years in the humanitarian sector working with international aid organizations.",
            image: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            name: "Priya Sharma",
            role: "Product Manager",
            bio: "Product specialist focused on creating user-friendly fintech solutions.",
            image: "https://randomuser.me/api/portraits/women/4.jpg"
        }
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-blue-900 py-20">
                <div className="absolute inset-0 opacity-20 bg-pattern"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission & Vision</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Connecting donors directly to causes they care about through secure, 
                            transparent blockchain technology.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Story</h2>
                        <p className="mb-4">
                            Founded in 2023, our platform was born from a simple observation: while blockchain 
                            technology was revolutionizing finance, the charitable sector remained mired in 
                            opacity and inefficiency.
                        </p>
                        <p className="mb-4">
                            We recognized that blockchain's transparency and security could transform how 
                            donors connect with causes, creating unprecedented trust in charitable giving.
                        </p>
                        <p>
                            Today, we're at the forefront of merging Web3 technology with humanitarian impact, 
                            making every donation traceable, secure, and directly impactful.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Values</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-blue-500 p-2 rounded mr-4">
                                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold">Transparency</h4>
                                    <p className="text-gray-300">Every transaction is visible on the blockchain, ensuring complete transparency in fund movement.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-500 p-2 rounded mr-4">
                                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold">Security</h4>
                                    <p className="text-gray-300">Advanced cryptographic security ensures all donations safely reach their intended recipients.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-500 p-2 rounded mr-4">
                                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold">Accessibility</h4>
                                    <p className="text-gray-300">Making blockchain technology accessible to both donors and NGOs, regardless of technical expertise.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-500 p-2 rounded mr-4">
                                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold">Impact</h4>
                                    <p className="text-gray-300">Maximizing the social impact of every donation through reduced fees and direct transfers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-800 rounded-lg">
                <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                            <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-blue-400 mb-3">{member.role}</p>
                                <p className="text-gray-300">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-blue-900 rounded-lg p-8 text-center shadow-lg">
                        <h3 className="text-4xl font-bold mb-2">$2.5M+</h3>
                        <p className="text-lg">Donations Processed</p>
                    </div>
                    <div className="bg-blue-900 rounded-lg p-8 text-center shadow-lg">
                        <h3 className="text-4xl font-bold mb-2">45+</h3>
                        <p className="text-lg">NGO Partners</p>
                    </div>
                    <div className="bg-blue-900 rounded-lg p-8 text-center shadow-lg">
                        <h3 className="text-4xl font-bold mb-2">12K+</h3>
                        <p className="text-lg">Donors Worldwide</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                    Help us revolutionize charitable giving through blockchain technology.
                    Together, we can create a more transparent and effective way to support causes worldwide.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
                        Donate Now
                    </button>
                    <button className="bg-transparent hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg border border-white">
                        Partner with Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;