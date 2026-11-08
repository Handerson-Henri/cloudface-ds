# Input

## Propósito
Campo de texto. Use com Field.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| size | sm/md/lg | md | Altura 32/40/48. Substitui o `size` HTML. |
| error | string | — | Borda error + aria-invalid |

## Variantes e tamanhos
sm/md/lg alinhados ao Button.

## Estados
default, focus-visible, disabled, invalid, read-only (dashed).

## Tokens usados
`color.bg.surface`, `color.border.control`, `color.feedback.error`, `color.focus.ring`.

## Exemplos
Storybook Formulários/Input.

## Teclado
Nativo.

## Acessibilidade
Sempre com Label/Field.

## Testes
bases.test.tsx + size em extras.

## Status e changelog
Em desenvolvimento · 2026-11-08 · tamanhos.
