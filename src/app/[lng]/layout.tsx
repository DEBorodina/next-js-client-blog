/* eslint-disable simple-import-sort/imports */
import { dir } from 'i18next';
import { Nunito } from 'next/font/google';

import { languages } from '@/app/i18n/settings';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/global.scss';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
const inter = Nunito({
  weight: ['900', '700', '600', '500', '400'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata = {
  title: 'Modsen client blog',
  description: 'Client blog',
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: 'ru' | 'en' };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <div id="portal" />
        <Header />
        <main>{children}</main>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
