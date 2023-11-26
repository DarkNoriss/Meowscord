// import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

// import NavbarServerItem from '@/components/islets/navbar/navbar-server-item';
// import type { ServerType } from '@/types/server';
const getData = async () => {
  const data = await axios.get('/api/servers/get');
  return { data };
};

const NavbarServerList = async () => {
  const { data } = await getData();
  console.log(data);
  // const { data } = useQuery<ServerType[]>({ queryKey: ['servers'] });
  return null;
  // return data?.map((server: ServerType) => (
  //   <NavbarServerItem
  //     key={server.id}
  //     href={`/channels/${server.id}`}
  //     image={{ alt: server.name, src: server.photoUrl }}
  //     toltipcontent={server.name}
  //   />
  // ));
};

export default NavbarServerList;
