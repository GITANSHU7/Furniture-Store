'use client';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

interface ListProps {
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  gap?: string;
  className?: string;
}

const List = ({ 
  children, 
  orientation = 'horizontal', 
  gap = 'gap-4', 
  className 
}: ListProps) => {
  const orientationClass = orientation === 'horizontal' ? 'flex-row' : 'flex-col'
  
  return (
    <div className={twMerge(
      'flex',
      orientationClass,
      gap,
      className
    )}>
      {children}
    </div>
  )
}

export default List