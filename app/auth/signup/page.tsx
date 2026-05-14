import { AuthShell, AuthField, AuthSubmit } from "@/components/auth/AuthShell";

export const metadata = {
  title: "Request An Invitation · Vriksh by 4Knotts"
};

export default function SignupPage() {
  return (
    <AuthShell
      eyebrow="Door · 02"
      title="Request a"
      italic="quiet invitation."
      image="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80"
      altLabel="Already in the studio?"
      altHref="/auth/login"
      altCta="Return to the atelier →"
    >
      <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-6">
          <AuthField label="First Name" placeholder="Anaika" />
          <AuthField label="Last Name" placeholder="Mehta" />
        </div>
        <AuthField label="Email" type="email" placeholder="you@studio.in" />
        <AuthField label="City" placeholder="Bombay" />
        <AuthField label="Password" type="password" placeholder="••••••••" />
        <label className="flex items-start gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-forest-700/50">
          <input
            type="checkbox"
            className="mt-1 h-3 w-3 appearance-none rounded-sm border border-forest-700/30 checked:bg-leaf-500"
          />
          <span className="leading-relaxed">
            I would like to receive the monthly dispatch from the studio.
          </span>
        </label>
        <AuthSubmit label="Request Invitation" />
      </form>
    </AuthShell>
  );
}
