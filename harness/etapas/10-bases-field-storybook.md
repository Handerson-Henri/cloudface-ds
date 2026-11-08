# Etapa 10 — Bases, Field, Storybook (onda 2)

Data: 2026-11-08

## Implementado

- Estados da §5.2 nas bases: default, hover, `:focus-visible` (anel 2px / offset 2px via `--cf-color-focus-ring`), active/pressed, disabled com `fg.disabled`/`bg.disabled` (sem opacidade 40% genérica), loading no Button (`aria-busy`, spinner, texto “Carregando” em `.cf-sr-only`; children permanecem visíveis para a largura não colapsar), invalid e read-only no Input
- Alvo mínimo 24×24 CSS px nas bases
- Composto **Field**: Label + controle + hint/erro; `for`/`id`, `aria-describedby`, `aria-invalid`; erro com **texto e ícone**
- Badge de status: texto + ícone (1.4.1); `icon` ligado por padrão nas variantes success/warning/error
- README por componente em `harness/ui/<nome>.md` no modelo da §6 (Button e Field escritos à mão; demais gerados a partir do mesmo esqueleto). O código em `packages/ui` só aponta para o harness.
- `apps/storybook` — Storybook **10.6.6** (`@storybook/react-vite` + `@storybook/addon-a11y`), canvas `#080C10`, hierarquia Ações / Formulários / Catálogo
- Stories: Button (variantes + loading + disabled), Field (default + invalid), catálogo por categoria
- Testes: Field, Button loading e estados das bases; 31 testes UI passando
- Docs Vite permanece o site de princípios; stories cobrem o componente

## Decisões

| Item | Canal | Versão resolvida | Data |
|---|---|---|---|
| storybook | `latest` estável | 10.6.6 | 2026-11-08 |
| @storybook/react-vite | `latest` estável | 10.6.6 | 2026-11-08 |
| @storybook/addon-a11y | `latest` estável | 10.6.6 | 2026-11-08 |

- Storybook vive em `apps/storybook`, não como addon da docs Vite: dois públicos (princípios vs. API viva).
- pnpm 12: `allowBuilds.esbuild: true` em `pnpm-workspace.yaml` (`pnpm approve-builds esbuild -y`). O campo `pnpm.onlyBuiltDependencies` no `package.json` **não** é mais lido.
- Addon a11y com `parameters.a11y.test: 'error'` (falha em violações, não só aviso).
- `tsconfig` do UI exclui `**/*.stories.tsx` para o `tsc` do pacote não puxar tipos do Storybook.

## Pendente

- Uma story isolada por cada variante/estado de cada componente (hoje Button/Field isolados; o resto no catálogo)
- Axe automático no CI (hoje só no addon do Storybook)
- Onda 3: TextArea, Checkbox, Radio, Switch, Select
