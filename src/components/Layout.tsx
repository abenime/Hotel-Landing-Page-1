import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <main className="pb-12">{children}</main>
      <Footer />
    </div>
  );
}
