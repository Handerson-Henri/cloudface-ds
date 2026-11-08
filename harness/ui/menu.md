# Menu

## Propósito
APG `menu`/`menuitem` sobre Popover.

## API
`label`, `items: { id, label, onSelect }[]`.

## Teclado
| Tecla | Ação |
|---|---|
| Seta baixo/cima | Move o item |
| Home / End | Primeiro / último |
| Enter / Espaço | Seleciona e fecha |
| Esc | Fecha |

## Acessibilidade
Trigger `aria-haspopup="menu"` `aria-expanded`. Itens `role="menuitem"` com roving tabindex.

## Status
Onda 23 · 2026-11-08.
