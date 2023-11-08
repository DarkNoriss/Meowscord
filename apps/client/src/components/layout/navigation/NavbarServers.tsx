'use client';

import { useEffect } from 'react';

import { generateFakeServers } from '@/lib/mock';
import { useServersStore } from '@/stores/ServersStore';

import Server from './Server';

const NavbarServers = () => {
  const servers = useServersStore((state) => state.servers);
  const setServers = useServersStore((state) => state.setServers);


  useEffect(() => {
    setServers(generateFakeServers());
  }, [setServers]);

  return servers?.map((server) => (
    <Server key={server.id} serverdata={server} />
  ));
};

export default NavbarServers;
