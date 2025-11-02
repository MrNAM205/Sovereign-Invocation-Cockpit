
import React from 'react';
import { IconBook } from './IconComponents';

const Header: React.FC = () => {
    return (
        <header className="text-center border-b border-cyan-500/20 pb-4">
            <div className="flex items-center justify-center gap-4">
                <IconBook className="w-10 h-10 text-cyan-400"/>
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-wider">
                    Sovereign Invocation Cockpit
                </h1>
            </div>
            <p className="mt-2 text-md text-slate-400">
                Law Gathering Engine &mdash; Aggregate. Narrate. Invoke.
            </p>
        </header>
    );
};

export default Header;
