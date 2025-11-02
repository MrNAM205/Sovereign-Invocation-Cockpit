
import React from 'react';

interface WelcomeScreenProps {
    onExampleQueryClick: (query: string) => void;
}

const exampleQueries = [
    "Rebuttal for 'U.S. Citizen' presumption",
    "UCC 3-401 signature liability",
    "Endorsing a bill into private trust",
    "Invoking constitutional venue",
    "Remedy for lack of jurisdiction",
    "Hale v. Henkel explained"
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onExampleQueryClick }) => {
    return (
        <div className="mt-8 p-6 bg-slate-800/40 border border-slate-700/50 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-slate-100">Omni is Online</h2>
            <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
                State your objective. The Law Gathering Engine will aggregate relevant statutes, case law, and remedy clauses to construct your invocation. Clarity of intent yields clarity of remedy.
            </p>
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-cyan-400">Example Invocations:</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {exampleQueries.map((query) => (
                        <button
                            key={query}
                            onClick={() => onExampleQueryClick(query)}
                            className="bg-slate-700/50 hover:bg-slate-700 text-slate-300 text-sm px-3 py-1.5 rounded-md border border-slate-600 transition-all duration-200"
                        >
                            {query}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
