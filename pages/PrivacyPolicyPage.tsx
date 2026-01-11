
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div>
            <section className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Privacy Policy</h1>
                    <p className="mt-4 text-xl text-gray-300">Last Updated: {lastUpdatedDate}</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p>Enderase Solutions ("we," "us," or "our") is committed to protecting the privacy of our clients and partners. This Privacy Policy outlines how we collect, use, and safeguard information in our role as a software and systems solution provider.</p>

                        <h3>1. Information We Collect</h3>
                        <p>To facilitate software licensing for products such as SPSS, Stata, NVivo, and Turnitin, we collect:</p>
                        <ul>
                            <li><strong>Contact Data:</strong> Name, institutional email, and phone number.</li>
                            <li><strong>Organizational Data:</strong> Department name, university/company name, and physical address.</li>
                            <li><strong>Transaction Data:</strong> Records of licenses purchased and renewal dates.</li>
                        </ul>

                        <h3>2. How We Use Information</h3>
                        <p>We use this information strictly for:</p>
                        <ul>
                            <li><strong>License Fulfillment:</strong> Registering your software with the manufacturer.</li>
                            <li><strong>Compliance:</strong> Verifying eligibility for Academic or Government pricing.</li>
                            <li><strong>Support:</strong> Providing technical assistance and renewal reminders.</li>
                        </ul>
                        
                        <h3>3. Data Sharing with Software Manufacturers</h3>
                        <p>As an authorized supplier, we share necessary user data (such as the end-user’s name and institutional email) with the respective software manufacturers (e.g., IBM, StataCorp, Lumivero, Turnitin LLC) solely for the purpose of license activation and official registration. We do not sell your data to third-party marketers.</p>

                        <h3>4. Data Security</h3>
                        <p>We implement industry-standard security measures to protect your information from unauthorized access. Since we handle sensitive institutional data, we ensure that our internal systems are regularly updated and monitored.</p>
                        
                        <h3>5. Your Rights</h3>
                        <p>Clients have the right to request access to their data, request corrections, or ask for the deletion of their contact information from our marketing lists at any time by contacting <a href="mailto:info@enderasesolutions.com" className="text-orange-600 hover:text-orange-700">info@enderasesolutions.com</a>.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;
