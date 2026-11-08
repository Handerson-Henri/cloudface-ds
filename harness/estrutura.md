# Estrutura do monorepo

A **documentação** fica neste harness. O **código** fica em [`../monorepo`](../monorepo/README.md). `apps/docs` (Vite) e `apps/storybook` são vitrines; não substituem os markdowns daqui.

## Estrutura recomendada

```
cloudface/
├── harness/               # Spec, ADRs, etapas (fonte da documentação)
├── monorepo/
│   ├── apps/
│   │   ├── docs/          # Vitrine Vite · http://localhost:5173/
│   │   └── storybook/     # Stories · http://127.0.0.1:6006/
│   └── packages/
│       ├── tokens/        # Cores, tipo, espaço (CSS vars, TS, JSON)
│       ├── ui/            # @cloudface/ui — ver harness/ui/
│       ├── assets/        # Logos, fontes, Möbius (Cloudface-ID-Visual)
│       └── config/
```

### `packages/tokens`

```
tokens/
├── src/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── index.ts
└── css/
    └── variables.css
```

### `packages/ui`

Uma pasta por componente (`tsx` + `css` + `stories`). Índice da spec: [ui/README.md](./ui/README.md). Export público: `packages/ui/src/index.ts`.

Famílias (ondas 19–24): tipografia (Heading, Text, Code, Kbd), layout (Stack, Cluster, Container), overlay (Popover, Menu, Banner), dados (DescriptionList, FileInput, DateField, Slider, Rating, ProgressCircle, AvatarGroup). Drawer `side="bottom"` cobre BottomSheet.

### `packages/assets`

`logos/`, `fonts/` e `movimento/` copiados na [etapa 25](./etapas/25-id-visual.md). `produção-pvc/` e `referencias/` ficam fora.

## Instalação

Requisitos: Node.js Active LTS (26.13.0 nesta execução) e pnpm 12. Versões em [ESTADO.md](./ESTADO.md).

```bash
pnpm install
pnpm --filter docs dev              # http://localhost:5173/
pnpm --filter storybook-app dev     # http://127.0.0.1:6006/
pnpm build
```

### `pnpm-workspace.yaml`

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

## Uso em um app

Os comandos abaixo são **ilustrativos**. Não existe pacote publicado no registry. No workspace local, use `workspace:*`.

```bash
pnpm add @cloudface/tokens @cloudface/ui
```

```tsx
import '@cloudface/tokens/css/variables.css';
import { Button } from '@cloudface/ui';

export default function App() {
  return <Button variant="primary">Conectar</Button>;
}
```
