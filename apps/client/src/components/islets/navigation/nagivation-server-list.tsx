import NavigationServer from '@/components/islets/navigation/navigation-server';
import { generateFakeServers } from '@/lib/mock';
import type { ServerType } from '@/types/server';

const getData = () => {
  const servers = generateFakeServers(30);
  return { servers };
};

const NavigationServerList = () => {
  const { servers } = getData();

  return servers?.map((server: ServerType) => (
    <li key={server.id}>
      <NavigationServer
        href={`/channels/${server.id}`}
        image={{ alt: server.name, src: server.photoUrl }}
      />
    </li>
  ));
};

export default NavigationServerList;
