import { useMemo, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import {
  RESOURCE_CATEGORIES,
  RESOURCES,
  type Resource,
} from "../data/resources";
import ResourceModal from "./ResourceModal";

export default function ResourcesDirectory() {
  const ref = useReveal<HTMLDivElement>();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("");
  const [active, setActive] = useState<Resource | null>(null);

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const q = query.trim().toLowerCase();
      const loc = location.trim().toLowerCase();
      const matchQ =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.services.some((s) => s.toLowerCase().includes(q));
      const matchCat = category === "All Categories" || r.category === category;
      const matchLoc = !loc || r.location.toLowerCase().includes(loc);
      return matchQ && matchCat && matchLoc;
    });
  }, [query, category, location]);

  return (
    <section id="resources" className="relative bg-[#0a1628] py-24 text-[#f7f3ec] md:py-32">
      <div className="absolute inset-0 opacity-[0.06] bg-grain pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="reveal mb-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#d4b583]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d4b583]">
              Community Resources
            </span>
          </div>
          <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl text-balance">
            Find resources{" "}
            <span className="italic font-medium text-[#d4b583]">that can help.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#f7f3ec]/70">
            A curated starting point for discovering programs, organizations, and services
            designed to support families. Demo data shown for design demonstration.
          </p>
        </div>

        {/* Search bar */}
        <div className="reveal reveal-delay-1 mb-10 border border-[#f7f3ec]/12 bg-[#f7f3ec]/[0.03] p-5 md:p-7">
          <div className="grid gap-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <label className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#f7f3ec]/55 mb-2">
                What kind of support are you looking for?
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#f7f3ec]/55"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Counseling, education, youth programs..."
                  className="w-full border-b border-[#f7f3ec]/15 bg-transparent py-3 pr-9 pl-10 text-sm text-[#f7f3ec] outline-none transition-colors placeholder:text-[#f7f3ec]/40 focus:border-[#d4b583]"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#f7f3ec]/55 mb-2">
                Category
              </label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full appearance-none border-b border-[#f7f3ec]/15 bg-transparent py-3 pr-9 text-sm text-[#f7f3ec] outline-none transition-colors focus:border-[#d4b583]"
                >
                  {RESOURCE_CATEGORIES.map((c) => (
                    <option key={c} value={c} className="bg-[#0a1628]">
                      {c}
                    </option>
                  ))}
                </select>
                <svg className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-[#f7f3ec]/55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="md:col-span-3">
              <label className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#f7f3ec]/55 mb-2">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your city or ZIP code"
                className="w-full border-b border-[#f7f3ec]/15 bg-transparent py-3 text-sm text-[#f7f3ec] outline-none transition-colors placeholder:text-[#f7f3ec]/40 focus:border-[#d4b583]"
              />
            </div>

            <div className="md:col-span-1">
              <button
                onClick={() => {}}
                className="flex h-11 w-full items-center justify-center bg-[#d4b583] text-[#0a1628] transition-all hover:bg-[#f7f3ec]"
                aria-label="Find resources"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[#f7f3ec]/10 pt-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#f7f3ec]/55">
              {filtered.length} {filtered.length === 1 ? "resource" : "resources"} found
            </p>
            {(query || category !== "All Categories" || location) && (
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("All Categories");
                  setLocation("");
                }}
                className="text-[11px] uppercase tracking-[0.2em] text-[#d4b583] hover:text-[#f7f3ec]"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <ResourceCard key={r.id} resource={r} index={i} onOpen={() => setActive(r)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="border border-[#f7f3ec]/12 bg-[#f7f3ec]/[0.03] px-6 py-16 text-center">
            <p className="font-serif text-2xl font-light text-[#f7f3ec]">
              No matches found.
            </p>
            <p className="mt-2 text-sm text-[#f7f3ec]/60">
              Try adjusting your filters or contact us for personalized help.
            </p>
          </div>
        )}
      </div>

      <ResourceModal resource={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ResourceCard({
  resource,
  index,
  onOpen,
}: {
  resource: Resource;
  index: number;
  onOpen: () => void;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1} group relative border border-[#f7f3ec]/12 bg-[#f7f3ec]/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4b583]/40 hover:bg-[#f7f3ec]/[0.04]`}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="h-1 w-4 bg-[#d4b583]" />
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#d4b583]">
          {resource.category}
        </span>
      </div>

      <h3 className="font-serif text-xl font-medium leading-tight text-[#f7f3ec]">
        {resource.name}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[#f7f3ec]/65 line-clamp-3">
        {resource.description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#f7f3ec]/45">
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {resource.location}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#f7f3ec]/10 pt-5">
        <span className="text-[10px] uppercase tracking-[0.22em] text-[#f7f3ec]/40">
          Resource
        </span>
        <button
          onClick={onOpen}
          className="group/btn inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#d4b583] transition-colors"
        >
          View Resource
          <svg className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}