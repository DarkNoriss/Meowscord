import type { HTMLAttributes } from 'react';

type ChannelWrapperProps = HTMLAttributes<HTMLDivElement>;

const ChannelWrapper = ({ ...props }: ChannelWrapperProps) => {
  return <div {...props}> ChannelWrapper</div>;
};

export default ChannelWrapper;
