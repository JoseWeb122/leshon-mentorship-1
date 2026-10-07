import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-[#f7f3ec] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="reveal grid items-center gap-14 md:grid-cols-12 md:gap-16">
          {/* Image */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/images/about.jpg"
                  alt="Leshon, founder"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Signature block */}
              <div className="absolute -bottom-6 -right-4 hidden bg-[#0a1628] p-6 shadow-2xl shadow-[#0a1628]/30 md:block max-w-[240px]">
                <div
                  className="font-serif text-2xl italic text-[#f7f3ec]"
                  style={{ fontStyle: "italic", fontFamily: "'Fraunces', serif" }}
                >
                  Leshon
                </div>
                <div className="mt-2 h-px w-10 bg-[#d4b583]" />
                <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[#d4b583]">
                  Founder
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#f7f3ec]/70">
                  Family & Community Advocate
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#b8965a]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#0a1628]/55">
                About
              </span>
            </div>

            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-[#0a1628] md:text-6xl text-balance">
              Built around families.{" "}
              <span className="italic font-medium text-[#4f6b58]">Connected to community.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-[#0a1628]/75 md:text-[17px]">
              <p>
                Our work is centered around a simple belief: families deserve access to
                information, guidance, advocacy, and community support when they need it most.
              </p>
              <p>
                Leshon founded this organization to walk alongside families through real
                decisions — with patience, honesty, and respect for each family's unique story.
                Whether through one-on-one mentorship, educational advocacy, or connecting
                families to resources, the work is rooted in a deep belief that no family
                should have to figure things out alone.
              </p>
              <p>
                This is a space for honest conversations, practical guidance, and meaningful
                connection to the community around you.
              </p>
            </div>

            {/* Inline signature for mobile */}
            <div className="mt-10 border-t border-[#0a1628]/10 pt-6 md:hidden">
              <div
                className="font-serif text-2xl italic text-[#0a1628]"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Leshon
              </div>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#0a1628]/55">
                Family & Community Advocate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}