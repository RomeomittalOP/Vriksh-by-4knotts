"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wordmark } from "@/components/ui/Logo";
import { Particles } from "@/components/ui/Particles";

type Props = {
  eyebrow: string;
  title: string;
  italic: string;
  children: ReactNode;
  altLabel: string;
  altHref: string;
  altCta: string;
  image: string;
};

export function AuthShell({
  eyebrow,
  title,
  italic,
  children,
  altLabel,
  altHref,
  altCta,
  image
}: Props) {
  return (
    <section className="relative grid min-h-screen grid-cols-1 bg-forest-800 lg:grid-cols-2">
      {/* Visual side */}
      <div className="relative hidden overflow-hidden lg:block">
        <Image src={image} alt="Vriksh atelier" fill className="object-cover" sizes="50vw" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/85 via-forest-900/55 to-forest-700/25" />
        <Particles className="absolute inset-0" density={36} />

        <div className="absolute inset-10 flex flex-col justify-between">
          <Wordmark />

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-md"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-400/80">
              {eyebrow}
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-tight tracking-tight md:text-6xl">
              {title}
              <br />
              <span className="italic gradient-gold">{italic}</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-cream/70">
              A private door to the Vriksh atelier. Edition invitations, lot
              previews, and quiet correspondence with the studio.
            </p>
          </motion.div>

          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.32em] text-cream/40">
            <span>Edition · MMXXVI</span>
            <span>Atelier · Door · 04</span>
          </div>
        </div>
      </div>

      {/* Form side */}
      <div className="relative flex items-center justify-center overflow-hidden px-6 py-20 md:px-12">
        <div className="absolute inset-0 gradient-radial opacity-40" />

        <div className="relative w-full max-w-md">
          <div className="mb-12 flex flex-col items-center text-center lg:hidden">
            <Wordmark />
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-400/80">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight md:text-6xl">
              {title} <span className="italic text-cream/40">{italic}</span>
            </h1>

            <div className="mt-12">{children}</div>

            <div className="mt-10 border-t border-cream/10 pt-6 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-cream/40">
                {altLabel}
              </p>
              <Link
                href={altHref}
                data-cursor="hover"
                className="mt-3 inline-flex items-center gap-2 font-serif text-xl text-cream hover:text-gold-400"
              >
                {altCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function AuthField({
  label,
  type = "text",
  placeholder
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-mono text-[10px] uppercase tracking-[0.32em] text-cream/40">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border-b border-cream/15 bg-transparent py-3 font-serif text-xl text-cream placeholder:text-cream/25 focus:border-gold-400 focus:outline-none"
      />
    </div>
  );
}

export function AuthSubmit({ label }: { label: string }) {
  return (
    <button
      data-cursor="hover"
      className="group mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-cream px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-forest-950 transition hover:bg-gold-400"
    >
      {label}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </button>
  );
}
