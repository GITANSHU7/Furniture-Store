'use client';
import Image from 'next/image';
import List from '@/components/ui/List';

const BrowseRangeSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-8 sm:gap-10 lg:gap-12 w-full">
          
          {/* Section Header */}
          <div className="flex flex-col justify-start items-center text-center max-w-2xl">
            <h2 className="text-[#333] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-text-primary mb-3 sm:mb-4">
              Browse The Range
            </h2>
            <p className="text-base text-[#666666] sm:text-lg lg:text-xl font-normal leading-relaxed text-text-secondary">
             We've made it simple to find what you need.
            </p>
          </div>

          {/* Category Grid */}
          <div className="w-full max-w-[1200px]">
            <List 
              orientation="horizontal" 
              gap="gap-4 sm:gap-6 lg:gap-8"
              className="w-full flex-wrap lg:flex-nowrap justify-center"
            >
              {/* Dining Category */}
              <div className="flex flex-col justify-start items-center gap-4 sm:gap-5 lg:gap-6 w-full sm:w-[280px] md:w-[320px] lg:w-[380px] group">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/img_image_81.png"
                    alt="Dining room furniture"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <Image
                    src="/images/img_image_106.png"
                    alt="Dining room overlay"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-lg text-[#333333] sm:text-xl lg:text-2xl font-semibold leading-tight text-text-primary group-hover:text-text-accent transition-colors">
                  Dining
                </h3>
              </div>

              {/* Living Category */}
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-6 w-full sm:w-[280px] md:w-[320px] lg:w-[380px] group">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/img_image_76.png"
                    alt="Living room furniture"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/images/img_image_99.png"
                      alt="Living room overlay 1"
                      layout="fill"
                      objectFit="cover"
                    />
                    <Image
                      src="/images/img_image_100.png"
                      alt="Living room overlay 2"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg text-[#333333]  sm:text-xl lg:text-2xl font-semibold leading-tight text-text-primary group-hover:text-text-accent transition-colors">
                  Living
                </h3>
              </div>

              {/* Bedroom Category */}
              <div className="flex flex-col justify-start items-center gap-4 sm:gap-5 lg:gap-6 w-full sm:w-[280px] md:w-[320px] lg:w-[380px] group">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src="/images/img_image_82.png"
                    alt="Bedroom furniture"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <Image
                    src="/images/img_image_101.png"
                    alt="Bedroom overlay"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-lg text-[#333333]  sm:text-xl lg:text-2xl font-semibold leading-tight text-text-primary group-hover:text-text-accent transition-colors">
                  Bedroom
                </h3>
              </div>
            </List>
          </div>

          {/* Divider Line */}
          <div className="w-full bg-[#666666] max-w-4xl h-[1px] bg-line-background opacity-30"></div>
        </div>
      </div>
    </section>
  )
}

export default BrowseRangeSection
