# Estado do Cloudface DS

Documentação centralizada neste harness. Código em `../monorepo`.

Último registro: [etapas/36-sidebar-collapsible.md](./etapas/36-sidebar-collapsible.md) (defaultOpen true + collapsible).

Levas 0–7, ondas 0–6 (lacunas), ondas 15–18 (canvas), fechamento 19–24, ID-Visual 25. Auditoria pré-correção: [analise-visual.md](./analise-visual.md). Planos: [plano-fechamento.md](./plano-fechamento.md), [plano-tema-claro.md](./plano-tema-claro.md).

Vitrines: docs http://localhost:5173/ · Storybook http://127.0.0.1:6006/

## Versões (2026-11-08)

| Pacote / runtime | Canal | Versão | Data da consulta |
|---|---|---|---|
| Node.js | Active LTS | 26.13.0 | 2026-11-08 |
| pnpm | `latest` | 12.18.0 | 2026-11-08 |
| turbo | `latest` | 2.11.10 | 2026-11-08 |
| typescript | `latest` | 7.0.2 | 2026-11-08 |
| eslint | `latest` | 10.14.0 | 2026-11-08 |
| prettier | `latest` | 3.9.10 | 2026-11-08 |
| react | `latest` | 19.3.1 | 2026-11-08 |
| react-dom | `latest` | 19.3.1 | 2026-11-08 |
| vite | `latest` | 8.3.6 | 2026-11-08 |
| vitest | `latest` | 5.1.0 | 2026-11-08 |
| storybook | `latest` | 10.6.6 | 2026-11-08 |

## Registros

| Etapa | Arquivo |
|---|---|
| 0 Base | [etapas/00-base.md](./etapas/00-base.md) |
| 1 config | [etapas/01-config.md](./etapas/01-config.md) |
| 2 tokens | [etapas/02-tokens.md](./etapas/02-tokens.md) |
| 3 assets | [etapas/03-assets.md](./etapas/03-assets.md) |
| 4 UI bases | [etapas/04-ui-bases.md](./etapas/04-ui-bases.md) |
| 5 Sidebar | [etapas/05-sidebar.md](./etapas/05-sidebar.md) |
| 6 docs | [etapas/06-docs.md](./etapas/06-docs.md) |
| 7 verificação | [etapas/07-verificacao.md](./etapas/07-verificacao.md) |
| 8 decisões (onda 0) | [etapas/08-decisoes.md](./etapas/08-decisoes.md) |
| 9 tokens 3 camadas (onda 1) | [etapas/09-tokens-semanticos.md](./etapas/09-tokens-semanticos.md) |
| 10 bases + Field + Storybook (onda 2) | [etapas/10-bases-field-storybook.md](./etapas/10-bases-field-storybook.md) |
| 11 formulários (onda 3) | [etapas/11-formularios.md](./etapas/11-formularios.md) |
| 12 feedback (onda 4) | [etapas/12-feedback.md](./etapas/12-feedback.md) |
| 13 navegação (onda 5) | [etapas/13-navegacao.md](./etapas/13-navegacao.md) |
| 14 estrutura (onda 6) | [etapas/14-estrutura.md](./etapas/14-estrutura.md) |
| 15 vitrine | [etapas/15-vitrine.md](./etapas/15-vitrine.md) |
| 16 bases densas | [etapas/16-bases-densas.md](./etapas/16-bases-densas.md) |
| 17 formulários | [etapas/17-formularios.md](./etapas/17-formularios.md) |
| 18 app shell | [etapas/18-app-shell.md](./etapas/18-app-shell.md) |
| 19 P0 a11y | [etapas/19-p0-a11y.md](./etapas/19-p0-a11y.md) |
| 20 P1 identidade | [etapas/20-p1-identidade.md](./etapas/20-p1-identidade.md) |
| 21 P2 vitrine | [etapas/21-p2-vitrine.md](./etapas/21-p2-vitrine.md) |
| 22 tipografia/layout | [etapas/22-tipografia-layout.md](./etapas/22-tipografia-layout.md) |
| 23 popover/menu/banner | [etapas/23-popover-menu-banner.md](./etapas/23-popover-menu-banner.md) |
| 24 dados/baixas | [etapas/24-dados-baixas.md](./etapas/24-dados-baixas.md) |
| 25 ID-Visual | [etapas/25-id-visual.md](./etapas/25-id-visual.md) |
| 26 tema ADR/tokens | [etapas/26-tema-adr.md](./etapas/26-tema-adr.md) |
| 27 tema vitrines | [etapas/27-tema-vitrines.md](./etapas/27-tema-vitrines.md) |
| 28 tema auditoria | [etapas/28-tema-auditoria.md](./etapas/28-tema-auditoria.md) |
| 29 validação marca | [etapas/29-validacao-marca.md](./etapas/29-validacao-marca.md) |
| 30 forced-colors | [etapas/30-forced-colors.md](./etapas/30-forced-colors.md) |
| 31 shell visual | [etapas/31-shell-visual.md](./etapas/31-shell-visual.md) |
| 32 SidebarGroup | [etapas/32-sidebar-group.md](./etapas/32-sidebar-group.md) |
| 33 chevron opt-in | [etapas/33-sidebar-chevron.md](./etapas/33-sidebar-chevron.md) |
| 34 árvore 3 níveis | [etapas/34-sidebar-tree.md](./etapas/34-sidebar-tree.md) |
| 35 showIcon opt-in | [etapas/35-sidebar-show-icon.md](./etapas/35-sidebar-show-icon.md) |
| 36 collapsible | [etapas/36-sidebar-collapsible.md](./etapas/36-sidebar-collapsible.md) |

ADRs: [000-pilha](./decisoes/000-pilha.md), [001-acessibilidade](./decisoes/001-acessibilidade.md) (WCAG 2.2 AA), [002-tema](./decisoes/002-tema.md) (claro opt-in; `forced-colors` via cores de sistema). Contraste: [contraste.md](./contraste.md). Marca: [validacao-marca.md](./validacao-marca.md).

## Pendências abertas

- Warning/error/borda/escalas continuam **proposta** (ausentes no ID-Visual)
- Publicação `@cloudface/*`
- `prefers-color-scheme` automático (ADR 002, dark-first)
- `typescript-eslint` incompatível com TypeScript 7 (`latest` pede `<6.1.0`)
- Node 26 ainda não é o runtime padrão da máquina (local: 22.23.4)
