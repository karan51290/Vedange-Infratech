import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dark grey circle representing the background part of the logo */}
    <circle cx="60" cy="65" r="45" fill="#4a4a4a" />
    
    {/* Stylized 'V' Left arm */}
    <path d="M20 45 L45 80 L32 85 L18 55 Z" fill="#e84e1b" stroke="#fffefb" strokeWidth="2" strokeLinejoin="round" />
    
    {/* Stylized 'V' Right arm (taller checkmark) */}
    <path d="M40 60 L50 85 L95 15 L60 50 Z" fill="#e84e1b" stroke="#fffefb" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
