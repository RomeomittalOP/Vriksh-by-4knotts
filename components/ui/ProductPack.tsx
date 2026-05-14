"use client";

import { Logo } from "@/components/ui/Logo";

type Variant = "moringa" | "rice" | "atta" | "oil";

type Props = {
  variant: Variant;
  name: string;
  sub: string;
  className?: string;
};

/**
 * Stylised CSS/SVG product packs — designed to read instantly as the four
 * Vriksh staples without depending on photo libraries. Each variant has
 * its own dominant colour, illustrated icon, and band placement.
 */

export function ProductPack({ variant, name, sub }: Props) {
  if (variant === "oil") return <OilBottle name={name} sub={sub} />;

  // Pouch variants (moringa / rice / atta)
  const palette = {
    moringa: {
      top: "#1d3b2a",
      band: "#142a1f",
      label: "#f5f2e9",
      sub: "rgba(245, 242, 233, 0.75)",
      iconBg: "rgba(245, 242, 233, 0.08)",
      tag: "#cbab7a"
    },
    rice: {
      top: "#f5f2e9",
      band: "#1d3b2a",
      label: "#1d3b2a",
      sub: "rgba(29, 59, 42, 0.65)",
      iconBg: "rgba(29, 59, 42, 0.08)",
      tag: "#1d3b2a"
    },
    atta: {
      top: "#f5f2e9",
      band: "#1d3b2a",
      label: "#1d3b2a",
      sub: "rgba(29, 59, 42, 0.65)",
      iconBg: "rgba(29, 59, 42, 0.08)",
      tag: "#cbab7a"
    }
  }[variant];

  return (
    <div
      className="relative mx-auto aspect-[3/5] w-full max-w-[200px] overflow-hidden rounded-[18px] border border-forest-700/12 shadow-[0_28px_60px_-30px_rgba(29,59,42,0.55)]"
      style={{
        background:
          variant === "moringa"
            ? `linear-gradient(180deg, ${palette.top} 0%, ${palette.top} 60%, ${palette.band} 100%)`
            : `linear-gradient(180deg, ${palette.top} 0%, ${palette.top} 62%, ${palette.band} 62%, ${palette.band} 100%)`
      }}
    >
      {/* Top "handle" hint */}
      <div
        className="absolute left-1/2 top-1.5 h-1 w-12 -translate-x-1/2 rounded-full"
        style={{ background: variant === "moringa" ? palette.band : "rgba(29, 59, 42, 0.18)" }}
      />

      {/* Subtle vertical seam */}
      <div
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
        style={{
          background:
            variant === "moringa"
              ? "rgba(245, 242, 233, 0.04)"
              : "rgba(29, 59, 42, 0.04)"
        }}
      />

      {/* Decorative leaf shadow on the front (sub-print) */}
      <div className="absolute inset-x-0 top-0 h-[62%] overflow-hidden">
        <PackLeafShadow
          color={
            variant === "moringa"
              ? "rgba(245, 242, 233, 0.06)"
              : "rgba(29, 59, 42, 0.05)"
          }
        />
      </div>

      {/* Wordmark block */}
{/* Wordmark block */}
<div className="absolute inset-x-0 top-6 flex flex-col items-center text-center">
  <div
    className="mb-2 flex h-11 w-11 items-center justify-center rounded-full"
    style={{ background: palette.iconBg }}
  >
    <div style={{ color: palette.label }}>
      <Logo className="h-7 w-7" />
    </div>
  </div>

  <span
    className="font-serif text-xl leading-none tracking-tight"
    style={{ color: palette.label }}
  >
    Vriksh
  </span>

  <span
    className="mt-1 font-mono text-[7px] uppercase tracking-[0.3em]"
    style={{ color: palette.sub }}
  >
    by 4Knotts
  </span>
</div>

      {/* Name plate sits over the colour-band boundary */}
      <div
        className="absolute inset-x-0 flex flex-col items-center"
        style={{ top: variant === "moringa" ? "60%" : "56%" }}
      >
        <h3
          className="text-center font-mono text-[10px] font-medium uppercase leading-tight tracking-[0.18em]"
          style={{ color: variant === "moringa" ? palette.label : "#f5f2e9" }}
        >
          {name.split(" ").map((w, i) => (
            <span key={i} className="block">
              {w}
            </span>
          ))}
        </h3>
        <span
          className="mt-2 rounded-full px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.18em]"
          style={{
            background: palette.tag,
            color: variant === "moringa" || variant === "atta" ? "#1d3b2a" : "#f5f2e9"
          }}
        >
          {sub.split("·")[0].trim()}
        </span>
      </div>

      {/* Weight / net at very bottom */}
      <div className="absolute inset-x-0 bottom-2 text-center">
        <span
          className="font-mono text-[7px] uppercase tracking-[0.24em]"
          style={{ color: "rgba(245, 242, 233, 0.7)" }}
        >
          Net Wt · 500g
        </span>
      </div>
    </div>
  );
}

