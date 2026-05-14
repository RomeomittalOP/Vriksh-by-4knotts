"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products, subBrands } from "@/lib/data";
import { formatINR, cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";

const houses = ["ALL", ...subBrands.map((s) => s.name)] as const;

export default function ProductsPage() {
  const [house, setHouse] = useState<(typeof houses)[number]>("ALL");

  const list = useMemo(() => {
    if (house === "ALL") return products;
    return products.filter((p) => p.subBrand === house);
  }, [house]);

  return (
    <>
      <PageHero
        eyebrow="Edition · I · 01"
        title="The collection,"
        italic="lot-numbered."
        description="Eight objects across three houses, shipped from the Bombay studio. Each item is hand-numbered, traceable to a farm and a date, and built to be refilled."
        meta="08 objects · 03 houses"
      />

      {/* Filter bar */}
      <section className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 border-y border-forest-700/10 py-6 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-2">
            {houses.map((h) => (
              <button
                key={h}
                onClick={() => setHouse(h)}
                data-cursor="hover"
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] transition",
                  house === h
                    ? "border-leaf-500 bg-leaf-500 text-forest-950"
                    : "border-forest-700/15 text-forest-700/70 hover:border-leaf-500/60 hover:text-leaf-600"
                )}
              >
                {h}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/40">
            <span>{list.length.toString().padStart(2, "0")} · objects</span>
            <span>Edition · MMXXVI</span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Link
                href={`/products/${p.slug}`}
                data-cursor="hover"
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-forest-700/10 bg-cream">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.07]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-cream/55 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.32em] text-leaf-600 backdrop-blur-md">
                      {p.subBrand} · {p.category}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-cream/55 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.32em] text-forest-700/80 backdrop-blur-md">
                      {p.edition}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full bg-forest-700 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-forest-950">
                      View Object
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf-500 text-forest-950">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight md:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-forest-700/55">
                      {p.shortLine}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-[11px] tracking-tight text-forest-700/80">
                    {formatINR(p.price)}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
