# SearchField

## Propósito
Busca: Field + input type=search + ícone.

## Anatomia
container e conteúdo visível.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| id | string | — | id |
| label | ReactNode | — | rótulo |
| optional | boolean | false | marca opcional |

## Variantes e tamanhos
Herdado do Input (sm/md/lg).

## Estados
default, invalid, disabled.

## Tokens usados
`color.bg.*`, `color.fg.*`, `color.border.*`, `color.action.primary.*`, `color.feedback.*`, `color.focus.ring`.

## Exemplos
Storybook: pasta do componente. Docs Vite: nav correspondente.

## Teclado
HTML nativo ou ARIA APG. Esc fecha overlay.

## Acessibilidade
label visível; type=search.

## Testes
Vitest em `packages/ui/test`. Addon a11y no Storybook.

## Status e changelog
Em desenvolvimento · 2026-11-08.

