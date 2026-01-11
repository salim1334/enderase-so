
import React from 'react';
import { Link } from 'react-router-dom';

const AmcFeature: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="mt-1 text-gray-600">{description}</p>
            </div>
        </div>
    </div>
);

const SupportPage: React.FC = () => {
    return (
        <div>
            <section className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Support & Maintenance</h1>
                    <p className="mt-4 text-xl text-gray-300">Your trusted partner for the entire technology lifecycle.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Reliability Beyond Installation</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                           Our commitment to you doesn't end when the project is complete. We stand behind our work with robust warranties and responsive local support.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-50 p-8 rounded-lg">
                             <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Guarantee</h3>
                             <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-orange-600">12-Month Workmanship Warranty</h4>
                                    <p className="text-gray-600 mt-1">We provide a full 12-month warranty on all physical installations, including CCTV, networking, and smart room cabling. This covers any issues arising from our workmanship, giving you complete peace of mind.</p>
                                </div>
                                 <div>
                                    <h4 className="text-xl font-semibold text-orange-600">Lifetime Licensing Support</h4>
                                    <p className="text-gray-600 mt-1">For all our academic and enterprise software, we offer a lifetime of licensing support. We'll assist with renewals, user changes, and compliance checks for as long as you use the software.</p>
                                </div>
                             </div>
                        </div>
                         <div>
                            <img src="https://picsum.photos/600/400?image=1059" alt="Support team working" className="rounded-lg shadow-xl"/>
                            <div className="mt-4 text-center bg-white p-4 rounded-lg shadow-md">
                                <h4 className="font-bold text-gray-800">Rapid Local Response</h4>
                                <p className="text-gray-600 text-sm">Because we are based in Hulu-Alem Business Center, our local team can be on-site in Piassa or anywhere in Addis Ababa within hours, not days.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Annual Maintenance Contracts (AMC)</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                           Think of an AMC as an insurance policy for your technology. For a fixed annual fee, we provide proactive care to ensure your critical ERP and Security systems run flawlessly, preventing problems before they impact your business.
                        </p>
                    </div>
                    <div className="mt-16 max-w-4xl mx-auto space-y-8">
                        <AmcFeature 
                            title="Proactive System Health Checks"
                            description="We perform regular, scheduled check-ups on your systems to identify and resolve potential issues before they become critical failures."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        />
                        <AmcFeature 
                            title="Cloud Backup Verification"
                            description="We don't just assume your backups are working. Our team regularly verifies the integrity of your cloud backups to ensure your data is safe and recoverable."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>}
                        />
                         <AmcFeature 
                            title="Priority Emergency Response"
                            description="AMC clients receive priority access to our support team. In an emergency, you go to the front of the line, ensuring the fastest possible resolution."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                        />
                    </div>

                     <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-gray-900">Protect Your Investment</h3>
                        <p className="mt-2 text-gray-600">Secure your systems and your peace of mind with a proactive maintenance plan.</p>
                        <Link to="/contact" className="mt-6 inline-block bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
                            Inquire About an AMC
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportPage;
