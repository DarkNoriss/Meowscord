import { auth } from '@clerk/nextjs';
import { eq } from 'drizzle-orm/sql';

import { db } from '@/lib/db';
import { servers, userServers } from '@/models/schema';

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new Response('User not authenticated', { status: 401 });
  }

  const serversData = await db
    .select({ id: servers.id, name: servers.name })
    .from(userServers)
    .leftJoin(servers, eq(servers.id, userServers.serverId))
    .where(eq(userServers.userId, userId))
    .then((data) => (Array.isArray(data) ? data : [data]));

  return new Response(JSON.stringify(serversData), { status: 200 });
}
