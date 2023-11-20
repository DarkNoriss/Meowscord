import type { HTMLAttributes } from 'react';

type PageContentWrapperProps = HTMLAttributes<HTMLDivElement>;

const PageContentWrapper = ({ ...props }: PageContentWrapperProps) => {
  return <div className="" {...props} />;
};

export default PageContentWrapper;
