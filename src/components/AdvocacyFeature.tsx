import { useReveal } from "../hooks/useReveal";

const POINTS = [
  "Understanding educational options and programs",
  "Preparing for important conversations",
  "Supporting parent–educator communication",
  "Identifying available services and supports",
  "Helping families advocate for their children",
];

export default function AdvocacyFeature() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-[#efe8da] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="reveal grid items-center gap-14 md:grid-cols-12 md:gap-16">
          {/* Image */}
          <div className="md:col-span-6">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/advocacy-feature.jpg"
                  alt="Mother helping child with schoolwork"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] hover:scale-105"
                />
              </div>

              {/* Floating accent card */}
              <div className="absolute -right-4 bottom-8 hidden bg-[#0a1628] p-5 shadow-2xl shadow-[#0a1628]/30 md:block max-w-[200px]">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#d4b583]">
                  <span className="h-1 w-1 rounded-full bg-[#d4b583]" />
                  Advocacy
                </div>
                <p className="mt-2 font-serif text-lg leading-tight text-[#f7f3ec]">
                  A clearer path through important conversations.
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#b8965a]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#0a1628]/55">
                Educational Advocacy
              </span>
            </div>

            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-[#0a1628] md:text-6xl text-balance">
              Every family deserves{" "}
              <span className="italic font-medium text-[#4f6b58]">to be heard.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#0a1628]/70 md:text-lg">
              Understanding the educational system can be overwhelming. We help families
              approach important conversations with greater clarity, confidence, and
              preparation — so their voices, and the needs of their children, are clearly
              heard.
            </p>

            <ul className="mt-9 space-y-4">
              {POINTS.map((p, i) => (
                <li
                  key={p}
                  className="reveal reveal-delay-{i+1} flex items-start gap-4 border-b border-[#0a1628]/10 pb-4 last:border-b-0"
                >
                  <span className="mt-1 font-serif text-sm font-medium text-[#b8965a]">
                    0{i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-[#0a1628]/80">{p}</span>
                </li>
              ))}
            </ul>

            <button className="group mt-10 inline-flex items-center gap-2.5 bg-[#0a1628] px-7 py-4 text-sm tracking-wide text-[#f7f3ec] transition-all hover:bg-[#4f6b58]">
              Learn More About Advocacy
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}