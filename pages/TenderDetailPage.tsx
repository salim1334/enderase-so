
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Dummy data for a single tender
const tenderData = {
    id: '1',
    title: 'CARE Ethiopia is seeking eligible bidders for the supply of various tools and pipe wrenches',
    closingDate: 'Dec 29, 2025 2:30 PM',
    openingDate: 'No Specific Opening Date and Time',
    publishedOn: 'Enderasetender.com (Dec 25, 2025)',
    posted: 'a day ago',
    documentPrice: 'ETB 500',
    region: 'Addis Ababa',
    regionLink: '#',
    status: 'Open',
    aiSummary: 'CARE Ethiopia invites eligible bidders for the purchase of various tools and pipe wrenches. The bid document can be obtained from https://careethiopia.afrotender.com or...',
};


const TenderDetailPage: React.FC = () => {
    const { tenderId } = useParams<{ tenderId: string }>();
    const navigate = useNavigate();

    // In a real app, you would fetch the tender data based on tenderId
    // For this example, we'll just use the static dummy data.
    const tender = tenderData;

    return (
        <div className="bg-gray-50 min-h-screen py-12 pt-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{tender.title}</h1>
                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="flex flex-wrap gap-2">
                            <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                Back
                            </button>
                             <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                                Print
                            </button>
                             <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>
                                Fullscreen
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                                Save
                            </button>
                        </div>
                        <div className="flex gap-2">
                             <button className="p-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors" aria-label="Previous Tender">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                             </button>
                             <button className="p-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors" aria-label="Next Tender">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                             </button>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="space-y-4 text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                        <strong className="text-gray-500">Bid closing date:</strong>
                        <p className="md:col-span-2">{tender.closingDate}</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                        <strong className="text-gray-500">Bid opening date:</strong>
                        <p className="md:col-span-2">{tender.openingDate}</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                        <strong className="text-gray-500">Published on:</strong>
                        <p className="md:col-span-2">{tender.publishedOn}</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                        <strong className="text-gray-500">Posted</strong>
                        <p className="md:col-span-2">{tender.posted}</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                        <strong className="text-gray-500">Bid document price</strong>
                        <p className="md:col-span-2">{tender.documentPrice}</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
                        <strong className="text-gray-500">Region</strong>
                        <p className="md:col-span-2"><a href={tender.regionLink} className="text-blue-600 underline hover:text-blue-800">{tender.region}</a></p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
                        <strong className="text-gray-500">Bidding</strong>
                        <p className="md:col-span-2"><span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-200 rounded-full">{tender.status}</span></p>
                    </div>
                </div>

                {/* AI Summary Section */}
                <div className="mt-10 bg-pink-50 border border-pink-200 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 3.5a1.5 1.5 0 013 0V5h-3V3.5zM10 5.525V3.5a3.5 3.5 0 10-7 0v2.025A5.5 5.5 0 004.5 14.5h11a5.5 5.5 0 00-2.475-4.475V3.5a1.5 1.5 0 013 0V5h-3v.525a5.5 5.5 0 00-5.025 4.5h.025A5.5 5.5 0 0010 5.525zM4.5 16.5a3.5 3.5 0 107 0v-2.025a5.5 5.5 0 004.975-4.5h.025A5.5 5.5 0 0015.5 4V3.5a3.5 3.5 0 10-7 0V4a5.5 5.5 0 00-3.975 9.5h.025a3.5 3.5 0 00-.55 3z" />
                                <path fillRule="evenodd" d="M10 2.5a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zM10 15.5a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zM3.05 4.95a.5.5 0 010 .707l-.707.707a.5.5 0 01-.707-.707l.707-.707a.5.5 0 01.707 0zm13.9 0a.5.5 0 01.707 0l.707.707a.5.5 0 01-.707.707l-.707-.707a.5.5 0 010-.707zM15.05 15.05a.5.5 0 010 .707l.707.707a.5.5 0 01-.707.707l-.707-.707a.5.5 0 01.707-.707zM4.95 16.95a.5.5 0 01.707 0l-.707.707a.5.5 0 01-.707-.707l.707-.707a.5.5 0 010 .707zM17.5 10a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zM2.5 10a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z" clipRule="evenodd" />
                             </svg>
                             <h3 className="text-lg font-bold text-gray-800">AI Summary</h3>
                        </div>
                        <a href="#" className="flex items-center gap-1 text-sm text-gray-600 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            report error
                        </a>
                    </div>
                    <p className="text-gray-700">
                        {tender.aiSummary}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TenderDetailPage;
