'use client';
import Image from 'next/image';
import List from'@/components/ui/List';

const HowItWorksSection = () => {
  return (
    <section className="w-full py-12 sm:py-14 lg:py-14 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center gap-10 sm:gap-12 lg:gap-13 w-full max-w-[1192px] mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col justify-start items-start gap-3 sm:gap-4 lg:gap-4 text-center">
            <h2 className="text-2xl text-[#333333] sm:text-2xl lg:text-2xl font-bold leading-4xl text-text-primary ml-0 sm:ml-28 lg:ml-36">
              How It Works
            </h2>
            <p className="text-md text-[#666666] sm:text-lg lg:text-lg font-normal leading-md text-text-secondary">
              It's a straightforward journey in just three steps.
            </p>
          </div>

          {/* Process Steps */}
          <List 
            orientation="horizontal" 
            gap="gap-4 sm:gap-5 lg:gap-5"
            className="w-full flex-wrap lg:flex-nowrap justify-center ml-0 sm:ml-1 lg:ml-1"
          >
            {/* Step 1: Purchase Securely */}
            <div className="flex flex-col justify-start items-center w-full sm:w-[300px] lg:w-[380px]">
              <div className="flex flex-col justify-start items-center w-full">
                <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px]">
                  <Image
                    src="/images/img_image_83.png"
                    alt="Purchase securely process"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  <Image
                    src="/images/img_african_america.png"
                    alt="African American customer"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                
                {/* Step Number Badge */}
                <div className="flex justify-center items-center w-[72px] sm:w-[81px] lg:w-[90px] h-[72px] sm:h-[81px] lg:h-[90px] bg-secondary-light rounded-2xl ">
                  <div className="bg-[#111111] flex justify-center items-center w-[48px] sm:w-[54px] lg:w-[60px] h-[48px] sm:h-[54px] lg:h-[60px] bg-background-dark rounded-lg">
                    <span className=" text-lg sm:text-xl lg:text-xl font-bold leading-xl text-text-light">
                      1.
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg text-[#333333] sm:text-xl lg:text-xl font-bold leading-xl text-text-primary mt-6 sm:mt-7 lg:mt-7">
                Purchase Securely
              </h3>
              <p className="text-md text-[#666666] sm:text-md lg:text-md font-normal leading-lg text-text-secondary mt-1 text-center">
                Your privacy and security are our top priority. We use industry-leading encryption and the most trusted payment gateways to ensure every transaction is completely safe, giving you total peace of mind.
              </p>
            </div>

            {/* Step 2: Ships From Warehouse */}
            <div className="flex flex-col justify-start items-center w-full sm:w-[300px] lg:w-[380px]">
              <div className="flex flex-col justify-start items-center w-full">
                <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px]">
                  <Image
                    src="/images/img_image_84.png"
                    alt="Warehouse shipping process"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  <Image
                    src="/images/img_image_87.png"
                    alt="Warehouse operations"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                
                {/* Step Number Badge */}
                <div className="flex justify-center items-center w-[72px] sm:w-[81px] lg:w-[90px] h-[72px] sm:h-[81px] lg:h-[90px] bg-secondary-light rounded-2xl">
                  <div className="flex justify-center bg-[#111111] items-center w-[48px] sm:w-[54px] lg:w-[60px] h-[48px] sm:h-[54px] lg:h-[60px] bg-background-dark rounded-lg">
                    <span className="text-lg sm:text-xl lg:text-xl font-bold leading-xl text-text-light">
                      2.
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg text-[#333333] sm:text-xl lg:text-xl font-bold leading-xl text-text-primary mt-6 sm:mt-7 lg:mt-7">
                Ships From Warehouse
              </h3>
              <p className="text-md text-[#666666] sm:text-md lg:text-md font-normal leading-lg text-text-secondary mt-1 sm:mt-2 lg:mt-2 text-center">
                Every order is carefully inspected and packaged right here at our [Your City/Region] warehouse. We prioritize efficient handling and fast dispatch so your new items reach your doorstep quickly and in perfect condition.
              </p>
            </div>

            {/* Step 3: Style Your Room */}
            <div className="flex flex-col justify-start items-center w-full sm:w-[300px] lg:w-[380px]">
              <div className="flex flex-col justify-start items-center w-full">
                <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px]">
                  <Image
                    src="/images/img_image_86.png"
                    alt="Room styling process"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  <Image
                    src="/images/img_empty_living_ro_400x380.png"
                    alt="Empty living room styling"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                
                {/* Step Number Badge */}
                <div className="flex justify-center items-center w-[72px] sm:w-[81px] lg:w-[90px] h-[72px] sm:h-[81px] lg:h-[90px] bg-secondary-light rounded-2xl">
                  <div className="flex justify-center bg-[#111111] items-center w-[48px] sm:w-[54px] lg:w-[60px] h-[48px] sm:h-[54px] lg:h-[60px] bg-background-dark rounded-lg">
                    <span className="text-lg sm:text-xl lg:text-xl font-bold leading-xl text-text-light">
                      3.
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg text-[#333333] sm:text-xl lg:text-xl font-bold leading-xl text-text-primary mt-6 sm:mt-7 lg:mt-7">
                Style Your Room
              </h3>
              <p className="text-md text-[#666666] sm:text-md lg:text-md font-normal leading-lg text-text-secondary mt-1 text-center">
               Find the perfect pieces to bring your vision to life. From statement furniture to the smallest decorative details, our curated collection makes it easy to mix, match, and transform your space into a reflection of your personal style.
              </p>
            </div>
          </List>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
