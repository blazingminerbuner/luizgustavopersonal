import { Instagram } from "lucide-react";
import logoAsset from "@/assets/logo-lg.svg.asset.json";

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
];

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border/60 bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div>
          <img src={logoAsset.url} alt="Luiz Gustavo" className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Consultoria Fitness Online com método aplicado em resultados reais.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-card/60 text-foreground/80 transition-all duration-300 hover:border-primary/70 hover:text-primary hover:shadow-[0_0_24px_-6px_color-mix(in_oklab,var(--primary)_55%,transparent)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border/60 px-6 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Luiz Gustavo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
