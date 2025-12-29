
import React from 'react';

export const ORANGUTAN_LOGO_SVG = (color: string = '#2d2a26') => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Minimalist Orangutan representation inspired by the user's image */}
    <path 
      d="M100 60C100 60 120 70 125 90C130 110 120 140 100 160C80 140 70 110 75 90C80 70 100 60 100 60Z" 
      fill={color} 
    />
    <path 
      d="M100 10C80 10 60 20 50 40C45 50 45 70 55 85C50 90 45 100 45 110C45 130 60 150 100 150C140 150 155 130 155 110C155 100 150 90 145 85C155 70 155 50 150 40C140 20 120 10 100 10Z" 
      stroke={color} 
      strokeWidth="4" 
      fill="transparent"
    />
    <path 
      d="M60 40C70 45 80 40 85 30" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M140 40C130 45 120 40 115 30" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    {/* Hanging Branch */}
    <path 
      d="M20 20C40 25 160 15 180 30" 
      stroke={color} 
      strokeWidth="6" 
      strokeLinecap="round"
    />
    <circle cx="90" cy="85" r="3" fill="white" />
    <circle cx="110" cy="85" r="3" fill="white" />
    <path d="M95 100C95 100 100 103 105 100" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TEXTURE_OVERLAY = (
  <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }}></div>
);

export const RICE_PATTERN = (color: string) => (
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-10">
    <path d="M10 5 Q 15 10, 10 15 Q 5 10, 10 5" fill={color} />
    <path d="M30 25 Q 35 30, 30 35 Q 25 30, 30 25" fill={color} />
    <path d="M5 25 Q 10 30, 5 35 Q 0 30, 5 25" fill={color} />
    <path d="M25 5 Q 30 10, 25 15 Q 20 10, 25 5" fill={color} />
  </svg>
);
