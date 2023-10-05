'use client';

import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import { useNavbarStore } from '@/stores/NavbarStore';

const FriendsList = () => {
  const navbarOpen = useNavbarStore((state) => state.open);

  return (
    <div
      className={cn(
        'z-10 flex flex-1 flex-col transition-[margin] duration-300 ease-linear',
        navbarOpen ? '' : '-ml-[calc(72px+232px)]',
      )}
    >
      <Header />
      <div className="flex flex-1">
        <main className={cn('flex-1 bg-gray-600', navbarOpen ? '' : '')} />
        <aside className="w-[340px] bg-slate-900" />
      </div>
    </div>
  );
};

export default FriendsList;
