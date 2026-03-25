import { SectionWrapper } from '@/components/layout/section-wrapper';
import { FileText, Zap, Clock, BarChart3, CreditCard, Users, Lock, Cloud } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - InvoiceFlow',
  description: 'Explore all the powerful features InvoiceFlow offers for smart invoicing and business management.',
};

const detailedFeatures = [
  {
    icon: FileText,
    title: 'Invoice Management',
    description: 'Create, customize, and send professional invoices in seconds with our intuitive interface.',
    details: [
      'Customizable invoice templates',
      'Multiple payment terms support',
      'Automatic invoice numbering',
      'Invoice status tracking',
      'Bulk invoice operations',
    ],
  },
  {
    icon: Zap,
    title: 'Offline-First Architecture',
    description: 'Full functionality works seamlessly without internet connection.',
    details: [
      'Complete offline operations',
      'Local data storage',
      'Zero network dependency',
      'Instant response times',
      'No data loss on disconnection',
    ],
  },
  {
    icon: Clock,
    title: 'Real-Time Sync',
    description: 'Automatic WebSocket synchronization keeps your data up-to-date across devices.',
    details: [
      'Instant data synchronization',
      'Multi-device support',
      'WebSocket integration',
      'Conflict resolution',
      'Background sync',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track revenue, payments, and business metrics with beautiful visualizations.',
    details: [
      'Revenue analytics',
      'Payment trends',
      'Business insights',
      'Custom reports',
      'Data exports',
    ],
  },
  {
    icon: CreditCard,
    title: 'Payment Tracking',
    description: 'Monitor paid, pending, and overdue invoices at a glance.',
    details: [
      'Payment status tracking',
      'Overdue alerts',
      'Payment reminders',
      'Multi-currency support',
      'Payment history',
    ],
  },
  {
    icon: Users,
    title: 'Multi-Business Support',
    description: 'Manage multiple businesses from a single app interface.',
    details: [
      'Switch between businesses instantly',
      'Separate invoices per business',
      'Individual settings per business',
      'Cross-business reports',
      'Team collaboration',
    ],
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption protects your sensitive business data.',
    details: [
      'End-to-end encryption',
      'Secure local storage',
      'Authentication',
      'Data privacy compliance',
      'Regular backups',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Optional cloud backup and restoration for peace of mind.',
    details: [
      'Automatic backups',
      'Cloud restoration',
      'Version history',
      'Data redundancy',
      'Disaster recovery',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to manage your business invoicing efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-soft-lg transition-smooth"
              >
                <div className="w-12 h-12 bg-linear-to-r from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
