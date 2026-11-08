# Etapa 3 — `packages/assets`

Data: 2026-11-08

## Implementado

- `@cloudface/assets` com pastas `logos/`, `fonts/`, `movimento/` (`.gitkeep`)
- Inventário em [assets.md](../assets.md) / [identidade.md](../identidade.md) e status **aguardando Cloudface-ID-Visual**
- `css/fonts.css`: `@font-face` nomeando Sora, Manrope, DM Sans e Barlow Condensed, `src: local(...)` + fallback `sans-serif`
- `produção-pvc/` só mencionado no README; não copiado

## Decisões

- Nenhum PNG/SVG inventado.
- Área de proteção permanece a da spec (altura da letra "C"); nada além disso.
- `@font-face` sem `url()` de arquivo da marca. Famílias caem no `sans-serif` das CSS variables até o pacote chegar.

## Pendente

- Feito na [etapa 25](./25-id-visual.md): logos, fontes, Möbius e mark no Sidebar.

Próximo passo: etapa 4 — UI bases.
