"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Vriksh products are a part of our daily life now. Pure, natural and absolutely trustworthy.",
    name: "Neha S.",
    stars: 5
  },
  {
    quote:
      "The moringa powder is a game changer. I feel more energetic every day.",
    name: "Arjun R.",
    stars: 5
  },
  {
    quote:
      "Love the quality and the packaging. You can feel the care in every detail.",
    name: "Meera T.",
    stars: 5
  }
];

export function AboutBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative bg-beige-50 py-20 md:py-24">
      <div className="container-x grid grid-cols-12 items-stretch gap-8">
        {/* ─── About column ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex flex-col justify-center md:col-span-3"
        >
          <div className="flex items-center gap-2">
            <Leaf size={13} className="text-leaf-500" strokeWidth={1.8} />
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-500">
              About Vriksh
            </p>
          </div>
          <h2 className="mt-5 font-serif text-3xl leading-[1.1] tracking-tight text-forest-700 md:text-4xl">
            Inspired by Nature.
            <br />
            <span className="italic">Committed to You.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-forest-700/65">
            At Vriksh by 4Knotts, we source the finest natural essentials —
            mindfully processed in small batches to retain their true goodness.
            For a better you, for a better tomorrow.
          </p>
          <Link
            href="/about"
            data-cursor="hover"
            className="mt-6 inline-flex w-fit items-center gap-2 border-b border-leaf-500/60 pb-1 font-mono text-[11px] uppercase tracking-[0.28em] text-leaf-600 transition hover:border-leaf-600 hover:text-leaf-700"
          >
            Know More About Us
            <ArrowRight size={12} strokeWidth={2} />
          </Link>
        </motion.div>

        {/* ─── Nature landscape (with parallax) ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-4"
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-[0_22px_50px_-30px_rgba(29,59,42,0.4)]">
            <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
              <Image
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80"
                alt="Misty Indian hills at dawn"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-700/30 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.32em] text-forest-700 backdrop-blur-sm">
              Partner Farms · Nilgiri
            </span>
          </div>
        </motion.div>

        {/* ─── Testimonials ───────────────────────── */}
        <div className="col-span-12 flex flex-col md:col-span-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf size={13} className="text-leaf-500" strokeWidth={1.8} />
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-500">
                What Our Customers Say
              </p>
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-forest-700/15 text-forest-700/60 transition hover:border-leaf-500/60 hover:text-leaf-600"
                data-cursor="hover"
              >
                <ArrowRight size={13} className="-scale-x-100" strokeWidth={1.8} />
              </button>
              <button
                aria-label="Next"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-forest-700/15 text-forest-700/60 transition hover:border-leaf-500/60 hover:text-leaf-600"
                data-cursor="hover"
              >
                <ArrowRight size={13} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  index
}: {
  t: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: 0.1 + index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -4 }}
      className="flex flex-col rounded-xl bg-cream p-5 shadow-[0_10px_30px_-18px_rgba(29,59,42,0.3)] transition-shadow duration-500 hover:shadow-[0_18px_42px_-18px_rgba(29,59,42,0.45)]"
    >
      {/* Stars */}
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: t.stars }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.08 + i * 0.05, duration: 0.4 }}
          >
            <Star
              size={13}
              className="fill-gold-400 text-gold-400"
              strokeWidth={1.4}
            />
          </motion.span>
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-forest-700/80">
        &ldquo;{t.quote}&rdquo;
      </p>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/50">
        — {t.name}
      </p>
    </motion.div>
  );
}
