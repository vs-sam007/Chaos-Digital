import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <Image 
        src="/logo.png" 
        alt="Chaos Digital Logo" 
        width={120} 
        height={120} 
        className="w-20 h-20 md:w-24 md:h-24 object-contain"
        priority
      />
    </div>
  );
}
