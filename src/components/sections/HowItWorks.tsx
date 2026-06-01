import { Reveal, StaggerGroup, itemVariants } from "./Reveal";
import { motion } from "motion/react";

const steps = [
  "Avaliação inicial detalhada",
  "Entrega do plano de treino e dieta",
  "Acompanhamento, ajustes e evolução contínua",
];

export function HowItWorks() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Jornada
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Como funciona a Consultoria Fitness Online
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s}
              variants={itemVariants}
              className="relative rounded-2xl border border-border/60 bg-card/60 p-8 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-2xl font-bold text-primary">
                {i + 1}
              </div>
              <p className="mt-6 text-base font-medium text-foreground">{s}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
