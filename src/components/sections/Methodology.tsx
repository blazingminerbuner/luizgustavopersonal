import { Reveal, StaggerGroup, itemVariants } from "./Reveal";
import { motion } from "motion/react";
import { Target, Zap, TrendingUp, ShieldCheck, type LucideIcon } from "lucide-react";

const steps: { title: string; desc: string; Icon: LucideIcon }[] = [
  {
    title: "Avaliação Completa",
    desc: "Análise física, rotina, histórico e objetivos antes de qualquer prescrição.",
    Icon: Target,
  },
  {
    title: "Estratégia Individual",
    desc: "Treino e dieta ajustados para adesão, rotina e evolução progressiva.",
    Icon: Zap,
  },
  {
    title: "Acompanhamento Contínuo",
    desc: "Ajustes frequentes com base na resposta do corpo.",
    Icon: TrendingUp,
  },
  {
    title: "Evolução Sustentável",
    desc: "Resultado que se mantém ao longo do tempo.",
    Icon: ShieldCheck,
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Processo
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A estratégia por trás de cada resultado
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Um processo estruturado para garantir evolução consistente e sustentável.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, desc, Icon }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/70 hover:shadow-[0_20px_60px_-25px_color-mix(in_oklab,var(--primary)_55%,transparent)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%)",
                }}
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[inset_0_1px_0_color-mix(in_oklab,var(--primary)_25%,transparent)] transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
