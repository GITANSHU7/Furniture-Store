'use client';
import HeaderMenu from '@/components/ui/HeaderMenu';
import HeaderMenuItem from '@/components/ui/HeaderMenuItem';

const Footer = () => {
  return (
    <footer className="w-full bg-background-light pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 w-full mb-8 sm:mb-10 lg:mb-12">
            
            {/* Company Information */}
            <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10 sm:col-span-2 lg:col-span-1">
              <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold leading-tight text-text-primary">
                Funiro.
              </h2>
              
              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base lg:text-base font-normal leading-relaxed text-text-secondary">
                  Hoshangabad Road, Bhopal
                </p>
                <p className="text-sm sm:text-base lg:text-base font-normal leading-relaxed text-text-secondary">
                  Madhya Pradesh, India
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10">
              <h3 className="text-base sm:text-lg lg:text-lg font-medium leading-tight text-text-secondary">
                Links
              </h3>
              
              <HeaderMenu className="gap-4 sm:gap-5 lg:gap-6 flex-col">
                <HeaderMenuItem className="text-sm sm:text-base lg:text-base font-medium hover:text-text-accent transition-colors cursor-pointer">
                  Home
                </HeaderMenuItem>
                <HeaderMenuItem className="text-sm sm:text-base lg:text-base font-medium hover:text-text-accent transition-colors cursor-pointer">
                  Shop
                </HeaderMenuItem>
                <HeaderMenuItem className="text-sm sm:text-base lg:text-base font-medium hover:text-text-accent transition-colors cursor-pointer">
                  About
                </HeaderMenuItem>
                <HeaderMenuItem className="text-sm sm:text-base lg:text-base font-medium hover:text-text-accent transition-colors cursor-pointer">
                  Contact
                </HeaderMenuItem>
              </HeaderMenu>
            </div>

            {/* Help Section */}
            <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10">
              <h3 className="text-base sm:text-lg lg:text-lg font-medium leading-tight text-text-secondary">
                Help
              </h3>
              
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                <p className="text-sm sm:text-base lg:text-base font-medium leading-relaxed text-text-primary hover:text-text-accent transition-colors cursor-pointer">
                  Payment Options
                </p>
                <p className="text-sm sm:text-base lg:text-base font-medium leading-relaxed text-text-primary hover:text-text-accent transition-colors cursor-pointer">
                  Returns
                </p>
                <p className="text-sm sm:text-base lg:text-base font-medium leading-relaxed text-text-primary hover:text-text-accent transition-colors cursor-pointer">
                  Privacy Policies
                </p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 lg:gap-10 sm:col-span-2 lg:col-span-1">
              <h3 className="text-base sm:text-lg lg:text-lg font-medium leading-tight text-text-secondary">
                Newsletter
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  className="flex-1 pb-2 border-b border-text-primary text-sm sm:text-base lg:text-base font-normal leading-relaxed text-text-secondary bg-transparent placeholder:text-text-secondary focus:outline-none focus:border-text-accent transition-colors"
                />
                <button className="pb-2 border-b border-text-primary text-sm sm:text-base lg:text-base font-medium leading-relaxed text-text-primary bg-transparent hover:text-text-accent hover:border-text-accent transition-colors whitespace-nowrap">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full border-t border-line-background pt-6 sm:pt-7 lg:pt-8">
            <p className="text-sm sm:text-base lg:text-base font-normal leading-relaxed text-text-primary text-center lg:text-left">
              2025 furino. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer