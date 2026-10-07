import { useReveal } from "../hooks/useReveal";

const STEPS = [
  {
    number: "01",
    title: "Listen",
    body: "We begin by understanding the family's situation, concerns, and goals — without rushing to solutions.",
  },
  {
    number: "02",
    title: "Guide",
    body: "We help families understand their options and identify practical next steps with clarity and care.",
  },
  {
    number: "03",
    title: "Connect",
    body: "We connect families with appropriate resources, services, and community opportunities for follow-through.",
  },
];

export default function Journey() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-[#f7f3ec] py-24 md:py-32">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-[#0a1628]/8" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="reveal mb-16 grid items-end gap-10 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#b8965a]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#0a1628]/55">
                The Journey
              </span>
            </div>
            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-[#0a1628] md:text-6xl text-balance">
              Support that starts with{" "}
              <span className="italic font-medium text-[#4f6b58]">understanding.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[5/3] overflow-hidden">
              <img
                src="/images/journey.jpg"
                alt="A path through the forest"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line - desktop */}
          <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-[#0a1628]/15 to-transparent md:block" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {STEPS.map((step, i) => (
              <Step key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal reveal-delay-${index + 1} relative`}>
      {/* Mobile vertical line */}
      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-[#0a1628]/15 to-transparent md:hidden" />

      <div className="mb-5 flex items-center gap-4">
        <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#f7f3ec] border border-[#0a1628]/15">
          <div className="absolute inset-1 rounded-full bg-[#4f6b58]" />
          <span className="relative font-serif text-sm font-medium text-[#f7f3ec]">
            {step.number}
          </span>
        </div>
        {/* Connector dot on desktop timeline */}
        <div className="hidden h-1.5 w-1.5 rounded-full bg-[#b8965a] md:block" />
      </div>

      <h3 className="font-serif text-2xl font-medium leading-tight text-[#0a1628] md:text-3xl">
        {step.title}
      </h3>
      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#0a1628]/70">
        {step.body}
      </p>
    </div>
  );
}