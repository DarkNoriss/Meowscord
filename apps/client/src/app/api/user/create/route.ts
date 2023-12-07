/* eslint-disable no-console */
import { db } from '@/db/index';
import { users } from '@/db/schema';
import { generateFakeUser } from '@/lib/mock';

export async function POST() {
  try {
    console.log('Trying to create user');

    const newUser = generateFakeUser();

    await db.insert(users).values(newUser);

    return new Response('User created!', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error creating user', { status: 500 });
  }
}
