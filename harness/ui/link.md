# Link

## Propósito
Navegação de texto. Não usar para ação (Button) nem chrome de botão (LinkButton).

## Anatomia
container e conteúdo visível.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| href | string | — | Destino |

## Variantes e tamanhos
Único visual: ciano + sublinhado (1.4.1).

## Estados
default, hover, focus-visible.

## Tokens usados
`color.bg.*`, `color.fg.*`, `color.border.*`, `color.action.primary.*`, `color.feedback.*`, `color.focus.ring`.

## Exemplos
Storybook: pasta do componente. Docs Vite: nav correspondente.

## Teclado
HTML nativo ou ARIA APG. Esc fecha overlay.

## Acessibilidade
`a` nativo. Cor nunca é o único sinal.

## Testes
Vitest em `packages/ui/test`. Addon a11y no Storybook.

## Status e changelog
Em desenvolvimento · 2026-11-08.

