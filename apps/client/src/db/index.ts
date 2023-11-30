import { sql } from '@vercel/postgres';
import type { VercelPgDatabase } from 'drizzle-orm/vercel-postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import * as schema from '../models/schema';

declare global {
  // eslint-disable-next-line no-var, vars-on-top -- only var works here
  var db: VercelPgDatabase<typeof schema> | undefined;
}

// eslint-disable-next-line import/no-mutable-exports
let db: VercelPgDatabase<typeof schema>;

if (process.env.NODE_ENV === 'production') {
  db = drizzle(sql, { schema });
} else {
  if (!global.db) {
    global.db = drizzle(sql, { schema });
  }
  db = global.db;
}

export { db };
