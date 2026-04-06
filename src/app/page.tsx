import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { SEO_HOME_DESCRIPTION, SEO_HOME_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  // Ignore root title.template — full homepage title is fixed.
  title: { absolute: SEO_HOME_TITLE },
  description: SEO_HOME_DESCRIPTION,
};

// Skeleton loader for consistent loading states with subtle animation
const SectionSkeleton = ({ height = '600px', bg = '#0a0a0a' }: { height?: string; bg?: string }) => (
  <div className="animate-pulse" style={{ minHeight: height, background: bg }} />
);

// Dynamic imports for below-the-fold components (code splitting for faster initial load)
const OrthodonticCare = dynamic(() => import('@/components/OrthodonticCare'), {
  loading: () => <SectionSkeleton height="600px" />,
});
const AestheticServices = dynamic(() => import('@/components/AestheticServices'), {
  loading: () => <SectionSkeleton height="600px" />,
});
const OtherServices = dynamic(() => import('@/components/OtherServices'), {
  loading: () => <SectionSkeleton height="600px" />,
});
const HomeStats = dynamic(() => import('@/components/HomeStats'), {
  loading: () => <SectionSkeleton height="180px" bg="#ffffff" />,
});
const CTA = dynamic(() => import('@/components/CTA'), {
  loading: () => <SectionSkeleton height="80vh" />,
});
const About = dynamic(() => import('@/components/About'), {
  loading: () => <SectionSkeleton height="600px" bg="#e8e8e8" />,
});
const Technology = dynamic(() => import('@/components/Technology'), {
  loading: () => <SectionSkeleton height="400px" bg="black" />,
});
const LogoSection = dynamic(() => import('@/components/LogoSection'), {
  loading: () => <SectionSkeleton height="100vh" bg="white" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <SectionSkeleton height="400px" bg="#141414" />,
});

export default function Home() {
  return (
    <>
<Navbar />

      <main id="main-content">
        {/* Main content sections */}
        <div className="relative z-10 bg-background">
          <Hero />
          <OrthodonticCare />
          <AestheticServices />
          <About />
          <HomeStats />
          <OtherServices />
          <CTA />
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
