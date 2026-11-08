# Topbar

## Propósito
Barra superior.

## Anatomia
`header.cf-topbar` com clusters `start` e `end`.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| start | ReactNode | — | cluster esquerdo (menu, busca) |
| end | ReactNode | — | cluster direito (ações, avatar) |

## Variantes e tamanhos
Altura 64px (`space-8` × 2). Fundo canvas.

## Estados
default, hover, focus-visible, disabled, invalid — os que se aplicam.

## Tokens usados
`color.bg.*`, `color.fg.*`, `color.border.*`, `color.action.primary.*`, `color.feedback.*`, `color.focus.ring`.

## Exemplos
Storybook: `Navegação/Topbar`.

## Teclado
HTML nativo ou ARIA APG. Esc fecha overlay.

## Acessibilidade
WCAG 2.2 AA. Sem `div` clicável.

## Testes
Vitest em `packages/ui/test`. Addon a11y no Storybook.

## Status e changelog
Em desenvolvimento · 2026-11-08 · clusters 64px, chrome canvas.
