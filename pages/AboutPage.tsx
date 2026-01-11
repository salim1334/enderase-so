
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div>
            <section className="relative bg-gray-800" style={{ backgroundImage: 'url(https://picsum.photos/1600/600?image=12)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white">About Enderase Solutions</h1>
                    <p className="mt-4 text-xl text-gray-200">Your Partner in Compliant and Authentic Software Distribution.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <p className="font-semibold text-orange-600">
                                    Our mission is to empower academic and research institutions by providing seamless access to authentic, world-class software solutions, while upholding the highest standards of software compliance and ethical business practices.
                                </p>
                                <p>
                                    We bridge the gap between global software manufacturers and the academic community, ensuring that every license we provide is genuine, fully supported, and compliant with all End User License Agreements (EULAs). We are committed to a strict 'No-Piracy' policy, safeguarding the intellectual property of our partners and providing peace of mind to our clients. Through expert consultation, reliable support, and comprehensive lifecycle management, we aim to be the most trusted and authoritative technology partner in the educational sector.
                                </p>
                            </div>
                        </div>
                        <div className="order-first lg:order-last">
                            <img className="rounded-lg shadow-2xl" src="https://picsum.photos/600/400?image=1074" alt="Modern office interior" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us?</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                           We are built on a foundation of trust, expertise, and an unwavering commitment to our clients and partners.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold text-gray-800">Authoritative Expertise</h3>
                            <p className="mt-2 text-gray-600">Deep understanding of the academic software landscape and licensing complexities.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold text-gray-800">Unwavering Reliability</h3>
                            <p className="mt-2 text-gray-600">Consistent, dependable service and support you can count on for your critical tools.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold text-gray-800">Strict Compliance</h3>
                            <p className="mt-2 text-gray-600">A core focus on ethical practices and adherence to all software licensing agreements.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
