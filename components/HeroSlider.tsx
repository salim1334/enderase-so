
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface Slide {
    imageUrl: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
}

const slides: Slide[] = [
    {
        imageUrl: 'https://picsum.photos/1600/800?image=1075', // tech/infrastructure
        title: 'Smart Infrastructure & Security Solutions',
        subtitle: 'From AI-powered surveillance to unified networking, we build the backbone of modern facilities.',
        ctaText: 'Explore Infrastructure',
        ctaLink: '/infrastructure',
    },
    {
        imageUrl: 'https://picsum.photos/1600/800?image=20', // classroom/elearning
        title: 'Authentic Software for Academia & Research',
        subtitle: 'Empowering institutions with genuine licenses for Turnitin, SPSS, Stata, and more.',
        ctaText: 'View Licensing Solutions',
        ctaLink: '/licensing',
    },
    {
        imageUrl: 'https://picsum.photos/1600/800?image=1078', // logistics/road
        title: 'Intelligent Fleet & Logistics Management',
        subtitle: 'Real-time asset tracking and data analytics to optimize your entire logistics operation.',
        ctaText: 'Discover Fleet Management',
        ctaLink: '/fleet-management',
    },
    {
        imageUrl: 'https://picsum.photos/1600/800?image=1063', // enterprise/office
        title: 'Enterprise Cloud & B2B Portal Development',
        subtitle: 'Custom, scalable cloud architecture and secure portals for the modern enterprise.',
        ctaText: 'Learn About B2B Portals',
        ctaLink: '/b2b-portals',
    },
    {
        imageUrl: 'https://picsum.photos/1600/800?image=12', // people/collaboration
        title: 'Your Partner in Digital Transformation',
        subtitle: 'We provide end-to-end solutions, integrating software and hardware for unified success.',
        ctaText: 'See Our Full Portfolio',
        ctaLink: '/portfolio',
    },
];

const HeroSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const rotationInterval = 5 * 60 * 1000; // 5 minutes

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, []);
    
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, rotationInterval);

        return () => {
            clearInterval(timer);
        };
    }, [goToNext, rotationInterval]);

    return (
        <section className="relative h-[calc(100vh-80px)] max-h-[800px] w-full overflow-hidden bg-black">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    aria-hidden={index !== currentIndex}
                >
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.imageUrl})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            {slide.title}
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                            {slide.subtitle}
                        </p>
                        <Link
                            to={slide.ctaLink}
                            className="mt-8 inline-block bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-transform hover:scale-105"
                        >
                            {slide.ctaText}
                        </Link>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-20 text-white bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-colors"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-20 text-white bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-colors"
                aria-label="Next slide"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentIndex ? 'bg-orange-500' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
