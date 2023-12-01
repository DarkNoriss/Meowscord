import 'server-only';

import { eq } from 'drizzle-orm/sql/expressions/conditions';
import { nanoid } from 'nanoid';
import { revalidatePath } from 'next/cache';

import { db } from '@/db';
import { servers, userServers } from '@/db/schema';
import { createFakeServer } from '@/lib/mock';
import type { ServerWithoutOwner } from '@/types/server';

export const getServers = async (
  userId: string,
): Promise<ServerWithoutOwner[]> => {
  const { id, name } = servers;

  const serversData = await db
    .select({ id, name })
    .from(userServers)
    .leftJoin(servers, eq(servers.id, userServers.serverId))
    .where(eq(userServers.userId, userId));

  return serversData as ServerWithoutOwner[];
};

export const createServer = async (userId: string): Promise<void> => {
  const id = nanoid();
  const { name } = createFakeServer();
  const ownerId = userId;

  const newServer = { id, ownerId, name };
  const junction = { userId: ownerId, serverId: id };

  await db.transaction(async (trx) => {
    trx.insert(servers).values(newServer);
    trx.insert(userServers).values(junction);
  });

  revalidatePath('/channels');
  console.log('Server created');
};
//   .select({ id, name })
//   .from(userServers)
//   .leftJoin(servers, eq(servers.id, userServers.serverId))
//   .where(eq(userServers.userId, userId))) as ServerWithoutOwner[];

// return serversData;
