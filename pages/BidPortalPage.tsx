
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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

const BidCard: React.FC<{ bid: Bid }> = ({ bid }) => {
  const closingDate = new Date(bid.bid_closing_date);
  const now = new Date();
  const isOpen = closingDate > now;
  const daysLeft = Math.ceil((closingDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
      {/* Status Badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
          isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isOpen ? 'Open' : 'Closed'}
        </span>
      </div>

      {/* Company Tag */}
      <div className="mb-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
          {bid.company_name}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 pr-20 min-h-[60px]">
        {bid.tender_name}
      </h3>

      {/* Details Grid */}
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">Document Price:</span>
          <span className="text-orange-600 font-bold">ETB {parseFloat(bid.document_price).toLocaleString()}</span>
        </div>
        
        {bid.region && (
          <div className="flex items-center justify-between">
            <span className="font-medium">Region:</span>
            <span className="text-gray-800">{bid.region}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="font-medium">Closing Date:</span>
          <span className="text-gray-800">
            {new Date(bid.bid_closing_date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </span>
        </div>

        {isOpen && daysLeft >= 0 && (
          <div className="flex items-center justify-between">
            <span className="font-medium">Time Left:</span>
            <span className={`font-bold ${daysLeft <= 3 ? 'text-red-600' : 'text-green-600'}`}>
              {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
            </span>
          </div>
        )}
      </div>

      {/* View Details Button */}
      <Link 
        to={`/bids/${bid.id}`}
        className="block w-full text-center bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200 transform hover:scale-[1.02]"
      >
        View Full Details →
      </Link>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

const BidPortalPage: React.FC = () => {
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');
  const { token, user } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!token || !user) {
      navigate('/login?redirect=/bids');
    }
  }, [token, user, navigate]);

  useEffect(() => {
    if (token && user) {
      fetchBids();
    }
  }, [token, user]);

  const fetchBids = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/bids', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBids(data);
      } else {
        setError('Failed to fetch bids');
      }
    } catch (error) {
      setError('An error occurred while fetching bids');
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBids = bids.filter(bid => {
    const closingDate = new Date(bid.bid_closing_date);
    const now = new Date();
    const isOpen = closingDate > now;

    if (filter === 'open') return isOpen;
    if (filter === 'closed') return !isOpen;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-500 py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Available Bids
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Explore current bidding opportunities from leading companies across Ethiopia
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold">Filter:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    filter === 'all' 
                      ? 'bg-orange-500 text-white' 
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  All Bids
                </button>
                <button
                  onClick={() => setFilter('open')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    filter === 'open' 
                      ? 'bg-green-500 text-white' 
                      : 'text-gray-700 hover:text-green-500'
                  }`}
                >
                  Open
                </button>
                <button
                  onClick={() => setFilter('closed')}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    filter === 'closed' 
                      ? 'bg-red-500 text-white' 
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  Closed
                </button>
              </div>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">{filteredBids.length}</span> {filteredBids.length === 1 ? 'bid' : 'bids'} found
            </div>
          </div>
        </div>
      </section>

      {/* Bids Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 font-semibold">{error}</p>
            </div>
          ) : filteredBids.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Bids Found</h3>
              <p className="text-gray-600">There are currently no {filter !== 'all' ? filter : ''} bids available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBids.map(bid => (
                <BidCard key={bid.id} bid={bid} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BidPortalPage;
