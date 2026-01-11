
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Column 1: Identity */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 4H4v16h6v-4H8V8h2V4z" />
                                <path d="M14 4h6v16h-6v-4h2V8h-2V4z" />
                                <circle cx="12" cy="3" r="2" />
                                <path d="M10 9h4v1h-4z" />
                                <path d="M10 11h4v1h-4z" />
                                <path d="M10 13h4v1h-4z" />
                                <path d="M10 15h4v1h-4z" />
                            </svg>
                            <span>Enderase <span className="text-orange-500">Solutions</span></span>
                        </Link>
                        <p className="text-gray-400 text-xs">A Subsidiary of Lamiya General Trading PLC</p>
                    </div>
                    
                    {/* Column 2: Company */}
                    <div>
                        <h4 className="text-lg font-semibold text-white">Company</h4>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/about" className="text-gray-300 hover:text-orange-500 text-sm">About Us</Link></li>
                            <li><Link to="/portfolio" className="text-gray-300 hover:text-orange-500 text-sm">Portfolio</Link></li>
                            <li><Link to="/careers" className="text-gray-300 hover:text-orange-500 text-sm">Careers</Link></li>
                             <li><Link to="/partners" className="text-gray-300 hover:text-orange-500 text-sm">For Partners</Link></li>
                            <li>
                                <a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-300 hover:text-orange-500 text-sm flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    Download Company Profile
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white">Contact</h4>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li className="text-gray-300">Hulu-Alem Business Center,</li>
                            <li className="text-gray-300">Piassa, Addis Ababa</li>
                            <li className="pt-2"><a href="tel:+251911007840" className="text-gray-300 hover:text-orange-500">+251 911 007840</a></li>
                            <li><a href="tel:+251927553315" className="text-gray-300 hover:text-orange-500">+251 927 553315</a></li>
                             <li className="pt-2"><a href="mailto:info@enderasesolutions.com" className="text-gray-300 hover:text-orange-500">info@enderasesolutions.com</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Services & Legal */}
                    <div>
                        <h4 className="text-lg font-semibold text-white">Services &amp; Legal</h4>
                        <ul className="mt-4 space-y-2">
                             <li><Link to="/solutions" className="text-gray-300 hover:text-orange-500 text-sm">Solutions</Link></li>
                            <li><Link to="/infrastructure" className="text-gray-300 hover:text-orange-500 text-sm">Infrastructure</Link></li>
                            <li><Link to="/support" className="text-gray-300 hover:text-orange-500 text-sm">Support &amp; Maintenance</Link></li>
                            <li><Link to="/licensing" className="text-gray-300 hover:text-orange-500 text-sm">Licensing Guide</Link></li>
                            <li><Link to="/compliance" className="text-gray-300 hover:text-orange-500 text-sm">Licensing Compliance</Link></li>
                            <li><Link to="/privacy-policy" className="text-gray-300 hover:text-orange-500 text-sm">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} Enderase Solutions. A Subsidiary of Lamiya General Trading PLC. All rights reserved. No-Piracy Policy.</p>
                    <p className="mt-4 text-gray-400 text-xs max-w-4xl mx-auto">
                        Licensing Compliance: Enderase Solutions is committed to the distribution of 100% original, authorized software. We strictly adhere to global End-User License Agreements (EULA) and anti-piracy protocols. All product names, logos, and brands are property of their respective owners.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
