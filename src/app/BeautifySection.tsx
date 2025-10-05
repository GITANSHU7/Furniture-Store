'use client';
import Button from'@/components/ui/Button';

const BeautifySection = () => {
  const handleLearnMore = () => {
    // Handle learn more action
  }

  return (
    <section className="w-full bg-[#F2F5FF] py-12 sm:py-14 lg:py-15">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 w-full lg:w-[88%] mx-auto">
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start order-2 lg:order-1 lg:ml-6">
            <h2 className="text-[#333333] text-2xl sm:text-2xl lg:text-2xl font-bold leading-4xl text-text-primary mb-4 sm:mb-5 lg:mb-6">
              Beautify Your Space
            </h2>
            
            <p className=" text-[#666666] text-md sm:text-lg lg:text-lg font-normal leading-3xl text-text-secondary mb-6 sm:mb-7 lg:mb-7 w-full lg:w-[88%]">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            
            <Button
              text="Learn More"
              text_font_size="text-sm lg:text-sm"
              text_font_weight="font-bold"
              text_line_height="leading-sm"
              text_text_transform="uppercase"
              text_color="text-text-light"
              fill_background_color="bg-[#054c73]"
              border_border_radius="rounded-xl"
              padding="px-6 sm:px-7 lg:px-8 py-4 sm:py-5 lg:py-6"
              onClick={handleLearnMore}
            />
          </div>

          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[754px] order-1 lg:order-2">
            {/* Background Circle */}
            <div className="bg-[#09513b] absolute top-[120px] sm:top-[150px] lg:top-[189px] right-0 w-[280px] sm:w-[320px] lg:w-[372px] h-[280px] sm:h-[320px] lg:h-[372px] bg-background-success rounded-full"></div>
            
            {/* Main Image */}
            <img 
              src="/images/img_image_97.png" 
              alt="Beautiful space decoration" 
              className="absolute top-0 left-0 w-[88%] h-full object-cover rounded-[48px] sm:rounded-[54px] lg:rounded-[60px] rounded-tr-[8px] sm:rounded-tr-[9px] lg:rounded-tr-[10px] rounded-br-[8px] sm:rounded-br-[9px] lg:rounded-br-[10px] rounded-bl-[48px] sm:rounded-bl-[54px] lg:rounded-bl-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeautifySection