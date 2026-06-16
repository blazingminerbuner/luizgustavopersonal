import { motion } from "motion/react";
import { Zap, ArrowRight, Target, ShieldCheck, TrendingUp } from "lucide-react";
import heroTrainer from "@/assets/hero-trainer-wide.jpg.asset.json";

const headline1 = "Transforme hábitos, desenvolva performance e alcance sua";
const accent = "melhor versão.";

function BadgeMetodo() {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
    >
      <Zap className="h-3.5 w-3.5" /> Método Comprovado
    </motion.span>
  );
}

function HeroTitle() {
  const words = headline1.split(" ");
  return (
    <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-6xl">
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
  );
}

function HeroTextContent() {
  return (
    <>
      <HeroTitle />

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
    </>
  );
}

function HeroContent() {
  return (
    <>
      <BadgeMetodo />
      <div className="mt-6">
        <HeroTextContent />
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block md:pt-24">
        {/* Imagem desktop — absolute à direita, ocupando toda a altura com fade para o fundo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute top-16 bottom-0 right-0 w-[50%] lg:w-[55%]"
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
            className="h-full w-full object-cover object-[center_40%]"
            loading="eager"
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="flex items-start gap-10">
            <div className="flex w-[55%] flex-col items-start pr-4 text-left">
              <HeroContent />
            </div>
          </div>
        </div>
      </div>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden">
        {/* Imagem 1:1 com badge sobreposto */}
        <div className="relative aspect-square w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={heroTrainer.url}
              alt="Luiz Gustavo — Consultoria de Treino"
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          </motion.div>

          {/* Fade inferior da imagem para transição suave */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.6) 100%)",
            }}
          />

          {/* Badge posicionado na parte inferior da imagem */}
          <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center px-6">
            <BadgeMetodo />
          </div>
        </div>

        {/* Conteúdo textual abaixo da imagem */}
        <div className="px-6 pb-16 pt-10 text-center">
          <HeroTextContent />
        </div>
      </div>
    </section>
  );
}
