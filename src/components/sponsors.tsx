"use client";

import { sponsors, tierConfig, type SponsorTier } from "@/data/sponsors";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const tiers: SponsorTier[] = ["gold", "silver", "community"];

export function Sponsors() {
  const containerRef = useScrollAnimation({
    type: "fade-up",
    stagger: 0.1,
    childSelector: ".sponsor-item",
  });

  return (
    <section id="sponsors" className="py-24 px-4">
      <div ref={containerRef} className="mx-auto max-w-6xl">
        <h2 className="sponsor-item text-center font-mono text-3xl font-bold sm:text-4xl">
          Our <span className="text-js-yellow">Sponsors</span>
        </h2>
        <p className="sponsor-item mt-4 text-center text-muted-foreground">
          Making JS Mavens possible
        </p>

        <div className="mt-12 space-y-12">
          {tiers.map((tier) => {
            const config = tierConfig[tier];
            const tierSponsors = sponsors.filter((s) => s.tier === tier);

            return (
              <div key={tier} className="sponsor-item">
                <h3 className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {config.label}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {tierSponsors.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.website}
                      className={`${config.size} flex items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-js-yellow/30`}
                    >
                      <span
                        className={`${config.textSize} font-mono font-bold text-muted-foreground transition-colors group-hover:text-foreground`}
                      >
                        {sponsor.logoText}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
