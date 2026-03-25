'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem
      storageKey="invoiceflow-theme"
      disableTransitionOnChange={false}
      forcedTheme={undefined}
    >
      {children}
    </ThemeProvider>
  );
}
