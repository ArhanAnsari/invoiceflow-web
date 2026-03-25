'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-r from-blue-600 via-blue-700 to-emerald-600 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-24"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Billing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses managing invoices smarter with InvoiceFlow
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-smooth shadow-xl hover:shadow-2xl"
            >
              <Download size={20} />
              Download APK Now
            </Link>
          </motion.div>

          <p className="text-white/80 text-sm mt-6">
            ✨ No credit card required • Completely free • Works offline
          </p>
        </motion.div>
      </div>
    </section>
  );
}
