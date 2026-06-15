import { Reveal, StaggerGroup, itemVariants } from "./Reveal";
import { motion } from "motion/react";

const steps = [
  "Avaliação Completa",
  "Montagem e entrega de plano e dieta",
  "Monitoramento contínuo com ajustes para maximizar resultados.",
];

export function HowItWorks() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Jornada
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Como funciona a Consultoria Fitness Online
          </h2>
        </Reveal>

        <StaggerGroup className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* connecting line (desktop only) — aligned to vertical center of the number badges */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[72px] hidden h-px md:block"
            style={{
              background:
                "linear-gradient(to right, transparent, color-mix(in oklab, var(--primary) 45%, transparent), transparent)",
            }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={s}
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center rounded-2xl p-8 text-center"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-3xl font-bold text-primary-foreground shadow-[0_18px_45px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(160deg, color-mix(in oklab, white 25%, transparent), transparent 55%)",
                  }}
                />
                <span className="relative">{i + 1}</span>
              </motion.div>
              <p className="mt-8 max-w-[220px] text-base font-medium text-foreground">{s}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
