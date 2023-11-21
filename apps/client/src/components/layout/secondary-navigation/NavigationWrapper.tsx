import type { HTMLAttributes } from 'react';

type NavigationWrapperProps = HTMLAttributes<HTMLDivElement>;

const NavigationWrapper = ({ ...props }: NavigationWrapperProps) => {
  return (
    <div
      className="fixed left-[72px] flex h-full w-60 flex-col bg-navigation-secondary"
      {...props}
    />
  );
};

export default NavigationWrapper;
