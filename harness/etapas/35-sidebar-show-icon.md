# Etapa 35 — ícone do pai opt-in (default off)

Data: 2026-11-08

## Implementado

- `SidebarGroup.showIcon`: padrão `false` no raiz; `true` automático se o grupo está aninhado
- Sem a prop, o pai principal não mostra ícone mesmo com `icon` passado
- Filhos e grupos aninhados continuam com ícone quando `icon` é passado
- Independente de `showChevron`
- Stories `Nested` (pai sem ícone) e `Pai com ícone` (`showIcon`)

## Decisões

- Default invertido em relação ao rascunho anterior: o pai nasce sem ícone.

## Pendente

- Publish `@cloudface/*`
- Flyout no rail colapsado
