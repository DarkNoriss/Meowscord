'use client';

import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const isCurrentlyActive = (pathname: string, page: string) =>
  pathname === `/${page}`;

const DMMenu = () => {
  const menuButtons = ['Friends', 'Nitro', 'Store'];
  const pathname = usePathname();

  return menuButtons.map((button) => {
    const isActive =
      button === 'Friends' && isCurrentlyActive(pathname, 'channels/me');

    return (
      <Button
        key={`button-${button}`}
        className={cn('justify-start')}
        variant="ghost"
      >
        <span
          className={cn('text-base', isActive ? 'text-primary' : 'text-muted')}
        >
          {button}
        </span>
      </Button>
    );
  });
};

export default DMMenu;
