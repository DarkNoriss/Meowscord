import type { HTMLAttributes } from 'react';

type ChannelBodyWrapperProps = HTMLAttributes<HTMLDivElement>;

const ChannelBodyWrapper = ({ ...props }: ChannelBodyWrapperProps) => {
  return <div {...props}>ChannelBodyWrapper</div>;
};

export default ChannelBodyWrapper;
