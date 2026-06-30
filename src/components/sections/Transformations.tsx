import { Reveal } from "./Reveal";
import t1 from "@/assets/transformation-1.png.asset.json";
import t2 from "@/assets/transformation-2.png.asset.json";
import t3 from "@/assets/transformation-3.png.asset.json";
import t4 from "@/assets/transformation-4.png.asset.json";
import t5 from "@/assets/transformation-5.png.asset.json";
import t6 from "@/assets/transformation-6.png.asset.json";
import t7 from "@/assets/transformation-7.png.asset.json";
import t8 from "@/assets/transformation-8.png.asset.json";
import t9 from "@/assets/transformation-9.png.asset.json";

const IMAGES = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

function Row({
  items,
  direction,
}: {
  items: { url: string }[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((img, i) => (
          <div key={i} className="w-[220px] shrink-0 sm:w-[260px]">
            <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-card aspect-[2/3]">
              <img
                src={img.url}
                alt="Transformação real de aluno"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Transformations() {
  const top = IMAGES.slice(0, 5);
  const bottom = IMAGES.slice(5, 9);

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
        <Row items={top} direction="left" />
        <Row items={bottom} direction="right" />
      </div>
    </section>
  );
}
