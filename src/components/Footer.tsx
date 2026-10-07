type FooterProps = {
  onOpenContact: () => void;
};

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const MARQUEE_WORDS = [
  "Family Mentorship",
  "Educational Advocacy",
  "Community Resources",
  "Guidance",
  "Connection",
  "Trust",
  "Hope",
];

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-[#0a1628] text-[#f7f3ec]">
      {/* Marquee band */}
      <div className="overflow-hidden border-y border-[#f7f3ec]/8 py-7">
        <div className="flex w-max gap-12 animate-marquee">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <div key={i} className="flex items-center gap-12 whitespace-nowrap">
              <span className="font-serif text-2xl font-light italic md:text-3xl">
                {w}
              </span>
              <span className="text-[#d4b583]">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#f7f3ec] text-[#0a1628]">
                <span className="font-serif text-xl font-semibold leading-none">L</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl font-medium tracking-tight text-[#f7f3ec]">LESHON</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#f7f3ec]/55">
                  Family & Community Support
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#f7f3ec]/65">
              Walking alongside families with care, clarity, and meaningful connection to
              community.
            </p>
            <button
              onClick={onOpenContact}
              className="mt-7 inline-flex items-center gap-2.5 bg-[#f7f3ec] px-5 py-3 text-sm tracking-wide text-[#0a1628] transition-all hover:bg-[#d4b583]"
            >
              Get Support
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#d4b583] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(l.href);
                      if (target) {
                        const top =
                          target.getBoundingClientRect().top + window.scrollY - 70;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }}
                    className="group flex items-center gap-2 text-sm text-[#f7f3ec]/75 transition-colors hover:text-[#f7f3ec]"
                  >
                    <span className="h-px w-3 bg-[#d4b583]/0 transition-all group-hover:w-5 group-hover:bg-[#d4b583]" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#d4b583] mb-5">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-[#f7f3ec]/75">
              <p>(555) 010-0143</p>
              <p>hello@leshon-support.example</p>
              <p>Greater Metro Area<br />Virtual sessions available</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#f7f3ec]/10 pt-7 text-[11px] uppercase tracking-[0.2em] text-[#f7f3ec]/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Leshon Family & Community Support · Demo project</p>
          <div className="flex items-center gap-5">
            <span>Privacy</span>
            <span>Accessibility</span>
            <span>Site Demo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}