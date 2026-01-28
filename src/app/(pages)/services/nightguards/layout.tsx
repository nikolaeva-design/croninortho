import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nightguards | CroninOrtho',
  description: 'Protect your teeth while you sleep with custom nightguards from CroninOrtho. Relief from teeth grinding and jaw clenching for better oral health.',
  openGraph: {
    title: 'Nightguards | CroninOrtho',
    description: 'Protect your teeth while you sleep with custom nightguards. Relief from teeth grinding and clenching.',
  },
};

export default function NightguardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