function OilBottle({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="relative mx-auto aspect-[3/5] w-full max-w-[200px]">
      <svg
        viewBox="0 0 120 200"
        className="absolute inset-0 h-full w-full drop-shadow-[0_28px_30px_rgba(29,59,42,0.35)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bottleGlass" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#cbab7a" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#e3c898" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#735431" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d3b2a" />
            <stop offset="100%" stopColor="#142a1f" />
          </linearGradient>
        </defs>

        {/* Cap */}
        <rect x="48" y="6" width="24" height="14" rx="2" fill="url(#cap)" />
        {/* Neck */}
        <rect x="52" y="20" width="16" height="14" fill="url(#bottleGlass)" />
        {/* Body */}
        <path
          d="M 30 40 Q 30 34 36 34 H 84 Q 90 34 90 40 V 190 Q 90 196 84 196 H 36 Q 30 196 30 190 Z"
          fill="url(#bottleGlass)"
          stroke="rgba(115, 84, 49, 0.4)"
          strokeWidth="0.5"
        />
        {/* Highlight */}
        <rect x="38" y="50" width="3" height="120" rx="1.5" fill="#fff" opacity="0.35" />
        {/* Label */}
        <rect x="36" y="78" width="48" height="80" rx="3" fill="#1d3b2a" />
        <rect x="38" y="80" width="44" height="76" rx="2" fill="none" stroke="#cbab7a" strokeOpacity="0.4" strokeWidth="0.5" />
      </svg>

      {/* HTML overlay on the label area */}
      <div className="absolute inset-x-0 top-[42%] flex h-[36%] flex-col items-center justify-center px-4 text-center">
        <Logo className="h-6 w-6 text-cream" />
        <span className="mt-1 font-serif text-base leading-none text-cream">
          Vriksh
        </span>
        <span className="mt-0.5 font-mono text-[6px] uppercase tracking-[0.3em] text-cream/70">
          by 4Knotts
        </span>
        <div className="my-1.5 h-px w-8 bg-gold-400/60" />
        <span className="font-mono text-[7px] font-medium uppercase leading-tight tracking-[0.18em] text-cream">
          {name.split(" ").map((w, i) => (
            <span key={i} className="block">
              {w}
            </span>
          ))}
        </span>
        <span className="mt-1 rounded-full bg-gold-400 px-2 py-0.5 font-mono text-[6px] uppercase tracking-[0.18em] text-forest-700">
          {sub.split("·")[0].trim()}
        </span>
      </div>
    </div>
  );
}

function PackLeafShadow({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <g fill={color}>
        <path d="M 10 180 Q 30 120 60 100 Q 90 80 100 90 Q 95 110 75 130 Q 50 160 30 200 Z" />
        <path d="M 200 60 Q 170 90 150 110 Q 130 130 120 130 Q 130 110 150 90 Q 175 65 200 50 Z" />
        <path d="M 130 200 Q 150 170 175 160 Q 200 155 200 180 Q 175 195 150 210 Z" />
      </g>
    </svg>
  );
}
