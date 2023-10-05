import '@/styles/global.css';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavbarChannels from '@/components/NavbarChannels';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <MantineProvider>
          <div className="flex h-screen w-screen bg-gray-600">
            <NavbarChannels />
            <div className="flex flex-1">{children}</div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
