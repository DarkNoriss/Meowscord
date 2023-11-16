import { generateFakeServers } from '@/lib/mock';

import Server from './Server';

const getData = () => {
  const servers = generateFakeServers(10);
  return { servers };
};

const Servers = () => {
  const { servers } = getData();

  return servers?.map((server) => (
    <Server
      key={server.id}
      href={`/channels/${server.id}`}
      image={{ alt: server.name, src: server.photoUrl }}
    />
  ));
};

export default Servers;
