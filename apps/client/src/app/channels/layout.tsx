import NavbarChannels from '@/components/NavbarChannels';

type ChannelsLayoutProps = {
  children: React.ReactNode;
};
const ChannelsLayout = ({ children }: ChannelsLayoutProps) => {
  return (
    <div className="flex h-screen w-screen">
      <NavbarChannels />
      <div className="flex flex-1">{children}</div>
    </div>
  );
};

export default ChannelsLayout;
