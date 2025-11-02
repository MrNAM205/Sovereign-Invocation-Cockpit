
import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center text-slate-400 mt-12">
             <div className="w-12 h-12 border-4 border-t-transparent border-cyan-500 rounded-full animate-spin"></div>
             <p className="mt-4 text-lg font-semibold tracking-wide">Engaging Law Gathering Engine...</p>
             <p className="text-sm">Aggregating statutes, remedies, and case law.</p>
        </div>
    );
};

export default LoadingSpinner;
