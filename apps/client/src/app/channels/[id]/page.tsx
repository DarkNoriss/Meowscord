'use client';

import { useQuery } from '@tanstack/react-query';
import { redirect } from 'next/navigation';

import ChannelNavmenu from '@/components/islets/channel-navmeu/channel-navmenu';
import ChannelPage from '@/components/islets/channel-page/channel-page';
import type { Server } from '@/types/server';

type PageProps = {
  params: { id: string };
};

const Page = ({ params: { id } }: PageProps) => {
  const { data } = useQuery<Server[]>({ queryKey: ['servers'] });

  if (!data) redirect('/channels/me');

  const channelData = data.find((server: Server) => server.id === id);

  if (!channelData) redirect('/channels/me');

  return (
    <>
      <ChannelNavmenu channelData={channelData} />
      <ChannelPage />
    </>
  );
};

export default Page;
