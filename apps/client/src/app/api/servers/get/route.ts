// import { auth } from '@clerk/nextjs';
// import { sql } from 'drizzle-orm/sql';

// import { db } from '@/lib/db';
// import type { Server } from '@/models/schema';
// import { servers, users } from '@/models/schema';

export async function GET() {
  // const { userId } = auth();

  // if (!userId) {
  //   return [] as Server[];
  // }
  // const result = await db
  //   .select()
  //   .from(servers)
  //   .where(sql`${users.id} = ${userId}`);

  // return new Response(JSON.stringify({ result }), { status: 200 });
  return new Response('', { status: 200 });
}
