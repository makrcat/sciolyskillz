import Header from './Header';
import Footer from './Footer';

export default function Layout({
  children,
  noFooter,
}: {
  children: React.ReactNode;
  noFooter?: boolean;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {!noFooter && <Footer />}
    </div>
  );
}
