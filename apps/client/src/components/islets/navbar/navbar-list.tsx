import { auth } from '@clerk/nextjs';

import NavbarListItem from '@/components/islets/navbar/navbar-list-item';
import { getServers } from '@/data-access/server';
import type { ServerWithoutOwner } from '@/types/server';

export const revalidate = 60;

const NavbarList = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const servers = await getServers(userId);

  return servers.map((server: ServerWithoutOwner) => (
    <NavbarListItem
      key={server.id}
      href={`/channels/${server.id}`}
      toltipcontent={server.name}
    />
  ));
};

export default NavbarList;
