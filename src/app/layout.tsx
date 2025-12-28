import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scrolly Game Jam',
  description: 'No-Code Game Jam - Unity Game Integration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

