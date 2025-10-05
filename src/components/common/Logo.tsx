'use client';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  alt?: string;
}

const Logo = ({ 
  className,
  width = "w-[166px]",
  height = "h-[50px]",
  alt = "Beauty Care Logo"
}: LogoProps) => {
  return (
    <img 
      src="/images/img_header_logo.png" 
      alt={alt}
      className={twMerge(
        `${width} ${height} object-contain`,
        className
      )}
    />
  )
}

export default Logo