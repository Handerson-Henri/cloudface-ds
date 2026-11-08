# Etapa 24 — Dados e cascas baixas

Data: 2026-11-08

## Implementado

- DescriptionList (`dl`)
- FileInput, DateField, Slider (nativos estilizados)
- Rating (radio + estrela)
- ProgressCircle (SVG `progressbar`)
- AvatarGroup
- Drawer `side`: `right` | `bottom` (BottomSheet). Painel inferior com `bottom: 0` (sem isso o sheet ficava fora do viewport)
- Specs em `harness/ui/` para cada nome novo; índice em [ui/README.md](../ui/README.md)
- Vitest: 55 testes; vitrine 5173 (Modal, Switch, Combobox empty, Pagination, Menu, Drawer embaixo)

## Decisões

- Sem componente BottomSheet separado.
- DateField reusa Field + Input `type="date"`.
- Storybook em 6006: se o Vite falhar `Failed to fetch dynamically imported module` / `select.css` 404, é grafo stale — reiniciar `pnpm --filter storybook-app dev` (não é bug do componente).

## Pendente

- Tema claro, ID-Visual, publish (fora desta execução)
