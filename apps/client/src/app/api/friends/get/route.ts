import { auth } from '@clerk/nextjs';
import { eq } from 'drizzle-orm/sql';

import { db } from '@/db';
import { userFriends, users } from '@/db/schema';
import type { User } from '@/types/user';

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new Response('User not authenticated', { status: 401 });
  }

  const friendsData = (await db
    .select({
      id: users.id,
      firstName: users.firstName,
      lastName: users.lastName,
      username: users.username,
      imageUrl: users.imageUrl,
      createdAt: users.createdAt,
      status: users.status,
    })
    .from(userFriends)
    .innerJoin(users, eq(users.id, userFriends.friendId))
    .where(eq(userFriends.userId, userId))) as User[];

  return new Response(JSON.stringify(friendsData), { status: 200 });
}
