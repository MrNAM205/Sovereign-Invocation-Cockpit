
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultsDisplay from './components/ResultsDisplay';
import { LawItem, SearchResults } from './types';
import { fetchLawData } from './services/geminiService';
import { WelcomeScreen } from './components/WelcomeScreen';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [results, setResults] = useState<SearchResults | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [hasSearched, setHasSearched] = useState<boolean>(false);

    const handleSearch = useCallback(async (query: string) => {
        if (!query.trim()) return;
        
        setIsLoading(true);
        setError(null);
        setHasSearched(true);
        setResults(null);

        try {
            const data = await fetchLawData(query);
            setResults(data);
        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-5xl">
                <Header />
                <main className="mt-8">
                    <SearchBar onSearch={handleSearch} isLoading={isLoading} />
                    {hasSearched ? (
                         <ResultsDisplay isLoading={isLoading} results={results} error={error} />
                    ) : (
                        <WelcomeScreen onExampleQueryClick={handleSearch} />
                    )}
                </main>
            </div>
             <footer className="text-center p-4 mt-auto text-slate-500 text-xs">
                <p>Omni is online and ready to assist. This tool is for informational purposes and does not constitute legal advice.</p>
            </footer>
        </div>
    );
};

export default App;
