import { Reveal, StaggerGroup, itemVariants } from "./Reveal";
import { MediaSlot } from "./MediaSlot";
import { motion } from "motion/react";

export function Event() {
  return (
    <section id="evento" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Comunidade LG
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Evento Presencial Anual
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Todos os anos, as alunas do time LG Pro participam de um evento presencial
                exclusivo.
              </p>
              <p>
                Um dia pensado para fortalecer a comunidade, promover troca de experiências,
                aprendizado, conexão e pertencimento.
              </p>
              <p>
                O encontro reúne treino, atividades guiadas, momentos de reflexão e experiências
                que vão além do físico.
              </p>
            </div>
            <div className="mt-8 space-y-1">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Mais do que um evento
              </p>
              <p className="text-2xl font-bold text-primary">É um ritual</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <MediaSlot
              aspect="aspect-video"
              rounded="rounded-2xl"
              icon="play"
              label="Vídeo do evento"
            />
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h3 className="text-center text-xl font-semibold text-foreground">Galeria do Evento</h3>
        </Reveal>

        <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div key={i} variants={itemVariants}>
              <MediaSlot aspect="aspect-[4/3]" rounded="rounded-xl" />
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
