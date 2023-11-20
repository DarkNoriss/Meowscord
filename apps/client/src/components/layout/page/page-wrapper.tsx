import type { HTMLAttributes } from 'react';

type PageWrapperProps = HTMLAttributes<HTMLDivElement>;

const PageWrapper = ({ ...props }: PageWrapperProps) => {
  return (
    <div
      className="absolute inset-y-0 left-[312px] right-0 flex flex-col bg-background"
      {...props}
    />
  );
};

export default PageWrapper;
