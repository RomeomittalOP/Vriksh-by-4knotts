"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { ProductPack } from "@/components/ui/ProductPack";

const HERO_PRODUCTS = [
  {
    name: "Moringa Powder",
    sub: "Nutrient-Rich Superfood",
    variant: "moringa" as const,
    delay: 0.0,
    duration: 4.4,
    yShift: 8
  },
  {
    name: "Premium Rice",
    sub: "Single-Origin Basmati",
    variant: "rice" as const,
    delay: 0.4,
    duration: 5.0,
    yShift: 12
  },
  {
    name: "Whole Wheat Atta",
    sub: "100% Whole Grain",
    variant: "atta" as const,
    delay: 0.8,
    duration: 4.6,
    yShift: 10
  },
  {
    name: "Groundnut Oil",
    sub: "Cold-Pressed · Unrefined",
    variant: "oil" as const,
    delay: 1.2,
    duration: 4.8,
    yShift: 9
  }
];

export function HeroShop() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-beige-50/0 via-beige-50/60 to-beige" />

      <div className="pointer-events-none absolute -left-24 top-12 hidden md:block">
        <DecoLeafCluster className="h-[420px] w-[420px] opacity-25" />
      </div>
      <div className="pointer-events-none absolute -right-24 bottom-0 hidden md:block">
        <DecoLeafCluster className="h-[360px] w-[360px] -scale-x-100 opacity-20" />
      </div>

      <div className="container-x relative grid grid-cols-1 items-center gap-12 py-14 md:grid-cols-12 md:py-24 lg:py-28">
        {/* Left copy */}
        <div className="relative md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2"
          >
            <Leaf size={14} className="text-leaf-500" strokeWidth={1.8} />
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-gold-500">
              Pure · Natural · Wholesome
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-[68px] leading-[0.95] tracking-tight text-forest-700 md:text-[86px] lg:text-[100px]"
          >
            Nature
            <span className="block italic text-forest-700/95">Fuels You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.85, duration: 0.9 }}
            className="mt-8 max-w-md text-base leading-relaxed text-forest-700/70 md:text-lg"
          >
            Wholesome essentials, rooted in nature. Sourced from named farms,
            milled in small batches, and shipped to your kitchen with quiet
            care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/products"
              data-cursor="hover"
              className="group inline-flex items-center gap-3 rounded-full bg-forest-700 px-7 py-4 text-[14px] font-medium tracking-wide text-cream shadow-[0_18px_40px_-20px_rgba(29,59,42,0.6)] transition-all duration-500 hover:bg-forest-800 hover:shadow-[0_22px_50px_-20px_rgba(29,59,42,0.8)]"
            >
              Explore Our Products
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-400 text-forest-700 transition-transform duration-500 group-hover:translate-x-1">
                <ArrowRight size={13} strokeWidth={2.2} />
              </span>
            </Link>

            <Link
              href="/journal"
              data-cursor="hover"
              className="border-b border-forest-700/30 pb-1 font-mono text-[11px] uppercase tracking-[0.28em] text-forest-700/70 transition hover:border-leaf-500 hover:text-leaf-600"
            >
              Read Our Story
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.3, duration: 1 }}
            className="mt-14 flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/40"
          >
            <span>Lot Traced</span>
            <span className="h-px w-6 bg-forest-700/20" />
            <span>Refillable</span>
            <span className="h-px w-6 bg-forest-700/20" />
            <span>Cold-Milled</span>
          </motion.div>
        </div>

        {/* Right product line-up */}
        <div className="relative md:col-span-7">
          <ProductLineup />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.3, duration: 0.9 }}
        className="container-x flex justify-center gap-2 pb-10 md:justify-end md:pb-14"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === 0 ? "w-8 bg-forest-700" : "w-1.5 bg-forest-700/25"
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
}

function ProductLineup() {
  const groupRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRX = useSpring(rotateX, { stiffness: 80, damping: 18 });
  const springRY = useSpring(rotateY, { stiffness: 80, damping: 18 });

  function handleMove(e: React.MouseEvent) {
    const el = groupRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(-py * 6);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={groupRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1500 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.div
        style={{
          rotateX: springRX,
          rotateY: springRY,
          transformStyle: "preserve-3d"
        }}
        className="relative grid grid-cols-4 items-end gap-3 md:gap-4 lg:gap-6"
      >
        {HERO_PRODUCTS.map((p, i) => (
          <FloatingProduct key={p.name} product={p} index={i} />
        ))}
      </motion.div>

      <div
        className="pointer-events-none mx-auto -mt-2 h-12 w-[88%] rounded-[50%] blur-2xl"
        style={{ background: "rgba(29, 59, 42, 0.25)" }}
      />
    </motion.div>
  );
}

function FloatingProduct({
  product,
  index
}: {
  product: (typeof HERO_PRODUCTS)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ y: 60, opacity: 0 }}
      animate={{
        y: [0, -product.yShift, 0],
        opacity: 1
      }}
      transition={{
        y: {
          duration: product.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: product.delay
        },
        opacity: { delay: 2.6 + index * 0.12, duration: 0.9 }
      }}
      className="group relative flex flex-col items-center"
      data-cursor="hover"
    >
      <motion.div
        animate={{
          opacity: hovered ? 0.6 : 0.25,
          scale: hovered ? 1.15 : 1
        }}
        transition={{ duration: 0.5 }}
        className="absolute -inset-2 -z-10 rounded-full bg-leaf-500/20 blur-2xl"
      />

      <motion.div
        animate={{
          rotateZ: hovered ? -1.5 + index * 0.5 : 0,
          y: hovered ? -6 : 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full"
      >
        <ProductPack
          variant={product.variant}
          name={product.name}
          sub={product.sub}
        />
      </motion.div>

      <motion.p
        animate={{ opacity: hovered ? 1 : 0.7, y: hovered ? -2 : 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4 text-center font-serif text-sm tracking-tight text-forest-700 md:text-base"
      >
        {product.name}
      </motion.p>
    </motion.div>
  );
}

function DecoLeafCluster({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g
        fill="none"
        stroke="#347448"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 180 Q 70 120 100 90 Q 130 60 160 30" />
        <path d="M70 165 Q 60 140 50 130 Q 35 120 28 130" />
        <path d="M85 145 Q 75 120 65 110 Q 50 100 42 110" />
        <path d="M100 125 Q 90 100 80 90 Q 65 80 57 90" />
        <path d="M120 100 Q 110 75 100 65 Q 85 55 77 65" />
        <path d="M140 75 Q 130 50 120 40" />
        <path d="M55 138 Q 45 125 55 115 Q 65 110 65 130 Z" fill="#347448" fillOpacity="0.18" />
        <path d="M75 118 Q 65 105 75 95 Q 85 90 85 110 Z" fill="#347448" fillOpacity="0.18" />
        <path d="M95 98 Q 85 85 95 75 Q 105 70 105 90 Z" fill="#347448" fillOpacity="0.18" />
        <path d="M115 78 Q 105 65 115 55 Q 125 50 125 70 Z" fill="#347448" fillOpacity="0.18" />
      </g>
    </svg>
  );
}
