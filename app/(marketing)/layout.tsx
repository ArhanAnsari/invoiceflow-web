import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ReactNode } from 'react';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
