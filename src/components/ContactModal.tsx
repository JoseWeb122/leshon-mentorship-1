import { useEffect, useState } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Parent / Family Member",
    support: "Family Mentorship",
    message: "",
  });

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setForm({
        name: "",
        email: "",
        role: "Parent / Family Member",
        support: "Family Mentorship",
        message: "",
      });
    }, 2200);
  };

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
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a1628]/8 text-[#0a1628] transition-colors hover:bg-[#0a1628] hover:text-[#f7f3ec]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="px-8 py-16 text-center md:px-12 md:py-20">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#4f6b58]/10">
              <svg className="h-6 w-6 text-[#4f6b58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif text-3xl font-medium text-[#0a1628]">
              Thank you.
            </h3>
            <p className="mt-3 text-[15px] text-[#0a1628]/65">
              Your message has been received. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="border-b border-[#0a1628]/10 px-7 py-6 md:px-10 md:py-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#b8965a]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55">
                  Get in Touch
                </span>
              </div>
              <h3 className="font-serif text-3xl font-medium leading-tight text-[#0a1628]">
                Let's connect.
              </h3>
              <p className="mt-2 text-sm text-[#0a1628]/65">
                Share a bit about your situation and we'll reach out within 1–2 business days.
              </p>
            </div>

            <div className="grid gap-4 px-7 py-7 md:grid-cols-2 md:px-10 md:py-9">
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-b border-[#0a1628]/15 bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-[#4f6b58]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b border-[#0a1628]/15 bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-[#4f6b58]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55 mb-2">
                  I am a...
                </label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full border-b border-[#0a1628]/15 bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-[#4f6b58]"
                >
                  <option>Parent / Family Member</option>
                  <option>Caregiver</option>
                  <option>Educator</option>
                  <option>Community Partner</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55 mb-2">
                  Support I'm Looking For
                </label>
                <select
                  value={form.support}
                  onChange={(e) => setForm({ ...form, support: e.target.value })}
                  className="w-full border-b border-[#0a1628]/15 bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-[#4f6b58]"
                >
                  <option>Family Mentorship</option>
                  <option>Educational Advocacy</option>
                  <option>Community Resources</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#0a1628]/55 mb-2">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none border-b border-[#0a1628]/15 bg-transparent py-2.5 text-sm outline-none transition-colors focus:border-[#4f6b58]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-[#0a1628]/10 bg-[#efe8da]/50 p-3 sm:flex-row sm:p-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-[#0a1628]/15 px-5 py-3 text-sm tracking-wide text-[#0a1628] transition-all hover:bg-[#0a1628]/5"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#0a1628] px-5 py-3 text-sm tracking-wide text-[#f7f3ec] transition-all hover:bg-[#4f6b58]"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
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