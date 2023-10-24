import { generateFakeServers } from '@/lib/mock';
import type { ServerType } from '@/types/server';

import Server from './Server';

const Servers = () => {
  const servers: ServerType[] = generateFakeServers();
  return (
    <>
      {servers.map((server) => (
        <Server key={server.id} serverdata={server} />
      ))}
    </>
  );
};

export default Servers;
