"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { formatINR } from "@/lib/utils";
import { ProductPack } from "@/components/ui/ProductPack";

const products = [
  {
    slug: "moringa-vitality-tonic",
    name: "Moringa Powder",
    tag: "Nutrient-Rich Superfood",
    price: 299,
    variant: "moringa" as const,
    sub: "Nutrient · Rich"
  },
  {
    slug: "single-origin-basmati",
    name: "Premium Rice",
    tag: "Natural · Aromatic",
    price: 199,
    variant: "rice" as const,
    sub: "Single · Origin"
  },
  {
    slug: "stone-milled-atta",
    name: "Whole Wheat Atta",
    tag: "100% Whole Grain",
    price: 129,
    variant: "atta" as const,
    sub: "Whole · Grain"
  },
  {
    slug: "moringa-protein-bites",
    name: "Groundnut Oil",
    tag: "Cold-Pressed · Unrefined",
    price: 299,
    variant: "oil" as const,
    sub: "Cold · Pressed"
  }
];

export function GoodnessProducts() {
  return (
    <section className="relative bg-beige py-20 md:py-28">
      <div className="container-x grid grid-cols-12 items-start gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-3"
        >
          <div className="flex items-center gap-2">
            <Leaf size={13} className="text-leaf-500" strokeWidth={1.8} />
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-500">
              Our Products
            </p>
          </div>
          <h2 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-forest-700 md:text-6xl">
            Goodness in
            <br />
            <span className="italic">Every Form</span>
          </h2>
          <Link
            href="/products"
            data-cursor="hover"
            className="mt-6 inline-flex items-center gap-2 border-b border-leaf-500/60 pb-1 font-mono text-[11px] uppercase tracking-[0.28em] text-leaf-600 transition hover:border-leaf-600 hover:text-leaf-700"
          >
            View All Products
            <ArrowRight size={12} strokeWidth={2} />
          </Link>
        </motion.div>

        <div className="col-span-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:col-span-9 md:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [6, -6]), {
    stiffness: 140,
    damping: 18
  });
  const ry = useSpring(useTransform(x, [-50, 50], [-6, 6]), {
    stiffness: 140,
    damping: 18
  });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ perspective: 1100 }}
      className="group"
      data-cursor="hover"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <motion.div
          style={{
            rotateX: rx,
            rotateY: ry,
            transformStyle: "preserve-3d"
          }}
          className="relative overflow-hidden rounded-2xl bg-cream shadow-[0_18px_44px_-26px_rgba(29,59,42,0.35)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-26px_rgba(29,59,42,0.5)]"
        >
          {/* Pack display area */}
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-beige px-6 py-8">
            {/* Floor circle behind pack */}
            <div
              className="absolute inset-x-8 bottom-4 h-3 rounded-[50%] blur-md"
              style={{ background: "rgba(29, 59, 42, 0.18)" }}
            />
            <div className="relative w-full max-w-[170px] transition-transform duration-500 group-hover:-translate-y-1.5">
              <ProductPack
                variant={product.variant}
                name={product.name}
                sub={product.sub}
              />
            </div>
          </div>

          {/* Card footer */}
          <div className="flex items-center justify-between gap-3 border-t border-forest-700/8 bg-cream px-5 py-4">
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-serif text-lg leading-tight text-forest-700">
                {product.name}
              </h3>
              <p className="mt-0.5 truncate font-sans text-xs text-forest-700/55">
                {product.tag}
              </p>
              <p className="mt-2 font-mono text-[12px] tracking-tight text-forest-700">
                {formatINR(product.price)}
              </p>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf-500 text-cream shadow-[0_6px_18px_-6px_rgba(76,175,80,0.7)] transition-all duration-500 group-hover:bg-leaf-600 group-hover:translate-x-0.5">
              <ArrowRight size={13} strokeWidth={2.2} />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
