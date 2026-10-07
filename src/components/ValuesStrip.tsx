const PILLARS = [
  "Family Mentorship",
  "Educational Advocacy",
  "Community Resources",
  "Guidance",
  "Connection",
];

export default function ValuesStrip() {
  return (
    <section className="relative bg-[#efe8da] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[#0a1628]/55">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b8965a]" />
            <span>A trusted starting point for families</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 md:justify-end">
            {PILLARS.map((p, i) => (
              <span key={p} className="flex items-center gap-7">
                <span className="font-serif text-base font-light italic text-[#0a1628]/75 md:text-lg">
                  {p}
                </span>
                {i < PILLARS.length - 1 && (
                  <span className="text-[#b8965a] last:hidden">✦</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}