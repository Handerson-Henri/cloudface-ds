# Etapa 0 — Base do monorepo

Data: 2026-11-08

## Implementado

- `package.json` privado, `packageManager` `pnpm@12.18.0`, `engines.node` `>=26`
- `.npmrc` com `engine-strict=true` (Node abaixo da Active LTS recusa o install)
- `pnpm-workspace.yaml` (`apps/*`, `packages/*`)
- `turbo.json` com `build` e `dev` (`dev`: `cache: false`, `persistent: true`) e `test`
- `.gitignore`
- `README.md` apontando para o harness e a regra de última LTS
- `pnpm install` na raiz: só o Turbo como dependência extra

Comandos:

```bash
node -v   # v26.13.0
pnpm -v   # 12.18.0
pnpm install
```

## Decisões

| Item | Canal | Versão resolvida | Data | Fonte |
|---|---|---|---|---|
| Node.js | Active LTS | 26.13.0 (Lithium) | 2026-11-08 | [nodejs.org/dist](https://nodejs.org/dist/index.json), [release 26.13.0](https://nodejs.org/en/blog/release/v26.13.0) |
| pnpm | `latest` estável | 12.18.0 | 2026-11-08 | `npm view pnpm version` |
| turbo | `latest` estável | 2.11.10 | 2026-11-08 | `npm view turbo version` |

- Node 22 e 24 estão em Maintenance LTS; não entram.
- O ambiente local do Mac estava em Node 22.23.4. A etapa usa Node 26.13.0 (`/tmp/cloudface-node/...`) para cumprir a regra; o Node 22 do usuário não foi substituído.
- pnpm via `npm install -g pnpm@12.18.0` no prefixo do Node 26. Corepack não vinha no tarball.
- `engine-strict=true` no `.npmrc` para o `engines.node` ter efeito.

## Pendente

- Pacotes `config`, `tokens`, `ui`, `assets` e o app `docs` (etapas 1–6)
- Instalar Node 26 no ambiente permanente do usuário (hoje só no prefixo temporário desta execução)
- Publicação no registry (fora desta leva)

Próximo passo: etapa 1 — `packages/config`.
