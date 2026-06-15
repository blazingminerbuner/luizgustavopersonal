import { motion } from "motion/react";
import { ArrowRight, User, BarChart3, Target } from "lucide-react";
import heroTrainer from "@/assets/hero-trainer.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-28 sm:pt-20 md:pt-24">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-8 lg:gap-12">
          {/* Texto — esquerda no desktop, abaixo da imagem no mobile */}
          <div className="order-2 flex w-full max-w-xl flex-col items-center text-center md:order-1 md:items-start md:text-left lg:max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-[0.15em] text-primary sm:text-sm"
            >
              CONSULTORIA FITNESS ONLINE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-6xl"
            >
              Estratégia.
              <br />
              Acompanhamento.
              <br />
              <span className="text-primary">Resultados reais.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg"
            >
              Consultoria individualizada para transformar seu físico com método, acompanhamento e resultados comprovados.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              type="button"
              className="btn-glow mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground"
            >
              Entrar na Consultoria
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4"
            >
              {[
                { label: "Consultoria", sub: "100% individualizada", Icon: User },
                { label: "Acompanhamento", sub: "próximo e constante", Icon: BarChart3 },
                { label: "Resultados", sub: "consistentes e duradouros", Icon: Target },
              ].map(({ label, sub, Icon }) => (
                <div key={label} className="flex flex-col items-center gap-2 sm:items-start">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Imagem — direita no desktop, acima do texto no mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 w-full md:order-2 md:w-1/2 lg:w-[55%]"
          >
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border border-primary/15 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_35%,transparent)] md:max-w-none">
              <div
                className="relative"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
              >
                <img
                  src={heroTrainer.url}
                  alt="Luiz Gustavo — Consultoria de Treino"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[3/2] md:aspect-[4/3]"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
