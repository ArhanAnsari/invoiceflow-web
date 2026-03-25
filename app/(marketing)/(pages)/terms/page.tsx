import { SectionWrapper } from '@/components/layout/section-wrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - InvoiceFlow',
  description: 'Terms of Service for InvoiceFlow offline-first invoicing app.',
};

export default function TermsPage() {
  return (
    <SectionWrapper className="bg-white dark:bg-gray-950 pt-24 transition-colors">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Terms of Service
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last updated: March 25, 2026
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading and using InvoiceFlow, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. License to Use
            </h2>
            <p>
              InvoiceFlow grants you a personal, non-commercial, non-exclusive, non-transferable license to use the InvoiceFlow application, subject to these Terms of Service. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Modify or create derivative works based on the application</li>
              <li>Reverse engineer, decompile, or disassemble the application</li>
              <li>Rent, lease, or lend the application</li>
              <li>Transfer your rights to another person</li>
              <li>Use the application for any illegal or unauthorized purpose</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. User Responsibilities
            </h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Maintaining the security of your account credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Keeping your device and application software updated</li>
              <li>Creating regular backups of your important data</li>
              <li>Complying with all applicable laws and regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Intellectual Property Rights
            </h2>
            <p>
              InvoiceFlow is released as open-source software under the MIT License. You are free to use, modify, and distribute the software in accordance with the open-source license terms.
            </p>
            <p className="mt-4">
              The InvoiceFlow name, logo, and brand identity are proprietary and may not be used without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p>
              INVOICEFLOW IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. INVOICEFLOW MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, REGARDING THE APPLICATION AND HEREBY DISCLAIMS ALL IMPLIED WARRANTIES INCLUDING, WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              IN NO EVENT SHALL INVOICEFLOW BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
            </p>
            <p className="mt-4">
              INVOICEFLOW SHALL NOT BE LIABLE FOR ANY DAMAGES RELATED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Loss or corruption of data</li>
              <li>Loss of business or revenue</li>
              <li>Unauthorized access to your data</li>
              <li>Any third-party services or products</li>
              <li>Network or internet connectivity issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Acceptable Use
            </h2>
            <p>
              You agree not to use InvoiceFlow:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>For any illegal or unlawful purpose</li>
              <li>To violate any applicable laws or regulations</li>
              <li>To infringe upon the rights of others</li>
              <li>To transmit malware or harmful code</li>
              <li>To disrupt or interfere with the service</li>
              <li>To impersonate or misrepresent your identity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Data Backup Responsibility
            </h2>
            <p>
              While InvoiceFlow provides backup capabilities, you are solely responsible for creating and maintaining backups of your data. InvoiceFlow is not responsible for any data loss that may occur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Modifications to Service
            </h2>
            <p>
              InvoiceFlow reserves the right to modify or discontinue the application or any features at any time. InvoiceFlow is not liable to you or any third party for any modification, suspension, or discontinuation of the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Termination
            </h2>
            <p>
              Your right to use InvoiceFlow will automatically terminate if you fail to comply with these Terms of Service. Upon termination, you must cease all use of the application and delete all copies in your possession.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the applicable jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts located in that jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Changes to Terms
            </h2>
            <p>
              InvoiceFlow reserves the right to modify these Terms of Service at any time. Changes will be effective upon posting to the application or website. Your continued use of InvoiceFlow following the posting of revised Terms of Service means that you accept and agree to the changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="space-y-2 mt-3">
              <li>GitHub: https://github.com/ArhanAnsari/InvoiceFlow</li>
              <li>Email: support@invoiceflow.app</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Severability
            </h2>
            <p>
              If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
