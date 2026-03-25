'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, ReactNode } from 'react';

function ThemeSyncEffect({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Sync theme on mount
    const theme = localStorage.getItem('invoiceflow-theme') || 'light';
    const html = document.documentElement;
    
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // Listen for storage changes (for multi-tab support)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'invoiceflow-theme') {
        const newTheme = e.newValue || 'light';
        if (newTheme === 'dark') {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return children;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="invoiceflow-theme"
      forcedTheme={undefined}
      themes={['light', 'dark']}
    >
      <ThemeSyncEffect>{children}</ThemeSyncEffect>
    </ThemeProvider>
  );
}
