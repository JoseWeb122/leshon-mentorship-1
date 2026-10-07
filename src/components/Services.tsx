import { useReveal } from "../hooks/useReveal";

const SERVICES = [
  {
    number: "01",
    title: "Family Mentorship",
    description:
      "Personal guidance and encouragement for families navigating challenges, transitions, and important decisions.",
    image: "/images/service-mentorship.jpg",
    cta: "Learn About Family Mentorship",
  },
  {
    number: "02",
    title: "Educational Advocacy",
    description:
      "Helping parents and caregivers better understand educational options, communicate their needs, and advocate for their children.",
    image: "/images/service-advocacy.jpg",
    cta: "Explore Educational Advocacy",
  },
  {
    number: "03",
    title: "Community Resources",
    description:
      "Connecting families with programs, organizations, services, and opportunities that can provide additional support.",
    image: "/images/service-community.jpg",
    cta: "Explore Resources",
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-[#efe8da] py-24 md:py-32">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-[#0a1628]/8" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="reveal mb-16 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#b8965a]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#0a1628]/55">
                Our Services
              </span>
            </div>
            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-[#0a1628] md:text-6xl text-balance">
              How we <span className="italic font-medium text-[#4f6b58]">support</span> families.
            </h2>
          </div>
          <p className="max-w-md text-base text-[#0a1628]/70">
            Practical guidance and meaningful support for the challenges families face — offered
            with care, clarity, and respect.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.number} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  service: typeof SERVICES[0];
  index: number;
};

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${index + 1} group relative cursor-pointer border border-[#0a1628]/10 bg-[#f7f3ec] transition-all duration-500 hover:-translate-y-2 hover:border-[#4f6b58]/40 hover:shadow-[0_30px_60px_-30px_rgba(10,22,40,0.25)]`}
    >
      {/* Number badge */}
      <div className="absolute right-6 top-6 z-10 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55">
        <span className="h-px w-6 bg-[#b8965a]" />
        {service.number}
      </div>

      {/* Image */}
      <div className="relative aspect-[5/4] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-7 md:p-8">
        {/* Icon */}
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-[#4f6b58]/10 text-[#4f6b58] transition-all group-hover:bg-[#4f6b58] group-hover:text-[#f7f3ec]">
          {index === 0 && (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.4}>
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {index === 1 && (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.4}>
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {index === 2 && (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.4}>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        <h3 className="font-serif text-2xl font-medium leading-tight text-[#0a1628]">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#0a1628]/70">
          {service.description}
        </p>

        {/* CTA */}
        <div className="mt-6 flex items-center gap-2 border-t border-[#0a1628]/10 pt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#4f6b58]">
          {service.cta}
          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}