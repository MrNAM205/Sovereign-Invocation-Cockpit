
import React, { useState } from 'react';
import { LawItem, LawCategory } from '../types';
import { IconChevronDown } from './IconComponents';

interface ResultCardProps {
    item: LawItem;
}

const categoryStyles: { [key in LawCategory]: string } = {
    [LawCategory.Statute]: 'bg-blue-900/50 text-blue-300 border-blue-700',
    [LawCategory.CaseLaw]: 'bg-purple-900/50 text-purple-300 border-purple-700',
    [LawCategory.RemedyClause]: 'bg-green-900/50 text-green-300 border-green-700',
    [LawCategory.RebuttalClause]: 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
    [LawCategory.UCCProvision]: 'bg-indigo-900/50 text-indigo-300 border-indigo-700',
    [LawCategory.Principle]: 'bg-gray-700/50 text-gray-300 border-gray-600',
};

const ResultCard: React.FC<ResultCardProps> = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:border-cyan-500/50">
            <div className="p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-grow">
                         <h3 className="text-xl font-bold text-slate-100">{item.title}</h3>
                         <p className="text-sm font-mono text-cyan-400 mt-1">{item.citation}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${categoryStyles[item.category] || categoryStyles[LawCategory.Principle]} whitespace-nowrap`}>
                        {item.category}
                    </span>
                </div>
                
                <p className="mt-4 text-slate-300">{item.summary}</p>
                
                {isExpanded && (
                     <div className="mt-4 pt-4 border-t border-slate-700">
                        <h4 className="font-semibold text-slate-200 mb-2">Tactical Application:</h4>
                        <p className="text-slate-300 whitespace-pre-wrap font-mono text-sm bg-slate-900 p-3 rounded-md">{item.explanation}</p>
                    </div>
                )}
            </div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full bg-slate-800 hover:bg-slate-700/50 px-5 py-2 text-sm font-semibold text-cyan-400 flex items-center justify-center gap-2 transition-colors duration-200"
            >
                <span>{isExpanded ? 'Collapse Details' : 'Show Tactical Application'}</span>
                <IconChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );
};

export default ResultCard;
