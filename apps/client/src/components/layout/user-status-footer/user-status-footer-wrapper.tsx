import type { HTMLAttributes } from 'react';

type UserStatusFooterWrapperProps = HTMLAttributes<HTMLDivElement>;

const UserStatusFooterWrapper = ({
  ...props
}: UserStatusFooterWrapperProps) => {
  return (
    <div
      className="bottom-0 flex h-[52px] flex-row items-center justify-between bg-popover px-2"
      {...props}
    />
  );
};

export default UserStatusFooterWrapper;
