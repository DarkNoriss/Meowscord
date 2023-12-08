/* eslint-disable no-console */
import { auth } from '@clerk/nextjs';
import { nanoid } from 'nanoid';

import { db } from '@/db';
import { servers, userServers } from '@/db/schema';
import { createFakeServer } from '@/lib/mock';

export async function POST() {
  const serverId = nanoid();
  const { name, imageUrl } = createFakeServer();
  const { userId } = auth();

  if (!userId) {
    return new Response('User not authenticated', { status: 401 });
  }

  if (!name) {
    return new Response('Invalid server name', { status: 400 });
  }

  const newServer = { id: serverId, ownerId: userId, name, imageUrl };
  const junction = { userId, serverId };

  // create 2 categories for the server with 2 default channels

  const categoryText = { id: nanoid(), name: 'text channels', serverId };
  const categoryVoice = { id: nanoid(), name: 'voice channels', serverId };

  const channelText = {
    id: nanoid(),
    name: 'general',
    categoryId: categoryText.id,
  };

  const channelVoice = {
    id: nanoid(),
    name: 'General',
    categoryId: categoryVoice.id,
  };

  await db.transaction(async (trx) => {
    await trx.insert(servers).values(newServer);
    await trx.insert(userServers).values(junction);
  });

  console.log('Server created!');
  console.log(newServer);

  return new Response('', { status: 200 });
}
