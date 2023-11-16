import Image from 'next/image';
import Link from 'next/link';
import type { ComponentPropsWithoutRef, FC } from 'react';

import { cn } from '@/lib/utils';

type NavbarServerProps = {
  image: {
    src: string;
    alt: string;
    priority?: boolean;
  };
} & ComponentPropsWithoutRef<typeof Link>;

const Server: FC<NavbarServerProps> = ({ image, ...props }) => {
  const isActive = () => {
    return false;
  };

  const roundClasses = isActive()
    ? 'rounded-2xl'
    : 'rounded-full hover:rounded-2xl';

  return (
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
        priority={image.priority}
      />
    </Link>
  );
};

export default Server;
