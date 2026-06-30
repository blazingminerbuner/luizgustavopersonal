import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo-lg.png.asset.json";

const links = [
  { label: "Projetos", href: "#transformacoes" },
  { label: "Sobre", href: "#fundador" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-center px-6">
        <nav className="absolute left-6 hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#top" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Luiz Gustavo" className="h-12 w-auto" />
        </a>
      </div>
    </header>
  );
}
