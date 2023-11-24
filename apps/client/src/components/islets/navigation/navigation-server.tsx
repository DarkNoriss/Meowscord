// import Image from 'next/image';
import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type NavigationServerProps = {
  image: {
    src: string;
    alt: string;
    priority?: boolean;
  };
} & ComponentPropsWithoutRef<typeof Link>;

// eslint-disable-next-line unused-imports/no-unused-vars
const NavigationServer = ({ image, ...props }: NavigationServerProps) => {
  const isActive = () => {
    return false;
  };

  const roundClasses = isActive()
    ? 'rounded-2xl'
    : 'rounded-full hover:rounded-2xl';

  return (
    <Link className={cn('h-12 w-12 p-0', roundClasses)} {...props}>
      {/* <Image
        className={cn('mb-2', roundClasses)}
        height={48}
        width={48}
        src={image.src}
        alt={image.alt}
        priority={image.priority}
      /> */}
    </Link>
  );
};

export default NavigationServer;
