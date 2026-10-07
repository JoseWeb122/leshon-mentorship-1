import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We didn't know where to turn. Having someone listen, explain our options, and walk us through next steps changed everything for us.",
    name: "Marisol",
    role: "Parent",
  },
  {
    quote:
      "It felt like someone finally understood our family's situation. The advocacy support before our school meeting gave us real confidence.",
    name: "Daniel",
    role: "Father",
  },
  {
    quote:
      "The connection to community resources made a difficult season so much more manageable. We didn't feel alone anymore.",
    name: "Aisha",
    role: "Family Member",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const ref = useReveal<HTMLDivElement>();
  const t = TESTIMONIALS[index];

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative bg-[#efe8da] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div ref={ref} className="reveal mb-14 text-center md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#b8965a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#0a1628]/55">
              Stories
            </span>
            <span className="h-px w-10 bg-[#b8965a]" />
          </div>
          <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-[#0a1628] md:text-6xl text-balance">
            Families deserve support{" "}
            <span className="italic font-medium text-[#4f6b58]">they can trust.</span>
          </h2>
          <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[#0a1628]/40">
            Demo placeholder testimonials — for design demonstration.
          </p>
        </div>

        <div className="relative">
          <div
            key={index}
            className="mx-auto max-w-3xl border-y border-[#0a1628]/12 py-12 md:py-16"
            style={{ animation: "testimonialFade 0.7s ease-out" }}
          >
            {/* Quote mark */}
            <div className="mb-6 text-center font-serif text-7xl leading-none text-[#b8965a]/40 md:text-8xl">
              "
            </div>

            <blockquote className="text-center font-serif text-2xl font-light leading-snug text-[#0a1628] md:text-[34px] md:leading-tight text-balance">
              {t.quote}
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b8965a]" />
              <div className="text-center">
                <p className="font-serif text-lg font-medium text-[#0a1628]">{t.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.22em] text-[#0a1628]/55">
                  {t.role}
                </p>
              </div>
              <span className="h-px w-8 bg-[#b8965a]" />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0a1628]/15 text-[#0a1628] transition-all hover:border-[#0a1628] hover:bg-[#0a1628] hover:text-[#f7f3ec]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1 transition-all duration-300 ${
                    i === index ? "w-8 bg-[#0a1628]" : "w-3 bg-[#0a1628]/25"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0a1628]/15 text-[#0a1628] transition-all hover:border-[#0a1628] hover:bg-[#0a1628] hover:text-[#f7f3ec]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonialFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}