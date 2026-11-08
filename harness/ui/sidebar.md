# Sidebar

## Propósito
Menu lateral composto.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| collapsed | boolean | false | rail de ícones |
| SidebarItem.icon | ReactNode | — | necessário no rail |
| SidebarItem.current | boolean | false | fill primary + aria-current |
| SidebarGroup.label | ReactNode | — | pai do subnível |
| SidebarGroup.icon | ReactNode | — | ícone do grupo |
| SidebarGroup.showIcon | boolean | false no raiz; true se aninhado | ícone do pai. Opt-in no raiz; nos aninhados segue o `icon` |
| SidebarGroup.showChevron | boolean | false no raiz; true se aninhado | setinha de expandir. Opt-in no pai; automática em grupo dentro de grupo |
| SidebarGroup.defaultOpen | boolean | true | cada nível nasce aberto; `false` fecha só aquele grupo |
| SidebarGroup.collapsible | boolean | true | se `false`, não clica, sem setinha, estado fixo no inicial |
| SidebarGroup.open | boolean | — | controlado |
| SidebarGroup.onOpenChange | (open: boolean) => void | — | ao expandir/recolher |

## Variantes e tamanhos
Expandido 240px; colapsado ~72px. Filhos indentados (`space-4`). `SidebarGroup` aninha até neto (pai > filho-grupo > itens).

## Estados
default, hover (tint accent), current (fill `action.primary`), collapsed, grupo aberto/fechado.

## Tokens usados
`color.bg.surface`, `color.action.primary`, `color.fg.accent`, `color.fg.muted`, `radius.md`.

## Exemplos
A própria docs Vite.

## Teclado
Tab na ordem visual.

## Acessibilidade
`nav` com rótulo. Item colapsado usa nome extraído do children. Grupo: `aria-expanded` + `role="group"` nos filhos.

## Testes
sidebar.test.tsx.

## Status e changelog
Em desenvolvimento · 2026-11-08 · `collapsible` + `defaultOpen` true.
