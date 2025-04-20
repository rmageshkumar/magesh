import React from "react";

const Logo = ({ width = 220, className = "" }) => {
  return (
    <svg
      width={width}
      height={width * 0.55}
      viewBox="0 0 300 180"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f5f4" />
          <stop offset="100%" stopColor="#a8a29e" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main logo container with subtle background */}
      <rect
        x="10"
        y="10"
        width="280"
        height="160"
        rx="15"
        fill="rgba(28, 25, 23, 0.4)"
        stroke="url(#logoGradient)"
        strokeWidth="2"
      />

      {/* Initials with glow effect */}
      <text
        x="150"
        y="80"
        fontFamily="Arial, sans-serif"
        fontSize="72"
        fontWeight="bold"
        fill="url(#logoGradient)"
        textAnchor="middle"
        filter="url(#glow)"
      >
        MR
      </text>

      {/* Full name */}
      <text
        x="150"
        y="120"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="medium"
        fill="#f5f5f4"
        textAnchor="middle"
      >
        Mageshkumar Rajendiran
      </text>

      {/* Slogan */}
      <text
        x="150"
        y="150"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontStyle="italic"
        fill="#a8a29e"
        textAnchor="middle"
      >
        Joy of Journey
      </text>
    </svg>
  );
};

export default Logo;
