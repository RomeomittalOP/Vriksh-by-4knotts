import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { journals } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams() {
  return journals.map((j) => ({ slug: j.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const j = journals.find((x) => x.slug === params.slug);
  return { title: j ? `${j.title} · Vriksh Journal` : "Journal · Vriksh" };
}

export default function JournalEntryPage({ params }: { params: Params }) {
  const entry = journals.find((j) => j.slug === params.slug);
  if (!entry) return notFound();

  return (
    <article className="bg-cream">
      <header className="container-x pb-12 pt-44 md:pt-56">
        <nav className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
          <Link href="/journal">Journal</Link>
          <span>/</span>
          <span className="text-forest-700/80">{entry.chapter}</span>
        </nav>
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600/80">
          {entry.chapter} · {entry.date}
        </p>
        <h1 className="mt-6 editorial-mega max-w-5xl text-balance">
          {entry.title}
        </h1>
      </header>

      <div className="container-x">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-forest-700/10">
          <Image
            src={entry.image}
            alt={entry.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="container-x grid grid-cols-12 gap-10 py-24">
        <aside className="col-span-12 md:col-span-3">
          <div className="sticky top-32 flex flex-col gap-3">
            <p className="eyebrow">Author</p>
            <p className="font-serif text-2xl">Anaika Sharma</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/40">
              Founder · Creative Direction
            </p>
          </div>
        </aside>

        <div className="col-span-12 space-y-8 font-serif text-xl leading-relaxed text-forest-700/85 md:col-span-7 md:col-start-5">
          <p className="text-3xl text-forest-700">
            {entry.excerpt}
          </p>
          <p>
            We begin at four in the morning. The valley is still grey. The
            harvesters move along the rows in silence, taking only the third
            leaf from the stalk — the leaf that gives the cleanest extract.
            Nothing here is rushed.
          </p>
          <p>
            The discipline of the moringa farm is the discipline we try to
            carry into the studio. A small canvas. A repeating gesture. A trust
            that the work, done quietly, accumulates into something worth
            keeping.
          </p>
          <p>
            What is the role of a daily product in a modern Indian home? We
            think it is to be reached for without thought and to repay attention
            when it is given. That is the brief we wrote on the first wall of
            the studio. It has not changed.
          </p>
          <p>
            In the next edition we will return to this same farm, and to a
            second cooperative outside Mysore, to begin a longer essay on the
            anatomy of a single leaf.
          </p>
        </div>
      </div>
    </article>
  );
}
