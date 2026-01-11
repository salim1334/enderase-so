
import React from 'react';
import type { IndustrySolution } from '../types';
import { Link } from 'react-router-dom';

const IndustryCard: React.FC<{ solution: IndustrySolution }> = ({ solution }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4">
            {solution.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{solution.name}</h3>
        <p className="text-gray-600">{solution.description}</p>
    </div>
);

const BrandCard: React.FC<{ name: string; category: string }> = ({ name, category }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col justify-center">
        <h4 className="text-2xl font-bold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
    </div>
);

const HomePage: React.FC = () => {
    const industrySolutions: IndustrySolution[] = [
        { name: 'Academia & Research', description: 'Fostering academic integrity and empowering data science with best-in-class research tools and software.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422A12.083 12.083 0 0121 18c0 1.842-.632 3.541-1.688 4.898L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-9 5 9 5 9-5-9-5z" /></svg> },
        { name: 'Smart Infrastructure', description: 'Integrating physical and digital systems for security, networking, and building automation.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg> },
        { name: 'Logistics & Fleet', description: 'Enhancing efficiency and safety with our multi-tenant fleet management and real-time asset tracking solutions.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 17H5M17 17H5.21c-1.105-1.105-1.105-2.895 0-4 .938-.938 2.24-1.46 3.59-1.46H17V7h-4M17 7L14 4h-4v3" /></svg> },
        { name: 'Enterprise & Cloud', description: 'Building secure B2B portals and multi-tenant cloud architectures for the modern, scalable enterprise.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-4h1m-1-4h1" /></svg> },
    ];

    const brands = [
        { name: 'Hikvision', category: 'Security & Surveillance' },
        { name: 'Cisco', category: 'Enterprise Networking' },
        { name: 'Huawei', category: 'ICT Infrastructure' },
        { name: 'HP', category: 'Computing & Printing' },
        { name: 'Dell', category: 'Servers & Workstations' },
    ];

    return (
        <div>
            <section className="relative bg-gray-800 text-white" style={{ backgroundImage: 'url(https://picsum.photos/1600/800?image=24)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Unified Digital Transformation
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                        Providing secure, multi-tenant software solutions ranging from advanced research tools and e-learning platforms to fleet management and cloud networking. We deliver reliability, original licensing, and local technical support.
                    </p>
                    <div className="mt-10">
                        <Link to="/solutions" className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
                            Explore Our Solutions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Critical Infrastructure Solutions Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Critical Infrastructure Solutions</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We engineer and implement the foundational technology that powers and protects modern organizations.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Security & Surveillance</h3>
                            <p className="text-gray-600">AI-powered CCTV and Biometric Access Control for high-security environments, providing 24/7 situational awareness and automated alerts.</p>
                        </div>
                         <div className="text-center">
                           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.536a15 15 0 0121.212 0" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Networking & Connectivity</h3>
                            <p className="text-gray-600">Robust fiber/wireless networking and secure multi-tenant cloud architecture form the reliable backbone of your digital enterprise.</p>
                        </div>
                         <div className="text-center">
                           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Smart Spaces</h3>
                            <p className="text-gray-600">Design and installation of Smart Classrooms and Boardrooms with integrated audio-visual systems and intelligent automation.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* The System Integrator Advantage Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">The System Integrator Advantage</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                We Create Interconnected Environments
                            </p>
                            <p className="mt-4 text-xl text-gray-600">
                                We don't just 'install cameras' or 'run cables'. Our system integration approach ensures all your technology works in harmony. We deliver end-to-end implementation, from design to deployment, creating a single, secure platform where security, connectivity, and automation converge. This results in a seamless, efficient, and future-proof architecture for your entire organization.
                            </p>
                            <div className="mt-6">
                                <Link to="/infrastructure" className="text-orange-600 font-semibold hover:underline">Learn more about our integration services &rarr;</Link>
                            </div>
                        </div>
                        <div className="order-first lg:order-last">
                            <img className="rounded-lg shadow-2xl" src="https://picsum.photos/600/450?image=1073" alt="Technology integration diagram" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Brands We Integrate Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Brands We Integrate</h2>
                    <p className="text-center text-lg text-gray-600 mt-4">We partner with industry-leading hardware manufacturers to ensure reliability and performance.</p>
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {brands.map(brand => (
                            <BrandCard key={brand.name} name={brand.name} category={brand.category} />
                        ))}
                    </div>
                </div>
            </section>


            {/* Solutions by Industry Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Comprehensive Solutions by Industry</h2>
                        <p className="mt-4 text-lg text-gray-600">Tailored technology to drive success in every sector.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {industrySolutions.map(solution => <IndustryCard key={solution.name} solution={solution} />)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
