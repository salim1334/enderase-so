

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const CreateBidPage: React.FC = () => {
    const [tenderName, setTenderName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [bidBondAmount, setBidBondAmount] = useState('');
    const [documentPrice, setDocumentPrice] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');
    const [bidOpeningDate, setBidOpeningDate] = useState('');
    const [bidClosingDate, setBidClosingDate] = useState('');
    const { token } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/bids', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                tender_name: tenderName,
                company_name: companyName,
                bid_bond_amount: bidBondAmount,
                document_price: documentPrice,
                additional_notes: additionalNotes,
                bid_opening_date: bidOpeningDate,
                bid_closing_date: bidClosingDate,
              }),
            });

            if (response.ok) {
                alert('Bid created successfully!');
                // Clear form
                setTenderName('');
                setCompanyName('');
                setBidBondAmount('');
                setDocumentPrice('');
                setAdditionalNotes('');
                setBidOpeningDate('');
                setBidClosingDate('');
            } else {
                const data = await response.json();
                alert(`Bid creation failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Bid creation error:', error);
            alert('An error occurred during bid creation.');
        }
    };

    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Bid</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tender Name
            </label>
            <input
              type="text"
              value={tenderName}
              onChange={(e) => setTenderName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bid Bond Amount
            </label>
            <input
              type="text"
              value={bidBondAmount}
              onChange={(e) => setBidBondAmount(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Document Price
            </label>
            <input
              type="text"
              value={documentPrice}
              onChange={(e) => setDocumentPrice(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <textarea
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bid Opening Date
            </label>
            <input
              type="datetime-local"
              value={bidOpeningDate}
              onChange={(e) => setBidOpeningDate(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bid Closing Date
            </label>
            <input
              type="datetime-local"
              value={bidClosingDate}
              onChange={(e) => setBidClosingDate(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Create Bid
          </button>
        </form>
      </div>
    );
};

export default CreateBidPage;
