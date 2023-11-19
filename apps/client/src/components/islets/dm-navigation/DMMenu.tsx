'use client';

import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const isCurrentlyActive = (pathname: string, page: string) =>
  pathname === `/${page}`;

const DMMenu = () => {
  const menuButtons = ['Friends', 'Nitro', 'Store'];
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col">
      {menuButtons.map((button) => {
        const isActive =
          button === 'Friends' && isCurrentlyActive(pathname, 'channels/me');

        return (
          <Button
            className={cn('justify-start')}
            variant="ghost"
            key={`button-${button}`}
          >
            <span
              className={cn(
                'text-base',
                isActive ? 'text-primary' : 'text-muted',
              )}
            >
              {button}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

export default DMMenu;
