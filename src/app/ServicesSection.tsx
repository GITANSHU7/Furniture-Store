'use client';

const ServicesSection = () => {
  return (
    <section className="w-full bg-cyan-50  py-8 sm:py-12 lg:py-16 bg-background-secondary">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 w-full">
          
          {/* High Quality Service */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start w-full lg:flex-1 gap-3 sm:gap-4 lg:gap-5 group hover:bg-white hover:shadow-md rounded-lg p-4 transition-all duration-200">
            {/* Icon */}
            <div className="relative flex-shrink-0">
              <img 
                src="/images/table.svg" 
                alt="High Quality Icon" 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-transform group-hover:scale-110 duration-200"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-start items-center sm:items-start flex-1 text-center sm:text-left">
              <h3 className="text-black text-base sm:text-lg lg:text-xl font-semibold leading-tight text-text-primary mb-1 sm:mb-2">
                High Quality
              </h3>
              <p className="text-sm text-[#333333] sm:text-base lg:text-lg font-normal leading-relaxed text-text-secondary">
                crafted from top materials
              </p>
            </div>
          </div>

          {/* Warranty Protection Service */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start w-full lg:flex-1 gap-3 sm:gap-4 lg:gap-5 group hover:bg-white hover:shadow-md rounded-lg p-4 transition-all duration-200">
            {/* Icon */}
            <div className="relative flex-shrink-0">
              <img 
                // src="/images/img_group.svg" 
                src="/images/img_shield_1_1.png" 
                alt="Warranty Protection Icon" 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-transform group-hover:scale-110 duration-200"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-start items-center sm:items-start flex-1 text-center sm:text-left">
              <h3 className=" text-black text-base sm:text-lg lg:text-xl font-semibold leading-tight text-text-primary mb-1 sm:mb-2">
                Warranty Protection
              </h3>
              <p className="text-sm text-[#333333] sm:text-base lg:text-lg font-normal leading-relaxed text-text-secondary">
                Over 2 years
              </p>
            </div>
          </div>

          {/* Free Shipping Service */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start w-full lg:flex-1 gap-3 sm:gap-4 lg:gap-5 group hover:bg-white hover:shadow-md rounded-lg p-4 transition-all duration-200">
            {/* Icon */}
            <div className="relative flex-shrink-0">
              <img 
                src="/images/img_vector_gray_900_50x70.svg" 
                // src="/images/img_shield_1_1.png" 
                alt="Free Shipping Icon" 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-transform group-hover:scale-110 duration-200"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-start items-center sm:items-start flex-1 text-center sm:text-left">
              <h3 className="text-base text-black sm:text-lg lg:text-xl font-semibold leading-tight text-text-primary mb-1 sm:mb-2">
                Free Shipping
              </h3>
              <p className="text-sm text-[#333333] sm:text-base lg:text-lg font-normal leading-relaxed text-text-secondary">
                Order over 150 $
              </p>
            </div>
          </div>

          {/* 24/7 Support Service */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start w-full lg:flex-1 gap-3 sm:gap-4 lg:gap-5 group hover:bg-white hover:shadow-md rounded-lg p-4 transition-all duration-200">
            {/* Icon */}
            <div className="relative flex-shrink-0">
              <img 
                src="/images/img_group.svg" 
                alt="24/7 Support Icon" 
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-transform group-hover:scale-110 duration-200"
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-start items-center sm:items-start flex-1 text-center sm:text-left">
              <h3 className="text-base text-black sm:text-lg lg:text-xl font-semibold leading-tight text-text-primary mb-1 sm:mb-2">
                24 / 7 Support
              </h3>
              <p className="text-sm text-[#333333] sm:text-base lg:text-lg font-normal leading-relaxed text-text-secondary">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection