import { useEffect, useState } from "react";

type NavbarProps = {
  onOpenContact: () => void;
};

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f7f3ec]/85 backdrop-blur-md border-b border-[#0a1628]/8 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group flex items-center gap-3"
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-sm transition-all duration-500 ${
                scrolled
                  ? "bg-[#0a1628] text-[#f7f3ec]"
                  : "bg-[#f7f3ec]/95 text-[#0a1628]"
              }`}
            >
              <span className="font-serif text-lg font-semibold leading-none">L</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-serif text-lg font-medium tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-[#0a1628]" : "text-[#f7f3ec]"
                }`}
              >
                LESHON
              </span>
              <span
                className={`text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ${
                  scrolled ? "text-[#0a1628]/55" : "text-[#f7f3ec]/70"
                }`}
              >
                Family & Community Support
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`group relative text-sm font-medium tracking-wide transition-colors duration-500 ${
                  scrolled
                    ? "text-[#0a1628]/75 hover:text-[#0a1628]"
                    : "text-[#f7f3ec]/85 hover:text-[#f7f3ec]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-[#0a1628]" : "bg-[#f7f3ec]"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className={`hidden rounded-sm px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 lg:inline-flex ${
                scrolled
                  ? "bg-[#0a1628] text-[#f7f3ec] hover:bg-[#0a1628]/90"
                  : "bg-[#f7f3ec] text-[#0a1628] hover:bg-[#f7f3ec]/90"
              }`}
            >
              Get Support
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`flex h-10 w-10 items-center justify-center rounded-sm transition-all duration-500 lg:hidden ${
                scrolled
                  ? "bg-[#0a1628]/8 text-[#0a1628]"
                  : "bg-[#f7f3ec]/15 text-[#f7f3ec] backdrop-blur-sm"
              }`}
            >
              <div className="flex flex-col gap-[5px]">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-3 bg-current" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#0a1628] transition-opacity duration-500 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`relative flex h-full flex-col bg-[#0a1628] text-[#f7f3ec] transition-transform duration-700 ease-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#f7f3ec] text-[#0a1628]">
                <span className="font-serif text-lg font-semibold leading-none">L</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-medium tracking-tight text-[#f7f3ec]">LESHON</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#f7f3ec]/55">
                  Family & Community Support
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#f7f3ec]/8"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mt-14 flex flex-col px-6">
            {LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`group border-b border-[#f7f3ec]/10 py-5 transition-all duration-700 ${
                  mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: mobileOpen ? `${200 + i * 80}ms` : "0ms" }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-medium tracking-tight">
                    {link.label}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#f7f3ec]/40">
                    0{i + 1}
                  </span>
                </div>
              </a>
            ))}
          </nav>

          <div className="mt-auto p-6">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="w-full bg-[#f7f3ec] py-4 text-sm font-medium tracking-wide text-[#0a1628]"
            >
              Get Support
            </button>
            <p className="mt-5 text-center text-[11px] uppercase tracking-[0.18em] text-[#f7f3ec]/45">
              Guidance · Advocacy · Community
            </p>
          </div>
        </div>
      </div>
    </>
  );
}