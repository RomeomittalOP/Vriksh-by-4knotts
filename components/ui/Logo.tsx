import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-forest-700", className)}
      aria-label="Vriksh by 4Knotts"
    >
      {/* Stylised Devanagari ४ reimagined as a technical tree */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* trunk */}
        <line x1="32" y1="58" x2="32" y2="34" />
        {/* roots */}
        <line x1="32" y1="58" x2="24" y2="62" opacity="0.55" />
        <line x1="32" y1="58" x2="40" y2="62" opacity="0.55" />
        <line x1="32" y1="58" x2="28" y2="63" opacity="0.4" />
        <line x1="32" y1="58" x2="36" y2="63" opacity="0.4" />
        {/* canopy curve (echo of ४) */}
        <path d="M14 24 C 22 24, 28 30, 32 34" />
        <path d="M50 24 C 42 24, 36 30, 32 34" />
        <path d="M14 24 C 18 12, 28 8, 32 14" />
        <path d="M50 24 C 46 12, 36 8, 32 14" />
        {/* horizontal bar — references ४ */}
        <line x1="10" y1="24" x2="54" y2="24" />
        {/* leaf dot */}
        <circle cx="32" cy="14" r="1.4" fill="currentColor" />
      </g>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Logo className="h-7 w-7" />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-[22px] tracking-tight">Vriksh</span>
        <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-forest-700/60">
          by 4Knotts
        </span>
      </div>
    </div>
  );
}
