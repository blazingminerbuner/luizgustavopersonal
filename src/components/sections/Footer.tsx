import logoAsset from "@/assets/logo-lg.svg.asset.json";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border/60 bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div>
          <img src={logoAsset.url} alt="Luiz Gustavo" className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Consultoria Fitness Online com método aplicado em resultados reais.
          </p>
        </div>
        <div className="md:text-right">
          <h3 className="text-lg font-semibold text-foreground">Ainda tem dúvidas?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Fale diretamente com o time no WhatsApp.
          </p>
          <button
            type="button"
            className="btn-glow mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Falar no WhatsApp
          </button>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border/60 px-6 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Luiz Gustavo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
