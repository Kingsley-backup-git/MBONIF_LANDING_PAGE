import { useSmoothMarquee } from "../hooks/useMarquee";

export default function MarqueeRow({
  children,
  speed,
}: {
  children: React.ReactNode;
  speed: any;
}) {
  const ref = useSmoothMarquee(speed);

  return (
    <div className="overflow-hidden absolute z-[9] top-[-10px] w-full">
      <div ref={ref} className="flex w-max gap-8">
        {/* First copy */}
        <div className="marquee-copy flex gap-8 shrink-0">{children}</div>

        {/* Duplicate copy (critical for seamless loop) */}
        <div className="marquee-copy flex gap-8 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
