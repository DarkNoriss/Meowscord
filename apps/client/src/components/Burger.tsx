'use client';

import { Menu } from 'lucide-react';

import { useNavbarStore } from '@/stores/NavbarStore';

const Burger = () => {
  const toggleNavbar = useNavbarStore((state) => state.toggleOpen);

  return (
    <button
      className="h-full rounded active:bg-gray-600"
      type="button"
      onClick={toggleNavbar}
    >
      <Menu className="mx-1" color="#9ca3af" />
    </button>
  );
};

export default Burger;
