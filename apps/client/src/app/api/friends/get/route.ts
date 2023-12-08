import { auth } from '@clerk/nextjs';
import { eq } from 'drizzle-orm/sql';

import { db } from '@/db';
import { userFriends, users } from '@/db/schema';

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new Response('User not authenticated', { status: 401 });
  }

  const friendsData = await db
    .select()
    .from(userFriends)
    .leftJoin(users, eq(users.id, userFriends.userId))
    .where(eq(userFriends.userId, userId));

  return new Response(JSON.stringify(friendsData), { status: 200 });
}
