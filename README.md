# sideBaseTemplate-app

This is a [sidebase merino](https://sidebase.io/) app created by running `npm create sidebase@latest`. This project uses the following technologies for a great developer- and user-experience:
- [TypeScript](https://www.typescriptlang.org/)
- [Nuxt 3](https://nuxt.com)
- Prisma ORM
- nuxt-auth
- tRPC 10
- Tailwind CSS
- Naive UI

## How to get going?

This is a straight-forward setup with minimal templating and scaffolding. The options you selected during the sidebase CLI setup are all here though. Good places to continue reading are:
- [the First Steps documentation](https://sidebase.io/sidebase/usage)
- [our discord](https://discord.gg/auc8eCeGzx)

Some tasks you should probably do in the beginning are:
- [ ] replace this generic README with a more specific one
- [ ] install the Vue Volar extension
- [ ] enable [Volar takeover mode](https://nuxt.com/docs/getting-started/installation#prerequisites) to ensure a smooth editor setup
- [ ] ZModel: Edit your `schema.zmodel` to your liking
- [ ] Prisma: Run `npx prisma db push` to sync the schema to your database after changing the schema
- [ ] ZenStack: Run `npx zenstack generate` to re-generate the client after changing the schema, this will build your trpc routers in server/trcp/routers/generated
- [ ] Auth: Configure your auth providers to the [NuxtAuthHandler](./server/api/auth/[...].ts)
- [ ] Auth, optional: Enable global protection by setting `enableGlobalAppMiddleware: true` in [your nuxt.config.ts](./nuxt.config.ts). Delete the local middleware in the [protected.vue](./pages/protected.vue) page if you do

## going further
travelin
### Setup

Make sure to install the dependencies:

```bash
npm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```
going to http://localhost:3000/api/panel will allow you to see and test your routers and procedures

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
