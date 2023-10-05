import '@/styles/global.css';
import '@mantine/core/styles.css';

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
        <div className="flex h-screen w-screen">
          <NavbarChannels />
          <div className="flex flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
