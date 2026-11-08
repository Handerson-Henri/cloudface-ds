# Etapa 15 — Vitrine (docs + stories)

Data: 2026-11-08

## Implementado

- Docs Vite: nav nas categorias Spec / Ações / Formulários / Feedback / Navegação / Estrutura, uma página de demo por componente
- `SkipLink` + `main#conteudo`; `ToastProvider` no shell
- Story isolada em `packages/ui/src/<nome>/<nome>.stories.tsx` (variante/estado); `catalog.stories.tsx` permanece overview
- Prosa continua só no harness (`ui/`). O site não duplica README.

## Decisões

- Demo vivo nas docs, spec no harness. Uma frase na página aponta para `harness/ui`.
- Sidebar da docs usa `icon` + colapso para exercitar o composto no próprio site.

## Pendente

- Densidade visual de cada página (onda 16+)
- Axe no CI
