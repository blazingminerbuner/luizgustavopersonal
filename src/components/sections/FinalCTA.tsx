import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-b from-primary/10 to-card/60 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)]" />
            <h2 className="relative text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Entre para um processo sério de transformação física
            </h2>
            <div className="relative mt-6 space-y-1 text-muted-foreground">
              <p>Sem promessas irreais.</p>
              <p>Sem atalhos.</p>
              <p>Com método, acompanhamento e resultados comprovados.</p>
            </div>
            <button
              type="button"
              className="btn-glow relative mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground"
            >
              Entrar na Consultoria
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
