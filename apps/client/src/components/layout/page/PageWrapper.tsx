import type { HTMLAttributes } from 'react';

type PageWrapperProps = HTMLAttributes<HTMLDivElement>;

const PageWrapper = ({ ...props }: PageWrapperProps) => {
  return <div className="" {...props} />;
};

export default PageWrapper;
