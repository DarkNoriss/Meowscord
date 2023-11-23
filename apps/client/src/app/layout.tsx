import '@/styles/global.css';
import '@mantine/core/styles.css';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { DM_Sans } from 'next/font/google';
import type { Metadata } from 'next/types';
import type { ReactNode } from 'react';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meowscord',
  description: 'Text with ur meow frens!',
};

type RootLayoutProps = { children: ReactNode };

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            'antialiased min-h-screen bg-background',
            font.className,
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
