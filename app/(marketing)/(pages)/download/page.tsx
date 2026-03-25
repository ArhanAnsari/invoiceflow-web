import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Download, FileDown, Shield, Smartphone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download - InvoiceFlow',
  description: 'Download InvoiceFlow APK for Android and start managing your business invoices offline.',
};

export default function DownloadPage() {
  return (
    <>
      <SectionWrapper className="bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 pt-24 transition-colors">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Download InvoiceFlow
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get started with smart invoicing in minutes
          </p>
        </div>

        {/* Download Card */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-900 rounded-2xl p-8 md:p-12 mb-12 shadow-soft-lg transition-colors">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-linear-to-r from-blue-600 to-emerald-500 rounded-3xl flex items-center justify-center shadow-lg">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            InvoiceFlow v1.0.4
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Latest release with full offline support and WebSocket sync
          </p>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="shrink-0">
                <Shield className="w-6 h-6 text-green-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">100% Safe & Secure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Built with enterprise-grade encryption. Your data is always protected.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <FileDown className="w-6 h-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Free & Open Source</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No hidden costs, no subscriptions. Download and use forever.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://github.com/ArhanAnsari/InvoiceFlow/releases/download/v1.0.4/InvoiceFlow.v1.0.4.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-8 py-4 text-lg font-semibold text-white bg-linear-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-smooth shadow-lg hover:shadow-blue dark:shadow-none dark:hover:shadow-blue"
            >
              <Download size={24} />
              Download APK (Latest)
            </a>
            <a
              href="https://github.com/ArhanAnsari/InvoiceFlow/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-8 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-700 border-2 border-blue-200 dark:border-blue-900 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-smooth"
            >
              View All Releases on GitHub
            </a>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Installation Steps
          </h2>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Download the APK',
                description: 'Click the download button above to get the latest InvoiceFlow APK file.',
              },
              {
                step: '2',
                title: 'Enable Installation from Unknown Sources',
                description: 'Go to Settings → Security → Unknown Sources and enable it to allow APK installation.',
              },
              {
                step: '3',
                title: 'Install the APK',
                description: 'Open your file manager, find the downloaded APK, and tap to install.',
              },
              {
                step: '4',
                title: 'Launch and Setup',
                description: 'Open InvoiceFlow, create your account, and start managing invoices instantly.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-linear-to-r from-blue-600 to-emerald-500 text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Info Section */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-xl p-8 transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              📱 System Requirements
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li className="flex items-center gap-3">
                <span className="text-blue-600 font-bold">•</span>
                Android 9.0 or higher
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 font-bold">•</span>
                Minimum 100MB free storage
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 font-bold">•</span>
                Internet (optional, works offline)
              </li>
            </ul>

            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <p className="text-sm text-gray-600 mb-4">
                <strong>Note:</strong> InvoiceFlow is currently available only for Android. iOS version coming soon.
              </p>
              <p className="text-sm text-gray-600">
                For updates and new releases, visit our{' '}
                <a
                  href="https://github.com/ArhanAnsari/InvoiceFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  GitHub repository
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
