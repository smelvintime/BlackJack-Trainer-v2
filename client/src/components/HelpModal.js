// ===================================================================================
// --- FILE: src/components/HelpModal.js ---
// ===================================================================================
import React from 'react';
import { CheckIcon, CrossIcon, FlameIcon } from './Icons.js';

const HelpModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-gray-800 p-6 rounded-xl shadow-2xl w-full max-w-sm md:max-w-xl max-h-[95vh] overflow-y-auto text-gray-100 relative" onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">How It Works</h2>

                <div className="space-y-5 text-sm leading-relaxed">
                    <section>
                        <h3 className="text-lg font-semibold mb-1 text-yellow-300">What is this?</h3>
                        <p>
                            This trainer deals you real blackjack hands and grades every decision you make
                            (Hit, Stand, Double, Split) against the basic strategy chart. You get instant
                            feedback: <CheckIcon /> means your move matched the
                            chart, <CrossIcon /> means it didn't &mdash; and the
                            correct move is shown so you can learn from it.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-1 text-yellow-300">The Scoreboard</h3>
                        <ul className="space-y-2">
                            <li>
                                <CheckIcon /> / <CrossIcon /> &mdash;
                                Correct and incorrect <em>decisions</em>. This is the number that matters:
                                it tracks how well you know basic strategy.
                            </li>
                            <li>
                                <span className="text-blue-400 font-bold">W</span> / <span className="text-orange-400 font-bold">L</span> / <span className="text-gray-400 font-bold">P</span> &mdash;
                                Hands won, lost, and pushed (tied). A doubled hand counts twice, since
                                twice the stake was riding on it. Note: you can play perfectly and still
                                lose a hand &mdash; that's just blackjack.
                            </li>
                            <li>
                                <span className="text-yellow-400 font-bold">P-BJ</span> / <span className="text-purple-400 font-bold">D-BJ</span> &mdash;
                                How many natural blackjacks you and the dealer have been dealt.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-1 text-yellow-300">The Streak <FlameIcon /></h3>
                        <p>
                            The streak counts <em>consecutive correct decisions</em> &mdash; winning or losing
                            the hand doesn't affect it. It appears once you reach 2 in a row, glows brighter
                            as you climb (10, 25, 50, 100, 150, 200, 250, 300...), and there are special
                            celebrations at 50, 100, 200 and 300. One wrong move resets it to zero.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-1 text-yellow-300">Table Rules</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>8-deck shoe, freshly shuffled every hand.</li>
                            <li>Dealer hits soft 17.</li>
                            <li>Double allowed on any first two cards (including after a split).</li>
                            <li>Split aces receive one card each.</li>
                        </ul>
                    </section>

                    <section className="touch-hide">
                        <h3 className="text-lg font-semibold mb-1 text-yellow-300">Keyboard Shortcuts</h3>
                        <ul className="space-y-1 font-mono">
                            <li><span className="bg-gray-700 px-2 py-0.5 rounded">A</span> Hit</li>
                            <li><span className="bg-gray-700 px-2 py-0.5 rounded">S</span> Stand</li>
                            <li><span className="bg-gray-700 px-2 py-0.5 rounded">D</span> Double</li>
                            <li><span className="bg-gray-700 px-2 py-0.5 rounded">F</span> Split</li>
                            <li><span className="bg-gray-700 px-2 py-0.5 rounded">Space</span> Deal next hand</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HelpModal;
