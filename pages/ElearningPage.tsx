
import React from 'react';
import { Link } from 'react-router-dom';

const ElearningPage: React.FC = () => {
    return (
        <div>
            <section className="relative bg-gray-800 text-white" style={{ backgroundImage: 'url(https://picsum.photos/1600/600?image=20)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Global Learning, Localized Delivery</h1>
                    <p className="mt-4 text-xl text-gray-200">Scalable e-learning platforms for a worldwide audience.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p>Empower your workforce or student body with multilingual LMS platforms. Our e-learning solutions support diverse languages and multi-tenant department structures, making it perfect for international organizations and large-scale auditoriums.</p>

                        <h3>Platform Capabilities</h3>
                        <ul>
                            <li><strong>Multilingual Support:</strong> Deliver content in multiple languages with user-selectable interfaces to cater to a global user base.</li>
                            <li><strong>Multi-Tenant Architecture:</strong> Manage separate departments, campuses, or client organizations from a single backend, each with their own branding and user management.</li>
                            <li><strong>Auditorium-Scale Events:</strong> Host virtual events, webinars, and lectures for thousands of simultaneous users with interactive features like Q&A, polls, and breakout rooms.</li>
                            <li><strong>SCORM & xAPI Compliant:</strong> Easily import content from any standard authoring tool and track detailed learning analytics.</li>
                            <li><strong>Customizable Branding:</strong> Adapt the look and feel of the platform to match your institution's brand identity.</li>
                        </ul>

                        <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
                            <h3 className="text-2xl font-bold text-gray-900">Transform Your Training & Education</h3>
                            <p className="mt-2 text-gray-600">Let's build a learning environment that transcends borders.</p>
                            <Link to="/contact" className="mt-6 inline-block bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
                                Get a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ElearningPage;
