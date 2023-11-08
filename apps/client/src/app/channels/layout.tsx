import Navbar from '@/components/layout/navigation/Navbar';

type ChannelsLayoutProps = {
  children: React.ReactNode;
};
const ChannelsLayout = ({ children }: ChannelsLayoutProps) => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex flex-1">{children}</div>
    </div>
  );
};

export default ChannelsLayout;
