import { Reveal, StaggerGroup, itemVariants } from "./Reveal";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export type Plan = {
  name: string;
  price: string;
  validity: string;
  features: string[];
  badge?: string;
  featured?: boolean;
  url?: string;
};

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-colors ${
        plan.featured
          ? "scale-[1.02] border-primary/60 bg-primary/[0.06] shadow-[0_20px_60px_-30px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
          : "border-border/60 bg-card/60 hover:border-primary/50"
      }`}
    >
      {plan.badge ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {plan.badge}
        </span>
      ) : null}
      <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
      <div className="mt-4">
        <span className="text-3xl font-bold text-foreground">{plan.price}</span>
      </div>
      
      <p className="mt-1 text-xs text-muted-foreground">{plan.validity}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="btn-glow mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
      >
        Escolher
      </button>
    </motion.div>
  );
}

const baseFeatures = [
  "Treino Individualizado",
  "Casa ou Academia",
  "App de Treinos",
  "Vídeos de Execução",
  "Protocolo alimentar",
  "Contato via Whatsapp",
];

const trainingPlans: Plan[] = [
  {
    name: "Mensal",
    price: "R$ 279,90",
    validity: "*Válido por 1 mês",
    url: "https://pay.kiwify.com.br/Ccg5YeT",
    features: [...baseFeatures, "1 Mês Acompanhamento"],
  },
  {
    name: "Trimestral",
    price: "R$ 675,90",
    validity: "*Válido por 3 meses",
    url: "https://pay.kiwify.com.br/vEujLbs",
    features: [...baseFeatures, "3 Meses Acompanhamento"],
  },
  {
name: "Anual",
    price: "R$ 1109,90",
    validity: "*Válido por 12 meses",
    badge: "Melhor custo-benefício",
    featured: true,
    url: "https://pay.kiwify.com.br/9n3F8Ft",
    features: [...baseFeatures, "12 Meses Acompanhamento"],
  },
];

export function PricingTraining() {
  return (
    <section id="planos" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Planos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Consultoria Online — Dieta e Treino
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Todos os planos seguem a mesma metodologia. O que muda é o tempo de acompanhamento.
          </p>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPlans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
