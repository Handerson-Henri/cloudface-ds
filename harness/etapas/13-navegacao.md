# Etapa 13 — Navegação (onda 5)

Data: 2026-11-08

## Implementado

- **Sidebar** revisado: `current` não é só cor — `aria-current="page"`, peso 600 e barra inset 2px em `action.primary` (`.cf-sidebar-item--current`)
- **Tabs**: `tablist`/`tab`/`tabpanel`, roving tabindex, setas esquerda/direita (APG)
- **Breadcrumbs**: `nav` + `aria-current="page"` no último item
- **Pagination**: `nav` + `aria-current="page"` na página visível; Anterior/Próxima são Button
- **Topbar**: `header` com slots `start`/`end` (marca + ações)
- **IconButton**: Button ghost com `aria-label` obrigatório (ação, não navegação)
- **LinkButton**: `a` com visual de Button (navegação)

Stories no catálogo `Navegação`. Teste: Tabs marca `aria-selected`.

## Decisões

- Topbar é `header`, não `nav`: o landmark de navegação fica nos filhos (Breadcrumbs, Pagination, links). Evita dois `nav` aninhados sem nome.
- SidebarItem continua Button ghost (ação) ou `a` quando há `href`. Um `current` por menu continua regra de produto, não de API.
- Tabs só setas horizontais nesta leva (orientação default APG). Home/End e orientação vertical ficam para depois.

## Pendente

- Home/End em Tabs; Tabs verticais
- Skip link no Topbar
- Onda 6: estrutura
