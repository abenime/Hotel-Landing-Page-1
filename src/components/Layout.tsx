import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell min-h-screen bg-sand-50 transition-colors">
      <Navbar />
      <main className="pb-12">{children}</main>
      <Footer />
    </div>
  );
}
