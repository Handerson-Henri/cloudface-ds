# Etapa 5 — Sidebar

Data: 2026-11-08

## Implementado

- `packages/ui/src/sidebar/`: `Sidebar`, `SidebarHeader`, `SidebarSection`, `SidebarItem`, `SidebarFooter`
- Casca `nav` 240px (`space.12` × 5), fundo `surface`, borda `border`
- Item = `Button` `ghost` `sm` (ou `a` se `href`); `current` → `aria-current="page"` e texto `primary`
- Seção = `Label` sem `htmlFor`
- Header = texto "Cloudface" até existir o mark
- Footer = `Badge` de status
- Testes: nav, Button+Badge no item ativo, Label visual, CSS sem HEX — 26 testes no pacote UI

## Decisões

- Composto não criou token novo. Hover do item: texto `primary-light`, fundo permanece `surface`.
- Sem acoplamento a router: `current` / `onClick` / `href`.
- Um `current` por menu é contrato do consumidor, não um contexto React.

## Pendente

- Topbar, page header, empty state, drawer, colapso — fora desta leva
- Ícone da marca no header quando `Cloudface-ID-Visual` chegar
- App de docs (etapa 6)
