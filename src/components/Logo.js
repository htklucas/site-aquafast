import React from 'react';

// FIX: Make className prop optional by providing a default empty string value.
// This resolves the type error when Logo is used without a className prop,
// as was the case in Header.tsx.
export const Logo = ({ className = '' }) => (
    <div className={`logo ${className || ''}`}>
        <svg
            viewBox="0 0 100 100"
            className="logo-svg"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 85.7c-19.7 0-35.7-16-35.7-35.7S30.3 14.3 50 14.3 85.7 30.3 85.7 50 69.7 85.7 50 85.7z"
                opacity="0.2"
            />
            <path
                d="M50 20.3c-14.2 0-25.7 11.5-25.7 25.7S35.8 71.7 50 71.7c7.1 0 13.5-2.9 18.2-7.6-1-12.8-12.2-22.9-25.1-22.9-1.9 0-3.8.2-5.6.6 2.3-10.4 12.1-18.1 23.3-18.1 1.7 0 3.4.2 5 .5-4.2-5.7-10.8-9.3-18.1-9.3z"
            />
             <path d="M70,15 a5,5 0 1,0 10,0 a5,5 0 1,0 -10,0" />
             <path d="M80,28 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0" />
             <path d="M60,10 a3,3 0 1,0 6,0 a3,3 0 1,0 -6,0" />
        </svg>
        <span className="logo-text">AQUAFAST</span>
    </div>
);
