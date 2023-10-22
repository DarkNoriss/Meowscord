'use client';

import Header from '@/components/layout/Header';
import { cn } from '@/lib/utils';
import { useAsideStore } from '@/stores/AsideStore';
import { useNavbarStore } from '@/stores/NavbarStore';

const FriendsList = () => {
  const navbarOpen = useNavbarStore((state) => state.open);
  const asideOpen = useAsideStore((state) => state.open);

  return (
    <div
      className={cn(
        'z-10 flex flex-1 flex-col transition-[margin] duration-300 ease-linear',
        navbarOpen ? '' : '-ml-[calc(72px+232px)] sm:ml-0',
      )}
    >
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 bg-gray-600" />
        <aside
          className={cn(
            'bg-slate-900 transition-[width] duration-300 ease-linear',
            asideOpen ? 'w-[340px]' : 'w-0',
          )}
        />
      </div>
    </div>
  );
};

export default FriendsList;
