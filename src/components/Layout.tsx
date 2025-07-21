import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>My Header</header>
      <main>{children}</main>
      <footer>My Footer</footer>
    </>
  );
}