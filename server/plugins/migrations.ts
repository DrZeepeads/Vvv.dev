import * as path from 'node:path'
import * as fs from 'node:fs/promises'
import { consola } from 'consola'
import { migrate } from 'drizzle-orm/d1/migrator'
import { sql } from 'drizzle-orm'

export default defineNitroPlugin(async () => {
  if (!import.meta.dev)
    return

  onHubReady(async () => {
    // await migrate(useDB(), { migrationsFolder: 'server/database/migrations' })
    //   .then(() => {
    //     consola.success('Database migrations done')
    //   })
    //   .catch((err) => {
    //     consola.error('Database migrations failed', err)
    //   })

    // const db = hubDatabase()

    // const filePath = path.join(process.cwd(), 'db_dump.sql')
    // const data = await fs.readFile(filePath, 'utf-8')

    // await useDB().
    // const batches = data.split(');')
    // consola.log(`${batches[1]})`, batches.length)
    // await db.exec(`${batches[1]})`)
    // await db.exec(data)
    // // db.exec(`INSERT INTO components VALUES('r84nmhzefx5u','wn89oo6bhd2b','simple login page with github oauth',replace('\n<script setup lang="ts">\nimport { Button } from ''@/components/ui/button'';\nimport { Input } from ''@/components/ui/input'';\nimport { Github } from ''lucide-vue-next'';\n</script>\n\n<template>\n  <div class="w-full min-h-screen bg-gray-100 dark:bg-black flex items-center justify-center p-4">\n    <div class="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 space-y-6">\n      <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">\n        Log In\n      </h1>\n      <div class="space-y-4">\n        <Input\n          type="email"\n          placeholder="Enter your email"\n          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"\n        />\n        <Input\n          type="password"\n          placeholder="Enter your password"\n          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"\n        />\n      </div>\n      <Button class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">\n        Log In\n      </Button>\n      <div class="flex items-center justify-between">\n        <hr class="w-full bg-gray-300" />\n        <span class="p-2 text-gray-500 dark:text-gray-400">\n          OR\n        </span>\n        <hr class="w-full bg-gray-300" />\n      </div>\n      <Button class="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 flex items-center justify-center">\n        <Github class="h-5 w-5 mr-3" />\n        Sign in with GitHub\n      </Button>\n    </div>\n  </div>\n</template>\n','\n',char(10)),1703954837488,'{"description":{"user":"simple login page with github oauth","llm":"Create a simple login page component that includes a form with an input field for email, a password field, and a login button. Additionally, incorporate a ''Sign in with GitHub'' button to enable OAuth authentication with GitHub. The design should be clean and user-friendly, prioritizing ease of use and accessibility."},"components":[{"name":"card","usage":"to structure the login form and OAuth button ensuring a clean and organized layout"},{"name":"input","usage":"to create the email and password fields where users can enter their credentials"},{"name":"button","usage":"to create the ''Log In'' and ''Sign in with GitHub'' buttons"},{"name":"avatar","usage":"optional, to show a GitHub icon within the ''Sign in with GitHub'' button for visual clarity"},{"name":"alert","usage":"to display any login errors or validation messages to the user"}]}',1,59365435,NULL,NULL)`)
    // // // await db.batch(batches.map(val => db.prepare(val)))
    //   .then(() => {
    //     consola.success('Data dump done')
    //   })
    //   .catch((err) => {
    //     consola.error('Data dump failed', err)
    //   })
  })
})
