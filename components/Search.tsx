
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { searchIndex, SearchableContent } from '../data/search-index';

interface SearchProps {
    isOpen: boolean;
    onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchableContent[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            // Focus input when the modal opens
            inputRef.current?.focus();
            // Prevent body scroll when overlay is open
            document.body.style.overflow = 'hidden';
        } else {
            // Clear query and results and restore scroll when closed
            setQuery('');
            setResults([]);
            document.body.style.overflow = 'unset';
        }

        // Cleanup function
        return () => {
             document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    useEffect(() => {
        if (query.trim().length > 1) {
            const lowerCaseQuery = query.toLowerCase();
            const filteredResults = searchIndex.filter(item =>
                item.title.toLowerCase().includes(lowerCaseQuery) ||
                item.content.toLowerCase().includes(lowerCaseQuery)
            );
            setResults(filteredResults);
        } else {
            setResults([]);
        }
    }, [query]);

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-[60] flex justify-center items-start pt-20"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-modal-title"
        >
            <div 
                className="w-full max-w-2xl bg-black rounded-lg shadow-xl mx-4"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className="p-4">
                    <h2 id="search-modal-title" className="sr-only">Search Website</h2>
                    <input
                        ref={inputRef}
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search the site..."
                        className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                {results.length > 0 && (
                    <div className="max-h-[60vh] overflow-y-auto border-t border-gray-800">
                        <ul>
                            {results.map(result => (
                                <li key={result.path}>
                                    <Link 
                                        to={result.path} 
                                        onClick={onClose}
                                        className="block p-4 hover:bg-gray-900 transition-colors"
                                    >
                                        <span className="font-bold text-orange-500">{result.title}</span>
                                        <p className="text-sm text-gray-300 mt-1">
                                            {result.content.substring(0, 150)}...
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                 {query.length > 1 && results.length === 0 && (
                    <div className="p-4 text-center text-gray-400 border-t border-gray-800">
                        No results found for "{query}".
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
