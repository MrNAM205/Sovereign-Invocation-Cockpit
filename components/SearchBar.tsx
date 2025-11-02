
import React, { useState } from 'react';
import { IconSearch } from './IconComponents';

interface SearchBarProps {
    onSearch: (query: string) => void;
    isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <div className="relative flex-grow">
                 <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Invoke remedy for..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 pl-4 pr-12 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow duration-200"
                    disabled={isLoading}
                />
                <IconSearch className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-500" />
            </div>
            <button
                type="submit"
                disabled={isLoading || !query}
                className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-md transition-all duration-200 flex items-center justify-center shadow-lg shadow-cyan-900/50 disabled:shadow-none"
            >
                {isLoading ? (
                     <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                ) : (
                    <span>Gather</span>
                )}
            </button>
        </form>
    );
};

export default SearchBar;
