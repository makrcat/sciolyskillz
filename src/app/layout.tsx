// app/layout.tsx — Server Component (no 'use client')

import '../styles/globals.css';
import Header from '../components/General/Header';
import Footer from '../components/General/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Fredericka+the+Great&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
        />
      </head>
      <body>
        <Header />
        <main className="mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
