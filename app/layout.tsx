import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zan Armel Kessel Za Bi | Portfolio Lead Frontend React & Fullstack JS',
  description:
    'Portfolio de Zan Armel Kessel Za Bi, Lead Frontend React / Next.js, Fullstack JavaScript, UX/UI produit, architecture frontend et réalisations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
