'use client';
import '../styles/globals.css';

import { usePathname } from 'next/navigation';
import Header from '../components/General/Header';
import Footer from '../components/General/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const noFooter = pathname === '/example';

  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        {!noFooter && <Footer />}
      </body>
    </html>
  );
}

