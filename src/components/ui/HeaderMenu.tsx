'use client';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

interface HeaderMenuProps {
  children: ReactNode;
  className?: string;
}

const HeaderMenu = ({ children, className }: HeaderMenuProps) => {
  return (
    <nav className={twMerge(
      'flex flex-row items-center',
      className
    )}>
      {children}
    </nav>
  )
}

export default HeaderMenu