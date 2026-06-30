import { Instagram } from "lucide-react";
import logoAsset from "@/assets/logo-lg.png.asset.json";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/personalluizgustavo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", Icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@personalluizgustavo?is_from_webapp=1&sender_device=pc", Icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border/60 bg-background py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 text-center">
        <div className="flex flex-col items-center">
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
