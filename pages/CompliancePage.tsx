
import React from 'react';

const CompliancePage: React.FC = () => {
    return (
        <div>
            <section className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Licensing & Compliance</h1>
                    <p className="mt-4 text-xl text-gray-300">Our Commitment to Authentic and Ethical Software Distribution.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <h2>Licensing & Compliance Statement</h2>
                        <p>At Enderase Solutions, we believe that genuine software is the foundation of reliable research and academic excellence. Our operations are built on a framework of strict legal compliance and ethical distribution.</p>

                        <h3>Our Commitment to Authenticity</h3>
                        <p>As a specialized software and systems solution provider, we guarantee that:</p>
                        <ul>
                            <li><strong>Zero-Tolerance for Piracy:</strong> We do not engage in the sale of cracked, unauthorized, or "gray market" software keys. Every license supplied by Enderase Solutions is sourced directly through official partner channels.</li>
                            <li><strong>Direct Registration:</strong> All licenses are registered in the name of the end-user or the purchasing institution, ensuring they receive full manufacturer support and updates.</li>
                            <li><strong>EULA Adherence:</strong> We ensure that our clients purchase the correct license type (Academic, Commercial, or Government) to match their organizational status, preventing legal risks for the end-user.</li>
                        </ul>

                        <h3>Intellectual Property Protection</h3>
                        <p>We act as a bridge between global software manufacturers and local users. Part of our role is to educate our clients on the importance of Intellectual Property (IP) rights. By purchasing through authorized channels, our clients support the continued innovation of tools like SPSS, Stata, NVivo, and Turnitin.</p>

                        <h3>Audit & Verification</h3>
                        <p>Enderase Solutions maintains transparent records of all procurement activities. We welcome audits from our software partners to verify that our distribution processes meet their global standards for authorized resale.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompliancePage;
