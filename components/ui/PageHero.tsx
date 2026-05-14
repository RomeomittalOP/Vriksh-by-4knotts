"use client";

import { motion } from "framer-motion";
import { RevealText } from "./RevealText";

type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  meta?: string;
};

export function PageHero({ eyebrow, title, italic, description, meta }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-44 md:pb-32 md:pt-56">
      <div className="absolute inset-0 gradient-radial opacity-90" />
      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="flex flex-col gap-4"
            >
              <p className="eyebrow">{eyebrow}</p>
              <div className="h-px w-12 bg-leaf-500/40" />
              {meta && (
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/40">
                  {meta}
                </p>
              )}
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h1 className="editorial-mega text-balance leading-[0.92] text-forest-700">
              <RevealText as="span" className="block">{title}</RevealText>
              {italic && (
                <RevealText
                  as="span"
                  delay={0.15}
                  className="block italic gradient-gold"
                >
                  {italic}
                </RevealText>
              )}
            </h1>
            {description && (
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.9 }}
                className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-forest-700/65 md:text-lg"
              >
                {description}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
