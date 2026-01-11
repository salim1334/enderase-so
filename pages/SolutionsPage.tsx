
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import type { GalleryImage } from '../components/ImageGallery';

const SolutionsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('enterprise');

    const tabs = [
        { id: 'enterprise', title: 'Enterprise & Cloud' },
        { id: 'erp', title: 'ERP Systems' },
        { id: 'logistics', title: 'Logistics & Fleet' },
        { id: 'edutech', title: 'Education Technology' },
        { id: 'academia', title: 'Academia & Research' },
        { id: 'infrastructure', title: 'Infrastructure & Security' },
    ];

    const tabContent: { [key: string]: React.ReactNode } = {
        enterprise: (
            <div className="prose lg:prose-xl max-w-none text-gray-600">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Secure Infrastructure for Modern Enterprise</h3>
                <p>From Scalable Clouding Services to Custom MERN Stack Software Development, we build the digital backbone of your business. Our solutions ensure seamless connectivity, high-speed data transfer, and secure multi-user environments, designed for large-scale deployment and interoperability.</p>
                <Link to="/b2b-portals" className="text-orange-600 font-semibold hover:underline">Learn more about our B2B Portals & Clouding solutions &rarr;</Link>
            </div>
        ),
        erp: (
             <div className="prose lg:prose-xl max-w-none text-gray-600">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Enterprise Resource Planning (ERP)</h3>
                <p>We deploy and customize centralized ERP systems to integrate your core business processes, including finance, HR, inventory, and sales. Our solutions are tailored to meet the unique regulatory and tax requirements of the Ethiopian market, providing real-time visibility and streamlined reporting.</p>
                 <Link to="/portfolio" className="text-orange-600 font-semibold hover:underline">See our ERP implementation projects &rarr;</Link>
            </div>
        ),
        logistics: (
            <div className="prose lg:prose-xl max-w-none text-gray-600">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Intelligent Fleet & Asset Tracking</h3>
                <p>Optimize your logistics with our multi-tenant Enterprise Fleet Management solutions. Monitor fuel, route efficiency, and driver safety in real-time. Whether you manage 10 vehicles or 1,000, our scalable SaaS portal gives you total visibility and control over your assets.</p>
                <Link to="/fleet-management" className="text-orange-600 font-semibold hover:underline">Discover our Fleet Management systems &rarr;</Link>
            </div>
        ),
        edutech: (
             <div className="prose lg:prose-xl max-w-none text-gray-600">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Global Learning, Localized Delivery</h3>
                <p>Empower your workforce or student body with multilingual LMS platforms. Our e-learning solutions support diverse languages and multi-tenant department structures, making them perfect for international organizations and large-scale auditoriums.</p>
                 <Link to="/elearning" className="text-orange-600 font-semibold hover:underline">Explore our E-Learning platforms &rarr;</Link>
            </div>
        ),
        academia: (
             <div className="prose lg:prose-xl max-w-none text-gray-600">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Advanced Tools for Academia & Research</h3>
                <p>We continue to provide 100% genuine, authorized licenses for essential research software like Turnitin, IBM SPSS, Stata, and NVivo. Empower your institution with industry-standard tools for data analysis, academic integrity, and qualitative research, all backed by our expert local support.</p>
            </div>
        ),
        infrastructure: (
            <div className="prose lg:prose-xl max-w-none text-gray-600">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Integrated Infrastructure & Security</h3>
                <p>As system integrators, we design and deploy the critical physical and digital infrastructure that underpins your operations. From enterprise-grade networking and CCTV to smart room automation, we create interconnected environments built for performance and security.</p>
                <Link to="/infrastructure" className="text-orange-600 font-semibold hover:underline">Explore our Infrastructure services &rarr;</Link>
            </div>
        ),
    };

    const galleryImages: GalleryImage[] = [
        { src: 'https://picsum.photos/800/600?image=1025', alt: 'SPSS Data Analysis', caption: 'Intuitive interface of IBM SPSS for complex statistical analysis.' },
        { src: 'https://picsum.photos/800/600?image=1060', alt: 'Stata Visualization', caption: 'Generating advanced data visualizations in Stata.' },
        { src: 'https://picsum.photos/800/600?image=1074', alt: 'NVivo Qualitative Research', caption: 'Organizing qualitative data with NVivo.' },
        { src: 'https://picsum.photos/800/600?image=431', alt: 'Turnitin Similarity Report', caption: 'Reviewing a similarity report in Turnitin to ensure academic integrity.' },
        { src: 'https://picsum.photos/800/600?image=201', alt: 'Fleet Management Dashboard', caption: 'Real-time vehicle tracking on our Fleet Management dashboard.' },
        { src: 'https://picsum.photos/800/600?image=553', alt: 'E-Learning Platform', caption: 'Engaging with multilingual content on our E-Learning platform.' },
        { src: 'https://picsum.photos/800/600?image=996', alt: 'B2B Portal Interface', caption: 'Secure login for a custom B2B client portal.' },
        { src: 'https://picsum.photos/800/600?image=1011', alt: 'Cloud Network Architecture', caption: 'Diagram of a scalable cloud network architecture.' },
    ];

    return (
        <div>
            <section className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Enterprise-Grade Technology Solutions</h1>
                    <p className="mt-4 text-xl text-gray-300">Scalable, secure, and reliable software for every industry.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-1/4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Solutions by Industry</h2>
                            <div className="flex flex-col space-y-2">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`p-4 text-left rounded-lg transition-colors text-lg font-semibold ${activeTab === tab.id ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-3/4">
                            <div className="bg-gray-50 p-8 rounded-lg">
                                {tabContent[activeTab]}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Software in Action</h2>
                        <p className="mt-4 text-lg text-gray-600">Explore screenshots and use cases from our suite of solutions.</p>
                    </div>
                    <ImageGallery images={galleryImages} />
                </div>
            </section>

            <section className="py-20 bg-white">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Cloud Architecture</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Why Choose Our Cloud Solutions?
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            The power of multi-tenant architecture explained.
                        </p>
                    </div>
                    <div className="mt-10 bg-gray-50 p-8 rounded-lg shadow-lg">
                        <div className="prose lg:prose-xl max-w-none text-gray-600">
                            <p>Our multi-tenant software architecture is designed for efficiency and security. In simple terms, it allows a single, powerful instance of our software to serve multiple clients—or "tenants"—at once. Think of it like a secure office building where each company has its own private, locked office but shares the building's main utilities like power and water. This approach provides significant benefits:</p>
                            <ul>
                                <li><strong>Data Isolation:</strong> Your data is completely secure and isolated from every other tenant. No one can access your information except you.</li>
                                <li><strong>Cost-Efficiency:</strong> By sharing the core infrastructure and maintenance costs, we can offer enterprise-level solutions at a much more affordable price point.</li>
                                <li><strong>Centralized Management:</strong> It allows different departments, branches, or clients to be served securely from a single system, all managed from a central B2B portal. This simplifies updates, management, and oversight.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionsPage;
