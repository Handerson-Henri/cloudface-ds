# Plano de implementação Cloudface

Implementação do design system descrito neste harness, na pasta `monorepo/` do workspace. A spec vive aqui; o código ainda não.

Fonte da spec:

| Arquivo | Papel |
|---|---|
| [README.md](./README.md) | Princípios e índice |
| [tokens.md](./tokens.md) | Paleta, tipografia, espaçamento, raios |
| [componentes.md](./componentes.md) | Bases (Button, Input, Card, Badge, Label) e composto Sidebar |
| [identidade.md](./identidade.md) | Logos, Möbius, guidelines |
| [estrutura.md](./estrutura.md) | Layout do monorepo e instalação |

O diagrama de [estrutura.md](./estrutura.md) usa a raiz `cloudface/`. A implementação usa a pasta que já existe: `../monorepo/`.

---

## Estado atual

**Harness.** Spec completa do design system Cloudface: princípios (escuro por padrão, ciano como sinal, menta como positivo, precisão, movimento contínuo), tokens, componentes, identidade e estrutura alvo.

**Monorepo.** Pasta vazia. Sem `package.json`, workspace, pacotes ou app de docs.

**Lacuna de assets.** O pacote `Cloudface-ID-Visual` (logos, fontes, SVGs Möbius, `IDENTIDADE_VISUAL.md`, `produção-pvc/`) não está neste workspace. A etapa 3 segue com placeholders até o pacote chegar. Tokens marcados como **proposta** em [tokens.md](./tokens.md) (`warning`, `error`, `border`, escala tipográfica, espaçamento, raios) entram na versão 0 comentados como não validados pela marca.

---

## Regra permanente de versões

Todo runtime, ferramenta e pacote **instalado ou indicado** usa a última LTS disponível no momento da etapa. Nenhum número de versão é congelado neste documento.

