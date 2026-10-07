import { useReveal } from "../hooks/useReveal";

const HIGHLIGHTS = [
  {
    title: "Family-Centered",
    body: "Support built around the unique needs, rhythms, and goals of each family we serve.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Community Connected",
    body: "Helping families discover resources, programs, and opportunities available around them.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
      </svg>
    ),
  },
  {
    title: "Advocacy Focused",
    body: "Helping families understand educational options and confidently voice their needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M3 21h18M5 21V10l7-4 7 4v11M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Introduction() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-[#f7f3ec] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="grid items-end gap-14 md:grid-cols-12 md:gap-12 reveal">
          {/* Copy */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#b8965a]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#0a1628]/55">
                A Support System for Families
              </span>
            </div>

            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-[#0a1628] md:text-6xl text-balance">
              You don't have to navigate it{" "}
              <span className="italic font-medium text-[#4f6b58]">alone.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#0a1628]/70 md:text-lg">
              Families often face complicated decisions involving education, resources, services,
              and the future of their children. Our goal is to provide a trusted place to turn
              for guidance, advocacy, and meaningful connections.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-4">
              {HIGHLIGHTS.map((h, i) => (
                <div
                  key={h.title}
                  className="reveal reveal-delay-{i+1} reveal group border-t border-[#0a1628]/15 pt-5"
                  data-delay={i}
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center text-[#4f6b58] transition-transform group-hover:scale-110">
                    <div className="h-5 w-5">{h.icon}</div>
                  </div>
                  <h3 className="font-serif text-base font-medium text-[#0a1628]">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0a1628]/65">
                    {h.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="md:col-span-5">
            <div className="relative">
              {/* Decorative shape */}
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-tl-[80px] border-l border-t border-[#b8965a]/40" />

              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/images/intro-main.jpg"
                  alt="Parent and child sharing a moment"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                />
              </div>

              {/* Overlapping card */}
              <div className="absolute -bottom-8 -left-6 max-w-[220px] overflow-hidden rounded-sm bg-[#0a1628] p-5 shadow-2xl shadow-[#0a1628]/20 md:-left-12">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/intro-secondary.jpg"
                    alt="Family connection"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-serif text-3xl font-medium text-[#f7f3ec]">12+</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#f7f3ec]/65">
                    Years of family advocacy
                  </div>
                </div>
              </div>

              {/* Stat card */}
              <div className="absolute right-6 top-6 hidden bg-[#f7f3ec]/95 backdrop-blur-sm px-4 py-3 md:block">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4f6b58]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/65">
                    Trusted locally
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}