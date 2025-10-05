'use client';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  const handleBuyNow = () => {
    // Handle buy now action
  }

  return (
    <section className="w-full relative">
      {/* Background Image */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
        style={{ backgroundImage: 'url(/images/img_mask_group.png)' }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center w-full h-full">
            {/* Content Section */}
            <div className="w-full max-w-[540px] lg:w-1/2 flex flex-col justify-center items-start bg-[#dfe9f4] rounded-lg p-6 sm:p-8 lg:p-9 xl:p-12 shadow-lg">
              <p className="text-black text-xs sm:text-sm lg:text-sm font-semibold leading-sm tracking-[2px] sm:tracking-[3px] text-text-primary mb-3 sm:mb-4 lg:mb-5 uppercase">
                New Arrival
              </p>
              
              <h1 className="text-[#054c73] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold leading-tight sm:leading-[1.3] lg:leading-[65px] text-text-accent mb-4 sm:mb-5 lg:mb-6 w-full">
                Discover Our New Collection
              </h1>
              
              <p className="text-sm text-[#333333] sm:text-base lg:text-lg font-medium leading-relaxed sm:leading-[1.6] lg:leading-[1.8] text-text-primary mb-6 sm:mb-7 lg:mb-8 w-full opacity-90">
                Introducing the pieces you'll wear, use, and love every day. We've blended superior quality with thoughtful design to create items that truly last. Upgrade your essentials and find your new go-to favorites starting now.


              </p>
              
              <Button
                text="BUY NOW"
                text_font_size="text-sm sm:text-base lg:text-lg"
                text_font_weight="font-bold"
                text_line_height="leading-sm"
                text_text_transform="uppercase"
                text_color="text-text-light"
                fill_background_color="bg-[#054c73] "
                border_border_radius="rounded-md"
                padding="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5"
                onClick={handleBuyNow}
                className="hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
