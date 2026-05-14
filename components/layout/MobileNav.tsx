"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Wordmark } from "@/components/ui/Logo";

export function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[120] flex flex-col bg-cream"
    >
      <div className="container-x flex items-center justify-between py-6">
        <Wordmark />
        <button
          onClick={onClose}
          aria-label="Close"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-700/15"
        >
          <X size={14} />
        </button>
      </div>

      <div className="container-x flex flex-1 flex-col justify-between pb-12 pt-8">
        <nav className="flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4 + i * 0.06,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="overflow-hidden border-b border-forest-700/10 py-4"
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-end justify-between"
              >
                <span className="font-serif text-5xl tracking-tight md:text-7xl">
                  {link.label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
                  0{i + 1}
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
              Studio
            </p>
            <p className="font-serif text-2xl">
              Lower Parel · Bombay <span className="text-forest-700/40">/</span> Indiranagar · Bengaluru
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Instagram", "Are.na", "LinkedIn"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-forest-700/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em]"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
