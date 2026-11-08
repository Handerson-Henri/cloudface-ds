# Reanálise — componentes e variantes (código vs spec)

Data: 2026-11-08. Destino do código: `monorepo/packages/ui` + `apps/docs` + `apps/storybook`. Docs de componente: [ui/](./ui/README.md).  
Fontes: `componentes.md`, `analise-lacunas.md` §§5.2–5.3, ADRs 000–002, inspeção do TSX/CSS.

> **Desatualizado (vitrine):** a tabela da §1 ainda diz que as docs Vite só mostram 6 componentes e que o Storybook só tem stories isoladas em Button e Field. Depois das ondas 15–18 a nav cobre todos os nomes e cada pasta tem `.stories.tsx`. A auditoria ao vivo (visual / customização / funcionamento) está em [analise-visual.md](./analise-visual.md). As tabelas de maturidade A/B/C e de API vs spec abaixo continuam úteis como histórico do código.

A onda 0–6 **criou os nomes**. As ondas 15–18 (2026-11-08) abriram a vitrine, densificaram as bases, completaram grupos de formulário e o app shell. Ainda há cascas (Spinner um tamanho, Pagination só prev/next, etc.).

Nada do CultBR (código, tokens, logos, Footer institucional) entra. Referências de mercado só como **inspiração de cobertura**, com nomes Cloudface.

---

## 1. Diagnóstico

Três problemas diferentes, empilhados:

| Camada | O que acontece | Efeito |
|---|---|---|
| **Invisível** | Docs Vite navega só Princípios / Tokens / Identidade / Button / Input / Card / Badge / Label / Sidebar | Quem abre http://localhost:5173/ vê 6 componentes, não 32 |
| **Sem matriz** | Storybook tem stories isoladas só em Button e Field; o resto está num catálogo único | Não dá para ver variante × tamanho × estado |
| **Casca** | Toast = Alert; IconButton = Button ghost sm; Table = `<table>` estilizado; Divider = `<hr>`; Select nativo sem lista custom | O nome existe; a API de produto não |

Contagem (exportações públicas de `@cloudface/ui`, Sidebar como 1, Card como 1):

| | Qtd |
|---|---|
| Nomes exportados | **~41** (32 + Link, groups, SearchField, Combobox, SkipLink, PageHeader, ConfirmDialog, Stat, ToastProvider) |
| Na nav das docs Vite | **todas as categorias + cada nome** |
| Com story isolada | **todos** (catálogo só overview) |
| Maturidade A | Button |
| Usáveis (B) | bases densas, Field, groups, Combobox, Sidebar collapse, Table composto, ToastProvider |
| Cascas (C) | Spinner/Progress/Skeleton/Pagination/Topbar/Divider/Avatar ainda magros |

---

## 2. Inventário do que já existe

Legenda de **maturidade**:  
**A** = variantes + tamanhos + estados visíveis. **B** = usável, matriz incompleta. **C** = casca.

### Ações

| Componente | Mat. | O que tem | O que falta (variantes / API) |
|---|---|---|---|
| Button | B | 5 variantes (`primary` `secondary` `outline` `ghost` `destructive`) × 3 tamanhos; loading; disabled semântico | Hover/active **só** em primary e ghost; secondary/outline/destructive sem pressed; **sem ícone** leading/trailing; sem `fullWidth`; loading não reserva largura; story sem matriz de tamanhos |
| IconButton | C | Wrapper ghost `sm` + `aria-label` | Variantes (primary/outline/ghost), tamanhos sm/md/lg, loading, alvo 24×24 explícito no CSS |
| LinkButton | C | `a` com 3 visuais (primary/outline/ghost) `md` | Tamanhos; estado current; **Link de texto** (sublinhado, 1.4.1) separado do botão |

### Formulários

