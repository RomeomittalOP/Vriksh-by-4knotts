"use client";

import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";

type Variant = "primary" | "ghost" | "outline";

type Props = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  icon?: boolean;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon = true,
  className
}: Props) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 text-[12px] uppercase tracking-[0.28em] font-mono transition-colors duration-500";

  const variants: Record<Variant, string> = {
    primary:
      "bg-forest-700 text-forest-950 hover:bg-leaf-500",
    ghost: "text-forest-700 hover:text-leaf-600",
    outline:
      "border border-forest-700/25 text-forest-700 hover:border-leaf-500 hover:text-leaf-600"
  };

  const Content = (
    <span className={cn(base, variants[variant], className)}>
      <span className="relative z-10 transition-transform duration-700 group-hover:-translate-y-[110%]">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 flex items-center pl-7 text-[12px] uppercase tracking-[0.28em] opacity-0 transition duration-700 group-hover:translate-y-0 group-hover:opacity-100 translate-y-[110%]"
      >
        {children}
      </span>
      {icon && (
        <ArrowUpRight
          size={14}
          className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      )}
    </span>
  );

  return (
    <MagneticButton href={href} onClick={onClick} as={href ? "a" : "button"}>
      {Content}
    </MagneticButton>
  );
}
