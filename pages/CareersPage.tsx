
import React from 'react';

const ValueCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-orange-600 mb-4 mx-auto">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

const CareersPage: React.FC = () => {
    return (
        <div>
            <section className="relative bg-gray-800 text-white" style={{ backgroundImage: 'url(https://picsum.photos/1600/600?image=1076)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Join Our Team</h1>
                    <p className="mt-4 text-xl text-gray-200">Build the future of technology in the heart of Addis Ababa.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Why Work With Us?</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Grow, Innovate, and Make an Impact
                            </p>
                            <div className="mt-6 prose prose-lg text-gray-600 max-w-none">
                                <p>At Enderase Solutions, you're not just an employee; you're a vital part of a team that is shaping the technological landscape for academic and enterprise sectors in our region. We offer a dynamic environment where you can build a rewarding career.</p>
                                <ul>
                                    <li><strong>Impactful Work:</strong> Contribute to large-scale projects for major universities, government bodies, and leading enterprises.</li>
                                    <li><strong>Professional Growth:</strong> We invest in our team's development with continuous training, certifications, and opportunities to work with cutting-edge technology.</li>
                                    <li><strong>Collaborative Culture:</strong> Join a supportive and innovative team where your ideas are valued and teamwork is the key to our success.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img className="rounded-lg shadow-2xl" src="https://picsum.photos/600/450?image=23" alt="Team collaborating in a modern office" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Current Openings</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                           We are always looking for talented professionals to join our mission.
                        </p>
                    </div>
                    <div className="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold text-gray-800">We Value Talent and Initiative</h3>
                        <p className="mt-4 text-gray-600">
                            We are not actively hiring for any specific roles at the moment, but our needs are always evolving. We believe in building relationships with exceptional individuals before a position even opens up.
                        </p>
                        <p className="mt-4 text-gray-600">
                            If you are passionate about technology, a creative problem-solver, and believe your skills in system integration, software development, or technical sales would be a great fit for our team, we encourage you to send your resume and a cover letter to:
                        </p>
                        <a href="mailto:careers@enderasesolutions.com" className="mt-6 inline-block font-bold text-lg text-orange-600 hover:text-orange-700 bg-orange-100 px-6 py-3 rounded-md transition-colors">
                            careers@enderasesolutions.com
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
                        <p className="mt-4 text-lg text-gray-600">The principles that guide our work and our team.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard 
                            title="Integrity"
                            description="Upholding the highest standards of ethics and compliance in every project."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                        />
                        <ValueCard 
                            title="Excellence"
                            description="Delivering superior quality and reliability in every solution we provide."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                        />
                        <ValueCard 
                            title="Collaboration"
                            description="Working together with our clients and partners to achieve shared success."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                        />
                        <ValueCard 
                            title="Innovation"
                            description="Continuously seeking better ways to solve complex technological challenges."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