| Componente | Mat. | O que tem | O que falta |
|---|---|---|---|
| Input | B | default / error / disabled / read-only (dashed) | Tamanhos sm/md/lg; prefixo/sufixo; tipos search/password/number; `autocomplete` documentado |
| Label | B | `htmlFor`, `required` | Tamanho, peso, “opcional” |
| Field | B | label + hint + erro (texto+ícone), `aria-*` | `optional`; agrupamento (`fieldset`); não envolve Checkbox/Radio/Switch (decisão da etapa 11) |
| TextArea | C | reusa `.cf-input` + `error` | rows/resize tokenizados; contador; tamanhos |
| Checkbox | B | label próprio, disabled | `indeterminate`; tamanho; invalid visível; CheckboxGroup (`fieldset`) |
| Radio | C | clone do checkbox | RadioGroup; invalid; tamanho |
| Switch | B | `role="switch"` | tamanho; invalid; label posição |
| Select | C | `<select>` nativo + error | lista custom (Combobox/listbox APG); placeholder; tamanhos; multiple |

### Feedback

| Componente | Mat. | O que tem | O que falta |
|---|---|---|---|
| Badge | B | 4 tons + ícone em status | `info`; tamanhos sm/md; estilos fill/subtle/outline; só número (contador) |
| Alert | B | 4 tons, ícone, `role` alert/status | compact/inline; dismiss; título + descrição; `accent` |
| Toast | C | alias de Alert | fila, portal, timeout, região `aria-live`, posição, dismiss |
| Spinner | C | um tamanho, `role="status"` | sm/md/lg; variante dots; inline vs bloco |
| ProgressBar | C | valor determinado | indeterminado; tons success/error; label visível |
| Tooltip | C | hover/foco, Esc | placements; delay; seta; tamanho; persistência testada |
| Skeleton | C | retângulo w×h | text/circle/avatar; linhas |

### Navegação

| Componente | Mat. | O que tem | O que falta |
|---|---|---|---|
| Sidebar | B | header/section/item/footer; current com barra + `aria-current` | colapso; grupo expansível; item com ícone; rail |
| Tabs | B | setas, `aria-selected` | variante enclosed/underline; vertical; Home/End; ícone; overflow |
| Breadcrumbs | C | `nav` + current | separador; colapso `…`; ícone home |
| Pagination | C | anterior/próxima + “n / N” | páginas numeradas; tamanhos; outline/fill |
| Topbar | C | slots start/end em `header` | altura, breadcrumb slot, skip link, overflow menu |
| Steps | C | `ol` + `aria-current="step"` | vertical; ícone vs número; estados done/error |

### Estrutura

| Componente | Mat. | O que tem | O que falta |
|---|---|---|---|
| Card | B | Header/Content/Footer | outlined / raised / interactive; padding compact; media |
| Divider | C | `hr` horizontal | vertical; com rótulo; pontilhado |
| Avatar | C | iniciais ou img, 1 tamanho | tamanhos 24–48; status; AvatarGroup |
| Table | C | `<table class="cf-table">` | Head/Body/Row/Cell; sort; empty; sticky; densidade; caption |
| Accordion | C | `details` nativo | type single/multiple; variantes visuais; ícone |
| Modal | C | dialog + Esc + backdrop | tamanhos sm/md/lg; trap de foco; footer de ações; ConfirmDialog |
| Drawer | C | aside + Esc | lado left/right; tamanhos; trap |
| EmptyState | C | título + texto + ação | tamanhos; ilustração slot |

---

## 3. Estados §5.2 — cobertura real

| Estado | Onde está de fato | Buraco |
|---|---|---|
| default | quase todos | — |
| hover | Button primary/ghost; Sidebar item | Button secondary/outline/destructive; Card interactive; Tabs |
| focus-visible | classe `.cf-focus` nos controles | Table rows, Accordion summary (tem), Menu (não existe) |
| active/pressed | só Button primary | resto dos interativos |
| selected/current | Sidebar, Tabs, Pagination, Breadcrumbs, Steps | LinkButton, Sidebar ícone extra |
| disabled | Button, Input e nativos | visual inconsistente em IconButton (herda Button) |
| loading | Button | IconButton, áreas de página, Table |
| invalid | Input/TextArea/Select + Field | Checkbox, Radio, Switch |
| read-only | Input (dashed) | TextArea deveria herdar; Select não aplica |

