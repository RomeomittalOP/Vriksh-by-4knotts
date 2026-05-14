import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product · Vriksh" };
  return {
    title: `${product.name} · Vriksh by 4Knotts`,
    description: product.description
  };
}

export default function ProductDetailPage({ params }: { params: Params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      {/* Crumb */}
      <section className="container-x pt-44 md:pt-52">
        <nav className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span className="text-forest-700/80">{product.name}</span>
        </nav>
      </section>

      {/* Main */}
      <section className="container-x py-12 md:py-20">
        <div className="grid grid-cols-12 gap-10">
          {/* Image */}
          <div className="col-span-12 md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-forest-700/10 bg-cream">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 60vw, 100vw"
                priority
              />
              <div className="absolute inset-6 border border-forest-700/15" />
              <div className="absolute left-10 top-10 font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/70">
                {product.subBrand} · {product.edition}
              </div>
              <div className="absolute bottom-10 right-10 font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/70">
                {product.weight}
              </div>
            </div>

            {/* Strip */}
            <div className="mt-6 grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-forest-700/10 bg-cream"
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} angle ${i}`}
                    fill
                    className="object-cover opacity-90"
                    sizes="20vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="col-span-12 md:col-span-5 md:sticky md:top-32 md:self-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600">
              {product.subBrand} · {product.category}
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1] tracking-tight md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-forest-700/65">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-10 flex items-baseline gap-6 border-y border-forest-700/10 py-6">
              <span className="font-serif text-4xl">{formatINR(product.price)}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
                {product.weight} · Inclusive of taxes
              </span>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Add To Bag</Button>
              <Button variant="outline">Subscribe · Monthly</Button>
            </div>

            {/* Notes */}
            <div className="mt-12">
              <p className="eyebrow mb-4">Index · Of · Notes</p>
              <ul className="flex flex-col">
                {product.notes.map((n, i) => (
                  <li
                    key={n}
                    className="flex items-center justify-between border-t border-forest-700/10 py-3 first:border-t-0"
                  >
                    <span className="font-serif text-lg">{n}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/30">
                      0{i + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Palette */}
            <div className="mt-12">
              <p className="eyebrow mb-4">Palette · Of · The · Object</p>
              <div className="flex gap-3">
                {product.palette.map((c) => (
                  <div key={c} className="flex flex-col items-center gap-2">
                    <span
                      className="h-16 w-16 rounded-full border border-forest-700/15"
                      style={{ background: c }}
                    />
                    <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-forest-700/40">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Provenance */}
            <div className="mt-12 rounded-2xl border border-forest-700/10 bg-cream p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600/80">
                Provenance · Index
              </p>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-forest-700/60">
                <div className="flex flex-col gap-1">
                  <span className="text-forest-700/30">Lot</span>
                  <span>{product.edition}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-forest-700/30">Made</span>
                  <span>Bombay · IN</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-forest-700/30">Origin</span>
                  <span>Nilgiri · TN</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-forest-700/30">Method</span>
                  <span>Cold · Pressed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="container-x py-20 md:py-32">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-4">Adjacent · Objects</p>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              You may also <span className="italic text-forest-700/40">consider.</span>
            </h2>
          </div>
          <Link
            href="/products"
            data-cursor="hover"
            className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/70 hover:text-leaf-600 md:flex"
          >
            View All <ArrowUpRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              data-cursor="hover"
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-forest-700/10 bg-cream">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream/40 to-transparent" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-leaf-600">
                    {p.subBrand}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl tracking-tight">{p.name}</h3>
                </div>
                <span className="font-mono text-[11px] text-forest-700/80">
                  {formatINR(p.price)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
