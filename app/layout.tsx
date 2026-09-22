import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://novotek-vaccination-center.vl-p-aiva24.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
      <body>{children}</body>
    </html>
  );
}
