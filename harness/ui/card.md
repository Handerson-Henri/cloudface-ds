# Card

## Propósito
Agrupa conteúdo.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| variant | default/raised/interactive | default | Superfície |
| href | string | — | Obrigatório se interactive; renderiza `a` |

## Variantes e tamanhos
`interactive` nunca é div clicável.

## Estados
hover/active só em interactive.

## Tokens usados
`color.bg.surface`, `surface-raised`, `shadow.*`.

## Exemplos
Storybook Estrutura/Card.

## Teclado
interactive: Enter no link.

## Acessibilidade
Âncora nativa quando interactive.

## Testes
bases.test.tsx (slots).

## Status e changelog
Em desenvolvimento · 2026-11-08 · raised/interactive.
