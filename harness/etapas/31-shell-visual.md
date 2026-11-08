# Etapa 31 — shell visual (Berry como geometria)

Data: 2026-11-08

## Implementado

- Sidebar: item atual preenchido (`action.primary.bg` / `action.primary.fg`), `radius.md`, hover `color-mix` no accent; labels de seção uppercase/muted; footer empilhado com gap
- Topbar: 64px, fundo canvas, clusters `start`/`end` com gap; story com SearchField + IconButtons + Avatar
- IconButton ghost: `radius.md` e hover `color-mix`
- Docs: coluna shell (Topbar + painel `main` inset); recolher menu no hamburger do Topbar
- `IconMenu` no set de ícones
- Teste CSS do Sidebar atualizado

## Decisões

- Inspiração só de geometria (item preenchido, clusters, painel inset). Accent continua cyan oficial; sem HEX/assets/Tailwind do Berry.
- Item atual reutiliza o par do Button primary (não a barra inset de 2px).
- No tema claro, o ghost 6% do Button é anulado nos itens da sidebar (fundo só no current e no hover).
- Sem composto `AppShell` — o chrome Berry fica na docs.

## Pendente

- Publish `@cloudface/*`
- `prefers-color-scheme` automático (fora, dark-first)
