import { auth } from '@clerk/nextjs';
import { nanoid } from 'nanoid';

import { db } from '@/lib/db';
import { createFakeServer } from '@/lib/mock';
import { servers, userServers } from '@/models/schema';

export async function POST() {
  const id = nanoid();
  const { name } = createFakeServer();
  const { userId: ownerId } = auth();

  if (!ownerId) {
    return new Response('User not authenticated', { status: 401 });
  }

  if (!name) {
    return new Response('Invalid server name', { status: 400 });
  }

  const newServer = { id, ownerId, name };
  const junction = { userId: ownerId, serverId: id };

  await db.transaction(async (trx) => {
    await trx.insert(servers).values(newServer);
    await trx.insert(userServers).values(junction);
  });

  return new Response('', { status: 200 });
}
