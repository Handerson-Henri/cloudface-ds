# Drawer

## Propósito
Painel sobreposto. `side="right"` (padrão) ou `side="bottom"` (BottomSheet). Sem componente extra.

## API
`open`, `title`, `onClose`, `side?: 'right' | 'bottom'`, `children`.

## Teclado
| Tecla | Ação |
|---|---|
| Esc | Fecha e devolve o foco |
| Tab / Shift+Tab | Cicla no painel |

## Acessibilidade
`role="dialog"` `aria-modal`. Trap compartilhado. Backdrop `role="presentation"`. Botão Fechar acessível.

## Status
Onda 19 (trap) · onda 24 (`side`) · 2026-11-08.
