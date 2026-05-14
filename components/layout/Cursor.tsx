"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);
  const supports = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const match = window.matchMedia("(pointer: fine)");
    supports.current = match.matches;
    if (!match.matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, [data-cursor='hover'], input, textarea, [role='button']")
      ) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y, visible]);

  if (!supports.current) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        aria-hidden
      >
        <motion.div
          animate={{
            scale: hover ? 2.6 : 1,
            opacity: visible ? 1 : 0
          }}
          transition={{ type: "spring", damping: 18, stiffness: 220 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-forest-700 bg-forest-700/95"
          style={{ width: 10, height: 10 }}
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        aria-hidden
      >
        <motion.div
          animate={{ opacity: visible ? 0.4 : 0, scale: hover ? 1.5 : 1 }}
          transition={{ duration: 0.25 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-leaf-500/40"
          style={{ width: 48, height: 48 }}
        />
      </motion.div>
    </>
  );
}
