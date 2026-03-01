"use client";

import { upcomingEvents } from "@/data/events";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function UpcomingEvents() {
  const containerRef = useScrollAnimation({
    type: "fade-up",
    stagger: 0.15,
    childSelector: ".event-card",
  });

  return (
    <section id="events" className="py-24 px-4">
      <div ref={containerRef} className="mx-auto max-w-6xl">
        <h2 className="event-card text-center font-mono text-3xl font-bold sm:text-4xl">
          <span className="text-js-yellow">Upcoming</span> Events
        </h2>
        <p className="event-card mt-4 text-center text-muted-foreground">
          Grab your spot at our next meetups
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="event-card border-border bg-card transition-colors hover:border-js-yellow/30"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-js-yellow">
                  <span className="font-mono">{event.date}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{event.time}</span>
                </div>
                <CardTitle className="mt-2 text-lg">{event.title}</CardTitle>
                <CardDescription className="mt-1">
                  {event.speaker}{" "}
                  <span className="text-muted-foreground">
                    — {event.speakerRole}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  📍 {event.venue}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full" asChild>
                  <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer">RSVP Now</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
