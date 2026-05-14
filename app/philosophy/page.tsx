import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Philosophy · Vriksh by 4Knotts",
  description: "Rooted in nature. Engineered for modern living."
};

const tenets = [
  {
    n: "I",
    title: "The Object Is The Argument",
    body:
      "A bottle, a tin, a bar. We let the made thing speak first, before any campaign or claim."
  },
  {
    n: "II",
    title: "Tradition Where It Endures",
    body:
      "Stone-milling, cold-pressing, sun-curing. We borrow only those methods that still produce a better outcome."
  },
  {
    n: "III",
    title: "Technology Where It Elevates",
    body:
      "Refill vaults, lot-traced ledgers, formulation simulators. The digital layer earns its place only when it adds clarity."
  },
  {
    n: "IV",
    title: "Less, But Slower",
    body:
      "We ship two to three editions a year. Quietly. We refuse the cadence of the seasonal launch."
  },
  {
    n: "V",
    title: "Indian, In The Present Tense",
    body:
      "Not Indian as a costume. Indian as a contemporary aesthetic, language, and ingredient palette."
  },
  {
    n: "VI",
    title: "The Customer Is An Editor",
    body:
      "We design for someone who curates their home, their pantry, and their inbox. We act accordingly."
  }
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Philosophy · 01"
        title="Six tenets,"
        italic="one studio."
        description="A short, opinionated document. We re-read it every Monday."
        meta="MMXXVI · Vol. I"
      />

      {/* Big quote */}
      <section className="container-x py-20 md:py-32">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-2">
            <p className="font-serif text-[140px] leading-none text-leaf-600/30">“</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <p className="font-serif text-3xl leading-snug text-forest-700 md:text-5xl">
              We do not believe in fast moving consumer goods. We believe in
              <span className="italic text-leaf-600"> slow moving considered objects </span>
              — and a generation that is ready to keep them.
            </p>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/50">
              — Anaika Sharma · Founder
            </p>
          </div>
        </div>
      </section>

      {/* Tenets */}
      <section className="bg-cream py-32">
        <div className="container-x">
          <p className="eyebrow mb-12">The Tenets · 02</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {tenets.map((t, i) => (
              <div
                key={t.n}
                className="group relative overflow-hidden border-t border-forest-700/10 px-2 py-12 transition md:p-12"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-7xl text-leaf-600/40 md:text-8xl">
                    {t.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
                    Tenet · 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-3xl tracking-tight md:text-4xl">
                  {t.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-forest-700/65">
                  {t.body}
                </p>

                <div className="pointer-events-none absolute -right-20 top-0 h-full w-40 bg-gradient-to-l from-champagne-300/0 via-champagne-300/0 to-champagne-300/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:from-champagne-300/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phygital diagram */}
      <section className="container-x py-32 md:py-48">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-6">Phygital · 03</p>
            <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-6xl">
              The physical, <span className="italic text-forest-700/40">and the page.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-forest-700/65">
              Each Vriksh product carries a lot number that opens a private page
              — a photograph of the batch, the names of the people who made it,
              the coordinates of the field it came from.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-forest-700/65">
              The object is the artefact. The page is the receipt. Together,
              they make up the Vriksh contract with the home.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-forest-700/10">
              <Image
                src="https://images.unsplash.com/photo-1530021232320-687d8e3dba54?auto=format&fit=crop&w=1400&q=80"
                alt="A Vriksh lot card"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/80">
                <div>
                  <p className="text-forest-700/40">Lot · 0042</p>
                  <p className="mt-1">Karnal · IN</p>
                </div>
                <div className="text-right">
                  <p className="text-forest-700/40">Bottled · 12 / 03 / 26</p>
                  <p className="mt-1">QC · Pass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
