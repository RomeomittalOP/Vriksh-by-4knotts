import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream pt-32">
      <div className="absolute inset-0 gradient-radial" />
      <div className="container-x relative text-center">
        <Logo className="mx-auto mb-10 h-12 w-12 text-leaf-600/70" />
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-leaf-600/80">
          Lost · In · The · Canopy
        </p>
        <h1 className="mt-6 editorial-mega leading-none text-forest-700">404</h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-forest-700/65">
          This page does not exist in our current edition. Return to the studio,
          or wander through the collection.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Return Home</Button>
          <Button href="/products" variant="outline">
            Browse The Edition
          </Button>
        </div>
      </div>
    </section>
  );
}
