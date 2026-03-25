import { SectionWrapper } from '@/components/layout/section-wrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - InvoiceFlow',
  description: 'Privacy policy for InvoiceFlow offline-first invoicing app.',
};

export default function PrivacyPage() {
  return (
    <SectionWrapper className="bg-white dark:bg-gray-950 pt-24 transition-colors">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last updated: March 25, 2026
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p>
              InvoiceFlow ("we", "us", "our", or "Company") operates the InvoiceFlow mobile application (the "Service").
            </p>
            <p>
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
            <p>
              By using InvoiceFlow, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Information Collection and Use
            </h2>
            <p>
              InvoiceFlow is an offline-first application. The majority of your data is stored locally on your device.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
              Local Data Storage
            </h3>
            <p>
              When you use InvoiceFlow, the following information is stored locally on your device:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Business information and settings</li>
              <li>Customer and contact details</li>
              <li>Invoice records and history</li>
              <li>Payment tracking information</li>
              <li>Product and inventory data</li>
              <li>User preferences and settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
              Optional Cloud Backup
            </h3>
            <p>
              If you choose to enable cloud backup features, the following occurs:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Your encrypted data is uploaded to our secure servers</li>
              <li>Data is encrypted before transmission</li>
              <li>You can decrypt and restore your data anytime</li>
              <li>You maintain full control over your data</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
              Usage and Diagnostic Data
            </h3>
            <p>
              We may collect limited usage analytics including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>App crashes and errors</li>
              <li>Feature usage statistics (non-identifying)</li>
              <li>Performance metrics</li>
              <li>Device type and OS version</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Security of Data
            </h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            <p>
              InvoiceFlow employs industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>End-to-end encryption for sensitive data</li>
              <li>Secure local storage using device encryption</li>
              <li>TLS/SSL encryption for data transmission</li>
              <li>Regular security audits and updates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Third-Party Services
            </h2>
            <p>
              InvoiceFlow may use third-party services for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Cloud storage and backup (optional)</li>
              <li>Analytics and crash reporting</li>
              <li>Payment processing integration</li>
            </ul>
            <p className="mt-4">
              These third parties are contractually obligated to use your information only as necessary to provide services to us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Your Rights
            </h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access all your personal data stored in the app</li>
              <li>Delete your data at any time</li>
              <li>Export your data in standard formats</li>
              <li>Opt-out of analytics collection</li>
              <li>Disable cloud backup features</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Children's Privacy
            </h2>
            <p>
              Our Service is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2 mt-3">
              <li>By visiting our GitHub: https://github.com/ArhanAnsari/InvoiceFlow</li>
              <li>By email: support@invoiceflow.app</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
