import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Search from './Search';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { user, logout } = useAuth();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About Us', path: '/about' },
        { name: 'Bids', path: '/bids' },
        { name: 'Licensing', path: '/licensing' },
        { name: 'Support', path: '/support' },
    ];

    if (user) {
        if (user.role === 'admin') {
            navLinks.push({ name: 'Admin Register', path: '/admin/register' });
        }
        if (user.role === 'admin' || user.role === 'staff') {
            navLinks.push({ name: 'Create Bid', path: '/create-bid' });
        }
    }

    const linkClasses = "text-white hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const activeLinkClasses = "text-orange-500 font-bold";

    return (
        <>
            <header className="bg-black shadow-md fixed top-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
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
                        </div>
                        
                        <div className="hidden md:flex items-center">
                            <nav className="flex items-baseline space-x-4">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </nav>

                            <div className="ml-4 flex items-center space-x-2">
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="text-white hover:text-orange-500 p-2 rounded-full transition-colors"
                                    aria-label="Search website"
                                >
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                                {user ? (
                                    <>
                                        <span className="text-white">{user.email} ({user.role})</span>
                                        <button onClick={logout} className="text-white hover:text-orange-500">Logout</button>
                                    </>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="border border-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-black transition-colors"
                                    >
                                        Login
                                    </Link>
                                )}
                                <Link to="/contact" className="bg-orange-500 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors">
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                type="button"
                                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-orange-500"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isMenuOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`md:hidden bg-black transition-all duration-300 ease-in-out overflow-hidden ${
                        isMenuOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                    id="mobile-menu"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                             <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `block text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? activeLinkClasses : ''}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                         <button
                            onClick={() => { setIsMenuOpen(false); setIsSearchOpen(true); }}
                            className="w-full text-left text-white hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
                        >
                            <svg className="h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                        </button>
                         <Link
                             to="/login"
                             onClick={() => setIsMenuOpen(false)}
                             className="block w-full text-center border border-orange-500 text-white mt-2 px-3 py-2 rounded-md text-base font-medium hover:bg-orange-500 hover:text-black transition-colors"
                         >
                            Login
                         </Link>
                         <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-orange-500 text-black mt-2 px-3 py-2 rounded-md text-base font-medium hover:bg-orange-600 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </header>
            <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default Header;
