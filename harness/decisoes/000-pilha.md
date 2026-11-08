# ADR 000 — Pilha técnica

Status: aceito  
Data: 2026-11-08

## Decisão

- **Runtime:** Node.js Active LTS (26.x Lithium nesta data)
- **Pacotes:** última estável `latest` (sem canary/beta/rc)
- **Monorepo:** pnpm workspaces + Turbo
- **UI:** React + TypeScript
- **Estilo:** CSS variables de `@cloudface/tokens` (`var(--cf-*)`). Sem Tailwind.
- **Docs de princípios:** Vite em `apps/docs`
- **Docs de componente:** Storybook (última estável) em `apps/storybook`

## Contexto

[harness/analise-lacunas.md](../analise-lacunas.md) §7 pedia confirmar a pilha. [harness/estrutura.md](../estrutura.md) sugeria React/pnpm/Turbo; Tailwind era só sugestão. O monorepo 0–7 já implementou CSS variables.

## Consequências

Componentes não usam HEX. Tokens em três camadas (onda 1). Publicação no registry continua fora de escopo.
