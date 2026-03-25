import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvoiceFlow - Smart Invoicing App",
  description: "Enterprise-grade offline-first mobile invoicing & billing app for small-to-medium businesses. Create invoices, track payments, and manage your business — even without internet.",
  keywords: ["invoicing", "billing", "offline", "mobile app", "business", "payments"],
  metadataBase: new URL("https://invoiceflow.vercel.app"),
  openGraph: {
    title: "InvoiceFlow - Smart Invoicing App",
    description: "Create invoices, track payments, and manage your business — even offline.",
    url: "https://invoiceflow.vercel.app",
    siteName: "InvoiceFlow",
    images: [{
      url: "https://invoiceflow.vercel.app/og-image.png",
      width: 1200,
      height: 630,
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceFlow - Smart Invoicing App",
    description: "Create invoices, track payments, and manage your business — even offline.",
    images: ["https://invoiceflow.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('invoiceflow-theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="h-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
