import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

const METRICS = [
  { value: 500, suffix: "+", label: "Families Supported", sub: "Across mentorship and advocacy" },
  { value: 80, suffix: "+", label: "Community Connections", sub: "Local programs & partners" },
  { value: 200, suffix: "+", label: "Advocacy Conversations", sub: "Educational meetings prepared" },
  { value: 7, suffix: "", label: "Resource Areas", sub: "Curated categories of support" },
];

function MetricCard({ value, suffix, label, sub, start }: {
  value: number; suffix: string; label: string; sub: string; start: boolean;
}) {
  const display = useCountUp(value, 1600, start);
  return (
    <div className="group border-t border-[#f7f3ec]/15 pt-8">
      <div className="flex items-baseline gap-1">
        <span className="font-serif text-5xl font-light leading-none text-[#f7f3ec] md:text-7xl">
          {display.toLocaleString()}
        </span>
        <span className="font-serif text-3xl font-light text-[#d4b583] md:text-5xl">{suffix}</span>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium tracking-wide text-[#f7f3ec]">
          {label}
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#f7f3ec]/55">
          {sub}
        </p>
      </div>
    </div>
  );
}

export default function Impact() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0a1628] py-24 text-[#f7f3ec] md:py-32">
      <div className="absolute inset-0 opacity-[0.05] bg-grain pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 grid items-end gap-8 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#d4b583]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d4b583]">
                Impact
              </span>
            </div>
            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl text-balance">
              Trust built one family{" "}
              <span className="italic font-medium text-[#d4b583]">at a time.</span>
            </h2>
          </div>
          <p className="md:col-span-5 text-[15px] leading-relaxed text-[#f7f3ec]/65">
            These figures are placeholders to demonstrate the layout — real numbers can
            be updated as the organization grows.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <MetricCard
              key={m.label}
              value={m.value}
              suffix={m.suffix}
              label={m.label}
              sub={m.sub}
              start={start}
            />
          ))}
        </div>
      </div>
    </section>
  );
}