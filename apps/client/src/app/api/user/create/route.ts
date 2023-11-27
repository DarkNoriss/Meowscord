/* eslint-disable no-console */
import { db } from '@/lib/db';
import { users } from '@/models/schema';

export async function POST(req: Request) {
  try {
    console.log('Trying to create user');
    const { id, firstName, lastName, username, imageUrl, createdAt } =
      await req.json();

    await db.insert(users).values({
      id,
      firstName,
      lastName,
      username,
      imageUrl,
      createdAt,
    });

    return new Response('User created!', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error creating user', { status: 500 });
  }
}
