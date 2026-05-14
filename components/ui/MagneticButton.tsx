"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  as?: "button" | "a" | "div";
};

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  href,
  as = "div"
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={cn("btn-magnetic inline-flex", className)}
      data-cursor="hover"
    >
      {children}
    </motion.div>
  );

  if (as === "a" && href) {
    return (
      <a href={href} onClick={onClick} className="inline-flex" data-cursor="hover">
        {Inner}
      </a>
    );
  }
  if (as === "button") {
    return (
      <button onClick={onClick} className="inline-flex" data-cursor="hover">
        {Inner}
      </button>
    );
  }
  return Inner;
}
