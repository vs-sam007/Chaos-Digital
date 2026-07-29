import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "w-10 h-10 md:w-12 md:h-12", size = 60 }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center select-none shrink-0 ${className}`}>
      <Image 
        src="/logo-tech.png" 
        alt="Chaos Digital Logo" 
        width={size} 
        height={size} 
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}
