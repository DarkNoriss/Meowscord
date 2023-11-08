'use client';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { useNavbarStore } from '@/stores/NavbarStore';

const Burger = () => {
  const toggleNavbar = useNavbarStore((state) => state.toggleOpen);

  return (
    <Button
      className="m-0 mx-1 block h-8 w-8 rounded p-0 active:bg-gray-600"
      type="button"
      onClick={toggleNavbar}
      variant="ghost"
    >
      <Menu className="h-6 w-6" color="#9ca3af" />
    </Button>
  );
};

export default Burger;
