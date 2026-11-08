# Análise de lacunas — Cloudface Design System

> Guia de implementação para o time. Versão 1, 08/11/2026.
> Pasta: `/Users/hand/Documents/Mowses Sistemas/harness/`

## Como ler este documento

Cada informação aqui é de um destes tipos:

| Marcação | Significado |
|---|---|
| **Oficial** | Vem do pacote `Cloudface-ID-Visual` (`IDENTIDADE_VISUAL.md`): 8 cores, 4 fontes, logos e símbolo Möbius. |
| **Proposta** | Definição deste design system (componentes, estados, escalas, cores de aviso/erro). Ainda precisa de validação da marca e do time. |
| **Não verificado** | Algo que os documentos descrevem, mas que não foi confirmado em código. |

**Importante (histórico 08/11/2026):** a versão 1 desta análise não inspecionou código. Baseou-se nos cinco documentos da pasta `harness`. Na mesma data o monorepo foi implementado (etapas 0–7) e, em seguida, as ondas de lacunas. Os comandos `pnpm add @cloudface/ui` continuam **ilustrativos** — não há pacote publicado. Tailwind **não** foi adotado (ADR 000). `plano-implementacao.md` entra nas fontes.

---

## 1. Visão geral da análise

### Escopo e método

- **CultBR DS:** inventário direto do código-fonte, a partir de uma cópia local (somente leitura) em `/Users/hand/Documents/cultbr/infra/workers/cultbr-ds`. O último commit local é `5872b54`, de 07/09/2026 (release v0.1.1). Não se sabe se a cópia está atualizada em relação ao GitLab da UFAL.
- **Material 3, Chakra UI, MUI, Vuetify e GOV.BR DS:** leitura da documentação pública oficial em 08/11/2026. **Não houve** análise de código-fonte nem de componentes um a um. As conclusões se limitam aos princípios descritos nas páginas citadas.
- **Design Systems Brasileiros** (enviado pelo Eduardo como referência) é um catálogo de DS nacionais, não um design system. Serve só como lista de onde procurar mais inspiração.

### Princípios úteis de cada referência

| Referência | O que aproveitar (inspiração) | Fonte |
|---|---|---|
| **Material 3** | Três camadas de tokens: *reference* (valores brutos), *system* (papéis, onde acontece o tema claro/escuro) e *component* (partes de um componente). O nome do token descreve o uso, não o valor. Especificações de componente agrupadas por estado (enabled, hover, focus, pressed, disabled). | https://m3.material.io/foundations/design-tokens/overview |
| **Chakra UI** | *Semantic tokens* que apontam para tokens base (`danger → {colors.red}`), com valor condicional por tema (`base` / `_dark`) e aninhamento (`bg`, `bg.subtle`). As "recipes" de componentes usam só tokens semânticos (`bg.subtle`, `fg`, `border`). | https://chakra-ui.com/docs/theming/semantic-tokens |
| **MUI** | Cada cor de papel tem `main`, `light`, `dark` e `contrastText`. Os papéis padrão são primary, secondary, error, warning, info e success. Há um limiar de contraste configurável (4.5:1 para WCAG 1.4.3) e suporte a modo de alto contraste (`forced-colors`). | https://mui.com/material-ui/customization/palette/ |
| **Vuetify** | Pares de cor `X` / `on-X` (texto sobre a cor). Variáveis de opacidade por estado: hover, focus, pressed, selected, disabled. Tema "system" que segue `prefers-color-scheme`. | https://vuetifyjs.com/en/features/theme/ |
| **GOV.BR DS** | Padrão público e documentado para serviços digitais, com biblioteca de Web Components (`@govbr-ds/core`) feita pelo SERPRO, fonte Rawline e licença MIT. Serve de referência de processo (wiki, guia de contribuição, padrão de commits) e de foco em acessibilidade. **Limitação:** a página de cores (`gov.br/ds/fundamentos-visuais/cores`) não carregou na leitura automática, então os fundamentos visuais dele não foram verificados. | https://gitlab.com/govbr-ds/bibliotecas/javascript/govbr-ds-core · https://www.gov.br/ds/ |
| **CultBR DS** | Primitivas de cor em escala 100–900 mais tokens semânticos (`fgHigh`, `fgLow`, `bgSubtle`, `borderEnabled`, `feedback.*`). Tokens em TS e em `theme.css` (`@theme` do Tailwind v4), mantidos sincronizados. Uma pasta por componente com `.tsx`, `.types.ts`, `.styles.ts` (tailwind-variants), `.stories.tsx` e `README.md`. Storybook e um `llms.txt` para agentes. 28 componentes nas categorias ação, formulário, feedback, navegação e estrutura. | Cópia local (ver seção 9) |

