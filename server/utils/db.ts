import { drizzle } from 'drizzle-orm/d1'
import * as schema from '../database/schema'

export const tables = schema

export type DBComponent = typeof tables.components.$inferSelect & {
  user?: typeof tables.users.$inferSelect
}
export { sql, eq, and, or } from 'drizzle-orm'

export function useDB() {
  return drizzle(hubDatabase(), { schema })
}
