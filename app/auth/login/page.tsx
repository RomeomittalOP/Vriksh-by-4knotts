import { AuthShell, AuthField, AuthSubmit } from "@/components/auth/AuthShell";

export const metadata = {
  title: "Sign In · Vriksh by 4Knotts"
};

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Door · 01"
      title="Welcome back to"
      italic="the atelier."
      image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
      altLabel="No account yet?"
      altHref="/auth/signup"
      altCta="Request an invitation →"
    >
      <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
        <AuthField label="Email" type="email" placeholder="you@studio.in" />
        <AuthField label="Password" type="password" placeholder="••••••••" />
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/50">
            <input
              type="checkbox"
              className="h-3 w-3 appearance-none rounded-sm border border-forest-700/30 checked:bg-leaf-500"
            />
            Remember this door
          </label>
          <a
            href="#"
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-leaf-600/80 hover:text-leaf-600"
          >
            Forgot
          </a>
        </div>
        <AuthSubmit label="Enter The Atelier" />
      </form>
    </AuthShell>
  );
}
