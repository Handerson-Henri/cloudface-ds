# Cloudface

Monorepo do design system Cloudface.

A documentação (spec, ADRs, etapas, componentes) vive em [`../harness`](../harness/README.md). Este repositório é o código.

## Versões

Todo runtime, ferramenta e pacote instalado ou indicado usa a **última LTS** no dia da etapa. Sem canal LTS, usa a última estável (`latest`). Current, odd, canary, beta e rc ficam de fora.

A frase "Node.js 20 ou mais recente" do harness fica subordinada a esta regra: vale a Active LTS mais nova. Consulta de 2026-11-08: **Node.js 26** (Lithium, `26.13.0`).

Tabela completa: [harness/ESTADO.md](../harness/ESTADO.md). Registros por etapa: [harness/etapas](../harness/etapas).

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

## Requisitos

- Node.js 26 (Active LTS)
- pnpm 12.18.0

```bash
pnpm install
pnpm --filter docs dev
pnpm --filter storybook-app dev
pnpm build
```

## Pacotes

| Pacote | Nome |
|---|---|
| tokens | `@cloudface/tokens` |
| ui | `@cloudface/ui` |
| assets | `@cloudface/assets` |
| config | `@cloudface/config` |
| docs | `docs` |
| storybook | `storybook-app` |
