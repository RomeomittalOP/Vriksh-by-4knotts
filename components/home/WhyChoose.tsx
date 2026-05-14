"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Sprout,
  Recycle,
  ShieldCheck,
  Award
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    body: "Nothing artificial — ever."
  },
  {
    icon: Sprout,
    title: "Nutrient Rich",
    body: "Packed with nature's finest."
  },
  {
    icon: Recycle,
    title: "Sustainably Sourced",
    body: "Good for you and the planet."
  },
  {
    icon: ShieldCheck,
    title: "No Additives",
    body: "No preservatives. No compromise."
  },
  {
    icon: Award,
    title: "Trusted Quality",
    body: "Pure. Safe. Consistent."
  }
];

export function WhyChoose() {
  return (
    <section className="relative bg-cream py-20 md:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 items-center gap-10"
        >
          {/* Left intro */}
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-2">
              <Leaf size={13} className="text-leaf-500" strokeWidth={1.8} />
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-500">
                Why Choose Vriksh
              </p>
            </div>
            <h2 className="mt-5 font-serif text-3xl leading-[1.1] tracking-tight text-forest-700 md:text-4xl">
              Rooted in Nature,
              <br />
              <span className="italic">Backed by Purity.</span>
            </h2>
          </div>

          {/* Feature cells */}
          <div className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-10 md:col-span-9 md:grid-cols-5 md:gap-x-3">
            {features.map((f, i) => (
              <FeatureCell key={f.title} feature={f} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Hairline */}
        <div className="mt-16 h-px w-full bg-forest-700/10" />
      </div>
    </section>
  );
}

function FeatureCell({
  feature,
  index
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group flex flex-col items-center text-center md:items-start md:text-left"
    >
      <motion.div
        whileHover={{ rotateY: 14, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 220, damping: 16 }}
        style={{ transformStyle: "preserve-3d", perspective: 600 }}
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-forest-700/15 bg-cream-50 shadow-[0_8px_22px_-12px_rgba(29,59,42,0.25)] transition-colors group-hover:border-leaf-500/50"
      >
        <Icon
          size={20}
          strokeWidth={1.6}
          className="text-forest-700 transition-colors duration-500 group-hover:text-leaf-600"
        />
      </motion.div>
      <h3 className="font-serif text-base tracking-tight text-forest-700 md:text-lg">
        {feature.title}
      </h3>
      <p className="mt-1 max-w-[160px] text-xs leading-relaxed text-forest-700/60 md:text-[13px]">
        {feature.body}
      </p>
    </motion.div>
  );
}
