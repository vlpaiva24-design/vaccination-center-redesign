import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://novotek-vaccination-center.vl-p-aiva24.chatgpt.site'),
  title: 'Novotek — центр вакцинации',
  description: 'Современная система управления центром вакцинации',
  openGraph: {
    title: 'Novotek — центр вакцинации',
    description: 'Интерактивный редизайн системы управления центром вакцинации',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
