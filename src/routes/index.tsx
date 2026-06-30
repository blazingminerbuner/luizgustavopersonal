import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Transformations } from "@/components/sections/Transformations";
import { Founder } from "@/components/sections/Founder";
import { Methodology } from "@/components/sections/Methodology";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ForYou } from "@/components/sections/ForYou";
import { Benefits } from "@/components/sections/Benefits";
import { PricingTraining } from "@/components/sections/PricingTraining";
import { PricingDietTraining } from "@/components/sections/PricingDietTraining";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingMobileButton } from "@/components/sections/FloatingMobileButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luiz Gustavo — Consultoria Fitness Online" },
      {
        name: "description",
        content:
          "Consultoria Fitness Online com Luiz Gustavo: método aplicado em resultados reais, acompanhamento individualizado e evolução sustentável.",
      },
      { property: "og:title", content: "Luiz Gustavo — Consultoria Fitness Online" },
      {
        property: "og:description",
        content:
          "Método aplicado em resultados reais. Treino individualizado e acompanhamento contínuo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <Transformations />
        <Founder />
        <Methodology />
        <HowItWorks />
        <ForYou />
        <Benefits />
        <PricingTraining />
        <PricingDietTraining />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
