import { NextResponse } from 'next/server';

import { db } from '@/lib/db';
import { users } from '@/models/schema';

export async function GET() {
  // const petName = 'test';
  // const ownerName = 'also test';

  const id = 'test223232323232323232323232323232323232323';
  const username = 'another';

  // console.log('inserting user');
  await db.insert(users).values({ id, username });

  // try {
  //   if (!petName || !ownerName) throw new Error('Pet and owner names required');
  //   db.insert(pets).values({ name: petName, owner: ownerName });
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }

  // const petsall = await db.select().from(pets);
  const test = await db.select().from(users);
  return NextResponse.json({ test }, { status: 200 });
}