### O que **não** foi trazido do CultBR

- **Fonte:** o CultBR usa só Poppins. A Cloudface mantém Sora, Manrope, DM Sans e Barlow Condensed.
- **Cores:** nenhuma cor nem escala do CultBR foi copiada. O `cyan-500` deles (`#00cbfe`) é só parecido com o ciano Cloudface; não é a origem dele.
- **Logos:** os logos do Footer do CultBR (MinC/GovBr, SNC, Aldir Blanc) são marcas do governo e não serão reutilizados.
- **Código e assets:** nenhum código, nome de token ou nó de Figma foi copiado. A licença MIT do pacote cobre o código, não dá direito de uso de marcas e logos. Se em algum momento formos reutilizar código de qualquer referência, é preciso revisar a licença e manter os créditos.

---

## 2. O que o Cloudface já possui (documentado)

| Área | Situação | Tipo |
|---|---|---|
| Paleta de 8 cores | Definida em `tokens.md` / `identidade.md` | Oficial |
| Tipografia (4 famílias e seus papéis) | Definida | Oficial |
| Logos (PNG claro/escuro, símbolo SVG) e Möbius (9 SVGs) | Listados em `identidade.md` | Oficial |
| Arquivos para o painel de PVC | Listados | Oficial |
| Warning `#FFC56B`, error `#FF6B7A`, border `#1A2632` | Sugeridos | Proposta |
| Gradiente `#00C2FF → #06279E` | Sugerido | Proposta |
| Escala de texto (12–48px), espaçamento base 4px, raios 4/8/12/full | Sugeridos | Proposta |
| CSS variables `--cf-*` | Implementadas em `monorepo/packages/tokens` (leva 0–7); migração para 3 camadas na onda 1 | Proposta, **verificado em código** |
| Button (5 variantes, 3 tamanhos), Input, Card, Badge, Label | Spec em `componentes.md`; código em `monorepo/packages/ui` | Proposta, **verificado em código** |
| Sidebar (composto) | Spec + código | Proposta, **verificado em código** |
| Regras de uso do logo (área de proteção etc.) | Recomendações | Proposta (o guia oficial não tem regras) |
| Monorepo `apps/docs`, `packages/tokens`, `ui`, `assets`, `config` | Implementado em `monorepo/` (etapas 0–7, 2026-11-08) | **Verificado em código** |
| Acessibilidade | Meta WCAG 2.2 AA em [decisoes/001-acessibilidade.md](./decisoes/001-acessibilidade.md); implementação nas ondas 1–6 | Lacuna em fechamento |

---

## 3. Lacunas identificadas

### 3.1 Fundamentos
- **Não há separação entre primitivas e semânticas.** Os tokens atuais (`primary`, `surface`) misturam valor e papel. Faltam escalas e o mapeamento de papéis.
- **Faltam cores de papel:** `info`, superfícies elevadas (popover, modal), overlay, borda forte, texto sobre o primário (`on-primary`) e texto desabilitado.
- **Falta um token de foco** dedicado (anel, espessura e deslocamento).
- **Faltam tokens** de elevação/sombra, z-index, duração/easing de movimento, breakpoints e opacidade de estado.
- **Só existe tema escuro.** Não há tema claro nem modo de alto contraste/`forced-colors`. O tema claro é opcional, mas a decisão precisa ser registrada.
- **Contraste não verificado:** os pares de cor ainda não foram medidos (ver seção 5.4).
- **Faltam pesos, `line-height` e `letter-spacing`** por estilo tipográfico, além de uma regra de quando usar DM Sans e quando usar Barlow.

