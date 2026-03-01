"use client";

import { pastEvents } from "@/data/events";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Badge } from "@/components/ui/badge";

export function PastEvents() {
  const containerRef = useScrollAnimation({
    type: "fade-up",
    stagger: 0.15,
    childSelector: ".past-event-card",
  });

  return (
    <section id="past-events" className="py-24 px-4">
      <div ref={containerRef} className="mx-auto max-w-6xl">
        <h2 className="past-event-card text-center font-mono text-3xl font-bold sm:text-4xl">
          <span className="text-js-yellow">Past</span> Events
        </h2>
        <p className="past-event-card mt-4 text-center text-muted-foreground">
          Catch up on what you missed
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="past-event-card group rounded-lg border border-border bg-card p-5 transition-colors hover:border-js-yellow/30"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-js-yellow">
                  {event.date}
                </span>
                {event.attendees && (
                  <span className="text-xs text-muted-foreground">
                    {event.attendees} attended
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-semibold">{event.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {event.speaker} — {event.speakerRole}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {event.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
