# Etapa 32 — SidebarGroup (subnível)

Data: 2026-11-08

## Implementado

- `SidebarGroup`: pai com chevron, `aria-expanded`, painel `role="group"`
- Filhos indentados; abre se algum item está `current`
- Rail colapsado: só o ícone do pai; se um filho é current, o pai recebe `aria-current`
- Clique no pai colapsado pede abertura (`onOpenChange(true)`); docs reexpande o menu
- Docs: cada seção do nav é um grupo
- Story `Nested` e teste de abrir/fechar

## Decisões

- Um subnível (disclosure), não treeview APG.
- Sem flyout no rail colapsado nesta etapa.

## Pendente

- Publish `@cloudface/*`
- Flyout dos filhos no rail colapsado
