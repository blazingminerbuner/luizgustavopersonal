
# Plano — Site "Consultoria Pro" do Luiz Gustavo

Réplica estrutural fiel da página `amorimacademy.com/consultoriapro`, mantendo a mesma ordem de seções, hierarquia, copy e animações, trocando apenas: marca, fonte, paleta e nome do profissional.

## Identidade aplicada globalmente

- **Paleta (tokens em `src/styles.css`, oklch):**
  - `--background`: `#191919`
  - `--primary` / accent: `#909bc4` (substitui o turquesa do original em botões, badges, sublinhados, ícones, hovers)
  - `--foreground`: branco quase puro
  - `--muted-foreground`: cinza claro
  - `--card`: tom levemente acima do background para profundidade
- **Tipografia:** Poppins (Google Fonts, pesos 300/400/500/600/700/800) aplicada via `font-family` no `body` e em utilitários Tailwind.
- **Logo:** o SVG enviado vai para `src/assets/logo.svg.asset.json` via `lovable-assets` e é usado no header e footer (substituindo `#AMORIM TEAM`).
- **Nome:** todas as referências a "Lucas Amorim" / "Amorim Team" / "AMT" viram **Luiz Gustavo** (personal trainer). Adapto naturalmente: "Amorim Team" → "LG Team", "AMT Pro" → "LG Pro", "AMT Experience" → "LG Experience".

## Estrutura de rotas

Single-page conforme original (uma rota com seções ancoradas + nav scroll suave):

- `src/routes/index.tsx` — página completa com todas as seções abaixo
- `src/routes/__root.tsx` — fontes, meta tags (title "Luiz Gustavo — Consultoria Fitness Online", description correspondente)

## Seções (na mesma ordem do original)

1. **Header fixo** — logo à esquerda, nav (Projetos · Sobre · Contato), botão "Entrar na Consultoria" com fundo `#909bc4`. Fica transparente no topo e ganha blur+borda ao rolar.
2. **Hero** — imagem grande com cantos arredondados (slot escuro reservado), badge "Método Comprovado" com ícone raio, headline em duas cores ("Transforme seu corpo com um método aplicado em **resultados reais.**" com underline animado no accent), parágrafo de apoio, CTA, e linha de pills ("Resultados reais · Método aplicado · Acompanhamento contínuo").
3. **Transformações** — eyebrow + título "Resultados reais. Corpos reais. Processos reais.", marquee infinito horizontal em duas linhas (direções opostas) com 19 slots escuros (cards com aspect-ratio retrato).
4. **Fundador (Luiz Gustavo)** — split com foto (slot vertical) + bloco textual reescrito mantendo o tom (anos de prática, foco em estética/performance/constância, "Nada de planos prontos / achismos").
5. **Metodologia (Processo)** — grid de 4 cards numerados: Avaliação Completa, Estratégia Individual, Acompanhamento Contínuo, Evolução Sustentável.
6. **Comunidade — Evento Presencial Anual (LG Experience)** — bloco com vídeo placeholder (16:9 escuro com botão play), texto "É um ritual" e galeria de 6 slots do evento em grid.
7. **Como funciona** — 3 passos numerados em linha (1 Avaliação, 2 Plano, 3 Acompanhamento).
8. **Essa consultoria é para você?** — dois cards lado a lado (É / Não é) com listas check/cross.
9. **Benefícios** — grid 2×2 com os 4 itens (treino personalizado, app com vídeos, suporte direto, orientações por vídeo).
10. **Planos — Treino** — 4 cards (Mensal R$297, Trimestral R$587, Semestral R$867 com badge "Melhor custo-benefício", Anual R$1.597) com lista de features e botão "Escolher".
11. **Planos — Dieta + Treino** — bloco introdutório + 4 cards (R$600 / R$1.300 / R$1.950 / R$3.700) mesmo layout.
12. **CTA Final** — bloco grande "Entre para um processo sério de transformação física" com CTA accent.
13. **Footer** — logo, "Ainda tem dúvidas? Fale diretamente com o time no WhatsApp.", links rápidos, copyright.

## Animações (polidas, próximas do original)

Usando **Motion (Framer Motion)** + IntersectionObserver:

- **Header:** transição suave de transparente → blur+borda ao passar de 40px de scroll.
- **Hero:** fade+rise da headline em cascata por palavra (stagger 60ms), CTA com leve scale-in, underline accent desenhado da esquerda para direita (scaleX) após a headline montar.
- **Section reveal:** todas as seções fazem fade+translateY(24px) → 0 ao entrar no viewport (threshold 0.15, duração 700ms ease-out).
- **Marquee transformações:** duas faixas com animação CSS `translateX` infinita (40s/50s, direções opostas), pausa no hover, gradient mask nas laterais.
- **Cards (metodologia, benefícios, planos):** stagger por índice, hover com leve elevação + borda accent.
- **Plano destacado:** scale 1.03 sutil + brilho accent na borda.
- **Botões accent:** hover com glow `box-shadow` accent e translate-y(-1px).
- **Números (passos/processo):** contador conta de 0 ao valor quando entram no viewport.
- **Scroll suave** entre âncoras do menu.
- **Respeita `prefers-reduced-motion`** desligando movimento.

## Slots de mídia (sem destino por enquanto)

Conforme escolha do usuário: todas as áreas de imagem/vídeo são **slots escuros neutros** — `bg-card` com borda sutil `#909bc4/15`, aspect-ratio correto, ícone discreto de imagem/play no centro, prontos para receber arquivos depois.

## Botões/links

Todos os CTAs ("Entrar na Consultoria", "Escolher", "WhatsApp") ficam como `<button>` sem `href` (cursor pointer, sem navegação) — você pluga as URLs depois.

## Detalhes técnicos

- Dependências a adicionar: `motion` (framer-motion v11+ via pacote `motion`), `lucide-react` (já no template via shadcn).
- Poppins via `<link>` no `__root.tsx` head.
- Tokens em `src/styles.css` reescritos em `oklch` equivalentes a `#191919` e `#909bc4`; todos os componentes usam `bg-background`, `text-primary`, etc. — zero hex inline.
- Componentes quebrados em arquivos pequenos sob `src/components/sections/` (Header, Hero, Transformations, Founder, Methodology, Event, HowItWorks, ForYou, Benefits, PricingTraining, PricingDietTraining, FinalCTA, Footer).
- Logo importada via `lovable-assets` a partir do SVG anexado.
- SEO: title, description, og:title/og:description configurados.

## Fora do escopo (faço depois se quiser)

- Integração real de pagamento/checkout nos botões "Escolher".
- Player Vimeo real (fica placeholder).
- Upload e otimização das fotos de transformações/evento.
