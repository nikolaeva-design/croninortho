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
<Navbar />

      <main id="main-content" className="min-h-screen pt-20">
        {children}
      </main>

      <Footer />
    </>
  );
}
