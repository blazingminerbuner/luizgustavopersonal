import { Reveal, StaggerGroup } from "./Reveal";
import { Check } from "lucide-react";
import { PlanCard, type Plan } from "./PricingTraining";

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

        <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border/60 bg-card/60 p-8">
          <h3 className="text-lg font-semibold text-foreground">O que está incluso:</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {included.map((it) => (
              <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {it}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs italic text-muted-foreground">
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
