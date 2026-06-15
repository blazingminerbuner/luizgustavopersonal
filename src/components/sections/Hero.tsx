import { motion } from "motion/react";
import { Zap, ArrowRight, Target, ShieldCheck, TrendingUp } from "lucide-react";
import heroTrainer from "@/assets/hero-trainer.png.asset.json";

const headline1 = "Transforme hábitos, desenvolva performance e alcance sua";
const accent = "melhor versão.";

export function Hero() {
  const words = headline1.split(" ");

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-20 md:pt-24">
      {/* Imagem desktop — absolute à direita, ocupando toda a altura com fade para o fundo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-16 bottom-0 right-0 hidden w-[50%] md:block lg:w-[55%]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 100%), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <img
          src={heroTrainer.url}
          alt="Luiz Gustavo — Consultoria de Treino"
          className="h-full w-full object-cover object-left"
          loading="eager"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-10">
          {/* Texto — esquerda no desktop, abaixo da imagem no mobile */}
          <div className="order-2 flex w-full flex-col items-center text-center md:order-1 md:w-[55%] md:items-start md:pr-4 md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <Zap className="h-3.5 w-3.5" /> Método Comprovado
            </motion.span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-6xl">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {w}&nbsp;
                </motion.span>
              ))}
              <span className="relative inline-block text-primary">
                {accent}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.35 + words.length * 0.05 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary"
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-6 text-base text-muted-foreground sm:text-lg"
            >
              Mais do que um treino: uma consultoria completa, desenvolvida para acelerar sua evolução
              com método, acompanhamento e direção.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              type="button"
              className="btn-glow mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground"
            >
              Entrar na Consultoria
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm md:justify-start"
            >
              {[
                { label: "Resultados reais", Icon: Target },
                { label: "Método aplicado", Icon: ShieldCheck },
                { label: "Acompanhamento contínuo", Icon: TrendingUp },
              ].map(({ label, Icon }) => (
                <span
                  key={label}
                  className="group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/60 px-4 py-2 font-medium text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-card/80 hover:shadow-[0_0_24px_-6px_color-mix(in_oklab,var(--primary)_55%,transparent)]"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Imagem — acima do texto no mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 w-full md:hidden"
          >
            <div className="relative overflow-hidden rounded-3xl border border-primary/15 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_35%,transparent)]">
              <div
                className="relative"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                  maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
              >
                <img
                  src={heroTrainer.url}
                  alt="Luiz Gustavo — Consultoria de Treino"
                  className="h-auto w-full object-cover"
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
