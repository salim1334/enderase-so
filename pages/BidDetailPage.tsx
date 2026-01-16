import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_ENDPOINTS } from '../config/api';

interface Bid {
  id: number;
  tender_name: string;
  company_name: string;
  bid_bond_amount: string;
  document_price: string;
  additional_notes: string;
  region: string;
  bid_opening_date: string;
  bid_closing_date: string;
  createdAt: string;
  updatedAt: string;
}

const BidDetailPage: React.FC = () => {
  const { bidId } = useParams<{ bidId: string }>();
  const navigate = useNavigate();
  const { token, user } = useAuth();
  const [bid, setBid] = useState<Bid | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!token || !user) {
      navigate(`/login?redirect=/bids/${bidId}`);
    }
  }, [token, user, navigate, bidId]);

  useEffect(() => {
    if (token && user) {
      fetchBidDetail();
    }
  }, [bidId, token, user]);

  const fetchBidDetail = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.BIDS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const bids = await response.json();
        const foundBid = bids.find((b: Bid) => b.id === parseInt(bidId || '0'));
        
        if (foundBid) {
          setBid(foundBid);
        } else {
          setError('Bid not found');
        }
      } else {
        setError('Failed to fetch bid details');
      }
    } catch (error) {
      setError('An error occurred while fetching bid details');
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'today';
    if (diffInDays === 1) return 'a day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  const isOpen = () => {
    if (!bid) return false;
    const closingDate = new Date(bid.bid_closing_date);
    return closingDate > new Date();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  if (error || !bid) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600 font-semibold">{error || 'Bid not found'}</p>
            <button 
              onClick={() => navigate('/bids')}
              className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
            >
              ← Back to Bids
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{bid.tender_name}</h1>
          <div className="flex justify-between items-center border-b pb-4">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
              <button 
                onClick={() => window.print()} 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
              <button 
                onClick={() => {
                  if (document.fullscreenElement) {
                    document.exitFullscreen();
                  } else {
                    document.documentElement.requestFullscreen();
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
                </svg>
                Fullscreen
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save
              </button>
            </div>
            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button 
                onClick={() => navigate(`/bids/${parseInt(bidId || '0') - 1}`)}
                className="p-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors" 
                aria-label="Previous Bid"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => navigate(`/bids/${parseInt(bidId || '0') + 1}`)}
                className="p-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors" 
                aria-label="Next Bid"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-4 text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
            <strong className="text-gray-500">Bid closing date:</strong>
            <p className="md:col-span-2">{formatDate(bid.bid_closing_date)}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
            <strong className="text-gray-500">Bid opening date:</strong>
            <p className="md:col-span-2">
              {bid.bid_opening_date ? formatDate(bid.bid_opening_date) : 'No Specific Opening Date and Time'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
            <strong className="text-gray-500">Published on:</strong>
            <p className="md:col-span-2">
              Enderasetender.com ({formatDate(bid.createdAt)})
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
            <strong className="text-gray-500">Posted</strong>
            <p className="md:col-span-2">{getTimeAgo(bid.createdAt)}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
            <strong className="text-gray-500">Bid document price</strong>
            <p className="md:col-span-2">ETB {parseFloat(bid.document_price).toLocaleString()}</p>
          </div>
          
          {bid.region && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
              <strong className="text-gray-500">Region</strong>
              <p className="md:col-span-2">
                <a href="#" className="text-blue-600 underline hover:text-blue-800">{bid.region}</a>
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
            <strong className="text-gray-500">Company</strong>
            <p className="md:col-span-2 font-semibold text-gray-800">{bid.company_name}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-200">
            <strong className="text-gray-500">Bid Bond Amount</strong>
            <p className="md:col-span-2">ETB {parseFloat(bid.bid_bond_amount).toLocaleString()}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
            <strong className="text-gray-500">Bidding</strong>
            <p className="md:col-span-2">
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                isOpen() ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'
              }`}>
                {isOpen() ? 'Open' : 'Closed'}
              </span>
            </p>
          </div>
        </div>

        {/* Additional Notes Section */}
        {bid.additional_notes && (
          <div className="mt-10 bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-bold text-gray-800">Additional Notes</h3>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{bid.additional_notes}</p>
          </div>
        )}

        {/* Action CTA */}
        <div className="mt-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Interested in This Bid?</h3>
          <p className="mb-4 text-orange-100">Contact us to get more information or submit your proposal</p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-orange-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidDetailPage;
