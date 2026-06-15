import { Reveal } from "./Reveal";
import { MediaSlot } from "./MediaSlot";

const TOP = Array.from({ length: 10 });
const BOTTOM = Array.from({ length: 9 });

function Row({ items, direction }: { items: unknown[]; direction: "left" | "right" }) {
  // duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((_, i) => (
          <div key={i} className="w-[220px] shrink-0 sm:w-[260px]">
            <MediaSlot aspect="aspect-[3/4]" rounded="rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Transformations() {
  return (
    <section id="transformacoes" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Transformações
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Cada corpo é único. Cada estratégia também.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Por trás de cada resultado existe um método personalizado, acompanhamento constante e decisões ajustadas ao longo do processo.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 space-y-5">
        <Row items={TOP} direction="left" />
        <Row items={BOTTOM} direction="right" />
      </div>
    </section>
  );
}
