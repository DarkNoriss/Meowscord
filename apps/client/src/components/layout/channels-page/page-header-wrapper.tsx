import type { HTMLAttributes } from 'react';

import HeaderWrapper from '@/components/layout/header/header-wrapper';

type PageHeaderWrapperProps = HTMLAttributes<HTMLElement>;

const PageHeaderWrapper = ({ ...props }: PageHeaderWrapperProps) => {
  return (
    <HeaderWrapper className="h-12 shrink-0 bg-background p-2" {...props} />
  );
};

export default PageHeaderWrapper;