---

## 4. O que ainda não existe (famílias, não cópia)

Prioridade para um produto Cloudface (rede, precisão, números em Barlow, ciano como sinal):

### Alta — a vitrine e a matriz

1. **Docs Vite** listar todas as categorias (hoje parece que o DS parou na Sidebar).
2. **Uma story por variante/estado/tamanho** (critério da análise §6). Hoje: 2 arquivos + 1 catálogo.
3. Completar **hover/active** das 5 variantes do Button; **ícone** no Button e no IconButton de verdade.
4. **Input** sm/md/lg + SearchField; **Badge** `info` + sm/md.
5. **Link** de texto (não LinkButton).

### Média — produto de telas reais

| Família | Componentes | Por quê |
|---|---|---|
| Tipografia | `Heading`, `Text`, `Code`, `Kbd` | Spec já tem 4 fontes; nenhum átomo as aplica |
| Layout | `Stack`, `Cluster`, `Container`, `PageHeader` | `componentes.md` já previa page header como composto |
| Overlay | `Popover`, `Menu` (dropdown), `ConfirmDialog` | análise §3.3: confirmação destrutiva |
| Form groups | `RadioGroup`, `CheckboxGroup`, `Combobox` | Select nativo não chega em filtro de hosts |
| Feedback de página | `Banner`, `ToastProvider` | Alert inline ≠ faixa de incidente |
| Dados | `Table` composto, `Stat` (Barlow), `DescriptionList` | tela de servidor / latência |
| Nav extra | `SkipLink`, Sidebar colapsável | a11y 2.4.1; app shell |

### Baixa — depois da base estável

FileInput, DateField, Slider, Rating, ProgressCircle, AvatarGroup, BottomSheet, Theme light (ADR 002).  
**Fora:** Footer com logos de governo, GlobalBanner copiado, marcas CultBR.

---

## 5. Critério de “pronto” por componente

Um componente só sai de **C** quando tiver, no mínimo:

1. Variantes **ou** tamanhos documentados (se fizer sentido).
2. Estados da §5.2 que se aplicam, visíveis no CSS (não só prop nativa).
3. README §6 preenchido (hoje a maioria é esqueleto gerado).
4. Story isolada por variante/estado (não só o catálogo).
5. Página ou pelo menos entrada na docs Vite.

Button está perto de B+, não de A. Field é B. O resto das ondas 3–6 é C.

---

## 6. Próxima execução sugerida (feita nas etapas 15–24, 2026-11-08)

| Onda | Entrega | Status |
|---|---|---|
| **Vitrine** | Nav das docs com as 5 categorias; stories isoladas | feita · etapa 15 |
| **Bases densas** | Button ícone + hover; IconButton; Input tamanhos; Badge info/sm; Link; Card | feita · etapa 16 |
| **Formulário de verdade** | RadioGroup, CheckboxGroup, Combobox, SearchField, Field optional | feita · etapa 17 |
| **App shell** | PageHeader, SkipLink, Sidebar collapse, ToastProvider, ConfirmDialog, Stat, Table composto | feita · etapa 18 |
| **P0 a11y** | overlay, trap, Switch, Combobox, indeterminate | feita · etapa 19 |
| **P1 identidade** | crumbs/steps/alert/pager/table/ícones/tooltip/rail/tabs/select/toast | feita · etapa 20 |
| **P2 vitrine** | cascas + matriz docs | feita · etapa 21 |
| **Tipo/layout** | Heading Text Code Kbd Stack Cluster Container | feita · etapa 22 |
| **Overlay extra** | Popover Menu Banner | feita · etapa 23 |
| **Baixas** | FileInput DateField Slider Rating ProgressCircle AvatarGroup DescriptionList Drawer bottom | feita · etapa 24 |

Fora: tema claro, publish. ID-Visual entrou na etapa 25.

Sem publicar pacote. Sem tema claro. Sem copiar CultBR.
