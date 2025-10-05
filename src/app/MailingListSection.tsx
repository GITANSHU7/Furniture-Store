'use client';
import { useState } from 'react';
 import Button from'@/components/ui/Button';

const MailingListSection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    // Handle email submission
  }

  return (
    <section className="w-full bg-[#F2F5FF] py-12 sm:py-14 lg:py-15">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col justify-start items-center w-full">
          
          <h2 className="text-2xl text-[#333333] sm:text-2xl lg:text-2xl font-bold leading-4xl text-text-primary text-center mb-3 sm:mb-4 lg:mb-3">
            Join Our Mailing List
          </h2>
          
          <p className="text-md sm:text-lg text-[#666666] lg:text-lg font-normal leading-3xl text-text-secondary text-center mb-8 sm:mb-10 lg:mb-11 w-full sm:w-[70%] lg:w-[38%]">
            Sign up to receive inspiration, product updates, and special offers from our team.
          </p>
          
          {/* Email Input Form */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[80%] lg:w-[36%] bg-secondary-background border border-[#054c73] rounded-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="flex-1 px-4 sm:px-6 lg:px-6 py-4 sm:py-5 lg:py-6 text-[#666666] text-sm sm:text-sm lg:text-sm font-normal leading-sm text-text-muted bg-transparent border-none outline-none placeholder:text-text-muted"
            />
            
            <Button
              text="Submit"
              text_font_size="text-sm lg:text-sm"
              text_font_weight="font-bold"
              text_line_height="leading-sm"
              text_color="text-text-light"
              fill_background_color="bg-[#054c73]"
              border_border_radius="rounded-sm"
              padding="px-6 sm:px-7 lg:px-8 py-4 sm:py-5 lg:py-6"
              onClick={handleSubmit}
              className="border border-primary-accent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MailingListSection