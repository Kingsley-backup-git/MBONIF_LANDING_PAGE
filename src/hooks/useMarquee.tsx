import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function useSmoothMarquee(speed: number) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const firstCopy = el.querySelector<HTMLElement>(".marquee-copy");
      if (!firstCopy) return;

      // Get the width of the text copy
      const copyWidth = firstCopy.offsetWidth;

      // Get the actual gap size in pixels (defaults to 32 if gap-8)
      const gap = parseFloat(window.getComputedStyle(el).gap) || 0;

      // The absolute total distance to move before looping seamlessly
      const totalDistance = copyWidth + gap;

      // Simple, flawless infinite linear animation
      gsap.to(el, {
        x: -totalDistance,
        duration: totalDistance / speed,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed]);

  return containerRef;
}
