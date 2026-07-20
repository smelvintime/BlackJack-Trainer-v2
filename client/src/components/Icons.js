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
        <path d="M4.5 13l5.2 5.2L19.5 6" fill="none" stroke="#22c55e" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
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

export const ChevronDownIcon = ({ className = '' }) => (
    <svg className={className} style={iconStyle} width="1em" height="1em" viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Card suit pips as SVG so every platform draws the exact same shapes.
// fill is currentColor: the Card component's text color classes tint them.
const SUIT_PATHS = {
    '♠': 'M12 2C9.2 6.8 4 9.4 4 13.4 4 15.9 6 18 8.5 18c.9 0 1.8-.3 2.4-.9-.3 1.7-1 2.9-2.4 3.9h7c-1.4-1-2.1-2.2-2.4-3.9.6.6 1.5.9 2.4.9C18 18 20 15.9 20 13.4c0-4-5.2-6.6-8-11.4z',
    '♥': 'M12 21S3.4 15.2 2.2 9.8C1.4 6.4 3.8 3.5 6.8 3.5c2.1 0 4 1.2 5.2 3.2 1.2-2 3.1-3.2 5.2-3.2 3 0 5.4 2.9 4.6 6.3C20.6 15.2 12 21 12 21z',
    '♦': 'M12 2l6.5 10L12 22 5.5 12z',
    '♣': 'M12 2a4 4 0 0 0-3.6 5.8A4 4 0 1 0 10.9 14c-.2 2.4-.9 4.5-2.4 6h7c-1.5-1.5-2.2-3.6-2.4-6a4 4 0 1 0 2.5-6.2A4 4 0 0 0 12 2z',
};

export const SuitIcon = ({ suit, className = '' }) => (
    <svg className={className} style={iconStyle} width="1em" height="1em" viewBox="0 0 24 24" role="img" aria-label={suit}>
        <path d={SUIT_PATHS[suit] || SUIT_PATHS['♠']} fill="currentColor" />
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