A frase "Node.js 20 ou mais recente" de [estrutura.md](./estrutura.md) fica subordinada a esta regra: na implementação vale a **Active LTS mais nova**, conferida no [calendário oficial do Node](https://nodejs.org/en/about/previous-releases) no dia da etapa. Uma LTS anterior, ainda em maintenance, não entra.

Como aplicar:

| Tipo | Canal | Entra | Fica de fora |
|---|---|---|---|
| Runtime / ferramenta com LTS publicada (Node e o que mais documentar LTS) | Active LTS mais recente | Major LTS do dia | Current, odd, pré-lançamento, LTS em maintenance |
| Pacote npm sem dist-tag LTS (React, Vite, TypeScript, Turbo, pnpm, ESLint, Prettier, test runner) | Dist-tag `latest` | Última estável | `next`, `canary`, `beta`, `rc` |
| Subdependência quando a escolha for nossa | Mesmo critério | Última LTS ou última estável | Pré-lançamento |

Cada etapa que adiciona dependência registra o número resolvido e a data da consulta na tabela da própria etapa. Sem consulta no dia, a etapa não fecha.

---

## Decisões desta leva

- React + TypeScript, como nos exemplos `.tsx` da spec.
- Estilo via CSS variables de `@cloudface/tokens` (prefixo `--cf-`). Sem Tailwind.
- App de docs em Vite + React, alinhado a `apps/docs` e ao comando `pnpm --filter docs dev`.
- UI em duas camadas: **base** (Button, Input, Card, Badge, Label) e **composto** (Sidebar nesta leva). Composto só monta bases + tokens; não cria cor, tipo ou raio novos. Se faltar um átomo, ele nasce na base antes do composto.
- `produção-pvc/` fica só documentado em assets; não vira código.
- Pacotes internos: `@cloudface/tokens`, `@cloudface/ui`, `@cloudface/assets`, `@cloudface/config`.
- Publicação no registry (`pnpm add @cloudface/tokens @cloudface/ui`) fica fora desta leva.
- Validação formal da marca (tokens proposta, área de proteção, tamanho mínimo) fica fora desta leva.

```
packages/config  →  packages/tokens  →  packages/ui  →  apps/docs
                         ↓                  ↑
                 packages/assets  ──────────┘
```

---

## Etapa 0 — Base do monorepo

**Objetivo.** Deixar `../monorepo/` instalável, com workspace pnpm e Turbo, sem pacotes de produto ainda.

**Consulta de versões (preencher no dia):**

| Item | Canal | Versão resolvida | Data |
|---|---|---|---|
| Node.js | Active LTS | 26.13.0 | 2026-11-08 |
| pnpm | `latest` estável | 12.18.0 | 2026-11-08 |
| turbo | `latest` estável | 2.11.10 | 2026-11-08 |

**Arquivos**

- `../monorepo/.gitignore`
- `../monorepo/package.json` — `private: true`, `packageManager` com a versão resolvida do pnpm, `engines.node` na major da Active LTS, scripts `build` e `dev` via Turbo
- `../monorepo/pnpm-workspace.yaml`

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

- `../monorepo/turbo.json` — pipelines `build` e `dev` (`dev` com `cache: false`, `persistent: true`)
- `../monorepo/README.md` — aponta para este harness como fonte da spec e repete a regra de última LTS

**Critério de pronto**

- `node -v` e `pnpm -v` batem com a tabela da etapa.
- `pnpm install` na raiz conclui sem pacotes extras além do Turbo.
- `engines` recusa Node abaixo da Active LTS do dia.
- README do monorepo cita a regra de versões e o harness.

**Fora**

- Pacotes `tokens`, `ui`, `assets`, `config`.
- App `docs`.
- Instalar pnpm via `npm install -g pnpm` se o corepack ou o instalador oficial já entregar a última estável.

---

## Etapa 1 — `packages/config`

**Objetivo.** TypeScript strict, ESLint e Prettier compartilhados. Os outros pacotes estendem isso.

**Consulta de versões (preencher no dia):**

| Item | Canal | Versão resolvida | Data |
|---|---|---|---|
| typescript | `latest` estável | 7.0.2 | 2026-11-08 |
| eslint | `latest` estável | 10.14.0 | 2026-11-08 |
| prettier | `latest` estável | 3.9.10 | 2026-11-08 |

**Arquivos**

- `packages/config/package.json` — nome `@cloudface/config`
- `packages/config/tsconfig.base.json` — `strict`, `noUncheckedIndexedAccess`, `moduleResolution` alinhado ao TypeScript resolvido
- `packages/config/eslint.config.js` (ou o formato que a última estável do ESLint exigir)
- `packages/config/prettier.config.js`

**Critério de pronto**

- Versões da tabela conferidas no dia.
- Um pacote consumidor consegue estender o `tsconfig` e rodar lint/format sem config local duplicada.
- Sem plugins experimentais ou dist-tags de pré-lançamento.

**Fora**

- Regras de produto (tokens, UI, identidade).
- Config de Vite (entra na etapa 6).

---

## Etapa 2 — `packages/tokens`

**Objetivo.** Publicar internamente cores, tipografia, espaçamento e raios em TypeScript, CSS variables e JSON, espelhando [tokens.md](./tokens.md).

**Arquivos**

- `packages/tokens/package.json` — nome `@cloudface/tokens`, export `./css/variables.css` e `./json`
- `packages/tokens/src/colors.ts`
- `packages/tokens/src/typography.ts`
- `packages/tokens/src/spacing.ts`
- `packages/tokens/src/radius.ts` (o `index.ts` da spec agrega; o raio tem arquivo próprio para ficar explícito)
- `packages/tokens/src/index.ts`
- `packages/tokens/css/variables.css`
- `packages/tokens/json/tokens.json` (ou gerado no build a partir do TS)
- Teste que confere os HEX oficiais e marca proposta

**Valores oficiais (obrigatórios, sem alteração)**

| Token | HEX |
|---|---|
| `color.bg` | `#080C10` |
| `color.surface` | `#0C141C` |
| `color.text` | `#EDF5FA` |
| `color.text-muted` | `#A2B3BF` |
| `color.primary` | `#00C2FF` |
| `color.primary-light` | `#69DCFF` |
| `color.success` | `#8DF1C4` |
| `color.brand-deep` | `#06279E` |

Gradiente de marca: `linear-gradient(90deg, #00C2FF 0%, #06279E 100%)`.

**Valores proposta (versão 0, comentados no código e no JSON)**

| Token | Valor |
|---|---|
| `color.warning` | `#FFC56B` |
| `color.error` | `#FF6B7A` |
| `color.border` | `#1A2632` |
| `text.xs` … `text.3xl` | escala de [tokens.md](./tokens.md) |
| `space.1` … `space.12` | base 4px |
| `radius.sm` … `radius.full` | 4 / 8 / 12 / 9999 |

CSS variables com o bloco de [tokens.md](./tokens.md), prefixo `--cf-`, comentário `/* proposta */` em warning, error e border.

**Critério de pronto**

- Teste falha se qualquer HEX oficial divergir.
- Teste ou metadado distingue oficial de proposta.
- `pnpm --filter @cloudface/tokens build` gera JS, CSS e JSON.
- Dependências de build (TypeScript já na etapa 1) continuam na última estável.

**Fora**

- Componentes.
- Fontes binárias (etapa 3).
- Validação da marca sobre os tokens proposta.

---

## Etapa 3 — `packages/assets`

**Objetivo.** Pastas e contrato dos arquivos de [identidade.md](./identidade.md). Placeholders enquanto `Cloudface-ID-Visual` não estiver no workspace.

**Arquivos**

- `packages/assets/package.json` — nome `@cloudface/assets`
- `packages/assets/README.md` — inventário abaixo e status **aguardando Cloudface-ID-Visual**
- `packages/assets/logos/`
- `packages/assets/fonts/`
- `packages/assets/movimento/`
- CSS de `@font-face` (Sora, Manrope, DM Sans, Barlow Condensed) apontando para arquivos da marca quando existirem; até lá, fallback `sans-serif` documentado

**Inventário esperado (não inventar arquivos)**

Logos:

- `logos/Cloudface-logo-light.png`
- `logos/Cloudface-logo-dark.png`
- `logos/Cloudface-mark.svg`
- `logos/Cloudface-mark-site.svg`

Möbius (`movimento/`):

- estático: `cloudface-moebius-static-dark.svg`, `-light.svg`, `-symbol.svg`
- formação: `cloudface-moebius-formation-dark.svg`, `-light.svg`, `-symbol.svg`
- loop: `cloudface-moebius-loop-dark.svg`, `-light.svg`, `-symbol.svg`

`produção-pvc/` permanece fora do pacote de código. O README de assets registra que o material existe no pacote de identidade (painel PVC 10 mm, 150 × 50 cm) e não entra na UI.

**Guidelines a documentar, sem ampliar**

- Logo claro sobre `#080C10` ou `#0C141C`.
- Espaço livre ao redor do logo de pelo menos a altura da letra "C".
- Não distorcer, recolorir ou aplicar efeitos no logo.
- Ciano para sinal e ação; nunca como fundo dominante.
- Verde menta só para estados positivos.

**Critério de pronto**

- Pastas existem; README lista cada arquivo e o status (presente / aguardando).
- Sem SVGs ou PNGs inventados.
- Sem regra nova de área de proteção além da altura da letra "C".
- Fontes da spec nomeadas; binários só depois do pacote de identidade.

**Fora**

- Copiar `produção-pvc/` para o monorepo.
- Publicar as fontes em CDN própria.

**Desbloqueio.** Quando `Cloudface-ID-Visual` chegar, copiar `logos/`, `fonts/` e `movimento/` para `packages/assets/` e atualizar o status no README. Sem essa pasta, a etapa 3 fecha com placeholders.

---

## Etapa 4 — `packages/ui`

**Objetivo.** Os cinco componentes **base** de [componentes.md](./componentes.md), no tema escuro, consumindo `@cloudface/tokens`. Compostos entram na etapa 5.

**Consulta de versões (preencher no dia):**

| Item | Canal | Versão resolvida | Data |
|---|---|---|---|
| react | `latest` estável | 19.3.1 | 2026-11-08 |
| react-dom | `latest` estável | 19.3.1 | 2026-11-08 |
| test runner (vitest) | `latest` estável | 5.1.0 | 2026-11-08 |

**Arquivos**

```
packages/ui/
└── src/
    ├── button/
    ├── input/
    ├── card/
    ├── badge/
    ├── label/
    └── index.ts
```

Estilo por CSS modules ou CSS por componente, sempre via `var(--cf-*)`. Sem Tailwind.

**Contrato**

Button:

- Variantes: `primary` (fundo `primary`, texto `bg`; uma por contexto), `secondary` (fundo `surface`, texto `text`), `outline` (borda `primary`, fundo transparente), `ghost` (sem fundo nem borda, texto `text-muted`), `destructive` (fundo `error`).
- Tamanhos: `sm` 32px, `md` 40px (padrão), `lg` 48px.
- Estados: hover `primary-light`, foco anel 2px `primary`, desabilitado 40% de opacidade.

Input:

- Padrão: fundo `surface`, borda `border`, texto `text`.
- `focus`: borda e anel `primary`.
- `error`: borda e mensagem em `error`.
- `disabled`: 40% de opacidade, `cursor: not-allowed`.

Card: `Card`, `CardHeader`, `CardContent`, `CardFooter`. Fundo `surface`, borda `border`, raio `radius.lg`.

Badge: `default` / `success` / `warning` / `error`. Fundo da cor a 15% de opacidade, texto na cor cheia.

Label: Manrope, `text.sm`, peso 500, cor `text`. Sempre `htmlFor`. Obrigatório: `*` em `primary`.

Acessibilidade: contraste AA, foco visível, teclado em tudo que é interativo.

**Critério de pronto**

- Versões da tabela conferidas no dia.
- Testes de render cobrem cada variante e tamanho do Button, os quatro estados do Input, as quatro variantes do Badge, o Card composto e o Label com `htmlFor`.
- `pnpm --filter @cloudface/ui build` exporta o `index`.
- Nenhum valor de cor hardcoded fora das CSS variables.

**Fora**

- Novos componentes (Modal, Toast, Table, etc.).
- Tema claro.
- Storybook separado (o app de docs na etapa 6 cumpre o papel de vitrine).
- Compostos (Sidebar e qualquer outro): etapa 5.

---

## Etapa 5 — Compostos (`Sidebar`)

**Objetivo.** Primeiro componente composto: menu lateral montado só com bases da etapa 4, tokens e assets. Contrato em [componentes.md](./componentes.md#sidebar).

**Regra.** Composto não tem paleta própria. Item = `Button` `ghost`; contagem e saúde = `Badge`; título de seção = `Label`; casca = superfície `Card` (`surface` + `border`). Sem HEX, sem ciano de fundo, sem átomo novo escondido no Sidebar.

**Arquivos**

```
packages/ui/src/sidebar/
├── sidebar.tsx          # nav + casca
├── sidebar-header.tsx
├── sidebar-section.tsx
├── sidebar-item.tsx
├── sidebar-footer.tsx
└── index.ts
```

Exportar as peças no `index` de `@cloudface/ui`.

**Contrato**

- `Sidebar`: `nav` com rótulo acessível, fundo `surface`, borda interna `border`, largura 240px (`space.12` × 5).
- `SidebarHeader`: símbolo da marca quando o asset existir; senão o nome em `font.heading`, sem PNG inventado.
- `SidebarSection`: título do grupo com a tipografia do `Label` (`text.sm`, peso 500, Manrope, `text`); sem `htmlFor`, porque não há campo.
- `SidebarItem`: `Button` `ghost` `sm`; estado atual com texto `primary` e `aria-current="page"`; no máximo um `current` por `Sidebar`; `Badge` opcional à direita (`default` para contagem, `success`/`error` para saúde).
- Hover do item: texto `primary-light`, fundo permanece `surface`.
- `SidebarFooter`: `Badge` de status (`success` Online / `error` Offline).
- Teclado percorre os itens na ordem visual; item não é `div` clicável.

**Exemplo alvo**

```tsx
<Sidebar>
  <SidebarHeader>Cloudface</SidebarHeader>
  <SidebarSection>
    <Label>Infra</Label>
    <SidebarItem current>
      Servidores <Badge>3</Badge>
    </SidebarItem>
    <SidebarItem>Logs</SidebarItem>
  </SidebarSection>
  <SidebarFooter>
    <Badge variant="success">Online</Badge>
  </SidebarFooter>
</Sidebar>
```

**Critério de pronto**

- Teste de composição: o item ativo renderiza um `Button` e um `Badge`; não há estilos de cor fora de `var(--cf-*)`.
- Teste a11y: `nav` presente, `aria-current` no item atual, foco visível no item.
- Uma ação atual por Sidebar; menta só no Badge de sucesso do footer ou de saúde; ciano só como sinal do item ativo/hover.
- `pnpm --filter @cloudface/ui build` continua exportando bases e o composto.

**Fora**

- Topbar, page header, empty state, drawer mobile, colapso do menu.
- Ícones customizados além do símbolo da marca (placeholder de texto até os assets existirem).
- Roteador: `SidebarItem` recebe `current` / `onClick` / `href`; não acopla a um router nesta leva.

---

## Etapa 6 — `apps/docs`

**Objetivo.** Site de documentação em modo desenvolvimento com `pnpm --filter docs dev`, consumindo `@cloudface/tokens` e `@cloudface/ui`.

**Consulta de versões (preencher no dia):**

| Item | Canal | Versão resolvida | Data |
|---|---|---|---|
| vite | `latest` estável | 8.3.6 | 2026-11-08 |
| react / react-dom | mesma estável da etapa 4 | 19.3.1 | 2026-11-08 |

**Páginas**

- Princípios (os cinco de [README.md](./README.md))
- Tokens (oficial vs proposta, CSS variables, tipografia, espaço, raio)
- Identidade (logos quando existirem, Möbius, guidelines)
- Button, Input, Card, Badge, Label ao vivo, com as variantes da spec
- Sidebar ao vivo, composto pelas bases (item = Button ghost, contagem = Badge, seção = Label)

Uso alvo, igual a [estrutura.md](./estrutura.md):

```tsx
import '@cloudface/tokens/css/variables.css';
import { Button } from '@cloudface/ui';

export default function App() {
  return <Button variant="primary">Conectar</Button>;
}
```

**Critério de pronto**

- Versões da tabela conferidas no dia.
- Fundo da docs em `bg` / `surface`; uma ação `primary` por contexto de demo.
- Ciano não vira fundo dominante; menta só em Badge/estado de sucesso.
- Placeholders de logo não inventam marca.

**Fora**

- Deploy da docs.
- Busca, i18n, versão de pacote publicada.

---

## Etapa 7 — Verificação

**Objetivo.** Fechar a leva com build, versões e spec cruzados.

**Comandos**

```bash
pnpm install
pnpm build
pnpm --filter docs dev
```

**Checklist de versões**

- Cada dependência direta está na última LTS ou, sem canal LTS, na última estável.
- Data da consulta preenchida nas tabelas das etapas 0, 1, 4 e 6.
- `engines.node` = Active LTS do dia.
- Nenhum dist-tag `next` / `canary` / `beta` / `rc`.

**Checklist da spec**

- HEX oficiais intactos.
- Tokens proposta ainda marcados como proposta.
- Uma ação `primary` por contexto.
- Menta só em sucesso.
- Ciano como sinal, sem fundo dominante.
- Contraste AA nos pares texto/fundo oficiais (`text` sobre `bg` e `surface`, `text-muted` sobre `bg` e `surface`, `bg` sobre `primary` no botão).
- Foco visível (anel 2px `primary`); disabled a 40%.
- Assets: inventário listado; arquivos reais só se `Cloudface-ID-Visual` tiver chegado.
- Sidebar usa só bases + tokens; um `current` por menu; item não é `div` clicável.

**Critério de pronto**

- `pnpm build` passa.
- Docs sobe com `pnpm --filter docs dev`.
- As duas checklists acima estão preenchidas.

**Fora desta leva**

- Publicar `@cloudface/tokens` e `@cloudface/ui` em registry.
- Validar com a marca os tokens proposta e as guidelines de área de proteção.
- Trazer `produção-pvc/` para o repositório.
- Compostos além do Sidebar (topbar, page header, empty state, drawer).

---

## Ordem e dependências

```
0 Base
  → 1 config
      → 2 tokens
      → 3 assets          (paralela a 2; fecha com placeholders)
          → 4 ui bases    (tokens obrigatório)
              → 5 Sidebar (composto das bases; assets desejável no header)
                  → 6 docs
                      → 7 verificação
```

Etapas 2 e 3 podem andar juntas depois da 1. A etapa 4 espera a 2. A 5 espera a 4. A 6 espera a 5. A 7 espera todas.

---

## Registro de versões (preencher na execução)

Copiar para o README do monorepo ao fechar a etapa 7.

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
| test runner (vitest) | `latest` | 5.1.0 | 2026-11-08 |
