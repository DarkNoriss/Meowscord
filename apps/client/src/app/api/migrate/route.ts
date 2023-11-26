import { migrateDb } from '@/lib/db-migrate';

export async function POST() {
  await migrateDb();

  return new Response('', { status: 200 });
}
