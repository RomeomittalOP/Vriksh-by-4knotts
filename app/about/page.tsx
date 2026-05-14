import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About · Vriksh by 4Knotts",
  description: "The studio, the people, the philosophy."
};

const milestones = [
  {
    year: "2024",
    title: "The Studio Opens",
    body:
      "4Knotts establishes a lifestyle research studio in Lower Parel. The first sketches of Vriksh appear on a whiteboard."
  },
  {
    year: "2025",
    title: "The Bombay Workshop",
    body:
      "A small workshop is built around a moringa supply chain in the Nilgiri foothills. The first NAV bottles are sculpted."
  },
  {
    year: "2026",
    title: "Edition I",
    body:
      "The first public edition of Vriksh ships — three houses, eight objects, a slow, lot-numbered launch."
  },
  {
    year: "2027",
    title: "Bengaluru Atelier",
    body:
      "A second studio opens in Indiranagar. Vriksh begins shipping internationally to a curated list of stockists."
  }
];

const team = [
  { name: "Anaika Sharma", role: "Founder · Creative Direction" },
  { name: "Rishabh Anand", role: "Engineering · Phygital" },
  { name: "Devika Iyer", role: "Studio · Formulation" },
  { name: "Karthik Menon", role: "Studio · Industrial" }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About · 01"
        title="A small studio,"
        italic="a long horizon."
        description="Vriksh is the lifestyle house of 4Knotts — an Indian design studio working at the intersection of nature, engineering, and the daily ritual. We are small, deliberately. We ship slowly, deliberately."
        meta="Founded · 2024 · Bombay"
      />

      {/* Studio image */}
      <section className="container-x">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-forest-700/10">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
            alt="The Vriksh studio"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/70 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/80">
            <span>The Studio · Lower Parel</span>
            <span>Photographed · 04 / 2026</span>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="container-x py-32 md:py-48">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">Position · 02</p>
            <h2 className="mt-6 font-serif text-5xl tracking-tight md:text-6xl">
              We are not <span className="italic text-forest-700/40">an FMCG.</span>
            </h2>
          </div>
          <div className="col-span-12 space-y-6 text-lg leading-relaxed text-forest-700/75 md:col-span-7 md:col-start-6">
            <p>
              The word FMCG was invented for an era of warehouses, distributors,
              and shelf-share — a world that valued speed and volume over
              precision and patience. Vriksh is built for a different India.
            </p>
            <p>
              Our customer is younger, more design-literate, more sceptical of
              marketing, more willing to pay for a quiet object that performs.
              They want to know who made the thing, where it came from, and what
              happens when the bottle is empty. We try to answer all three on
              the label.
            </p>
            <p>
              We think the most interesting Indian lifestyle brands of the next
              decade will not look like the FMCG brands of the last one. They
              will look like ours.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-32">
        <div className="container-x">
          <p className="eyebrow mb-10">Timeline · 03</p>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="group relative border-t border-forest-700/10 py-12 md:p-12"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600/80">
                  {m.year}
                </p>
                <h3 className="mt-4 font-serif text-4xl tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-forest-700/65">
                  {m.body}
                </p>
                <span className="absolute right-0 top-12 font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/30">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-32 md:py-48">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow">Studio · 04</p>
            <h2 className="mt-6 font-serif text-5xl tracking-tight md:text-6xl">
              The people <span className="italic text-forest-700/40">behind it.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-forest-700/65">
              A team of twelve, working across formulation, industrial design,
              and the digital layer of the brand.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-1 gap-0 md:col-span-8 md:grid-cols-2">
            {team.map((p, i) => (
              <div
                key={p.name}
                className="group border-t border-forest-700/10 py-10 first:border-t-0 md:border-l md:py-12 md:pl-10 md:first:border-l-0 md:[&:nth-child(2)]:border-t-0"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/30">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-serif text-3xl tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-leaf-600/80">
                  {p.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-32">
        <div className="container-x flex flex-col items-center text-center">
          <p className="eyebrow mb-6">Press · 05</p>
          <h2 className="editorial-headline max-w-3xl">
            Work with us, <span className="italic gradient-gold">briefly.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-forest-700/65">
            We collaborate sparingly with editors, stockists, and ateliers who
            share our discipline. Press, wholesale and partnership enquiries are
            answered within ten working days.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Get In Touch</Button>
            <Button href="/journal" variant="outline">
              Read Our Journal
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
