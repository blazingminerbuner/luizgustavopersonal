import { Reveal, StaggerGroup, itemVariants } from "./Reveal";
import { motion } from "motion/react";
import { Dumbbell, PlayCircle, MessageCircle, Video } from "lucide-react";

const items = [
  {
    icon: Dumbbell,
    title: "Treino completo e personalizado",
    desc: "Com instruções detalhadas e técnicas corretas de execução, em até 7 dias úteis.",
  },
  {
    icon: PlayCircle,
    title: "Aplicativo com vídeos de execução",
    desc: "Dos exercícios para te auxiliar na execução correta de cada movimento.",
  },
  {
    icon: MessageCircle,
    title: "Suporte direto comigo",
    desc: "Para tirar suas dúvidas e avaliar seus feedbacks durante todo o processo.",
  },
  {
    icon: Video,
    title: "Orientações através dos seus vídeos",
    desc: "Avalio os padrões dos seus movimentos e faço as correções necessárias.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Benefícios
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Ao adquirir agora, você receberá:
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border/60 bg-card/60 p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
