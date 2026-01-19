import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OrthodonticCare from '@/components/OrthodonticCare';
import AestheticServices from '@/components/AestheticServices';
import OtherServices from '@/components/OtherServices';
import CTA from '@/components/CTA';
import About from '@/components/About';
import Technology from '@/components/Technology';
import LogoSection from '@/components/LogoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* Main content sections */}
        <div className="relative z-10 bg-background">
          <Hero />
          <OrthodonticCare />
          <AestheticServices />
          <OtherServices />
          <CTA />
          <About />
          <Technology />
        </div>
        
        {/* LogoSection with sticky scroll animation */}
        <LogoSection />
        
        {/* Footer slides over after LogoSection */}
        <div className="relative z-20 bg-background">
          <Footer />
        </div>
      </main>
    </>
  );
}
