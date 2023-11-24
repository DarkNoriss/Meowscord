'use client';

import { useQuery } from '@tanstack/react-query';

import NavigationServer from '@/components/islets/navigation/navigation-server';
import type { ServerType } from '@/types/server';

const NavigationServerList = () => {
  const { data } = useQuery<ServerType[]>({ queryKey: ['servers'] });

  return data?.map((server: ServerType) => (
    <NavigationServer
      key={server.id}
      href={`/channels/${server.id}`}
      image={{ alt: server.name, src: server.photoUrl }}
      toltipcontent={server.name}
    />
  ));
};

export default NavigationServerList;
