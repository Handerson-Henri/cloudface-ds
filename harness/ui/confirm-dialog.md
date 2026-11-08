# ConfirmDialog

## Propósito
Confirmação destrutiva ou não. Não usar Modal genérico para apagar.

## Anatomia
container e conteúdo visível.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| open | boolean | — | visível |
| title | string | — | título |
| destructive | boolean | false | botão destructive |
| onConfirm | fn | — | confirma |
| onClose | fn | — | cancela / Esc |

## Variantes e tamanhos
default vs destructive.

## Estados
open, Esc, backdrop.

## Tokens usados
`color.bg.*`, `color.fg.*`, `color.border.*`, `color.action.primary.*`, `color.feedback.*`, `color.focus.ring`.

## Exemplos
Storybook: pasta do componente. Docs Vite: nav correspondente.

## Teclado
HTML nativo ou ARIA APG. Esc fecha overlay.

## Acessibilidade
dialog aria-modal. Esc fecha.

## Testes
Vitest em `packages/ui/test`. Addon a11y no Storybook.

## Status e changelog
Em desenvolvimento · 2026-11-08.

