"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  speed?: "slow" | "normal" | "fast";
};

export function Marquee({ children, reverse, className, speed = "normal" }: Props) {
  const duration =
    speed === "slow" ? "70s" : speed === "fast" ? "22s" : "38s";
  return (
    <div className={cn("relative flex w-full overflow-hidden mask-fade-x", className)}>
      <div
        className="flex shrink-0 items-center gap-12"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration} linear infinite`
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
