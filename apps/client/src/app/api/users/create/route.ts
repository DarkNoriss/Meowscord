/* eslint-disable no-console */
import { auth } from '@clerk/nextjs';

import { db } from '@/db/index';
import { userFriends, users } from '@/db/schema';
import { generateFakeUser } from '@/lib/mock';

export async function POST() {
  const { userId } = auth();

  if (!userId) {
    return new Response('User not authenticated', { status: 401 });
  }

  const newUser = generateFakeUser();

  try {
    console.log('Trying to create user...');

    await db.insert(users).values(newUser);

    console.log('User created!');

    await db.insert(userFriends).values({ userId, friendId: newUser.id });

    console.log('Friend created!');

    return new Response('Friend created!', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error creating user', { status: 500 });
  }
}