### 3.2 Componentes
Hoje existem 5 bases mais a Sidebar, todos só especificados. Comparando com as referências, faltam:
- **Ações:** IconButton, LinkButton/Link.
- **Formulários:** TextArea, Checkbox, Radio, Switch, Select, campo com mensagem de ajuda/erro (`Field`).
- **Feedback:** Alert, Toast, Tooltip, Spinner/Loading, ProgressBar, Skeleton, EmptyState.
- **Navegação:** Tabs, Breadcrumbs, Pagination, Steps, Topbar.
- **Estrutura:** Divider, Avatar, Table, Accordion, Modal/Dialog, Drawer/BottomSheet.

### 3.3 Estados e padrões
- Os estados estão definidos de forma parcial. Não há `active`, `loading`, `read-only` nem `invalid` padronizados.
- "Desabilitado = 40% de opacidade" pode resultar em contraste ilegível. É preciso definir cores próprias para o estado desabilitado.
- Faltam padrões: validação de formulário, confirmação de ação destrutiva, estados vazio/erro/carregando de páginas, densidade e layout de páginas.

### 3.4 Documentação
- Falta um modelo único de página por componente (anatomia, API, estados, teclado, a11y).
- Não há Storybook nem site de docs real; `apps/docs` é só uma proposta.
- Falta registro de decisões, changelog e versionamento.
- Os exemplos de instalação podem passar a impressão de que existe um pacote publicado. É preciso marcá-los como ilustrativos.

### 3.5 Acessibilidade
- Não há meta formal. Recomendação: **WCAG 2.2 nível AA**.
- Falta documentar: contraste, foco, teclado, nomes acessíveis, relação label/erro, uso não exclusivo de cor, tamanho de alvo e movimento reduzido (importante por causa do Möbius animado).

---

## 4. Prioridades de implementação

### Alta, necessária para qualquer tela

| Item | Justificativa | Depende de | Critério de aceite |
|---|---|---|---|
| Tokens primitivos + semânticos (seção 5.1) | Todos os componentes dependem deles; evita valores soltos no código | Validação das propostas de cor com a marca | Tokens existem em uma fonte única (ex.: TS/JSON) e são exportados como CSS variables. Nenhum componente usa hex direto. Oficial e proposta marcados. |
| Medição de contraste dos pares de cor | Garante AA antes de construir | Tokens | Tabela com cada par texto/fundo e componente/fundo, com razão medida em ferramenta (ex.: WebAIM, axe). Pares reprovados ajustados ou proibidos. |
| Token e estilo de foco | Exigido para teclado (2.4.7) | Tokens | Anel visível em todo elemento interativo com `:focus-visible`, contraste ≥ 3:1 com o entorno. |
| Button, Input, Label, Card, Badge | Base mínima já especificada | Tokens, foco | Cada um com todos os estados da seção 5.2, página no modelo da seção 6, story no Storybook e checagem de a11y sem erros críticos. |
| Field (Label + Input + ajuda/erro) | Formulários acessíveis | Label, Input | Label ligado por `for/id`. Ajuda e erro ligados por `aria-describedby`, `aria-invalid` no erro, erro com texto e ícone (não só cor). |
| Storybook | Documentação viva e testes visuais | Componentes base | Storybook roda localmente com tema Cloudface e uma story por estado. |

### Média, para formulários completos, feedback e navegação

