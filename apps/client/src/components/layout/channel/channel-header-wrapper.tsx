import type { HTMLAttributes } from 'react';

type ChannelHeaderWrapperProps = HTMLAttributes<HTMLDivElement>;

const ChannelHeaderWrapper = ({ ...props }: ChannelHeaderWrapperProps) => {
  return <div {...props} />;
};

export default ChannelHeaderWrapper;
