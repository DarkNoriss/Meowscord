import type { FC, PropsWithChildren } from 'react';

type SidebarProps = PropsWithChildren;

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <div className="fixed left-[72px] flex h-screen w-60 flex-col bg-background/[0.15]">
      {children}
    </div>
  );
};

export default Sidebar;
