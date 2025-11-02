import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 420 100"
    fill="currentColor"
    {...props}
  >
    {/* Icon Part */}
    <g transform="translate(0, 5) scale(1.4)">
        <g strokeWidth="1.5" stroke="currentColor" fill="none">
            {/* Globe */}
            <circle cx="32" cy="32" r="29" />
            <path d="M3 32 H 61" />
            <path d="M10.3 16 H 53.7" />
            <path d="M10.3 48 H 53.7" />
            <path d="M32 3 V 61" />
            <path d="M16 10.3 C 23 21, 23 43, 16 53.7" />
            <path d="M48 10.3 C 41 21, 41 43, 48 53.7" />
        </g>
        {/* Checkmark */}
        <path 
            d="M18 34 L 28 46 L 52 22" 
            stroke="#4CAF50" 
            fill="none"
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </g>

    {/* Text Part */}
    <g fontFamily="Inter, sans-serif" fontWeight="800" fontSize="36" letterSpacing="0.05em">
        <text x="110" y="38">VERIS</text>
        <text x="110" y="78">IMPACT</text>
    </g>

    {/* Tagline Part */}
    <g 
        fontFamily="Inter, sans-serif" 
        fontWeight="500" 
        fontSize="10" 
        letterSpacing="0.08em"
        fillOpacity="0.8"
    >
        <text x="110" y="95">INDEPENDENT ASSURANCE. LASTING IMPACT.</text>
    </g>
  </svg>
);

export default Logo;
