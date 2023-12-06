import { migrateDb } from '@/db/migrate';

export async function POST() {
  await migrateDb();

  return new Response('', { status: 200 });
}
