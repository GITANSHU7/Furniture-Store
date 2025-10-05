'use client';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}

const Logo = ({
  className,
  width = 166,
  height = 50,
  alt = 'Beauty Care Logo',
}: LogoProps) => {
  return (
    <Image
      src="/images/img_header_logo.png"
      alt={alt}
      width={width}
      height={height}
      className={twMerge('object-contain', className)}
    />
  );
};

export default Logo;
