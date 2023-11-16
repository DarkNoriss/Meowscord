import type { HTMLAttributes } from 'react';

type DMHeaderProps = HTMLAttributes<HTMLDivElement>;

const DMHeader = ({ ...props }: DMHeaderProps) => {
  return (
    <div
      className="flex h-12 items-center border-b-2 border-navigation bg-navigation-secondary px-[10px]"
      {...props}
    />
  );
};

export default DMHeader;
