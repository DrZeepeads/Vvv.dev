import { join } from 'pathe'
import type { Config } from 'drizzle-kit'

import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/database/schema.ts',
  out: './server/database/migrations',
})

// export default {
//   out: 'server/database/migrations',
//   schema: 'server/database/schema.ts',
//   driver: 'better-sqlite',
//   dbCredentials: {
//     url: join(process.cwd(), './db.sqlite'),
//   },
//   // driver: 'turso',
//   // dbCredentials: {
//   //   // url: join(process.cwd(), './db.sqlite'),
//   //   url: process.env.TURSO_DB_URL!,
//   //   authToken: process.env.TURSO_DB_TOKEN!,
//   // },
// } satisfies Config
