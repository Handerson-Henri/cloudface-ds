# RadioGroup

## Propósito
Grupo de radios com name compartilhado.

## Anatomia
container e conteúdo visível.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| legend | string | — | legend |
| name | string | — | name injetado nos filhos |
| error | string | — | Erro |

## Variantes e tamanhos
Único layout.

## Estados
default, invalid.

## Tokens usados
`color.bg.*`, `color.fg.*`, `color.border.*`, `color.action.primary.*`, `color.feedback.*`, `color.focus.ring`.

## Exemplos
Storybook: pasta do componente. Docs Vite: nav correspondente.

## Teclado
HTML nativo ou ARIA APG. Esc fecha overlay.

## Acessibilidade
fieldset + radios nativos.

## Testes
Vitest em `packages/ui/test`. Addon a11y no Storybook.

## Status e changelog
Em desenvolvimento · 2026-11-08.

