'use client';
import Image from 'next/image';
import List from '@/components/ui/List';

const InspirationSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col justify-start items-center w-full">
          
          {/* Section Header */}
          <div className="text-center text-[#333] mb-8 sm:mb-10 lg:mb-12 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-text-primary mb-3 sm:mb-4">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-text-secondary">
              Our designer already made a lot of beautiful prototypes of rooms that inspire you
            </p>
          </div>

          {/* Image Gallery */}
          <div className="w-full lg:w-[90%] overflow-hidden">
            <List 
              orientation="horizontal" 
              gap="gap-4 sm:gap-6 lg:gap-8"
              className="w-full flex-nowrap overflow-x-auto lg:overflow-x-visible justify-start lg:justify-center pb-4"
            >
              {/* First Image */}
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[354px] mt-4 sm:mt-6 lg:mt-8 group">
                <div className="relative overflow-hidden rounded-tl-[40px] sm:rounded-tl-[50px] lg:rounded-tl-[70px] shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src="/images/img_empty_living_ro.png"
                    alt="Empty living room inspiration"
                    width={354}
                    height={434}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Second Image */}
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[354px] mb-4 sm:mb-6 lg:mb-8 group">
                <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src="/images/img_scandinavian_in.png"
                    alt="Scandinavian interior inspiration"
                    width={354}
                    height={434}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Third Image Stack */}
              <div className="flex-shrink-0 relative w-[280px] sm:w-[320px] lg:w-[354px] h-[300px] sm:h-[350px] lg:h-[434px] mt-4 sm:mt-6 lg:mt-8 group">
                <div className="relative w-full h-full overflow-hidden rounded-bl-[40px] sm:rounded-bl-[50px] lg:rounded-bl-[54px] shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src="/images/img_interior_has_ye.png"
                    alt="Interior design inspiration"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <Image
                    src="/images/img_light_lamp_white_wall_1.png"
                    alt="Light lamp decoration"
                    width={108}
                    height={290}
                    className="absolute top-0 right-0 w-[70px] sm:w-[85px] lg:w-[108px] h-auto object-cover rounded-bl-[30px] sm:rounded-bl-[40px] lg:rounded-bl-[54px] shadow-md"
                  />
                </div>
              </div>

              {/* Additional Images for Desktop Scroll */}
              <div className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[354px] mb-4 sm:mb-6 lg:mb-8 group lg:hidden xl:block">
                <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src="/images/img_african_america.png"
                    alt="Modern interior inspiration"
                    width={354}
                    height={434}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </List>
          </div>

          {/* Explore More Button */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <button className="bg-[#054c73] hover:bg-opacity-90 text-text-light font-semibold py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 rounded-md transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InspirationSection
