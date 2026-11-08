# Etapa 27 — CSS accent e vitrines

Data: 2026-11-08

## Implementado

- Link, Sidebar current, Breadcrumbs, Tabs, outline/ghost, Badge default, Label required → `--cf-color-fg-accent`
- Docs: Switch “Tema claro” no footer; `data-theme` no `html`
- Identidade: logo claro e arquivo dark do zip (ambos wordmark claro) sobre chip escuro; Möbius light
- Storybook: toolbar Tema + backgrounds canvas/surface light a partir dos primitivos

## Decisões

- `Cloudface-logo-dark.png` do zip é wordmark claro (não lê no canvas light). Header light usa mark + texto “Cloudface” em `fg.default`. Sem PNG inventado.
- Ghost no claro ganha fundo 6% `fg.default` para ter alvo visível.

## Pendente

- Onda 28: auditoria visual
