import { Navbar, Footer } from '@/components';

/**
 * Layout for interior pages
 * This layout includes the navbar and footer
 * All pages in the (pages) folder will use this layout
 */
export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

      <main id="main-content" className="min-h-screen pt-20">
        {children}
      </main>

      <Footer />
    </>
  );
}
