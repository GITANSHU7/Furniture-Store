'use client';
import { twMerge } from 'tailwind-merge';

interface LineProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  className?: string;
}

const Line = ({ 
  width = 'w-full', 
  height = 'h-[1px]', 
  backgroundColor = 'bg-line-background',
  className 
}: LineProps) => {
  return (
    <div className={twMerge(
      width,
      height,
      backgroundColor,
      className
    )} />
  )
}

export default Line