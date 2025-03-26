# Camwell Industries Website

A modern, responsive website for Camwell Industries, showcasing high-security fencing solutions for government and defense sectors.

## Tech Stack

- **Framework:** Next.js 15.2.1
- **Styling:** Tailwind CSS, GSAP, Framer Motion
- **UI Components:** Radix UI, shadcn/ui
- **Language:** TypeScript
- **Font:** Inter (Google Fonts)

## Features

- Responsive navigation with mobile menu support
- Product showcase with dynamic routing
- Interactive animations and transitions
- Contact form with email integration
- Brochure request system
- Warranty information section
- Custom security solutions presentation

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── about/
│   ├── brochure/
│   ├── contact/
│   ├── products/
│   ├── warranty/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── ui/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
├── hooks/
└── public/
```

## Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration

## Development

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
