
import React from 'react';
import { Link } from 'react-router-dom';

const PartnersPage: React.FC = () => {
    return (
        <div>
            <section className="relative bg-gray-800" style={{ backgroundImage: 'url(https://picsum.photos/1600/600?image=1062)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Partner with the Leading Reseller in the APAC Region</h1>
                    <p className="mt-4 text-xl text-gray-200">Extend your brand's reach with a trusted, professional, and compliant local partner.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Why We Are the Best Local Partner for Your Brand</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            We offer global software manufacturers a strategic advantage in the complex and growing academic and research market of the APAC region.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-orange-600 mb-2">Unmatched Market Reach</h3>
                            <p className="text-gray-600">With established relationships at top universities and research institutions across the region, we provide immediate access to key decision-makers, shortening your sales cycle and accelerating market penetration.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-orange-600 mb-2">Professional Sales & Support Team</h3>
                            <p className="text-gray-600">Our sales and technical support teams are highly trained professionals who represent your brand with the authority and expertise it deserves. We act as a seamless extension of your own team.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold text-orange-600 mb-2">Local Barrier Management</h3>
                            <p className="text-gray-600">We expertly handle all local tax, currency, and regulatory complexities. This removes significant friction for your clients, making it easier for them to purchase and renew your software, leading to higher customer satisfaction and retention.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-sm col-span-1 md:col-span-3 lg:col-span-3">
                            <h3 className="text-xl font-bold text-orange-500 mb-2">Strict 'No-Piracy' Policy & Brand Protection</h3>
                            <p className="text-gray-600">Our foundational principle is an unwavering commitment to software compliance. We actively combat piracy and ensure that only genuine licenses are distributed, protecting your intellectual property, your revenue streams, and the integrity of your brand in the local market.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Initiating a Partnership</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            We believe in a formal and professional approach. The first step is to express formal interest. Below is a Letter of Intent (LOI) template you can adapt when reaching out.
                        </p>
                    </div>

                    <div className="mt-16 max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg border border-gray-200 text-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-6">Letter of Intent (LOI) Template</h3>
                        <p className="mb-2"><strong>To:</strong> Partner Alliances Department / Channel Sales Manager</p>
                        <p className="mb-2"><strong>Date:</strong> <span className="font-semibold text-orange-600">[Insert Date]</span></p>
                        <p className="mb-6"><strong>Subject:</strong> Intent to Establish Authorized Reseller Partnership for <span className="font-semibold text-orange-600">[Software Name, e.g., IBM SPSS Statistics]</span></p>
                        <p className="mb-4">Dear Partner Management Team,</p>
                        <p className="mb-6">This letter serves as a formal expression of interest by <span className="font-semibold text-orange-600">[Your Company Name]</span> to become an authorized reseller/distributor of <span className="font-semibold text-orange-600">[Software Name]</span> in the <span className="font-semibold text-orange-600">[Your Country/Region]</span> market.</p>
                        <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Business Overview</h4>
                        <p className="mb-6"><span className="font-semibold text-orange-600">[Your Company Name]</span> is an established systems solution provider specializing in the academic and research sectors. Our current infrastructure supports <span className="font-semibold text-orange-600">[Number]</span> clients, and we have identified a significant gap in the local market for genuine, authorized licensing of <span className="font-semibold text-orange-600">[Software Name]</span>.</p>
                        <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Market Opportunity & Sales Projections</h4>
                        <p className="mb-4">Based on our current market analysis and existing client requests from universities and research NGOs, we project the following for the first 12 months of partnership:</p>
                        <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                            <li><strong>Target Market:</strong> <span className="font-semibold text-orange-600">[e.g., Higher Education, Government Research Labs, Financial Institutions]</span></li>
                            <li><strong>Estimated Annual Volume:</strong> <span className="font-semibold text-orange-600">[e.g., 100–500 licenses]</span></li>
                            <li><strong>Marketing Commitment:</strong> We intend to promote <span className="font-semibold text-orange-600">[Software Name]</span> through webinars, direct institutional sales visits, and our dedicated "Research Tools" web portal.</li>
                        </ul>
                        <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. Commitment to Compliance</h4>
                        <p className="mb-4">We understand the importance of software integrity. We are committed to:</p>
                        <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                            <li>Enforcing strict End-User License Agreement (EULA) compliance.</li>
                            <li>Preventing the distribution of unauthorized or gray-market keys.</li>
                            <li>Providing first-line technical support to ensure high customer satisfaction and renewal rates.</li>
                        </ul>
                        <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. Request for Onboarding</h4>
                        <p className="mb-6">We are ready to undergo any necessary due diligence, credit checks, or certification training required by <span className="font-semibold text-orange-600">[Company Name, e.g., IBM]</span>. Please provide us with the formal application requirements and the next steps to finalize this partnership.</p>
                        <p className="mb-4">Thank you for considering our proposal. We look forward to a mutually beneficial relationship.</p>
                        <p className="mt-8 mb-2">Sincerely,</p>
                        <p className="mb-2"><em>(Signature)</em></p>
                        <p className="mb-2"><strong>[Your Name]</strong></p>
                        <p className="mb-2">Founder/Director</p>
                        <p><span className="font-semibold text-orange-600">[Your Company Name]</span></p>
                    </div>

                    <div className="mt-16 max-w-4xl mx-auto">
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                            <h4 className="text-xl font-bold text-gray-800">Pro-Tips for a Successful Partnership</h4>
                            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                                <li><strong>Don't over-promise:</strong> Be realistic with your "Estimated Annual Volume." A solid, achievable number (e.g., "50–100 seats for the pilot year") builds more trust than an inflated one.</li>
                                <li><strong>Highlight Local Knowledge:</strong> Emphasize your understanding of local tax laws, currency issues, and university budget cycles. This local expertise is invaluable to global software companies.</li>
                                <li><strong>The "Lobby" Strategy:</strong> If a direct partnership is denied, ask for their Value-Added Distributor (VAD) for your region. Partnering with a VAD is often a more accessible entry point.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             <section className="bg-gray-800">
                <div className="max-w-7xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white">Let's Grow Together</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-300">
                       Become a partner and let us champion your software in one of the world's most dynamic markets.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600 sm:w-auto"
                    >
                        Contact Our Partnerships Team
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PartnersPage;
