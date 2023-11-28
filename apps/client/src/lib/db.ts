/* eslint-disable no-console */
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

import * as schema from '../models/schema';

export const db = drizzle(sql, { schema });
