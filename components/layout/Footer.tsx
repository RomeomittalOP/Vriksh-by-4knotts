"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const shopLinks = [
  { label: "Moringa Powder", href: "/products/moringa-vitality-tonic" },
  { label: "Premium Rice", href: "/products/single-origin-basmati" },
  { label: "Whole Wheat Atta", href: "/products/stone-milled-atta" },
  { label: "Groundnut Oil", href: "/products/moringa-protein-bites" },
  { label: "View All Products", href: "/products" }
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Promise", href: "/philosophy" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Journal", href: "/journal" },
  { label: "Contact Us", href: "/contact" }
];

const careLinks = [
  { label: "FAQs", href: "#" },
  { label: "Shipping & Delivery", href: "#" },
  { label: "Returns & Refunds", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-700 text-cream">
      {/* Decorative leaf silhouette on the right */}
      <div className="pointer-events-none absolute -right-10 top-10 hidden md:block">
        <FooterLeaves className="h-[320px] w-[320px] opacity-15" />
      </div>

      <div className="container-x grid grid-cols-12 gap-10 py-16 md:py-20">
        {/* ─── Brand + social ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-3"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 backdrop-blur-sm">
              <Logo className="h-8 w-8 text-cream" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-3xl tracking-tight">Vriksh</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-cream/70">
                by 4Knotts
              </span>
            </div>
          </Link>

          <p className="mt-5 text-sm leading-relaxed text-cream/65">
            Rooted in Nature. Committed to You.
          </p>

          <div className="mt-6 flex gap-2">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Linkedin, label: "LinkedIn" }
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                data-cursor="hover"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition hover:border-gold-400 hover:bg-cream/5 hover:text-gold-400"
              >
                <Icon size={14} strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ─── Shop ───────────────────────────────────────── */}
        <FooterColumn title="Shop" links={shopLinks} delay={0.05} />

        {/* ─── Company ───────────────────────────────────────── */}
        <FooterColumn title="Company" links={companyLinks} delay={0.1} />

        {/* ─── Customer Care ───────────────────────────────────────── */}
        <FooterColumn title="Customer Care" links={careLinks} delay={0.15} />

        {/* ─── Newsletter ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 md:col-span-3"
        >
          <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream">
            Stay Rooted
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream/65">
            Subscribe to our newsletter for updates, offers, and natural living
            tips.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 focus-within:border-gold-400/70"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent py-1.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="submit"
              data-cursor="hover"
              aria-label="Subscribe"
              className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-400 text-forest-700 transition hover:bg-gold-300"
            >
              <ArrowRight
                size={13}
                strokeWidth={2.2}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Hairline + copyright */}
      <div className="relative border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream/45">
            © 2026 Vriksh by 4Knotts · All Rights Reserved
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream/45">
            Made in India · Edition I
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  delay
}: {
  title: string;
  links: { label: string; href: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="col-span-6 md:col-span-2"
    >
      <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              data-cursor="hover"
              className="group inline-flex items-center gap-1 text-sm text-cream/70 transition-colors hover:text-gold-400"
            >
              {l.label}
              <ArrowRight
                size={11}
                strokeWidth={1.6}
                className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FooterLeaves({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g
        fill="none"
        stroke="#f5f2e9"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M30 30 Q 70 80 100 110 Q 130 140 170 170" />
        <path d="M55 55 Q 50 80 45 95" />
        <path d="M80 80 Q 75 105 70 120" />
        <path d="M105 105 Q 100 130 95 145" />
        <path d="M130 130 Q 125 155 120 170" />
        <path d="M55 55 Q 45 50 35 55 Q 35 70 50 70 Z" fill="#f5f2e9" fillOpacity="0.25" />
        <path d="M80 80 Q 70 75 60 80 Q 60 95 75 95 Z" fill="#f5f2e9" fillOpacity="0.25" />
        <path d="M105 105 Q 95 100 85 105 Q 85 120 100 120 Z" fill="#f5f2e9" fillOpacity="0.25" />
        <path d="M130 130 Q 120 125 110 130 Q 110 145 125 145 Z" fill="#f5f2e9" fillOpacity="0.25" />
      </g>
    </svg>
  );
}
