'use client';

import { useServersStore } from '@/stores/ServersStore';

import Server from './Server';

const Servers = () => {
  const servers = useServersStore((state) => state.serversList);

  return (
    <>
      {servers.map((server) => (
        <Server key={server.id} serverdata={server} />
      ))}
    </>
  );
};

export default Servers;
