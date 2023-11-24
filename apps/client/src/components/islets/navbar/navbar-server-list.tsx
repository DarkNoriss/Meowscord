'use client';

import { useQuery } from '@tanstack/react-query';

import NavbarServerItem from '@/components/islets/navbar/navbar-server-item';
import type { ServerType } from '@/types/server';

const NavbarServerList = () => {
  const { data } = useQuery<ServerType[]>({ queryKey: ['servers'] });

  return data?.map((server: ServerType) => (
    <NavbarServerItem
      key={server.id}
      href={`/channels/${server.id}`}
      image={{ alt: server.name, src: server.photoUrl }}
      toltipcontent={server.name}
    />
  ));
};

export default NavbarServerList;
