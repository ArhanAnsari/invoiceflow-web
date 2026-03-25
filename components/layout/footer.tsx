'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Code2, Share2, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 py-12 sm:py-16 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-primary mb-2">
              {/* Light mode logo */}
              <Image
                src="/logo.png"
                alt="InvoiceFlow Light Logo"
                width={160}
                height={160}
                className="dark:hidden"
              />
              {/* Dark mode logo */}
              <Image
                src="/logodark.png"
                alt="InvoiceFlow Dark Logo"
                width={160}
                height={160}
                className="hidden dark:block"
              />
              <span className="dark:text-white">InvoiceFlow</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Smart invoicing for modern businesses
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-smooth">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-smooth">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-smooth">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-smooth">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/ArhanAnsari/InvoiceFlow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-smooth"
              >
                <Code2 size={20} />
              </a>
              <a
                href="https://x.com/share?url=https://invoiceflow.vercel.app&text=Check%20out%20InvoiceFlow%20-%20Smart%20offline%20invoicing%20for%20modern%20businesses!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-smooth"
              >
                <Share2 size={20} />
              </a>
              <a
                href="mailto:arhanansari2009@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-smooth"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} InvoiceFlow. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js • Powered by WebSockets
          </p>
        </div>
      </div>
    </footer>
  );
}
