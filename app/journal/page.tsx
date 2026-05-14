import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { journals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal · Vriksh by 4Knotts",
  description: "Notes from the studio."
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal · 01"
        title="Notes from"
        italic="the studio."
        description="A slow log of essays, sketches, and field reports. Published when there is something to say. Never on a schedule."
        meta="Vol. I · MMXXVI"
      />

      {/* Feature */}
      <section className="container-x py-16 md:py-24">
        <Link
          href={`/journal/${journals[0].slug}`}
          data-cursor="hover"
          className="group block"
        >
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-forest-700/10">
                <Image
                  src={journals[0].image}
                  alt={journals[0].title}
                  fill
                  className="object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream/60 to-transparent" />
                <span className="absolute left-6 top-6 rounded-full bg-cream/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600 backdrop-blur-md">
                  Feature · 01
                </span>
              </div>
            </div>
            <div className="col-span-12 flex flex-col justify-end md:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600/80">
                {journals[0].chapter} · {journals[0].date}
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
                {journals[0].title}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-forest-700/65">
                {journals[0].excerpt}
              </p>
              <span className="mt-8 inline-flex w-fit items-center gap-2 border-b border-forest-700/30 pb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/80 transition group-hover:border-leaf-500 group-hover:text-leaf-600">
                Read The Essay <ArrowUpRight size={12} />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* List */}
      <section className="container-x py-24">
        <div className="flex flex-col">
          {journals.slice(1).map((j, i) => (
            <Link
              key={j.slug}
              href={`/journal/${j.slug}`}
              data-cursor="hover"
              className="group grid grid-cols-12 items-center gap-6 border-t border-forest-700/10 py-10"
            >
              <span className="col-span-12 font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40 md:col-span-1">
                0{i + 2}
              </span>
              <div className="col-span-12 md:col-span-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream">
                  <Image
                    src={j.image}
                    alt={j.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    sizes="200px"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600/80">
                  {j.chapter}
                </p>
                <h3 className="mt-2 font-serif text-3xl leading-snug tracking-tight md:text-4xl">
                  {j.title}
                </h3>
              </div>
              <p className="col-span-10 font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40 md:col-span-2">
                {j.date}
              </p>
              <span className="col-span-2 flex justify-end md:col-span-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-700/20 transition group-hover:bg-leaf-500 group-hover:text-forest-950">
                  <ArrowUpRight size={14} />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
