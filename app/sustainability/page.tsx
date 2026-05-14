import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Sustainability · Vriksh by 4Knotts",
  description: "Refillable systems, lot-traced supply chains, considered materials."
};

const numbers = [
  { value: "92%", label: "Refillable Vessels", note: "of all Vriksh objects, by SKU count" },
  { value: "0", label: "Single-Use Plastics", note: "across NAV, PRANA and SADA" },
  { value: "11", label: "Partner Farms", note: "all named, lot-traced, photographed" },
  { value: "1.4t", label: "CO₂e / mo", note: "studio operations · offset via local reforestation" }
];

const pillars = [
  {
    n: "01",
    title: "Refill, Not Repurchase",
    body:
      "Every Vriksh vessel can be sent back to the studio, washed in a low-temperature plant, and reissued with a new lot card. The bottle is meant to outlive the contents."
  },
  {
    n: "02",
    title: "Named Provenance",
    body:
      "We do not source from anonymous spot markets. Every farm is named on the back of the pack, paid above MSP, and visited at least twice per growing cycle."
  },
  {
    n: "03",
    title: "Material Restraint",
    body:
      "Glass, aluminium, and a single recycled-board sleeve. No mixed laminates, no virgin plastic, no foil stamping that resists recycling."
  },
  {
    n: "04",
    title: "Slow Cadence",
    body:
      "We deliberately ship fewer editions than we could. Each one is small. Each one is engineered to be repeated, not replaced."
  }
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability · 01"
        title="A quieter way"
        italic="to make things."
        description="We do not believe in the word sustainable as a label. We believe in slow, named, refillable systems — and the patience to publish what they cost."
        meta="Report · MMXXVI"
      />

      {/* Numbers */}
      <section className="container-x py-20 md:py-32">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-forest-700/10 bg-forest-700/10 md:grid-cols-4">
          {numbers.map((n) => (
            <div
              key={n.label}
              className="flex flex-col gap-3 bg-cream p-10"
            >
              <p className="font-serif text-6xl tracking-tightest text-leaf-600 md:text-7xl">
                {n.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/60">
                {n.label}
              </p>
              <p className="text-sm leading-relaxed text-forest-700/45">{n.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-cream py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-6">Practice · 02</p>
              <h2 className="font-serif text-5xl tracking-tight md:text-6xl">
                Four <span className="italic text-forest-700/40">practices.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="flex flex-col">
                {pillars.map((p) => (
                  <div
                    key={p.n}
                    className="grid grid-cols-12 gap-4 border-t border-forest-700/10 py-10 first:border-t-0"
                  >
                    <span className="col-span-2 font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600">
                      {p.n}
                    </span>
                    <h3 className="col-span-10 font-serif text-3xl tracking-tight md:text-4xl">
                      {p.title}
                    </h3>
                    <p className="col-span-10 col-start-3 mt-3 max-w-xl text-base leading-relaxed text-forest-700/65">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field image */}
      <section className="container-x py-32 md:py-48">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-forest-700/10">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
            alt="Vriksh partner farm"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600/80">
                Partner Farm · 04
              </p>
              <p className="mt-2 font-serif text-2xl">Sundara Co-operative, Nilgiri</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
                Crop
              </p>
              <p className="mt-2 font-serif text-2xl">Moringa Oleifera</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
                Photographed
              </p>
              <p className="mt-2 font-serif text-2xl">04 / 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
