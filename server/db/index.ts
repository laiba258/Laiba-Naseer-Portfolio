import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

// Strip sslmode=require from connection string, use ssl option instead
const connectionString = (process.env.DATABASE_URL ?? '')
  .replace('?sslmode=require', '')
  .replace('&sslmode=require', '')

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})

export const db = drizzle(pool, { schema })
