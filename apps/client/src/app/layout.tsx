import '@/styles/global.css';
import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meowscord',
  description: 'Text with ur meow frens!',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={cn('antialiased min-h-screen bg-foreground', font.className)}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
