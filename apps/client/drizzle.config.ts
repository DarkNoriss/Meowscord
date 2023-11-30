import type { Config } from 'drizzle-kit';

// /** @type {import('drizzle-kit').Config} */
// export default {
//   out: './migrations',
//   schema: './src/models/schema.ts',
//   driver: 'turso',
//   dbCredentials: {
//     url: process.env.DATABASE_URL ?? '',
//   },
// } satisfies Config;

/** @type {import('drizzle-kit').Config} */
export default {
  out: './migrations',
  schema: './src/models/schema.ts',
  driver: 'pg',
  dbCredentials: {
    host: process.env.POSTGRES_HOST ?? '',
    user: process.env.POSTGRES_USER ?? '',
    password: process.env.POSTGRES_PASSWORD ?? '',
    database: process.env.POSTGRES_DATABASE ?? '',
  },
  strict: true,
} satisfies Config;
