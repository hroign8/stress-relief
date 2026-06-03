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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This repository is ready to deploy on Vercel as a Next.js app.

### Recommended Vercel settings

- Framework preset: **Next.js**
- Build command: `npm run build`
- Output directory: `/.next`
- Root directory: `/`

### Required environment variables

Set these in the Vercel dashboard under your project settings:

- `RESEND_API_KEY` — Resend API key used by the quote form backend.
- `QUOTE_TO_EMAIL` — Destination email address for quote notifications.
- `QUOTE_FROM_EMAIL` — Verified sender email address for Resend.
- `NEXT_PUBLIC_SITE_URL` — Your production site URL, for metadata and sitemap generation.

### Deploy steps

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Create a new Vercel project and connect the repository.
3. Configure the environment variables listed above.
4. Deploy the project.

For more information, see [Vercel’s Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
