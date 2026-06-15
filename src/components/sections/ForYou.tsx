import { Reveal } from "./Reveal";
import { Check, X } from "lucide-react";

const yes = [
  "Quer transformar o físico de forma sustentável",
  "Precisa de direção e acompanhamento",
  "Busca um plano adaptado à própria rotina",
  "Está comprometido(a) com a evolução",
];
const no = [
  "Procura atalhos",
  "Quer copiar estratégias de outras pessoas",
  "Não aceita ajustes e acompanhamento",
  "Busca resultados imediatos sem processo",
];

export function ForYou() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Essa consultoria não é para todo mundo!
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-primary/30 bg-primary/[0.07] p-8 shadow-[0_8px_30px_-10px_color-mix(in_oklab,var(--primary)_20%,transparent)]">
              <h3 className="text-xl font-semibold text-primary">É ideal para quem:</h3>
              <ul className="mt-6 space-y-4">
                {yes.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-medium text-foreground">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-destructive/30 bg-destructive/[0.07] p-8 shadow-[0_8px_30px_-10px_color-mix(in_oklab,var(--destructive)_20%,transparent)]">
              <h3 className="text-xl font-semibold text-destructive">Não é indicada para quem:</h3>
              <ul className="mt-6 space-y-4">
                {no.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-medium text-foreground/80">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/25 text-destructive">
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
