import { useEffect } from "react";
import type { Resource } from "../data/resources";

type ResourceModalProps = {
  resource: Resource | null;
  onClose: () => void;
};

export default function ResourceModal({ resource, onClose }: ResourceModalProps) {
  useEffect(() => {
    if (!resource) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [resource, onClose]);

  if (!resource) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8">
      <div
        className="modal-backdrop absolute inset-0"
        onClick={onClose}
        style={{ animation: "fadeIn 0.4s ease-out" }}
      />
      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden bg-[#f7f3ec] shadow-2xl shadow-[#0a1628]/40"
        style={{ animation: "modalUp 0.55s cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a1628]/8 text-[#0a1628] transition-colors hover:bg-[#0a1628] hover:text-[#f7f3ec]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="border-b border-[#0a1628]/10 px-7 py-6 md:px-10 md:py-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#b8965a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55">
              {resource.category}
            </span>
          </div>
          <h3 className="font-serif text-3xl font-medium leading-tight text-[#0a1628] md:text-4xl">
            {resource.name}
          </h3>
          <p className="mt-3 text-sm text-[#0a1628]/65">{resource.location}</p>
        </div>

        <div className="px-7 py-7 md:px-10 md:py-9 max-h-[60vh] overflow-y-auto">
          <p className="text-[15px] leading-relaxed text-[#0a1628]/80">
            {resource.description}
          </p>

          <div className="mt-7">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55 mb-3">
              Services offered
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {resource.services.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 border-l-2 border-[#4f6b58]/40 pl-3 text-sm text-[#0a1628]/80"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 grid gap-3 border-t border-[#0a1628]/10 pt-6 sm:grid-cols-2">
            <div>
              <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55 mb-1.5">
                Hours
              </h4>
              <p className="text-sm text-[#0a1628]/85">{resource.hours}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55 mb-1.5">
                Website
              </h4>
              <p className="text-sm text-[#0a1628]/85">{resource.website}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#0a1628]/10 bg-[#efe8da]/50 p-3 sm:flex-row sm:p-4">
          <button className="flex-1 bg-[#0a1628] px-5 py-3 text-sm tracking-wide text-[#f7f3ec] transition-all hover:bg-[#4f6b58]">
            Visit Website
          </button>
          <button className="flex-1 border border-[#0a1628]/15 bg-transparent px-5 py-3 text-sm tracking-wide text-[#0a1628] transition-all hover:border-[#0a1628]/40 hover:bg-[#0a1628]/5">
            Contact: {resource.contact}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalUp { 
          from { opacity: 0; transform: translateY(40px) scale(0.97); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }
      `}</style>
    </div>
  );
}