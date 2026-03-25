'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 pt-16 transition-colors">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-6">
                ✨ Offline-First Technology
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            >
              Smart Invoicing for Modern Businesses
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Create invoices, track payments, and manage your business — even without internet. Built for SMBs who demand reliability and speed.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-linear-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-smooth shadow-lg hover:shadow-blue"
              >
                <Download size={20} />
                Download APK
              </Link>

              <Link
                href="/#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-900 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-smooth"
              >
                View Features
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="text-sm text-gray-600 dark:text-gray-400">
              💡 No credit card required • Android APK • 100% Free
            </motion.div>
          </div>

          {/* Right - App Preview */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-96 bg-linear-to-br from-blue-600 to-emerald-500 rounded-3xl p-3 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center overflow-hidden transition-colors">
                  <div className="w-full h-full bg-linear-to-br from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 flex flex-col items-center justify-center p-4 transition-colors">
                    <div className="text-center">
                      <Image
                        src="/appicon.png"
                        alt="InvoiceFlow App Icon"
                        width={64}
                        height={64}
                        className="mb-4 mx-auto rounded-2xl"
                      />
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">InvoiceFlow</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Smart Invoicing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 w-48 transition-colors"
              >
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Latest Invoice</div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$1,250.00</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">✅ Paid</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
