# PageHeader

## Propósito
Cabeçalho de página: título + crumbs + ações.

## Anatomia
container e conteúdo visível.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| title | string | — | h1 Sora |
| crumbs | item[] | — | Breadcrumbs |
| actions | ReactNode | — | slot |

## Variantes e tamanhos
Único.

## Estados
default.

## Tokens usados
`color.bg.*`, `color.fg.*`, `color.border.*`, `color.action.primary.*`, `color.feedback.*`, `color.focus.ring`.

## Exemplos
Storybook: pasta do componente. Docs Vite: nav correspondente.

## Teclado
HTML nativo ou ARIA APG. Esc fecha overlay.

## Acessibilidade
um h1 por página.

## Testes
Vitest em `packages/ui/test`. Addon a11y no Storybook.

## Status e changelog
Em desenvolvimento · 2026-11-08.

