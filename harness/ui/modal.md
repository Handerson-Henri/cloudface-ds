# Modal

## Propósito
Diálogo modal. Esc, Fechar e clique no backdrop fecham.

## API
`open`, `title`, `onClose`, `hideClose?`, `children`. Título com `useId`.

## Teclado
| Tecla | Ação |
|---|---|
| Esc | Fecha e devolve o foco |
| Tab / Shift+Tab | Cicla dentro do dialog |

## Acessibilidade
`role="dialog"` `aria-modal`. Focus trap, lock de scroll, restore. Backdrop `role="presentation"`. WCAG 2.2 AA.

## Status
Onda 19 · 2026-11-08.
