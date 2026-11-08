# Plano de fechamento Cloudface DS

Fecha o que o harness ainda lista como aberto: lacunas P0–P2 da [auditoria visual](./analise-visual.md), famílias da [reanálise](./analise-componentes.md) §4 e pendências do [ESTADO](./ESTADO.md) que dão para implementar sem reabrir ADRs.

O [plano-implementacao.md](./plano-implementacao.md) (etapas 0–7) **não** se reescreve. Diário: [etapas/19-p0-a11y.md](./etapas/19-p0-a11y.md) em diante.

## Fora desta execução

- Tema claro e `forced-colors` ([ADR 002](./decisoes/002-tema.md))
- Publicação de registry
- Pacote `Cloudface-ID-Visual` (não inventar logos/Möbius)
- CultBR (código, tokens, marcas)
- `typescript-eslint` (incompatível com TypeScript 7)
- Node 26 como runtime padrão da máquina

## Regras permanentes

- Última Active LTS / dist-tag `latest` estável
- CSS só com `--cf-*`. Sem Tailwind
- HTML nativo primeiro ([ADR 001](./decisoes/001-acessibilidade.md)): FileInput, DateField e Slider são `input` estilizado; Select continua nativo (Combobox é a lista buscável)
- BottomSheet = `Drawer` com `side="bottom"`
- Spec em `harness/ui/`; código em `monorepo/packages/ui`; vitrine em `apps/docs`

## Ondas

| Onda | Etapa | Entrega |
|---|---|---|
| 19 P0 | [19-p0-a11y.md](./etapas/19-p0-a11y.md) | Overlay, focus trap, Switch, Combobox APG, Checkbox indeterminate |
| 20 P1 | [20-p1-identidade.md](./etapas/20-p1-identidade.md) | Separadores, Alert, Pagination, Table, ícones, Tooltip, Sidebar rail, Tabs, Select, Field, Toast, LinkButton |
| 21 P2 | [21-p2-vitrine.md](./etapas/21-p2-vitrine.md) | Cascas, `className` nos roots, matriz na vitrine, tokens de tipo/espaço |
| 22 Tipo/layout | [22-tipografia-layout.md](./etapas/22-tipografia-layout.md) | Heading, Text, Code, Kbd, Stack, Cluster, Container |
| 23 Overlay | [23-popover-menu-banner.md](./etapas/23-popover-menu-banner.md) | Popover, Menu APG, Banner |
| 24 Baixas | [24-dados-baixas.md](./etapas/24-dados-baixas.md) | DescriptionList, FileInput, DateField, Slider, Rating, ProgressCircle, AvatarGroup, Drawer `side` |

## Critério por onda

1. Código + CSS `--cf-*` + export
2. Story isolada e página na vitrine
3. Spec em `harness/ui/` (novos) ou spec preenchida (P0/P1)
4. Vitest da pasta tocada
5. Registro Implementado / Decisões / Pendente
