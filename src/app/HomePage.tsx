'use client';
import Header from'@/components/common/Header';
 import Footer from'@/components/common/Footer';
 import HeroSection from'./HeroSection';
 import ServicesSection from'./ServicesSection';
 import InspirationSection from'./InspirationSection';
import BeautifySection from './BeautifySection';
 import BrowseRangeSection from'./BrowseRangeSection';
 import HowItWorksSection from'./HowItWorksSection';
 import MailingListSection from'./MailingListSection';

const HomePage = () => {
  return (
    <div className="w-full bg-secondary-light">
      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <InspirationSection />
        <BeautifySection />
        <BrowseRangeSection />
        <HowItWorksSection />
        <MailingListSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default HomePage