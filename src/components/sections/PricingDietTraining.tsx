import { Reveal } from "./Reveal";
import { Check } from "lucide-react";

const included = [
  "Treino individualizado (Acesso ao meu aplicativo)",
  "Dieta personalizada",
  "Suplementação",
  "Protocolos",
  "Contato de suporte",
  "Meu acompanhamento direto e individualizado via WhatsApp",
];

const plans: Plan[] = [
  {
    name: "Mensal",
    price: "R$ 600,00",
    subtitle: "Dieta + Treino",
    validity: "*Válido por 1 mês",
    features: included,
  },
  {
    name: "Trimestral",
    price: "R$ 1.300,00",
    subtitle: "Dieta + Treino",
    validity: "*Válido por 3 meses",
    features: included,
    badge: "Melhor custo-benefício",
  },
  {
    name: "Semestral",
    price: "R$ 1.950,00",
    subtitle: "Dieta + Treino",
    validity: "*Válido por 6 meses",
    features: included,
    featured: true,
    badge: "Melhor custo-benefício",
  },
  {
    name: "Anual",
    price: "R$ 3.700,00",
    subtitle: "Dieta + Treino",
    validity: "*Válido por 12 meses",
    features: included,
  },
];

export function PricingDietTraining() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Dieta + Treino
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Consultoria Online — Dieta e Treino
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Acompanhamento completo com treino individualizado e dieta personalizada.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl rounded-3xl border border-primary/20 bg-card/50 p-8 backdrop-blur-sm shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--primary)_18%,transparent)] sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--primary)_50%,transparent)]">
              <Check className="h-5 w-5" strokeWidth={3} />
            </span>
            <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
              O que está incluso:
            </h3>
          </div>
          <ul className="mt-7 grid gap-3">
            {included.map((it) => (
              <li
                key={it}
                className="flex items-center gap-3 rounded-xl border border-primary/10 bg-primary/[0.04] px-4 py-3 text-sm font-medium text-foreground/90 transition-all hover:border-primary/30 hover:bg-primary/[0.08]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {it}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-l-2 border-primary/60 pl-4 text-xs italic text-muted-foreground">
            P.S: As dietas são montadas pelas nutricionistas da minha equipe!
          </p>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
