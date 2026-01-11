
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-5">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const BrandCard: React.FC<{ name: string; category: string }> = ({ name, category }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-xl hover:scale-105">
        <h4 className="text-2xl font-bold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500 mt-1">{category}</p>
    </div>
);


const InfrastructurePage: React.FC = () => {
     const brands = [
        { name: 'Hikvision', category: 'Security & Surveillance' },
        { name: 'Cisco', category: 'Enterprise Networking' },
        { name: 'Ubiquiti', category: 'Wireless & Networking' },
        { name: 'Logitech', category: 'Unified Communications' },
        { name: 'Crestron', category: 'Smart Room Automation' },
    ];

    return (
        <div>
            <section className="relative bg-gray-900 text-white" style={{ backgroundImage: 'url(https://picsum.photos/1600/600?image=1075)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Smart Infrastructure & Security</h1>
                    <p className="mt-4 text-xl text-gray-200">Engineering the interconnected environments of the future.</p>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Our Integration Philosophy</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                           Beyond Installation: A Unified Ecosystem
                        </p>
                        <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto">
                            We specialize in Systems Integration. Our goal is to create a seamless, centrally managed ecosystem where your security, network, and communication systems work in perfect harmony. We provide end-to-end implementation for a robust, scalable, and future-proof architecture.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <ServiceCard
                            title="Electronic Security & Access Control"
                            description="From facial recognition biometrics to thermal CCTV analytics, we provide 24/7 situational awareness. Our security systems integrate seamlessly with your local network for remote monitoring and automated alerts."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                        />
                        <ServiceCard
                            title="Unified Communications"
                            description="Reliable networking is the backbone of your digital enterprise. We design and deploy enterprise-grade LAN/WAN, Wi-Fi 6, and fiber-optic solutions to support your high-bandwidth applications."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        />
                        <ServiceCard
                            title="Building Automation"
                            description="Transform your boardrooms, classrooms, and auditoriums into SMART Environments. We integrate multilingual audio systems, automated lighting, and 4K video conferencing into a single, user-friendly interface."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                        />
                    </div>
                </div>
            </section>
            
             <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Brands We Integrate</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            We partner with industry-leading hardware manufacturers to ensure reliability, performance, and seamless interoperability.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {brands.map(brand => (
                            <BrandCard key={brand.name} name={brand.name} category={brand.category} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Ready to Build a Smarter, More Secure Facility?</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                       Let's discuss how our system integration services can create a unified technology ecosystem for your organization.
                    </p>
                    <Link to="/contact" className="mt-8 inline-block bg-orange-500 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
                        Request a Consultation
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default InfrastructurePage;
