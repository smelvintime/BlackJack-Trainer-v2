// ===================================================================================
// --- FILE: src/components/Icons.js ---
// ===================================================================================
// Inline SVG icons replacing OS-dependent emoji glyphs (✅ ❌ 🔥 💔) so symbols
// render identically on every platform. Sized in em so they scale with the
// surrounding text, and vertically aligned like a text glyph.
// Flame and heart paths adapted from Lucide (lucide.dev, ISC license).
import React from 'react';

const iconStyle = { display: 'inline-block', verticalAlign: '-0.125em' };

export const CheckIcon = ({ className = '' }) => (
    <svg className={className} style={iconStyle} width="1em" height="1em" viewBox="0 0 24 24" role="img" aria-label="Correct">
        <rect x="1" y="1" width="22" height="22" rx="6" fill="#22c55e" />
        <path d="M6.8 12.6l3.6 3.6 6.8-8.4" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CrossIcon = ({ className = '' }) => (
    <svg className={className} style={iconStyle} width="1em" height="1em" viewBox="0 0 24 24" role="img" aria-label="Incorrect">
        <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" fill="none" stroke="#ef4444" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
);

export const FlameIcon = ({ className = '' }) => (
    <svg className={className} style={iconStyle} width="1em" height="1em" viewBox="0 0 24 24" role="img" aria-label="Streak">
        <path
            d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
            fill="#fbbf24" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
    </svg>
);

export const HeartbreakIcon = ({ className = '' }) => (
    <svg className={className} style={iconStyle} width="1em" height="1em" viewBox="0 0 24 24" role="img" aria-label="Streak lost">
        <path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            fill="#ef4444" stroke="#ef4444" strokeWidth="1.5" strokeLinejoin="round"
        />
        <path d="m12 13-1-1 2-2-3-3 2-2" fill="none" stroke="#1f2937" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
