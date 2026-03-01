"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-heading", {
        opacity: 0,
        y: 50,
        duration: 1,
      })
        .from(
          ".hero-tagline",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.4"
        )
        .from(
          ".hero-stats > div",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#F7DF1E 1px, transparent 1px), linear-gradient(90deg, #F7DF1E 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="hero-heading font-mono text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          <span className="text-js-yellow">{"{ "}</span>
          JS Mavens
          <span className="text-js-yellow">{" }"}</span>
        </h1>

        <p className="hero-tagline mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          A community of passionate developers in Nagercoil, Kanyakumari.
          Learn, share knowledge, and network with fellow JavaScript, React
          &amp; Node.js enthusiasts — all experience levels welcome.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="hero-cta text-base" asChild>
            <a href="#events">Upcoming Events</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hero-cta text-base"
            asChild
          >
            <a href="#past-events">Browse Past Events</a>
          </Button>
        </div>

        <div className="hero-stats mt-16 flex items-center justify-center gap-8 sm:gap-16">
          <div>
            <p className="font-mono text-3xl font-bold text-js-yellow">388+</p>
            <p className="mt-1 text-sm text-muted-foreground">Members</p>
          </div>
          <div>
            <p className="font-mono text-3xl font-bold text-js-yellow">17</p>
            <p className="mt-1 text-sm text-muted-foreground">Meetups Held</p>
          </div>
          <div>
            <p className="font-mono text-3xl font-bold text-js-yellow">2023</p>
            <p className="mt-1 text-sm text-muted-foreground">Since</p>
          </div>
        </div>
      </div>
    </section>
  );
}
