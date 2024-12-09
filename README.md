This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

`src` directory:
For the separation of application code from project configuration files which mostly live in the root of a project.

**Store project files outside of app**
Store all the application code in shared folders in the root the project and keeps the app directory purely for routing purposes.

**Split project files by feature or route**
Store globally shared application code in the root `src` directory and splits more specific application code into the route segments that use them.

`public` Static assets to be served

`src` Optional application source folder
-- `app` Routing logic
-- `lib` utils, hooks, helpers etc.
-- `assets` images, logos, icons

<!-- WIP Tags -->

`#OPTIONAL_CONTENT` - Optional content
`#PLACEHOLDER` - content placeholder to address
