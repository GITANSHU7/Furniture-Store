'use client';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

interface HeaderMenuItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const HeaderMenuItem = ({ children, className, onClick }: HeaderMenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'text-xs font-semibold leading-xs text-header-text hover:text-text-accent transition-colors duration-200',
        className
      )}
    >
      {children}
    </button>
  )
}

export default HeaderMenuItem