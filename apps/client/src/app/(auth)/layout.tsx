import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { userId } = auth();

  if (userId) {
    redirect('/channels/me');
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      {children}
    </div>
  );
};
export default Layout;
