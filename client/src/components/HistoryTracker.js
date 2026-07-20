// ===================================================================================
// --- FILE: src/components/HistoryTracker.js ---
// ===================================================================================
import React, { useState } from 'react';
import { CheckIcon, CrossIcon, ChevronDownIcon } from './Icons.js';

const HistoryTracker = ({ history, correctCount, incorrectCount, winCount, lossCount, pushCount, playerBjCount, dealerBjCount }) => {
    const opacities = ['opacity-100', 'opacity-75', 'opacity-60', 'opacity-40', 'opacity-25'];
    // Hover can't expand the list on touch screens, so tapping the panel toggles it
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className="w-full md:w-72 bg-gray-800 bg-opacity-80 backdrop-blur-sm text-white p-4 rounded-xl shadow-2xl z-20 group cursor-pointer"
            onClick={() => setExpanded(e => !e)}
            aria-expanded={expanded}
        >
            <div className="flex justify-between items-start border-b border-gray-600 pb-2 mb-2">
                <h3 className="text-lg font-bold flex items-center gap-1">
                    History
                    <ChevronDownIcon className={`text-sm text-gray-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                </h3>
                <div className="flex flex-col items-end text-sm space-y-1">
                    <div className="flex gap-3">
                        <span className="text-blue-400" title="Hands won">W: {winCount}</span>
                        <span className="text-orange-400" title="Hands lost">L: {lossCount}</span>
                        <span className="text-gray-400" title="Pushes (ties)">P: {pushCount}</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-green-400" title="Correct decisions"><CheckIcon /> {correctCount}</span>
                        <span className="text-red-400" title="Incorrect decisions"><CrossIcon /> {incorrectCount}</span>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-yellow-400" title="Player blackjacks">P-BJ: {playerBjCount}</span>
                        <span className="text-purple-400" title="Dealer blackjacks">D-BJ: {dealerBjCount}</span>
                    </div>
                </div>
            </div>
            <ul className={`space-y-2 transition-all duration-300 group-hover:max-h-96 group-hover:overflow-y-auto ${expanded ? 'max-h-96 overflow-y-auto' : 'max-h-28 overflow-hidden'}`}>
                {history.slice(0, 25).map((item, index) => (
                    <li key={index} className={`text-sm transition-opacity duration-300 ${index < 5 ? opacities[index] : 'opacity-25'}`}>
                        {item.isResult ? (
                            <span className="font-bold text-yellow-300">{item.text}</span>
                        ) : (
                            <>
                                {item.correct ? <CheckIcon /> : <CrossIcon />} {item.text}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HistoryTracker;
