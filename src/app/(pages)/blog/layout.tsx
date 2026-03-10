import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description:
    'Expert insights, treatment guides, and helpful tips from Cronin Orthodontics. Stay informed about orthodontic care, oral health, and treatment options.',
  pathname: '/blog',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
