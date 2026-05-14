"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

const channels = [
  {
    label: "Press · Wholesale",
    email: "studio@vriksh.4knotts.com",
    note: "Replied within ten working days."
  },
  {
    label: "Stockists · Partnerships",
    email: "stockists@vriksh.4knotts.com",
    note: "Reviewed on the first Monday of every month."
  },
  {
    label: "Careers · Atelier",
    email: "studio.careers@vriksh.4knotts.com",
    note: "Currently hiring across formulation, industrial, and digital."
  }
];

const studios = [
  {
    city: "Bombay",
    address: "G/02, Senapati Bapat Marg\nLower Parel, Mumbai 400013",
    hours: "MON · FRI · 10:30 – 18:30 IST"
  },
  {
    city: "Bengaluru",
    address: "12th Main, 4th Cross\nIndiranagar, Bengaluru 560038",
    hours: "TUE · SAT · 11:00 – 19:00 IST"
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact · 01"
        title="Write to"
        italic="the studio."
        description="We answer every letter. Slowly, considered, by a human. There is no contact form bot at this address."
        meta="Studio · Bombay · Bengaluru"
      />

      <section className="container-x py-16 md:py-24">
        <div className="grid grid-cols-12 gap-10">
          {/* Form */}
          <motion.form
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            onSubmit={(e) => e.preventDefault()}
            className="col-span-12 flex flex-col gap-10 md:col-span-7"
          >
            <p className="eyebrow">Write · A · Letter</p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Field label="Name" placeholder="Your full name" />
              <Field label="Email" placeholder="you@studio.in" type="email" />
              <Field label="Studio · Affiliation" placeholder="Optional" />
              <Field label="Subject" placeholder="What is this about" />
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
                Letter
              </label>
              <textarea
                rows={6}
                placeholder="Begin here…"
                className="resize-none border-b border-forest-700/15 bg-transparent py-3 font-serif text-2xl leading-snug text-forest-700 placeholder:text-forest-700/25 focus:border-leaf-500 focus:outline-none"
              />
            </div>

            <button
              data-cursor="hover"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-forest-700 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-forest-950 transition hover:bg-leaf-500"
            >
              Send Letter
              <Send size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>

          {/* Side */}
          <aside className="col-span-12 flex flex-col gap-12 md:col-span-4 md:col-start-9">
            <div className="flex flex-col gap-8">
              <p className="eyebrow">Channels</p>
              {channels.map((c) => (
                <div key={c.label} className="border-t border-forest-700/10 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
                    {c.label}
                  </p>
                  <a
                    href={`mailto:${c.email}`}
                    data-cursor="hover"
                    className="mt-3 inline-flex items-center gap-2 font-serif text-2xl text-forest-700 hover:text-leaf-600"
                  >
                    {c.email}
                    <ArrowUpRight size={14} />
                  </a>
                  <p className="mt-2 text-sm text-forest-700/40">{c.note}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8">
              <p className="eyebrow">Studios</p>
              {studios.map((s) => (
                <div key={s.city} className="border-t border-forest-700/10 pt-6">
                  <p className="font-serif text-3xl tracking-tight">{s.city}</p>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-forest-700/65">
                    {s.address}
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/40">
                    {s.hours}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text"
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-mono text-[10px] uppercase tracking-[0.32em] text-forest-700/40">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border-b border-forest-700/15 bg-transparent py-3 font-serif text-2xl text-forest-700 placeholder:text-forest-700/25 focus:border-leaf-500 focus:outline-none"
      />
    </div>
  );
}
