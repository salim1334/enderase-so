
import React from 'react';
import { Link } from 'react-router-dom';

const LicensingPage: React.FC = () => {
    
    const steps = [
        {
            step: 1,
            title: "Consultation & Needs Assessment",
            description: "We start by understanding your institution's specific needs, user volume, and existing software ecosystem. Our experts will recommend the most suitable licensing model (e.g., site license, concurrent users) for your goals and budget.",
        },
        {
            step: 2,
            title: "Official Quotation",
            description: "Based on the assessment, we provide a detailed and transparent quotation. This includes licensing costs, support packages, and any training options, with no hidden fees. We handle all currency conversions and local tax requirements.",
        },
        {
            step: 3,
            title: "Procurement & Deployment",
            description: "Once approved, we facilitate the procurement process directly with the software manufacturer. We then deliver the license keys and provide clear instructions and support for deployment across your institution's network or for individual users.",
        },
        {
            step: 4,
            title: "Ongoing Support & Management",
            description: "Our partnership doesn't end with deployment. We provide ongoing local technical support, manage renewal notifications, and assist with any license adjustments needed as your institution's requirements evolve.",
        }
    ];

    return (
        <div>
            <section className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Institutional Licensing</h1>
                    <p className="mt-4 text-xl text-gray-300">A streamlined and professional process for acquiring and managing software licenses.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">How to Order Institutional Licenses</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                           Our professional sales process is designed for clarity, efficiency, and compliance, ensuring a smooth procurement experience for academic decision-makers.
                        </p>
                    </div>

                    <div className="mt-16 relative">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" aria-hidden="true"></div>
                        <div className="space-y-16">
                        {steps.map((item, index) => (
                            <div key={item.step} className="flex flex-col md:flex-row items-center gap-8">
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                                                {item.step}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                                        </div>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:order-1'}`}>
                                    {/* Placeholder for potential images */}
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                     <div className="mt-20 text-center">
                        <h3 className="text-2xl font-bold text-gray-900">Ready to Get Started?</h3>
                        <p className="mt-2 text-gray-600">Contact our licensing specialists today for a personalized consultation.</p>
                        <Link to="/contact" className="mt-6 inline-block bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LicensingPage;
