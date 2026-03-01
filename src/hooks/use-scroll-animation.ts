"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fade-up" | "fade-in" | "scale-in";

type UseScrollAnimationOptions = {
  start?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  type?: AnimationType;
  childSelector?: string;
};

export function useScrollAnimation({
  delay = 0,
  childSelector,
  duration = 0.8,
  stagger = 0.15,
  type = "fade-up",
  start = "top 85%",
}: UseScrollAnimationOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const targets = childSelector
        ? containerRef.current.querySelectorAll(childSelector)
        : containerRef.current;

      const fromVars: gsap.TweenVars = {
        opacity: 0,
        duration,
        ease: "power3.out",
        delay,
      };

      switch (type) {
        case "fade-up":
          fromVars.y = 40;
          break;
        case "fade-in":
          break;
        case "scale-in":
          fromVars.scale = 0.9;
          break;
      }

      if (childSelector) {
        gsap.from(targets, {
          ...fromVars,
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
          },
        });
      } else {
        gsap.from(targets, {
          ...fromVars,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
          },
        });
      }
    },
    { scope: containerRef },
  );

  return containerRef;
}

export function useBatchAnimation({
  stagger = 0.05,
  childSelector = ".gallery-item",
  start = "top 85%",
  duration = 0.6,
}: {
  stagger?: number;
  childSelector?: string;
  start?: string;
  duration?: number;
} = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) {
        return;
      }

      const items = containerRef.current.querySelectorAll(childSelector);

      gsap.set(items, { opacity: 0, scale: 0.9 });

      ScrollTrigger.batch(items, {
        start,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            duration,
            stagger,
            ease: "power3.out",
          });
        },
      });
    },
    { scope: containerRef },
  );

  return containerRef;
}
