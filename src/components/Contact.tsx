import { useReveal } from "../hooks/useReveal";

type ContactProps = {
  onOpen: () => void;
};

export default function Contact({ onOpen }: ContactProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative bg-[#f7f3ec] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="reveal relative overflow-hidden border border-[#0a1628]/10 bg-gradient-to-br from-[#0a1628] to-[#1a2a44] p-10 text-[#f7f3ec] md:p-16 lg:p-20">
          {/* Decorative shapes */}
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#d4b583]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#4f6b58]/15 blur-3xl" />

          <div className="relative grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-[#d4b583]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d4b583]">
                  Take the First Step
                </span>
              </div>
              <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl text-balance">
                A conversation can be the{" "}
                <span className="italic font-medium text-[#d4b583]">beginning.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#f7f3ec]/75 md:text-base">
                Reach out when you're ready. We'll listen first, and help you understand
                your options in a way that feels clear, supportive, and actionable.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="space-y-3">
                <button
                  onClick={onOpen}
                  className="group flex w-full items-center justify-between gap-3 bg-[#f7f3ec] px-6 py-5 text-left text-[#0a1628] transition-all hover:bg-[#d4b583]"
                >
                  <span>
                    <span className="block font-serif text-lg font-medium">Send a message</span>
                    <span className="block text-xs text-[#0a1628]/60">We'll respond within 1–2 days</span>
                  </span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="flex items-center gap-3 border border-[#f7f3ec]/15 px-6 py-5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#d4b583]/15">
                    <svg className="h-4 w-4 text-[#d4b583]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#d4b583]">By Phone</p>
                    <p className="text-sm text-[#f7f3ec]">(555) 010-0143</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-[#f7f3ec]/15 px-6 py-5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#d4b583]/15">
                    <svg className="h-4 w-4 text-[#d4b583]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#d4b583]">Service Area</p>
                    <p className="text-sm text-[#f7f3ec]">Greater Metro Area · Virtual Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}