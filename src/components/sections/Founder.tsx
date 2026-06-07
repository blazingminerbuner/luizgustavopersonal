import { Reveal } from "./Reveal";
import luizGustavoPhoto from "@/assets/luiz-gustavo.webp.asset.json";

export function Founder() {
  return (
    <section id="fundador" className="relative py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-primary/15 bg-card/60">
            <img
              src={luizGustavoPhoto.url}
              alt="Luiz Gustavo, personal trainer"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Fundador
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Luiz Gustavo
          </h2>

          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>
              Personal trainer responsável direto pela aplicação da metodologia da Consultoria
              Fitness Online.
            </p>
            <p>
              Anos de prática e estudo para entender o que realmente traz resultados significativos
              e o que gera transformações consistentes entre meus alunos.
            </p>
            <p>
              Trabalho focado em estética, performance e constância, com estratégias ajustadas
              conforme a resposta real de cada aluno.
            </p>
            <p className="text-foreground">Nada de planos prontos.</p>
            <p className="text-foreground">Nada de achismos.</p>
            <p className="text-foreground">
              Tudo baseado em acompanhamento e ajuste contínuo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
