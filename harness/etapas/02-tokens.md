# Etapa 2 — `packages/tokens`

Data: 2026-11-08

## Implementado

- `@cloudface/tokens`: `colors.ts`, `typography.ts`, `spacing.ts`, `radius.ts`, `index.ts`
- `css/variables.css` com prefixo `--cf-` e `/* proposta */` em warning, error e border
- `json/tokens.json` com o campo `status` (`oficial` | `proposta`)
- `pnpm --filter @cloudface/tokens build` (`tsc` 7.0.2)
- `pnpm --filter @cloudface/tokens test` — 2 testes Node passando (HEX oficiais + marcação proposta)

## Decisões

- `tsc` NodeNext com extensão `.js` nos reexports, estendendo `@cloudface/config/tsconfig.base.json` (prova que o config da etapa 1 é consumível).
- JSON escrito à mão, alinhado ao TS, em vez de gerador — menos ferramenta nesta leva.
- Teste lê `dist/`, `json/` e `css/` para o HEX oficial não divergir entre os três formatos.

## Pendente

- Validação da marca sobre tokens proposta (warning, error, border, escala, espaço, raio)
- Fontes binárias (etapa 3)
- Componentes (etapa 4)

Próximo passo: etapa 3 — `packages/assets`.