| Item | Justificativa | Depende de | Critério de aceite |
|---|---|---|---|
| Checkbox, Radio, Switch, TextArea, Select | Completam formulários | Field | Usam controles nativos ou o padrão ARIA equivalente, operáveis por teclado, estados invalid/disabled/read-only. |
| Alert, Toast, Spinner, ProgressBar, Tooltip | Retorno ao usuário | Tokens de feedback (info/success/warning/error) | Mensagens de status anunciadas (`role="status"`/`alert`). Tooltip dispensável com Esc e que não some ao passar o mouse (1.4.13). |
| Tabs, Breadcrumbs, Pagination, Sidebar | Navegação de app | Button, Badge | `nav` com rótulo, `aria-current`. Tabs com setas conforme o ARIA APG. |
| Movimento reduzido | Möbius e transições | Tokens de motion | Animações desligadas ou reduzidas com `prefers-reduced-motion`. Loop do Möbius com controle de pausa se durar mais de 5 s. |
| Modelo de doc por componente | Padroniza o time | — | Todos os componentes base documentados no modelo. |

### Baixa, para depois da base estável

| Item | Justificativa | Depende de |
|---|---|---|
| Table, Accordion, Modal, Drawer, Avatar, Steps, Skeleton, EmptyState | Telas mais ricas | Base e feedback |
| Tema claro e alto contraste | Ainda não há demanda confirmada | Semânticos bem definidos |
| Publicação de pacote, versionamento e changelog | Só quando houver código real e consumidores | Código estável |
| Regras formais de marca (área de proteção, tamanho mínimo) | Precisam de aprovação da marca | Time de marca |

---

## 5. Novos specs e definições (inspiração, não cópia)

### 5.1 Tokens primitivos e semânticos

**Modelo em 3 camadas** (ideia do Material 3 e do Chakra):

1. **Primitivos:** valores brutos, sem significado (`cf.cyan.500`).
2. **Semânticos:** papéis na interface (`color.action.primary.bg`). Os componentes usam **só** esta camada.
3. **Componente (opcional):** `button.primary.bg`, apontando para os semânticos.

**Âncoras oficiais** (os únicos valores oficiais de cor):

| Primitivo (nome proposto) | HEX oficial |
|---|---|
| `cf.navy.950` | `#080C10` |
| `cf.navy.900` | `#0C141C` |
| `cf.gray.50` | `#EDF5FA` |
| `cf.gray.400` | `#A2B3BF` |
| `cf.cyan.500` | `#00C2FF` |
| `cf.cyan.300` | `#69DCFF` |
| `cf.mint.300` | `#8DF1C4` |
| `cf.blue.900` | `#06279E` |

As escalas completas (ex.: `cf.cyan.100–900`, intermediários de `navy`/`gray`) devem ser **geradas pelo time** a partir dessas âncoras e marcadas como **proposta**. Uma escala gerada não se torna oficial. As cores propostas `#FFC56B` (warning), `#FF6B7A` (error) e `#1A2632` (border) entram como primitivos de proposta.

**Mapeamento semântico (proposta):**

| Papel semântico | Aponta para | Observação |
|---|---|---|
| `color.bg.canvas` | `cf.navy.950` | Fundo da aplicação |
| `color.bg.surface` | `cf.navy.900` | Cards, inputs, painéis |
| `color.bg.surface-raised` | gerado (entre navy.900 e border) | Popover, modal: proposta |
| `color.fg.default` | `cf.gray.50` | Texto principal |
| `color.fg.muted` | `cf.gray.400` | Texto secundário |
| `color.fg.disabled` | gerado | Não usar opacidade genérica |
| `color.border.default` | `#1A2632` (proposta) | Divisores decorativos |
| `color.border.control` | gerado, ≥ 3:1 com o fundo | Borda de input/checkbox (1.4.11) |
| `color.action.primary.bg` | `cf.cyan.500` | Botão primário |
| `color.action.primary.bg-hover` | `cf.cyan.300` | |
| `color.action.primary.fg` (`on-primary`) | `cf.navy.950` | Texto sobre o ciano |
| `color.focus.ring` | `cf.cyan.500` ou `cf.cyan.300` | Escolher após medir contraste |
| `color.feedback.success` | `cf.mint.300` | |
| `color.feedback.warning` | `#FFC56B` (proposta) | |
| `color.feedback.error` | `#FF6B7A` (proposta) | Também para `destructive` |
| `color.feedback.info` | `cf.cyan.300` ou novo tom | A decidir |
| `color.brand.deep` | `cf.blue.900` | Marca e gradientes, não texto pequeno |

