/* eslint-disable no-console */
import { auth } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { servers, userServers } from '@/db/schema';
import type { Server } from '@/types/server';

export async function POST() {
  const { userId } = auth();

  if (!userId) {
    return new Response('User not authenticated', { status: 401 });
  }
  const serverSelected = (await db.select().from(servers).limit(1)) as Server[];

  if (!serverSelected) {
    return new Response('Server not found', { status: 404 });
  }

  const serverToDelete = serverSelected[0];

  if (!serverToDelete && serverToDelete === undefined) {
    return new Response('Server not found', { status: 404 });
  }

  await db.transaction(async (trx) => {
    await trx
      .delete(userServers)
      .where(eq(userServers.serverId, serverToDelete.id));
    await trx.delete(servers).where(eq(servers.id, serverToDelete.id));
  });

  console.log('Server deleted!');

  return new Response('', { status: 200 });
}
