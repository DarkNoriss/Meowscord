/* eslint-disable unused-imports/no-unused-vars */
// import Image from 'next/image';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { cn } from '@/lib/utils';

type NavbarItemProps = {
  image: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  toltipcontent: string;
} & ComponentPropsWithoutRef<typeof Link>;

const NavbarListItem = ({
  image,
  toltipcontent,
  ...props
}: NavbarItemProps) => {
  const isActive = () => {
    return false;
  };

  const roundClasses = isActive()
    ? 'rounded-2xl'
    : 'rounded-full hover:rounded-2xl';

  return (
    <Tooltip>
      <TooltipTrigger>
        <Link className={cn('h-12 w-12 p-0', roundClasses)} {...props}>
          <div
            className={cn('mb-2 h-12 w-12 bg-navigation-button', roundClasses)}
          >
            {/* <Image
        className={cn('mb-2', roundClasses)}
        height={48}
        width={48}
        src={image.src}
        alt={image.alt}
        priority={image.priority}
      /> */}
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={15}>
        <span className="text-sm">{toltipcontent}</span>
      </TooltipContent>
    </Tooltip>
  );
};

export default NavbarListItem;
