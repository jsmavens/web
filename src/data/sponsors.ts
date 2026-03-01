export type SponsorTier = "gold" | "silver" | "community";

export type Sponsor = {
  id: string;
  name: string;
  tier: SponsorTier;
  logoText: string;
  website: string;
};

export const sponsors: Sponsor[] = [
  {
    id: "s-1",
    name: "Vercel",
    tier: "gold",
    logoText: "Vercel",
    website: "#",
  },
  {
    id: "s-2",
    name: "Supabase",
    tier: "gold",
    logoText: "Supabase",
    website: "#",
  },
  {
    id: "s-3",
    name: "Prisma",
    tier: "silver",
    logoText: "Prisma",
    website: "#",
  },
  {
    id: "s-4",
    name: "PlanetScale",
    tier: "silver",
    logoText: "PlanetScale",
    website: "#",
  },
  {
    id: "s-5",
    name: "Turso",
    tier: "silver",
    logoText: "Turso",
    website: "#",
  },
  {
    id: "s-6",
    name: "Bun",
    tier: "community",
    logoText: "Bun",
    website: "#",
  },
  {
    id: "s-7",
    name: "Deno",
    tier: "community",
    logoText: "Deno",
    website: "#",
  },
  {
    id: "s-8",
    name: "Biome",
    tier: "community",
    logoText: "Biome",
    website: "#",
  },
];

export const tierConfig: Record<
  SponsorTier,
  { label: string; size: string; textSize: string }
> = {
  gold: { label: "Gold Sponsors", size: "h-24 w-48", textSize: "text-2xl" },
  silver: {
    label: "Silver Sponsors",
    size: "h-20 w-40",
    textSize: "text-xl",
  },
  community: {
    label: "Community Partners",
    size: "h-16 w-32",
    textSize: "text-lg",
  },
};
