import { useEffect, useState } from "react";

type HeroProps = {
  onOpenContact: () => void;
  onScrollServices: () => void;
};

export default function Hero({ onOpenContact, onScrollServices }: HeroProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOffset(Math.min(y * 0.3, 220));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0a1628]">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offset * 0.4}px)` }}
      >
        <img
          src="/images/hero.jpg"
          alt="Family sharing a warm moment together"
          className="hero-image h-full w-full object-cover"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/55 via-[#0a1628]/30 to-[#0a1628]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/65 via-[#0a1628]/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-36">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              <span className="h-px w-10 bg-[#d4b583]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d4b583]">
                Family · Education · Community
              </span>
            </div>

            <h1 className="font-serif text-[44px] font-light leading-[1.05] tracking-tight text-[#f7f3ec] text-balance opacity-0 animate-[fadeInUp_1.2s_ease-out_0.4s_forwards] sm:text-6xl md:text-7xl lg:text-[88px]">
              Helping families move forward
              <span className="block font-medium italic text-[#d4b583]">with confidence.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#f7f3ec]/85 opacity-0 animate-[fadeInUp_1.2s_ease-out_0.7s_forwards] md:text-lg">
              Guidance, advocacy, and community connections designed to help families
              navigate challenges and discover the support available to them.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 opacity-0 animate-[fadeInUp_1.2s_ease-out_1s_forwards]">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#f7f3ec] px-7 py-4 text-sm tracking-wide text-[#0a1628] transition-all hover:bg-[#d4b583]"
              >
                Get Support
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={onScrollServices}
                className="group inline-flex items-center justify-center gap-2 border border-[#f7f3ec]/30 bg-transparent px-7 py-4 text-sm tracking-wide text-[#f7f3ec] transition-all hover:border-[#f7f3ec]/70 hover:bg-[#f7f3ec]/5"
              >
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-16 hidden items-end justify-between border-t border-[#f7f3ec]/15 pt-6 md:flex">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#f7f3ec]/55">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4b583] animate-pulse" />
              Now accepting new family connections
            </div>

            <button
              onClick={onScrollServices}
              className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#f7f3ec]/65 transition-colors hover:text-[#f7f3ec]"
            >
              Discover More
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f7f3ec]/30 transition-all group-hover:border-[#f7f3ec] group-hover:bg-[#f7f3ec] group-hover:text-[#0a1628]">
                <svg className="h-3.5 w-3.5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(36px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}