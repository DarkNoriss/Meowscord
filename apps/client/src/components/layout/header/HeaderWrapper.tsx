import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type HeaderWrapperProps = {
  className?: string;
} & HTMLAttributes<HTMLElement>;

const HeaderWrapper = ({ className, ...props }: HeaderWrapperProps) => {
  return (
    <header
      className={cn(
        'flex h-12 items-center border-b-2 border-navigation bg-navigation-secondary',
        className,
      )}
      {...props}
    />
  );
};

export default HeaderWrapper;
