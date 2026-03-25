'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Freelance Designer',
    avatar: '👩‍💼',
    text: 'InvoiceFlow has made billing my clients incredibly easy. Love the offline feature!',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Small Business Owner',
    avatar: '👨‍💼',
    text: 'The real-time sync is a game-changer. Never missed a payment update again.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Freelancer',
    avatar: '👩‍🦰',
    text: 'Best invoicing app I\'ve used. Fast, reliable, and truly offline-first.',
  },
];

const trustLogos = [
  { name: 'Tech Daily', icon: '📱' },
  { name: 'Business Pro', icon: '💼' },
  { name: 'Startup Hub', icon: '🚀' },
  { name: 'Dev Weekly', icon: '👨‍💻' },
];

export function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by Users
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of businesses already using InvoiceFlow
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-linear-to-br from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 border border-white dark:border-gray-700"
            >
              <div className="flex items-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{item.avatar}</div>
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-12 border-t border-gray-200"
        >
          <p className="text-sm font-semibold text-gray-600 mb-8">FEATURED ON</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-4xl">{logo.icon}</span>
                <p className="text-sm font-semibold text-gray-700">{logo.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
