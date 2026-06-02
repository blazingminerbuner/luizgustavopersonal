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
    <section id="metodologia" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Processo
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A metodologia aplicada na consultoria
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Um processo estruturado para garantir evolução consistente e sustentável.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border/60 bg-card/60 p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-lg font-bold text-primary">
                0{i + 1}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
