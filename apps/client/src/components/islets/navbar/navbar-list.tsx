'use client';

import { useQuery } from '@tanstack/react-query';

import NavbarListItem from '@/components/islets/navbar/navbar-list-item';
import type { Server } from '@/db/schema';

type ServerWithoutOwner = Omit<Server, 'ownerId'>;

const NavbarList = () => {
  const { data } = useQuery<ServerWithoutOwner[]>({ queryKey: ['servers'] });

  if (!data) return null;

  return data.map((server: ServerWithoutOwner) => (
    <NavbarListItem
      key={server.id}
      href={`/channels/${server.id}`}
      toltipcontent={server.name}
    />
  ));
};

export default NavbarList;
