import '@/styles/global.css';
import '@mantine/core/styles.css';

import { ClerkProvider } from '@clerk/nextjs';
import { DM_Sans } from 'next/font/google';
import type { Metadata } from 'next/types';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meowscord',
  description: 'Text with ur meow frens!',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'antialiased min-h-screen bg-foreground',
            font.className,
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
