import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OrthodonticCare from '@/components/OrthodonticCare';
import AestheticServices from '@/components/AestheticServices';
import OtherServices from '@/components/OtherServices';
import CTA from '@/components/CTA';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import LogoSection from '@/components/LogoSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Main content - above the fixed LogoSection */}
      <div className="relative z-10 bg-background">
        <Hero />
        <OrthodonticCare />
        <AestheticServices />
        <OtherServices />
        <CTA />
        <About />
        <Gallery />
      </div>
      {/* LogoSection is fixed at z-0 */}
      <LogoSection />
      {/* Footer slides over LogoSection */}
      <Footer />
    </main>
  );
}
