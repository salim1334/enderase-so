
import React from 'react';
import { Link } from 'react-router-dom';

const B2bPortalsPage: React.FC = () => {
    return (
        <div>
            <section className="relative bg-gray-800 text-white" style={{ backgroundImage: 'url(https://picsum.photos/1600/600?image=1063)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Secure Infrastructure for Modern Enterprise</h1>
                    <p className="mt-4 text-xl text-gray-200">The digital backbone of your business, built for performance and security.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p>From cloud networking to custom B2B portals, we build the digital backbone of your business. Our solutions ensure seamless connectivity, high-speed data transfer, and secure multi-user environments.</p>

                        <h3>Our Enterprise Solutions</h3>
                        <ul>
                            <li><strong>Custom B2B Portals:</strong> Streamline your operations with a centralized portal for clients, suppliers, or partners, featuring secure logins, order management, and data dashboards.</li>
                            <li><strong>Cloud Networking:</strong> Design and implement robust, scalable cloud infrastructure on platforms like AWS or Azure, optimized for performance and cost-efficiency.</li>
                            <li><strong>Data Sovereignty & Security:</strong> We prioritize the security of your data, implementing industry-best practices to ensure information is stored safely and complies with regional regulations.</li>
                            <li><strong>API Interoperability:</strong> We build solutions that "talk" to your existing software, ensuring our portals and networks integrate seamlessly into your current workflows.</li>
                        </ul>

                        <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
                            <h3 className="text-2xl font-bold text-gray-900">Build Your Digital Foundation</h3>
                            <p className="mt-2 text-gray-600">Discuss your infrastructure needs with our solutions architects today.</p>
                            <Link to="/contact" className="mt-6 inline-block bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
                                Schedule a Call
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default B2bPortalsPage;
