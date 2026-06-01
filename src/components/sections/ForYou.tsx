import { Reveal } from "./Reveal";
import { Check, X } from "lucide-react";

const yes = ["Quer método e processo", "Valoriza acompanhamento", "Busca evolução real"];
const no = ["Quer milagres", "Não segue estratégia", "Procura plano genérico"];

export function ForYou() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Essa consultoria é para você?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-primary/40 bg-primary/5 p-8">
              <h3 className="text-xl font-semibold text-primary">É para você se:</h3>
              <ul className="mt-6 space-y-4">
                {yes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border/60 bg-card/60 p-8">
              <h3 className="text-xl font-semibold text-foreground/80">Não é para você se:</h3>
              <ul className="mt-6 space-y-4">
                {no.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                      <X className="h-3.5 w-3.5" />
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
