import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InvoiceFlow - Smart Invoicing for Modern Businesses',
  description: 'Create invoices, track payments, and manage your business — even offline. Offline-first mobile app for SMBs.',
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
