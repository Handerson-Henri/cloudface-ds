# Etapa 4 — UI bases

Data: 2026-11-08

## Implementado

- `@cloudface/ui` com Button (5 variantes × 3 tamanhos), Input (padrão/focus/error/disabled), Card (+ Header/Content/Footer), Badge (4 variantes, fundo 15% via `color-mix`), Label (`htmlFor` + `required`)
- CSS por componente, só `var(--cf-*)`
- Foco: anel 2px `primary`. Disabled: `opacity: 0.4`
- `pnpm --filter @cloudface/ui build` (`tsc` + cópia de CSS)
- `pnpm --filter @cloudface/ui test` — 20 testes passando

## Decisões

| Item | Canal | Versão resolvida | Data |
|---|---|---|---|
| react | `latest` estável | 19.3.1 | 2026-11-08 |
| react-dom | `latest` estável | 19.3.1 | 2026-11-08 |
| vitest | `latest` estável | 5.1.0 | 2026-11-08 |
| @testing-library/react | `latest` estável | 16.3.3 | 2026-11-08 |
| vite (peer do Vitest) | `latest` estável | 8.3.6 | 2026-11-08 |

- Test runner: Vitest, não o `node:test`, porque a UI é React.
- CSS ao lado do TSX, sem CSS modules, para o `tsc` não precisar de bundler. `scripts/copy-css.mjs` leva o CSS ao `dist/`.
- `moduleResolution: bundler` só neste pacote (override do NodeNext do config).
- Label: `htmlFor` opcional; `required` renderiza `*` na cor `primary`.

## Pendente

- Compostos (Sidebar) — etapa 5
- Tema claro, Modal, Toast, Table — fora desta leva
- Storybook — a docs na etapa 6 é a vitrine
