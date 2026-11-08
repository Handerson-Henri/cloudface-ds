# Etapa 30 — forced-colors

Data: 2026-11-08

## Implementado

- `@media (forced-colors: active)` em `variables.css`: papéis → `Canvas` / `CanvasText` / `LinkText` / `ButtonText` / `ButtonFace` / `Highlight` / `GrayText`
- Foco visível: `outline: 2px solid Highlight`
- Button: borda `ButtonText`; primary fill `ButtonText` / `ButtonFace`; ghost/outline no canvas
- ADR [002-tema.md](../decisoes/002-tema.md): forced-colors implementado; `prefers-color-scheme` continua sem auto-troca
- Teste no pacote tokens

## Decisões

- Remap na camada semântica, não `forced-color-adjust: none` global (a marca não compete com o HCM do OS).
- Overlay vira `Canvas` (sem `color-mix`).

## Pendente

- Publish `@cloudface/*`
- `prefers-color-scheme` automático (fora, dark-first)
