import { generateFakeServers } from '@/lib/mock';
import type { ServerType } from '@/types/server';

import Server from './Server';

const getData = () => {
  const servers = generateFakeServers(10);
  return { servers };
};

const Servers = () => {
  const { servers } = getData();

  return servers?.map((server: ServerType) => (
    <li key={server.id}>
      <Server
        href={`/channels/${server.id}`}
        image={{ alt: server.name, src: server.photoUrl }}
      />
    </li>
  ));
};

export default Servers;
