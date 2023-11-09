'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ComponentPropsWithoutRef, FC } from 'react';

import { TooltipProvider } from '@/components/ui/Tooltip';
import { cn } from '@/lib/utils';

type NavbarServerProps = {
  tooltipContent?: string;
  image: {
    src: string;
    alt: string;
  };
} & ComponentPropsWithoutRef<typeof Link>;

const NavbarServer: FC<NavbarServerProps> = ({ image, ...props }) => {
  const isActive = () => {
    return false;
  };

  const roundClasses = isActive()
    ? 'rounded-2xl'
    : 'rounded-full hover:rounded-2xl';

  return (
    <TooltipProvider>
      <Link
        className={cn(
          'h-12 w-12 rounded-full p-0 hover:rounded-2xl mb-2',
          roundClasses,
        )}
        {...props}
      >
        <Image
          className={roundClasses}
          height={48}
          width={48}
          src={image.src}
          alt={image.alt}
        />
      </Link>
    </TooltipProvider>
  );
};

export default NavbarServer;
