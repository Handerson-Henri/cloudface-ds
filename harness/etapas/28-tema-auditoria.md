# Etapa 28 — Auditoria visual do tema claro

Data: 2026-11-08

## Implementado

- Percurso docs (5173) e Storybook (6006) com `data-theme="light"`
- Button ghost/outline, Link, Sidebar current, Alert success, Switch, Modal overlay
- Dark default intacto (`:root` navy, primary cyan.500)
- Storybook: toolbar Tema; canvas segue `--cf-color-bg-canvas` (sem faixa HEX navy no claro)
- Alias `@cloudface/assets` + export `css/fonts.css` no Storybook (preview quebrava sem `exports`)

## Decisões

- Overlay light (`navy.950` 40%) visível sem esconder o diálogo
- Ghost no claro mantém alvo 6% `fg.default`
- `fg.accent` no claro = `cyan.800` (já medido na 26)

## Pendente

- Publish `@cloudface/*` (ponto 3)
- `forced-colors` / `prefers-color-scheme` automático
