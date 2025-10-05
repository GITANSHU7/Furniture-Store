'use client';
import { useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import HeaderMenu from '../ui/HeaderMenu';
import HeaderMenuItem from '../ui/HeaderMenuItem';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={twMerge(
      'w-full bg-white px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6',
      className
    )}>
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/img_header_logo.png"
              alt="Funiro Furniture Logo"
              width={166}
              height={50}
              className="w-[100px] h-auto sm:w-[140px] lg:w-[166px] object-contain"
            />
          </div>

          {/* Hamburger Menu Icon (Mobile & Tablet only) */}
          <button 
            className="block lg:hidden p-2  rounded-md hover:bg-gray-100 transition-colors" 
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg 
              className="w-6 h-6 text-black text-header-text transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <HeaderMenu className="gap-8 xl:gap-12">
              <HeaderMenuItem className="hover:text-text-accent text-black transition-colors cursor-pointer">
                Home
              </HeaderMenuItem>
              <HeaderMenuItem className="hover:text-text-accent text-black  transition-colors cursor-pointer">
                Shop
              </HeaderMenuItem>
              <HeaderMenuItem className="hover:text-text-accent text-black transition-colors cursor-pointer">
                About
              </HeaderMenuItem>
              <HeaderMenuItem className="hover:text-text-accent text-black transition-colors cursor-pointer">
                Contact
              </HeaderMenuItem>
            </HeaderMenu>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4 pb-4 border-t border-border-primary pt-4`}>
          <div className="flex flex-col gap-4">
            <HeaderMenuItem className="hover:text-text-accent text-black transition-colors cursor-pointer py-2">
              Home
            </HeaderMenuItem>
            <HeaderMenuItem className="hover:text-text-accent text-black transition-colors cursor-pointer py-2">
              Shop
            </HeaderMenuItem>
            <HeaderMenuItem className="hover:text-text-accent text-black transition-colors cursor-pointer py-2">
              About
            </HeaderMenuItem>
            <HeaderMenuItem className="hover:text-text-accent text-black transition-colors cursor-pointer py-2">
              Contact
            </HeaderMenuItem>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
