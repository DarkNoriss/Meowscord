import type { HTMLAttributes } from 'react';

type NavigationBodyWrapperProps = HTMLAttributes<HTMLDivElement>;

const NavigationBodyWrapper = ({ ...props }: NavigationBodyWrapperProps) => {
  return <div className="flex-1 overflow-y-auto" {...props} />;
};

export default NavigationBodyWrapper;
