import DMLayout from '@/components/islets/dm-layout/DMLayout';
import Navbar from '@/components/layout/navigation/Navbar';

type ChannelsLayoutProps = {
  children: React.ReactNode;
};
const ChannelsLayout = ({ children }: ChannelsLayoutProps) => {
  return (
    <>
      <Navbar />
      <DMLayout>{children}</DMLayout>
    </>
  );
};

export default ChannelsLayout;
