# Etapa 1 — `packages/config`

Data: 2026-11-08

## Implementado

- Pacote `@cloudface/config` com `tsconfig.base.json` (`strict`, `noUncheckedIndexedAccess`, `moduleResolution` NodeNext)
- `eslint.config.js` (flat, ESLint 10) e `prettier.config.js`
- Exportações para os outros pacotes estenderem sem duplicar config
- `pnpm install` no workspace

## Decisões

| Item | Canal | Versão resolvida | Data |
|---|---|---|---|
| typescript | `latest` estável | 7.0.2 | 2026-11-08 |
| eslint | `latest` estável | 10.14.0 | 2026-11-08 |
| prettier | `latest` estável | 3.9.10 | 2026-11-08 |
| @eslint/js | `latest` estável | 10.0.1 | 2026-11-08 |
| globals | `latest` estável | 17.14.0 | 2026-11-08 |

- `typescript-eslint` `latest` é 8.72.1 e declara peer `typescript >=4.8.4 <6.1.0`. Não entra: não sustenta TypeScript 7 e o canary é pré-lançamento.
- Porta de TypeScript nesta leva: `tsc --noEmit` / `tsc` de cada pacote. ESLint ignora `*.ts` / `*.tsx` até existir um plugin estável compatível com TS 7.
- Config de Vite fica para a etapa 6.

## Pendente

- Ligar `typescript-eslint` quando o `latest` aceitar TypeScript 7
- Consumidor real do `tsconfig` (etapa 2 — tokens)
- Etapa 2 — `packages/tokens`
