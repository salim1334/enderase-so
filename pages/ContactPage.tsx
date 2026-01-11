
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        phone: '',
        services: {
            academic: false,
            security: false,
            networking: false,
            fleet: false,
        },
        visitDate: '',
        visitTime: 'Morning',
    });

    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            services: {
                ...prevState.services,
                [name]: checked,
            },
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Frontend validation for Ethiopian phone number format
        const phoneRegex = /^\+251[79]\d{8}$/;
        if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            setStatus('Error: Please enter a valid Ethiopian phone number (e.g., +251912345678).');
            return;
        }
        
        setIsSubmitting(true);
        setStatus('Submitting your request...');

        try {
            const response = await fetch('http://localhost:5000/api/audit-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    organization: formData.organization,
                    phone: formData.phone,
                    services: Object.keys(formData.services).filter(key => formData.services[key as keyof typeof formData.services]),
                    visitDate: formData.visitDate,
                    visitTime: formData.visitTime,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Server responded with status: ${response.status}`);
            }

            setStatus('Thank you! Your audit request has been received. Our experts will contact you shortly to confirm the details.');
            // Reset form on success
            setFormData({
                name: '',
                organization: '',
                phone: '',
                services: { academic: false, security: false, networking: false, fleet: false },
                visitDate: '',
                visitTime: 'Morning',
            });
        } catch (error) {
            console.error('Submission failed:', error);
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
            setStatus(`Sorry, there was an error submitting your request: ${errorMessage}`);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const getStatusClass = () => {
        if (status.startsWith('Error:') || status.startsWith('Sorry,')) {
            return 'text-red-600';
        }
        if (status.startsWith('Thank you!')) {
            return 'text-green-600';
        }
        return 'text-gray-600'; // for "Submitting..."
    };


    return (
        <div>
            <section className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
                    <p className="mt-4 text-xl text-gray-300">We're here to help. Reach out to us for sales, support, or partnership inquiries.</p>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Get in Touch</h2>
                            <div className="space-y-6 text-lg">
                                <div className="flex items-start gap-4">
                                    <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Physical Address</h3>
                                        <p className="text-gray-600">Enderase Solutions</p>
                                        <p className="text-gray-600">Hulu-Alem Business Center, Piassa (Near Nur Mesjid)</p>
                                        <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Email</h3>
                                        <p className="text-gray-600 hover:text-orange-500"><a href="mailto:info@enderasesolutions.com">info@enderasesolutions.com</a></p>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Phone</h3>
                                        <p className="text-gray-600">+251 911 007840</p>
                                        <p className="text-gray-600">+251 927 553315</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <img src="https://picsum.photos/600/300?image=980" alt="Map to office" className="rounded-lg shadow-md" />
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <div>
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Book a Site Audit?</h2>
                                <p className="text-gray-600 mb-8 prose">
                                    Discover the value of a professional assessment. Our experts from Enderase Solutions will visit your premises in Addis Ababa to identify security gaps, networking bottlenecks, and software licensing needs. This is a no-obligation service designed to help you plan your 2025 digital roadmap.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <fieldset>
                                    <legend className="text-xl font-bold text-gray-800 mb-3">Basic Info</legend>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} placeholder="e.g., John Doe" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-orange-50 placeholder-gray-600 text-gray-900"/>
                                        </div>
                                        <div>
                                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization Name</label>
                                            <input type="text" name="organization" id="organization" required value={formData.organization} onChange={handleChange} placeholder="e.g., Addis Ababa University" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-orange-50 placeholder-gray-600 text-gray-900"/>
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                            <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} placeholder="e.g., +251911234567" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-orange-50 placeholder-gray-600 text-gray-900"/>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend className="text-xl font-bold text-gray-800 mb-3">Services of Interest</legend>
                                    <div className="space-y-2">
                                        {Object.keys(formData.services).map((key) => (
                                            <div key={key} className="flex items-center">
                                                <input id={key} name={key} type="checkbox" checked={formData.services[key as keyof typeof formData.services]} onChange={handleCheckboxChange} className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"/>
                                                <label htmlFor={key} className="ml-3 block text-sm font-medium text-gray-700 capitalize">
                                                    {key === 'academic' ? 'Academic Software (Turnitin/SPSS)' : key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                                    {key === 'security' && ' & CCTV'}
                                                    {key === 'networking' && ' & Cloud'}
                                                    {key === 'fleet' && ' Management'}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                                
                                <fieldset>
                                     <legend className="text-xl font-bold text-gray-800 mb-3">Preferred Visit Time</legend>
                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700">Date</label>
                                            <input type="date" name="visitDate" id="visitDate" required value={formData.visitDate} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-orange-50 text-gray-900"/>
                                        </div>
                                        <div>
                                            <label htmlFor="visitTime" className="block text-sm font-medium text-gray-700">Time of Day</label>
                                            <select id="visitTime" name="visitTime" value={formData.visitTime} onChange={handleChange} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md bg-orange-50 text-gray-900">
                                                <option>Morning</option>
                                                <option>Afternoon</option>
                                            </select>
                                        </div>
                                     </div>
                                </fieldset>

                                <div>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Request Expert Consultation'}
                                    </button>
                                </div>
                                {status && <p role="status" aria-live="polite" className={`text-center font-semibold mt-4 ${getStatusClass()}`}>{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
