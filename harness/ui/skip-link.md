# SkipLink

## Propósito
Pula o menu até o conteúdo principal.

## Anatomia
container e conteúdo visível.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| href | string | #conteudo | alvo |

## Variantes e tamanhos
Único.

## Estados
oculto até o foco.

## Tokens usados
`color.bg.*`, `color.fg.*`, `color.border.*`, `color.action.primary.*`, `color.feedback.*`, `color.focus.ring`.

## Exemplos
Storybook: pasta do componente. Docs Vite: nav correspondente.

## Teclado
HTML nativo ou ARIA APG. Esc fecha overlay.

## Acessibilidade
visível no :focus (2.4.1).

## Testes
Vitest em `packages/ui/test`. Addon a11y no Storybook.

## Status e changelog
Em desenvolvimento · 2026-11-08.

