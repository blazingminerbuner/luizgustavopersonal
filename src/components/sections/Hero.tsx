import { motion } from "motion/react";
import { Zap, ArrowRight, Target, ShieldCheck, TrendingUp } from "lucide-react";
import { MediaSlot } from "./MediaSlot";

const headline1 = "Transforme seu corpo com um método aplicado em";
const accent = "resultados reais.";

export function Hero() {
  const words = headline1.split(" ");

  return (
    <section id="top" className="relative overflow-hidden pt-28">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, color-mix(in oklab, var(--primary) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--primary) 6%, transparent) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <MediaSlot
            aspect="aspect-[16/9]"
            rounded="rounded-3xl"
            className="mx-auto max-w-5xl"
            label="Imagem principal"
          />
        </motion.div>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Zap className="h-3.5 w-3.5" /> Método Comprovado
          </motion.span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
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
            className="mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            Consultoria Fitness Online com acompanhamento estratégico, individualizado e focado em
            evolução consistente — não em soluções genéricas.
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
            className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm"
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
      </div>
    </section>
  );
}
