'use client';

import { motion } from 'framer-motion';
import { Plus, Users, FileText, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Create Business',
    description: 'Set up your business profile with basic information',
    icon: Plus,
  },
  {
    number: '02',
    title: 'Add Customers',
    description: 'Import or manually add your customers and products',
    icon: Users,
  },
  {
    number: '03',
    title: 'Generate Invoice',
    description: 'Create professional invoices in just a few taps',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Track Payments',
    description: 'Monitor payments and sync data automatically',
    icon: TrendingUp,
  },
];

export function HowItWorksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get started in minutes with our simple setup process
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting Line (desktop only) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-emerald-500 dark:from-blue-500 dark:to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-blue-600 border-2 border-blue-600">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
