import { useSmoothMarquee } from "../hooks/useMarquee";

export default function DefaultMarqueeRow({
  children,
  speed,
}: {
  children: React.ReactNode;
  speed: number;
}) {
  const ref = useSmoothMarquee(speed);

  return (
    <div className="overflow-hidden h-full  w-full">
      <div ref={ref} className="flex h-full w-max gap-1.5">
        {/* First copy */}
        <div className="marquee-copy flex gap-1.5 shrink-0">{children}</div>

        {/* Duplicate copy (critical for seamless loop) */}
        <div className="marquee-copy flex gap-1.5 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