**Outras famílias de tokens a criar (proposta):** `space.*` (base 4px), `radius.*`, `font.*`, `text.*` (tamanho, peso, altura de linha), `shadow.*`, `z.*`, `motion.duration.*`, `motion.easing.*`, `opacity.*` e `breakpoint.*`.

### 5.2 Estados de componentes

| Estado | Regra (proposta) | Aplica-se a |
|---|---|---|
| **default** | Tokens semânticos base | Todos |
| **hover** | Muda o fundo ou a borda para o tom seguinte (ex.: `bg-hover`). Nunca é o único sinal de interatividade. | Interativos com ponteiro |
| **focus-visible** | Anel de 2px `color.focus.ring` com deslocamento de 2px, só com teclado (`:focus-visible`). Não pode ficar escondido por sticky/overlays (2.4.11). | Todos os focáveis |
| **active / pressed** | Tom mais escuro ou mais claro que o hover, sem mudar o layout | Button, Tabs, itens de menu |
| **selected / current** | Indicador além da cor (barra, peso, ícone) e `aria-selected`/`aria-current` | Tabs, Sidebar, Pagination |
| **disabled** | Cores `fg.disabled`/`bg.disabled` próprias. Atributo `disabled` nativo. Sem hover. Fora da tabulação quando nativo. | Controles |
| **loading** | Spinner mais texto acessível, `aria-busy="true"`, largura mantida, clique bloqueado | Button, áreas de conteúdo |
| **invalid / error** | Borda `feedback.error` mais ícone e texto de erro, `aria-invalid="true"`, mensagem em `aria-describedby` | Input, Select, Checkbox, Radio, TextArea |
| **read-only** | Aparência distinta de disabled, continua focável e copiável, `readonly` nativo | Input, TextArea |

### 5.3 Categorias de componentes

| Categoria | Base atual (spec) | Próximos |
|---|---|---|
| **Ações** | Button | IconButton, Link/LinkButton |
| **Formulários** | Input, Label | Field, TextArea, Checkbox, Radio, Switch, Select |
| **Feedback** | Badge | Alert, Toast, Spinner, ProgressBar, Tooltip, Skeleton |
| **Navegação** | Sidebar (composto) | Tabs, Breadcrumbs, Pagination, Steps, Topbar |
| **Estrutura** | Card | Divider, Avatar, Table, Accordion, Modal, Drawer, EmptyState |

### 5.4 Guidelines de acessibilidade (meta: WCAG 2.2 AA)

Referência: https://www.w3.org/TR/WCAG22/

**Contraste**
- Texto normal: mínimo **4.5:1** (1.4.3).
- Texto grande (≥ 18pt, ou ≥ 14pt em negrito): mínimo **3:1**.
- Componentes de interface e gráficos necessários para entender o conteúdo (bordas de input, ícones, anel de foco): **3:1** contra as cores vizinhas (1.4.11).
- **Os contrastes da paleta Cloudface ainda não foram medidos.** Nenhum par deve ser considerado aprovado antes da tabela de medição da prioridade Alta. Atenção especial a: `text-muted` sobre `surface`, texto sobre `success`/`warning`, `brand-deep` sobre o fundo escuro e o estado desabilitado.

