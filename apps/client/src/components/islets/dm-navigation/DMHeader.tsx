import type { HTMLAttributes } from 'react';

type DMHeaderProps = HTMLAttributes<HTMLDivElement>;

const DMHeader = ({ ...props }: DMHeaderProps) => {
  return <div className="h-12 items-center bg-background/20" {...props} />;
};

export default DMHeader;
