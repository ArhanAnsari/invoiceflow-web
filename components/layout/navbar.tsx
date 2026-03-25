'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/#features', label: 'Features' },
    { href: '/features', label: 'Detailed Features' },
    { href: '/download', label: 'Download' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary dark:text-blue-400">
            <Image
              src="/logo.png"
              alt="InvoiceFlow Light Logo"
              width={160}
              height={160}
              className="dark:hidden"
            />
            <Image
              src="/logodark.png"
              alt="InvoiceFlow Dark Logo"
              width={160}
              height={160}
              className="hidden dark:block"
            />
            <span className="dark:text-white">InvoiceFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-smooth"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/download"
              className="inline-flex px-6 py-2 text-sm font-semibold text-white bg-linear-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-smooth shadow-lg"
            >
              Download
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="dark:text-white" /> : <Menu size={24} className="dark:text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-4 transition-colors"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/download"
                className="inline-flex px-6 py-2 text-sm font-semibold text-white bg-linear-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-smooth shadow-lg w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                Download APK
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
