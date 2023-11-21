'use client';

import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type DMMenuItemProps = {
  label: string;
};

const DMMenuItem = ({ label }: DMMenuItemProps) => {
  const pathname = usePathname();

  const isActive = () => {
    return pathname === '/channels/me';
  };

  return (
    <Button className={cn('justify-start')} variant="ghost">
      <span
        className={cn('text-base', isActive() ? 'text-primary' : 'text-muted')}
      >
        {label}
      </span>
    </Button>
  );
};

export default DMMenuItem;
