'use client';

import { FileText, Zap, Clock, BarChart3, CreditCard, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FileText,
    title: 'Invoice Management',
    description: 'Create, customize, and send professional invoices in seconds',
  },
  {
    icon: Zap,
    title: 'Offline-First',
    description: 'Full functionality works without internet connection',
  },
  {
    icon: Clock,
    title: 'Real-Time Sync',
    description: 'Automatic WebSocket sync when online, no manual updates',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track revenue, payments, and business metrics instantly',
  },
  {
    icon: CreditCard,
    title: 'Payment Tracking',
    description: 'Monitor paid, pending, and overdue invoices at a glance',
  },
  {
    icon: Users,
    title: 'Multi-Business',
    description: 'Manage multiple businesses from a single app interface',
  },
];

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed for modern business management
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth"
              >
                <div className="w-12 h-12 bg-linear-to-r from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
