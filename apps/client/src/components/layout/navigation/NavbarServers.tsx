'use client';

import { useEffect } from 'react';

import NavbarServer from '@/components/layout/navigation/NavbarServer';
import { generateFakeServers } from '@/lib/mock';
import { useServersStore } from '@/stores/ServersStore';

const NavbarServers = () => {
  const servers = useServersStore((state) => state.servers);
  const setServers = useServersStore((state) => state.setServers);

  useEffect(() => {
    setServers(generateFakeServers());
  }, [setServers]);

  return servers?.map((server) => (
    <NavbarServer
      key={server.id}
      href={`/channels/${server.id}`}
      tooltipContent={server.name}
      image={{ alt: server.name, src: server.photo }}
    />
  ));
};

export default NavbarServers;
