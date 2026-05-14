"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { products } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const items = [
  { product: products[0], qty: 1 },
  { product: products[2], qty: 1 }
];

export function Cart({ onClose }: { onClose: () => void }) {
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[130] bg-cream/60 backdrop-blur-md"
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="fixed right-0 top-0 z-[140] flex h-full w-full max-w-[460px] flex-col bg-cream border-l border-forest-700/10"
      >
        <header className="flex items-center justify-between border-b border-forest-700/10 px-7 py-6">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
              Vriksh · Bag
            </p>
            <p className="font-serif text-2xl">Your Selection</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-700/15"
          >
            <X size={14} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-7 py-6">
          <ul className="flex flex-col gap-6">
            {items.map(({ product, qty }) => (
              <li
                key={product.slug}
                className="grid grid-cols-[110px_1fr] gap-5 border-b border-forest-700/5 pb-6"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="110px"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-leaf-600">
                      {product.subBrand}
                    </span>
                    <p className="font-serif text-xl">{product.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/40">
                      {product.weight} · {product.edition}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 rounded-full border border-forest-700/10 px-2 py-1">
                      <button className="text-forest-700/60 hover:text-forest-700">
                        <Minus size={11} />
                      </button>
                      <span className="font-mono text-[11px]">{qty}</span>
                      <button className="text-forest-700/60 hover:text-forest-700">
                        <Plus size={11} />
                      </button>
                    </div>
                    <span className="font-mono text-[12px]">
                      {formatINR(product.price * qty)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-forest-700/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
              Complimentary
            </p>
            <p className="mt-2 font-serif text-lg leading-snug">
              Add a Vriksh × Bombay Atelier candle to receive a hand-numbered card with your order.
            </p>
          </div>
        </div>

        <footer className="border-t border-forest-700/10 px-7 py-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/50">
              Subtotal
            </span>
            <span className="font-serif text-2xl">{formatINR(subtotal)}</span>
          </div>
          <div className="mb-4 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.24em] text-forest-700/40">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <Button className="w-full justify-center">Proceed To Checkout</Button>
        </footer>
      </motion.aside>
    </>
  );
}
