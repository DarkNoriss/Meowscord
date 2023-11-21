import type { HTMLAttributes } from 'react';

type HomePageWrapperProps = HTMLAttributes<HTMLDivElement>;

const HomePageWrapper = ({ ...props }: HomePageWrapperProps) => {
  return (
    <div className="container flex h-screen flex-col items-center" {...props} />
  );
};

export default HomePageWrapper;
