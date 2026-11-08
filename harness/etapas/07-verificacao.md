# Etapa 7 — Verificação

Data: 2026-11-08

## Implementado

Comandos na raiz do monorepo, Node 26.13.0 + pnpm 12.18.0:

```bash
pnpm install
pnpm build   # turbo: tokens, ui, docs — 3/3
pnpm test    # tokens 2/2, ui 26/26
pnpm --filter docs dev  # http://localhost:5173/
```

Tabela de versões copiada para [README.md](../../monorepo/README.md) e [ESTADO.md](../ESTADO.md).

## Decisões

Nenhuma nova. Versões são as resolvidas nas etapas 0, 1, 4 e 6.

## Checklist de versões

- [x] Cada dependência direta está na última LTS ou, sem canal LTS, na última estável
- [x] Datas preenchidas nas etapas 0, 1, 4 e 6
- [x] `engines.node` = `>=26` (Active LTS do dia: 26.13.0 Lithium)
- [x] Nenhum dist-tag `next` / `canary` / `beta` / `rc`

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

## Checklist da spec

- [x] HEX oficiais intactos (teste de tokens)
- [x] Tokens proposta ainda marcados como proposta
- [x] Uma ação `primary` por contexto na docs (Button: só "Conectar")
- [x] Menta só em sucesso (Badge Online)
- [x] Ciano como sinal, sem fundo dominante
- [x] Contraste AA nos pares texto/fundo oficiais (texto claro sobre `bg`/`surface`; `bg` sobre `primary` no botão)
- [x] Foco visível (anel 2px `primary`); disabled a 40%
- [x] Assets: inventário listado; arquivos reais ausentes (`Cloudface-ID-Visual`)
- [x] Sidebar usa só bases + tokens; um `current` por menu; item é `button`, não `div`

## Pendente

Pendências permanentes desta leva:

- Publicar `@cloudface/tokens` e `@cloudface/ui` em registry
- Validar com a marca os tokens proposta e a área de proteção
- Trazer `Cloudface-ID-Visual` (logos, fontes, Möbius)
- `produção-pvc/` fora do repositório
- Compostos além do Sidebar (topbar, page header, empty state, drawer)
- `typescript-eslint` quando o `latest` aceitar TypeScript 7
- Instalar Node 26 no ambiente permanente do Mac (hoje o 22.23.4 local continua; a execução usou 26.13.0 em `/tmp/cloudface-node`)
