import type { HTMLAttributes } from 'react';

type NavigationWrapperProps = HTMLAttributes<HTMLDivElement>;

const NavigationWrapper = ({ ...props }: NavigationWrapperProps) => {
  return (
    <div
      className="fixed left-[70px] z-10 flex h-screen w-60 flex-col bg-navigation-secondary"
      {...props}
    />
  );
};

export default NavigationWrapper;
