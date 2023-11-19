import type { PropsWithChildren } from 'react';

type NavigationWrapperProps = PropsWithChildren;

const NavigationWrapper = ({ children }: NavigationWrapperProps) => {
  return (
    <div className="fixed left-[72px] flex h-full w-60 flex-col bg-navigation-secondary">
      {children}
    </div>
  );
};

export default NavigationWrapper;
