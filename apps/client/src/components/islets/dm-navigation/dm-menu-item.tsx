'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import type { ComponentType } from 'react';
import type { IconBaseProps } from 'react-icons';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const IconFriend = dynamic(() =>
  import('react-icons/bs').then((m) => m.BsPersonFill),
);
const IconNitro = dynamic(() => import('react-icons/fa').then((m) => m.FaCar));
const IconStore = dynamic(() =>
  import('react-icons/bi').then((m) => m.BiSolidStore),
);
type IconComponents = {
  [key: string]: ComponentType<IconBaseProps>;
};

const iconComponents: IconComponents = {
  Friends: IconFriend,
  Nitro: IconNitro,
  Store: IconStore,
};

type Paths = {
  [key: string]: string;
};

const paths: Paths = {
  Friends: '/channels/me',
  Nitro: '/nitro',
  Store: '/store',
};

type DMMenuItemProps = {
  label: string;
};

const DMMenuItem = ({ label }: DMMenuItemProps) => {
  const pathname = usePathname();
  const Icon = iconComponents[label];

  const isActive = () => {
    return pathname === paths[label];
  };

  return (
    <Button
      className={cn(
        'justify-start',
        isActive() ? 'text-primary' : 'text-muted',
      )}
      variant="ghost"
    >
      {Icon && <Icon className="mr-3" size={24} />}
      <span className="text-base">{label}</span>
    </Button>
  );
};

export default DMMenuItem;
