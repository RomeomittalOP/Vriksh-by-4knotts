"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
};

export function RevealText({
  children,
  className,
  as = "span",
  delay = 0,
  stagger = 0.05
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = children.split(" ");

  return (
    <span ref={ref} className={cn("inline", className)} data-reveal-as={as}>
      {words.map((word, i) => (
        <span key={i} className="inline-flex overflow-hidden align-baseline">
          <motion.span
            initial={{ y: "110%" }}
            animate={visible ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 1.1,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="inline-block whitespace-pre"
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function RevealLines({
  lines,
  className,
  delay = 0
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  return (
    <span className={cn("flex flex-col", className)}>
      {lines.map((line, i) => (
        <RevealText key={i} delay={delay + i * 0.08} className="block">
          {line}
        </RevealText>
      ))}
    </span>
  );
}
