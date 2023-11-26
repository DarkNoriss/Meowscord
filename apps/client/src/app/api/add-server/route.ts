import { auth } from '@clerk/nextjs';
import { nanoid } from 'nanoid';

import { db } from '@/lib/db';
import { createFakeServer } from '@/lib/mock';
import { servers } from '@/models/schema';

export async function POST() {
  const id = nanoid();
  const { name } = createFakeServer();
  const { userId: ownerId } = auth();

  if (!ownerId) {
    return new Response('', { status: 200 });
  }
  await db;
  await db.insert(servers).values({ id, name, ownerId, usersId: ownerId });

  return new Response('', { status: 200 });
}
