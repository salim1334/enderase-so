
import React from 'react';
import { Link } from 'react-router-dom';

// --- DUMMY DATA ---
const commodityPrices = [
    { name: 'Cement (Derba)', price: 'ETB 810/Quintal', trend: 'up' },
    { name: 'Rebar (12mm)', price: 'ETB 6,500/Quintal', trend: 'down' },
    { name: 'Diesel Fuel', price: 'ETB 78.50/Liter', trend: 'stable' },
    { name: 'Cement (Dangote)', price: 'ETB 805/Quintal', trend: 'up' },
    { name: 'Rebar (10mm)', price: 'ETB 6,250/Quintal', trend: 'down' },
];

const tenders = [
    { id: 1, title: 'Supply of Office Furniture for Ministry of Education', category: 'Goods', isPremium: false },
    { id: 2, title: 'Construction of G+4 School Building in Hawassa', category: 'Works', isPremium: true },
    { id: 3, title: 'Consultancy Service for IT System Audit', category: 'Services', isPremium: true },
    { id: 4, title: 'Procurement of 10,000 Tons of Reinforcement Steel', category: 'Goods', isPremium: true },
    { id: 5, title: 'Annual Vehicle Maintenance Service Contract', category: 'Services', isPremium: false },
    { id: 6, title: 'Road Construction and Asphalt Laying in Bahir Dar', category: 'Works', isPremium: true },
];

const partnerLogos = [
    { name: 'Dangote Cement', src: 'https://logo.clearbit.com/dangote.com' },
    { name: 'Derba Cement', src: 'https://logo.clearbit.com/derba-midroc.com' },
    { name: 'Habesha Cement', src: 'https://logo.clearbit.com/habeshacement.com' },
    { name: 'National Oil Ethiopia', src: 'https://logo.clearbit.com/noc.com.et' },
    { name: 'Abyssinia Steel', src: 'https://logo.clearbit.com/abyssiniasteel.com' },
];
// --- END DUMMY DATA ---


const PriceTicker: React.FC = () => {
    return (
        <div className="w-full bg-black bg-opacity-50 py-3 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...commodityPrices, ...commodityPrices].map((item, index) => (
                    <div key={index} className="flex items-center mx-6">
                        <span className="text-white font-semibold">{item.name}:</span>
                        <span className="ml-2 text-gray-200">{item.price}</span>
                         <svg xmlns="http://www.w3.org/2000/svg" className={`ml-2 h-5 w-5 ${item.trend === 'up' ? 'text-green-400' : item.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {item.trend === 'up' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />}
                            {item.trend === 'down' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5H18" />}
                            {item.trend === 'stable' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />}
                        </svg>
                    </div>
                ))}
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
};

const TenderCard: React.FC<{ tender: typeof tenders[0] }> = ({ tender }) => (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 relative overflow-hidden">
        <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-3 ${
            tender.category === 'Goods' ? 'bg-sky-800 text-sky-100' : 
            tender.category === 'Works' ? 'bg-amber-800 text-amber-100' : 
            'bg-emerald-800 text-emerald-100'
        }`}>{tender.category}</span>
        <h3 className="text-xl font-bold text-white mb-4 h-20">{tender.title}</h3>
        
        {tender.isPremium ? (
            <div className="relative">
                <div className="blur-sm text-gray-500">
                    <p><strong>Bidding Document:</strong> document_name_final.pdf</p>
                    <p><strong>Contact Person:</strong> Ato Kebede Al...</p>
                    <p><strong>Submission Deadline:</strong> 15 July 2024</p>
                </div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center">
                    <Link to={`/tender/${tender.id}`} className="bg-orange-500 text-white px-6 py-2 rounded-md font-bold hover:bg-orange-600 transition-colors text-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                        Unlock Details
                    </Link>
                </div>
            </div>
        ) : (
             <div className="text-gray-300">
                <p><strong>Bidding Document:</strong> Available</p>
                <p><strong>Contact Person:</strong> Publicly Listed</p>
                <p><strong>Status:</strong> Open for Bidding</p>
                <Link to={`/tender/${tender.id}`} className="text-orange-400 hover:underline mt-2 inline-block">View Full Details &rarr;</Link>
            </div>
        )}
    </div>
);


const TenderPortalPage: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* --- Hero Section --- */}
            <section className="relative bg-gray-800" style={{ backgroundImage: 'url(https://picsum.photos/1600/800?image=827)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
                     <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        Don't Bid Blind.
                     </h1>
                      <p className="mt-4 max-w-3xl mx-auto text-xl text-orange-400 font-semibold">
                        Access Ethiopia's Most Accurate Tender & Price Intelligence.
                    </p>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                        Get real-time commodity prices and unlock exclusive tender details to win more contracts.
                    </p>
                    <div className="mt-8">
                        <Link to="/register" className="bg-orange-500 text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-orange-600 transition-transform hover:scale-105 transform inline-block">
                            Create a Free Account
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full z-10">
                    <PriceTicker />
                </div>
            </section>

            {/* --- Freemium Tender Feed Section --- */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Live Tender Feed</h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Here are the latest opportunities. Create a free account to unlock full details for premium listings.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tenders.map(tender => <TenderCard key={tender.id} tender={tender} />)}
                    </div>
                </div>
            </section>

            {/* --- Partner & Service Preview --- */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-white">We Track The Brands You Trust</h2>
                        <p className="mt-4 text-lg text-gray-400">Our price intelligence network includes major national suppliers.</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                        {partnerLogos.map(logo => (
                            <div key={logo.name} className="flex items-center" title={logo.name}>
                                 <img src={logo.src} alt={logo.name} className="h-10 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TenderPortalPage;