**Foco e teclado**
- Toda função operável por teclado, sem armadilhas de foco (2.1.1, 2.1.2).
- Foco sempre visível (2.4.7), não escondido por cabeçalhos fixos (2.4.11).
- Ordem de foco igual à ordem visual (2.4.3).
- Padrões compostos (Tabs, Menu, Dialog) seguem o ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg/

**Semântica e nomes**
- HTML nativo primeiro: `button`, `a`, `input`, `label`, `nav`, `table`. Nunca usar `div` clicável.
- Todo controle tem nome acessível (4.1.2). Botão só com ícone usa `aria-label`. O nome contém o texto visível (2.5.3).
- Mensagens de status anunciadas sem mover o foco (4.1.3).

**Formulários**
- Label visível ligado ao campo (1.3.1, 3.3.2).
- Erro identificado em texto (3.3.1), com sugestão quando possível (3.3.3), ligado ao campo por `aria-describedby`.
- `autocomplete` em campos de dados pessoais (1.3.5).

**Cor e movimento**
- Cor nunca é o único meio de informação (1.4.1): status com texto e ícone, links com sublinhado ou outro sinal.
- Animação que começa sozinha e dura mais de 5 s precisa de pausa (2.2.2). Respeitar `prefers-reduced-motion` em transições e no Möbius.
- Nada pisca mais de 3 vezes por segundo (2.3.1).

**Alvos e conteúdo sob hover**
- Alvo de ponteiro com no mínimo 24×24 CSS px ou espaçamento equivalente (2.5.8). O Button `sm` (32px) atende à altura; verificar a largura de IconButtons.
- Tooltips e popovers dispensáveis com Esc, que podem receber o ponteiro e são persistentes (1.4.13).

---

## 6. Estrutura de documentação por componente (modelo)

Cada componente ganha um `README.md` (ou uma página de docs) com estas seções:

```markdown
# NomeDoComponente

## Propósito
Para que serve e quando NÃO usar (alternativas).

## Anatomia
Partes nomeadas (ex.: container, ícone, rótulo, spinner) com imagem ou diagrama.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|

## Variantes e tamanhos
Tabela com uso recomendado de cada variante.

## Estados
default, hover, focus-visible, active, disabled, loading, invalid, read-only (os que se aplicam).

## Tokens usados
Lista de tokens semânticos/de componente (nunca hex).

## Exemplos
Uso básico, com ícone, em formulário, casos de erro. Do / Don't.

## Teclado
| Tecla | Ação |
|---|---|

## Acessibilidade
Elemento nativo, role, nome acessível, atributos ARIA, critérios WCAG relevantes.

## Testes
- Unitários (render, props, eventos)
- Acessibilidade automática (ex.: axe) sem violações críticas
- Teclado manual e leitor de tela (VoiceOver/NVDA)
- Regressão visual por estado (stories)

## Status e changelog
Proposta / em desenvolvimento / estável · data · mudanças.
```

### Plano de Storybook (proposta)

1. Storybook com decorator do tema Cloudface (fundo `bg.canvas`, fontes carregadas).
2. Hierarquia por categoria: `Fundamentos/Cores`, `Fundamentos/Tipografia`, `Ações/Button`, `Formulários/Input`...
3. Uma story por variante e por estado, mais um "playground" com controles.
4. Página de fundamentos mostrando primitivos e semânticos, com marcação oficial/proposta.
5. Addon de acessibilidade (a11y) ativo; violações críticas bloqueiam a revisão.
6. Story de `prefers-reduced-motion` para componentes com animação.

---

## 7. Backlog e roadmap

> Etapas sugeridas, sem datas. A pilha técnica (React, Tailwind v4, pnpm/turbo) ainda precisa ser **decidida pelo time**; o que está em `estrutura.md` é sugestão.

**Etapa 0: decisões**
- [ ] Confirmar a pilha (framework, styling, monorepo) e registrar em um documento de decisão.
- [ ] Validar com a marca: warning/error/border, gradiente e regras de logo.

