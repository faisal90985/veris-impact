import React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    // Adjust viewBox for better proportions, closer to the source image (approx 3.1:1)
    viewBox="0 0 380 120"
    fill="currentColor"
    {...props}
  >
    {/* Icon Part */}
    {/* Centered the icon in a 120x120 box */}
    <g> 
        <g strokeWidth="3.5" stroke="currentColor" fill="none">
            {/* Globe, diameter 100, centered at (60, 60) */}
            <circle cx="60" cy="60" r="48" />
            <path d="M12 60 H 108" />
            <path d="M26.5 35 H 93.5" />
            <path d="M26.5 85 H 93.5" />
            <path d="M60 12 V 108" />
            <path d="M35 26.5 C 47 45, 47 75, 35 93.5" />
            <path d="M85 26.5 C 73 45, 73 75, 85 93.5" />
        </g>
        {/* Checkmark, made thicker and with a more vibrant green to match the image */}
        <path 
            d="M38 62 L 55 78 L 92 42" 
            stroke="#3cb54a" 
            fill="none"
            strokeWidth="10" // Increased width for impact
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </g>

    {/* Text Part, adjusted positions and sizes */}
    <g fontFamily="Inter, sans-serif" fontWeight="800" fontSize="40" letterSpacing="0.02em">
        <text x="135" y="55">VERIS</text>
        <text x="135" y="95">IMPACT</text>
    </g>

    {/* Tagline Part, adjusted position to be closer to main text */}
    <g 
        fontFamily="Inter, sans-serif" 
        fontWeight="500" 
        fontSize="10.5" 
        letterSpacing="0.08em"
        fillOpacity="0.9"
    >
        <text x="135" y="112">INDEPENDENT ASSURANCE. LASTING IMPACT.</text>
    </g>
  </svg>
);

export default Logo;
