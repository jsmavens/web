export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  speaker: string;
  speakerRole: string;
  description: string;
  tags: string[];
  attendees?: number;
  rsvpLink?: string;
};

export const upcomingEvents: Event[] = [
  {
    id: "ue-1",
    title: "Meetup #18 — React Server Components Deep Dive",
    date: "March 29, 2026",
    time: "10:00 AM",
    venue: "Cookies Space, Nagercoil",
    speaker: "TBA",
    speakerRole: "Community Speaker",
    description:
      "Explore the latest React Server Components patterns, streaming SSR, and how to architect your Next.js apps for maximum performance.",
    tags: ["React", "Next.js", "Performance"],
    rsvpLink: "https://www.meetup.com/js-mavens/",
  },
  {
    id: "ue-2",
    title: "Meetup #19 — Building Type-Safe APIs with tRPC",
    date: "April 26, 2026",
    time: "10:00 AM",
    venue: "Cookies Space, Nagercoil",
    speaker: "TBA",
    speakerRole: "Community Speaker",
    description:
      "Learn how tRPC eliminates the gap between frontend and backend with end-to-end type safety. Live coding session included!",
    tags: ["TypeScript", "tRPC", "Full-Stack"],
    rsvpLink: "https://www.meetup.com/js-mavens/",
  },
  {
    id: "ue-3",
    title: "Meetup #20 — Bun vs Node.js: The Runtime Wars",
    date: "May 31, 2026",
    time: "10:00 AM",
    venue: "Cookies Space, Nagercoil",
    speaker: "TBA",
    speakerRole: "Community Speaker",
    description:
      "A hands-on comparison of Bun and Node.js — benchmarks, compatibility, and when to choose which runtime for your next project.",
    tags: ["Bun", "Node.js", "Runtime"],
    rsvpLink: "https://www.meetup.com/js-mavens/",
  },
];

export const pastEvents: Event[] = [
  {
    id: "pe-1",
    title: "Meetup #17 — February Edition",
    date: "February 28, 2026",
    time: "10:00 AM",
    venue: "Cookies Space, Nagercoil",
    speaker: "Community Speakers",
    speakerRole: "JS Mavens",
    description: "Monthly meetup covering the latest in the JavaScript ecosystem.",
    tags: ["JavaScript", "Community"],
    attendees: 28,
  },
  {
    id: "pe-2",
    title: "Meetup #16 — July Edition",
    date: "July 26, 2025",
    time: "10:00 AM",
    venue: "Cookies Space, Nagercoil",
    speaker: "Community Speakers",
    speakerRole: "JS Mavens",
    description: "Deep dives into modern JavaScript tooling and frameworks.",
    tags: ["JavaScript", "Tooling"],
    attendees: 2,
  },
  {
    id: "pe-3",
    title: "Meetup #15 — June Edition",
    date: "June 28, 2025",
    time: "10:00 AM",
    venue: "Cookies Space, Nagercoil",
    speaker: "Community Speakers",
    speakerRole: "JS Mavens",
    description: "Talks on React patterns and frontend architecture.",
    tags: ["React", "Frontend"],
    attendees: 10,
  },
  {
    id: "pe-4",
    title: "Meetup #14 — April Edition",
    date: "April 26, 2025",
    time: "10:00 AM",
    venue: "Cookies Space, Nagercoil",
    speaker: "Community Speakers",
    speakerRole: "JS Mavens",
    description: "Node.js best practices and server-side JavaScript deep dive.",
    tags: ["Node.js", "Backend"],
    attendees: 29,
  },
  {
    id: "pe-5",
    title: "Meetup #13 — Testing & TDD",
    date: "March 29, 2025",
    time: "10:00 AM",
    venue: "Cookies Space, Nagercoil",
    speaker: "Community Speakers",
    speakerRole: "JS Mavens",
    description: "Test-driven development with Vitest and modern testing strategies.",
    tags: ["Testing", "TDD"],
    attendees: 22,
  },
  {
    id: "pe-6",
    title: "Meetup #12 — Angular & Beyond",
    date: "February 22, 2025",
    time: "10:00 AM",
    venue: "Cookies Space, Nagercoil",
    speaker: "Community Speakers",
    speakerRole: "JS Mavens",
    description: "Exploring Angular signals, standalone components, and the latest updates.",
    tags: ["Angular", "Web Dev"],
    attendees: 18,
  },
];
