"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "./MobileNav";
import { Cart } from "./Cart";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Our Promise", href: "/philosophy" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" }
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setCartOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-[100] w-full bg-forest-700 text-cream shadow-[0_2px_24px_rgba(0,0,0,0.18)]"
      >
        <div className="container-x flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link href="/" data-cursor="hover" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 backdrop-blur-sm">
              <Logo className="h-7 w-7 text-cream" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-tight text-cream">
                Vriksh
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-cream/70">
                by 4Knotts
              </span>
            </div>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor="hover"
                  className={cn(
                    "group relative font-sans text-[14px] tracking-wide transition-colors",
                    isActive
                      ? "text-gold-400"
                      : "text-cream/85 hover:text-cream"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold-400 transition-transform duration-500 group-hover:scale-x-100",
                      isActive && "scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              data-cursor="hover"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full text-cream/85 transition hover:bg-cream/10 hover:text-gold-400"
            >
              <Search size={17} strokeWidth={1.6} />
            </button>
            <Link
              href="/auth/login"
              data-cursor="hover"
              aria-label="Account"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-cream/85 transition hover:bg-cream/10 hover:text-gold-400 md:flex"
            >
              <User size={17} strokeWidth={1.6} />
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              data-cursor="hover"
              aria-label="Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-cream/85 transition hover:bg-cream/10 hover:text-gold-400"
            >
              <ShoppingBag size={17} strokeWidth={1.6} />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-400 text-[9px] font-semibold text-forest-700">
                2
              </span>
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              data-cursor="hover"
              aria-label="Menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-cream/85 transition hover:bg-cream/10 hover:text-gold-400 lg:hidden"
            >
              <Menu size={17} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileNav onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
