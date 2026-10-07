import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

type ServiceDetail = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  image: string;
};

const SERVICES: ServiceDetail[] = [
  {
    id: "mentorship",
    eyebrow: "Service 01",
    title: "Family Mentorship",
    description:
      "Mentorship creates space for honest conversations, practical guidance, and steady encouragement. Families are met where they are — without judgment — and walked through decisions with care.",
    bullets: [
      "One-on-one guidance with a trusted mentor",
      "Support during major family transitions",
      "Help navigating school, services, and benefits",
      "A consistent relationship built on trust",
    ],
    cta: "Learn About Family Mentorship",
    image: "/images/service-mentorship.jpg",
  },
  {
    id: "advocacy",
    eyebrow: "Service 02",
    title: "Educational Advocacy",
    description:
      "Educational advocacy helps families approach important conversations with greater clarity and confidence. From understanding options to preparing for meetings, families are never alone in the process.",
    bullets: [
      "Understanding educational options and programs",
      "Preparing for important school conversations",
      "Supporting clear family–educator communication",
      "Identifying services and accommodations",
    ],
    cta: "Explore Educational Advocacy",
    image: "/images/service-advocacy.jpg",
  },
  {
    id: "community",
    eyebrow: "Service 03",
    title: "Community Resources",
    description:
      "Community resources connect families with programs, services, and opportunities that can provide additional layers of support — at the right time, and in the right way for their situation.",
    bullets: [
      "Personalized resource matching",
      "Connections to local programs and services",
      "Help understanding eligibility and access",
      "A trusted point of contact as needs change",
    ],
    cta: "Explore Community Resources",
    image: "/images/service-community.jpg",
  },
];

export default function FeaturedServices() {
  const [active, setActive] = useState(0);
  const ref = useReveal<HTMLDivElement>();
  const current = SERVICES[active];

  return (
    <section className="relative bg-[#0a1628] py-24 text-[#f7f3ec] md:py-32">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.06] bg-grain pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="reveal mb-14 max-w-2xl md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#d4b583]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d4b583]">
              The Experience
            </span>
          </div>
          <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl text-balance">
            Three ways we walk{" "}
            <span className="italic font-medium text-[#d4b583]">alongside families.</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-14">
          {/* Tabs (left) */}
          <div className="md:col-span-5">
            <div className="space-y-2">
              {SERVICES.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center gap-5 border-l-2 py-5 pl-6 pr-4 text-left transition-all duration-500 ${
                      isActive
                        ? "border-[#d4b583] bg-[#f7f3ec]/[0.04]"
                        : "border-[#f7f3ec]/15 hover:border-[#f7f3ec]/40 hover:bg-[#f7f3ec]/[0.02]"
                    }`}
                  >
                    <span
                      className={`font-serif text-2xl font-light transition-colors duration-300 ${
                        isActive ? "text-[#d4b583]" : "text-[#f7f3ec]/45"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-serif text-xl font-medium transition-colors duration-300 md:text-2xl ${
                          isActive ? "text-[#f7f3ec]" : "text-[#f7f3ec]/65"
                        }`}
                      >
                        {s.title}
                      </span>
                    </span>
                    <svg
                      className={`h-4 w-4 transition-all duration-500 ${
                        isActive
                          ? "translate-x-0 text-[#d4b583] opacity-100"
                          : "-translate-x-2 text-[#f7f3ec]/40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active content (right) */}
          <div className="md:col-span-7">
            <div key={current.id} className="animate-[contentFade_0.7s_ease-out]">
              {/* Image */}
              <div className="relative mb-8 aspect-[5/3.4] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/35 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 bg-[#f7f3ec]/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#0a1628] backdrop-blur-sm">
                  {current.eyebrow}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#b8965a]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#d4b583]">
                  {current.eyebrow}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-light leading-tight md:text-4xl">
                {current.title}
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#f7f3ec]/75">
                {current.description}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-[#d4b583]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-[#f7f3ec]/80">{b}</span>
                  </li>
                ))}
              </ul>

              <button className="group mt-8 inline-flex items-center gap-2.5 border-b border-[#d4b583] pb-2 text-sm font-medium tracking-wide text-[#d4b583] transition-all hover:gap-4">
                {current.cta}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}