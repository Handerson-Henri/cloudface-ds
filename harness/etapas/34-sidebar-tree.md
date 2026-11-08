# Etapa 34 — árvore pai > filho > neto

Data: 2026-11-08

## Implementado

- `SidebarGroup` recursivo: um grupo filho pode ter os próprios filhos
- Clique no nível do meio fecha só os netos; o pai permanece aberto
- Story `Três níveis` e teste de expandir/colapsar independente
- Docs: `Estrutura > Overlay > Modal/Drawer/Popover/Menu`

## Decisões

- Mesmo composto nos três níveis. Setinha continua opt-in no raiz e automática em grupo aninhado.

## Pendente

- Publish `@cloudface/*`
- Flyout no rail colapsado
