import 'server-only';

import { eq } from 'drizzle-orm/sql/expressions/conditions';

import { db } from '@/db';
import type { Server } from '@/db/schema';
import { servers, userServers } from '@/db/schema';

type ServerWithoutOwner = Omit<Server, 'ownerId'>;

export const createServer = async (
  userId: string,
): Promise<ServerWithoutOwner[]> => {
  const serversData = await db
    .select({ id: servers.id, name: servers.name })
    .from(userServers)
    .leftJoin(servers, eq(servers.id, userServers.serverId))
    .where(eq(userServers.userId, userId));

  return serversData;
};
