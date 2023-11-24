'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import type { ComponentType } from 'react';
import type { IconBaseProps } from 'react-icons';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type IconComponents = {
  [key: string]: ComponentType<IconBaseProps>;
};

const iconComponents: IconComponents = {
  Friends: dynamic(() => import('react-icons/bs').then((m) => m.BsPersonFill)),
  Nitro: dynamic(() => import('react-icons/fa').then((m) => m.FaCar)),
  Store: dynamic(() => import('react-icons/bi').then((m) => m.BiSolidStore)),
};

type Paths = {
  [key: string]: string;
};

const paths: Paths = {
  Friends: '/channels/me',
  Nitro: '/nitro',
  Store: '/store',
};

type DMNavmenuMenuItemProps = {
  label: string;
};

const DMNavmenuMenuItem = ({ label }: DMNavmenuMenuItemProps) => {
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
      <div className="mr-3 h-6 w-6">{Icon && <Icon size={24} />}</div>
      <span className="text-base">{label}</span>
    </Button>
  );
};

export default DMNavmenuMenuItem;
