
import React from 'react';
import { SearchResults } from '../types';
import ResultCard from './ResultCard';
import LoadingSpinner from './LoadingSpinner';

interface ResultsDisplayProps {
    isLoading: boolean;
    results: SearchResults | null;
    error: string | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ isLoading, results, error }) => {
    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <div className="mt-8 text-center bg-red-900/30 border border-red-500/50 text-red-300 p-4 rounded-md">
                <h3 className="font-bold text-lg">Error Invoking Engine</h3>
                <p>{error}</p>
            </div>
        );
    }

    if (results && results.length === 0) {
        return (
            <div className="mt-8 text-center text-slate-400 p-4">
                <h3 className="font-bold text-lg">No Results Found</h3>
                <p>The Law Gathering Engine found no direct matches for your query. Try rephrasing your invocation.</p>
            </div>
        );
    }
    
    if (results) {
        return (
            <div className="mt-8 space-y-4">
                {results.map((item, index) => (
                    <ResultCard key={index} item={item} />
                ))}
            </div>
        );
    }

    return null;
};

export default ResultsDisplay;
