# Etapa 33 — chevron opt-in e ícones nos filhos

Data: 2026-11-08

## Implementado

- `SidebarGroup.showChevron`: padrão `false` no raiz; `true` automático se o grupo está aninhado
- Clique no pai continua abrindo/fechando sem a setinha
- `SidebarItem.icon` restaurado nos sub-itens da docs
- Stories `Nested` / `NestedChevron` / `NestedDeep` e testes cobrindo os três casos

## Decisões

- Opt-in no pai; setinha só é automática no segundo nível (grupo dentro de grupo).

## Pendente

- Publish `@cloudface/*`
- Flyout dos filhos no rail colapsado