**Etapa 1: fundamentos**
- [ ] Primitivos (âncoras oficiais e escalas geradas marcadas como proposta).
- [ ] Semânticos (tabela 5.1) e tokens de foco, motion, sombra, z-index.
- [ ] Tabela de contraste medida; ajustar pares reprovados.
- [ ] Fontes da marca empacotadas (Sora, Manrope, DM Sans, Barlow).

**Etapa 2: base**
- [ ] Button (incluindo loading e estados completos)
- [ ] Input (invalid, read-only, disabled)
- [ ] Label e Field
- [ ] Card
- [ ] Badge (com texto e, quando for status, ícone)
- [ ] Storybook e docs no modelo da seção 6

**Etapa 3: formulários**
- [ ] TextArea, Checkbox, Radio, Switch, Select

**Etapa 4: feedback**
- [ ] Alert, Toast, Spinner, ProgressBar, Tooltip, Skeleton

**Etapa 5: navegação**
- [ ] Sidebar (revisar com os estados novos), Tabs, Breadcrumbs, Pagination, Topbar

**Etapa 6: estrutura e extras**
- [ ] Divider, Avatar, Table, Accordion, Modal, Drawer, EmptyState
- [ ] Avaliar tema claro e alto contraste
- [ ] Avaliar publicação e versionamento (só com código estável e consumidores reais)

---

## 8. Avisos

- **Instalação:** os comandos em `estrutura.md` (`pnpm add @cloudface/tokens @cloudface/ui` etc.) são exemplos. Não existe pacote publicado e esta análise não promete publicação.
- **Arquitetura:** React/TSX, Tailwind e monorepo pnpm/turbo são sugestões, não implementação confirmada.
- **Oficial x proposta:** só as 8 cores, as 4 fontes, os logos e os SVGs Möbius são oficiais. Todo o resto é proposta.
- **Snapshot:** a análise do CultBR reflete a cópia local no commit `5872b54` (07/09/2026). A documentação das outras referências foi lida em 08/11/2026 e pode mudar.

---

## 9. Fontes

### CultBR DS (cópia local, somente leitura)
Raiz: `/Users/hand/Documents/cultbr/infra/workers/cultbr-ds`
- `README.md`, `llms.txt`, `package.json` (`@cultbr/ds` v0.1.1, MIT)
- `src/theme/colors.ts`: primitivas e semânticas
- `src/theme/theme.css`: tokens `@theme` (Tailwind v4)
- `src/theme/typography.ts`, `src/theme/tokens/spacing.ts`, `src/theme/tokens/radius.ts`
- `src/components/index.ts`: barrel dos 28 componentes
- `src/components/Button/Button.styles.ts`: variantes e estados
- `.storybook/`: configuração do Storybook

### Documentação pública (acessada em 08/11/2026)
- Material 3, Design tokens: https://m3.material.io/foundations/design-tokens/overview
- Chakra UI, Semantic tokens: https://chakra-ui.com/docs/theming/semantic-tokens
- MUI, Palette: https://mui.com/material-ui/customization/palette/
- Vuetify, Theme: https://vuetifyjs.com/en/features/theme/
- GOV.BR DS, biblioteca core (README): https://gitlab.com/govbr-ds/bibliotecas/javascript/govbr-ds-core
- GOV.BR DS, site: https://www.gov.br/ds/ (a página de fundamentos não carregou na leitura automática)
- Design Systems Brasileiros (catálogo): https://designsystemsbrasileiros.com/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/

### Cloudface
- `harness/README.md`, `tokens.md`, `componentes.md`, `identidade.md`, `estrutura.md`, `plano-implementacao.md`
- Pacote `Cloudface-ID-Visual` (`IDENTIDADE_VISUAL.md`)
- `monorepo/` (código a partir de 08/11/2026)
- Este harness: `decisoes/`, `etapas/`, `ESTADO.md`, `ui/`
