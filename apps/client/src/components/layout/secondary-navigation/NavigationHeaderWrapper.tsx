import type { HTMLAttributes } from 'react';

type NavigationHeaderWrapperProps = HTMLAttributes<HTMLDivElement>;

const NavigationHeaderWrapper = ({
  ...props
}: NavigationHeaderWrapperProps) => {
  return (
    <div
      className="flex h-12 items-center border-b-2 border-navigation bg-navigation-secondary px-[10px]"
      {...props}
    />
  );
};

export default NavigationHeaderWrapper;
