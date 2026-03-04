# JSMavens

Welcome to the official repository for the [JSMavens Meetup Group](https://www.meetup.com/js-mavens/). This project is a website for our community, built with Next.js and hosted on Vercel.

## Getting Started

To get started with the project locally, you will need to use [bun](https://bun.sh/).

1. Install dependencies:
```bash
bun install
```

2. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

Here's a rundown of the project structure within the `src/` directory:

```text
src/
├── app/               # Next.js App Router structure (pages, layouts, globals)
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/        # Reusable React components
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── past-events.tsx
│   ├── photo-gallery.tsx
│   ├── sponsors.tsx
│   ├── ui/            # UI components (e.g., shadcn/ui)
│   └── upcoming-events.tsx
├── data/              # Static data and content files
│   ├── events.ts
│   ├── gallery.ts
│   └── sponsors.ts
├── hooks/             # Custom React hooks
│   └── use-scroll-animation.ts
└── lib/               # Utility functions and shared logic
    └── utils.ts
```

## Deployment

This project is configured to be deployed and hosted on [Vercel](https://vercel.com/).

## Contributors

Thank you to all our contributors!

- [Placeholder: Add contributors here]
