# Etapa 25 — Cloudface-ID-Visual no monorepo

Data: 2026-11-08

## Implementado

- Zip `~/Downloads/Cloudface-ID-Visual.zip` copiado para `@cloudface/assets`
- `logos/`, `fonts/`, `movimento/` + `IDENTIDADE_VISUAL.md`
- `@font-face` com `url()` dos binários
- Vitrine: logo no Sidebar (mark só quando recolhido), Identidade com logo, símbolo e loop Möbius
- Storybook importa `fonts.css`

## Decisões

- `produção-pvc/` e `referencias/` ficam fora do monorepo (harness/assets.md).
- Nada inventado: só arquivos do zip.
- Vite 8 rejeita `exports` wildcard (`./logos/*`) para PNG/SVG nas conditions `module`/`browser`/`development`/`import` — tela branca no docs. Pacote sem `exports`; docs resolve `@cloudface/assets` por alias para `packages/assets`.
- Não empilhar logo + mark: o PNG já traz o símbolo. Möbius `static-dark` é o mesmo lockup — na Identidade entra o `loop-symbol`.

## Pendente

- Validar com a marca os tokens proposta e a área de proteção
- Tema claro, publish (fora)
