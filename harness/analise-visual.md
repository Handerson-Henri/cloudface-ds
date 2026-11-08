# Auditoria visual, funcional e estrutural

> Data: 08/11/2026. Código: `monorepo/packages/ui`. Vitrines: `apps/docs` (http://localhost:5173/) e `apps/storybook` (http://127.0.0.1:6006/). Spec por componente: [ui/](./ui/README.md).
>
> Esta análise **não substitui** [analise-lacunas.md](./analise-lacunas.md) (referências de mercado, histórica) nem implementa correções. Inventário A/B/C anterior: [analise-componentes.md](./analise-componentes.md) — o diagnóstico da vitrine naquele arquivo está desatualizado.
>
> **Fechamento (mesmo dia):** P0–P2 e as famílias que esta auditoria pedia foram implementados nas [ondas 19–24](./plano-fechamento.md). O texto abaixo é o achado original; o estado atual está em [ESTADO.md](./ESTADO.md) e nas [etapas 19–24](./etapas/19-p0-a11y.md).

Fora de escopo (já decidido): tema claro, `forced-colors`, Tailwind, CultBR, publish, inventar logos/Möbius.

---

## Como ler

Cada componente é visto em quatro lentes:

| Lente | Pergunta |
|---|---|
| **Visual** | O que aparece no canvas escuro: forma, contraste, ritmo, ícone, estados visíveis. |
| **Customização** | O que o consumidor controla: props, variantes, tamanhos, `className`, tokens `--cf-*`. |
| **Funcionamento** | Teclado, ARIA, composição, estados reais (abrir, filtrar, paginar, dismiss). |
| **Vitrine** | O que a página de docs mostra vs o que a API já tem. |

Prioridade no final: **P0** impede uso em produto, **P1** quebra a identidade ou a matriz, **P2** densifica cascas.

---

## Método

1. Percurso na vitrine Vite: nav 1:1 com 44 ids, cliques em Button, IconButton, Input, Select, Combobox, Alert, Switch, Toast, Breadcrumbs, Pagination, Steps, Table, Modal.
2. Storybook: stories isoladas por pasta (`packages/ui/src/**/*.stories.tsx`); catálogo só overview.
3. Leitura de TSX/CSS de todas as pastas exportadas em `packages/ui/src/index.ts` e de [apps/docs/src/App.tsx](../monorepo/apps/docs/src/App.tsx).

---

## Achados transversais

### Vitrine (docs)

- Nav e `renderPage` cobrem **todas** as categorias. Quem abre 5173 vê o catálogo, não só 6 páginas.
- Quase toda página é **um happy path**. Não há matriz variante × tamanho × disabled × error × loading.
- Todos os `SidebarItem` do chrome usam o mesmo `IconGrid`. O collapse do menu **é o site inteiro**, não um demo isolado.
- Ícones de demo são Unicode (`→`, `×`, `✓`, `+`, `«`/`»`), não o set em `shared/icons.tsx`.
- `main` tem `max-width: 880px`. Combobox, Alert, Table e Topbar esticam nessa faixa e parecem “campo de busca” ou lista, não componente de produto.
- Páginas **Sidebar** e **SkipLink** só descrevem o chrome; o exemplo real está no layout.

### Pacote

- Customização = quase só `className`. Quase não há CSS vars de componente (`--cf-button-*` etc.). Combobox, Field, Spinner, Stat, Steps, Pagination, Tooltip não expõem `className` no root (ou expõem pouco).
- Família de form **inconsistente**: Input/TextArea/Select compartilham `.cf-input`; Checkbox/Radio são nativos + `accent-color`; Switch tenta ser custom e **falha visualmente** no canvas.
- Overlay `--cf-color-bg-overlay` (`navy-950` 72% transparente) some sobre o canvas `#080C10`. Modal/Drawer não escurecem a página.
- `.cf-focus` não está em todos os interativos (SidebarItem com `href`, linhas de Table, opções do Combobox).

### Acessibilidade (padrão que se repete)

- Overlay (Modal, Drawer, ConfirmDialog): Escape fecha; **não há** focus trap, foco inicial, restore, nem lock de scroll.
- `id="cf-modal-title"` fixo — quebra com dois diálogos na árvore.
- Backdrop é `div` clicável, não botão.

---

## Ações

### Button

- **Visual:** Cinco variantes no mesmo row da vitrine (ciano, surface, outline, ghost, destructive) + loading. Alturas 32/40/48. Ghost é só texto; no canvas some se não houver hover. Loading vira o mesmo cinza disabled de qualquer variante.
- **Customização:** `variant` primary|secondary|outline|ghost|destructive; `size` sm|md|lg; `loading`; `icon` (ReactNode); `className`. Sem `fullWidth`. Sem tokens de componente.
- **Funcionamento:** `aria-busy` + “Carregando” sr-only. Disabled nativo. Hover/pressed cobrem as variantes no CSS atual (primary/secondary/outline/ghost/destructive).
- **Vitrine:** sem `disabled`, sem row de tamanhos. `icon="→"` é string, não SVG.
- **Lacunas:** disabled/loading flattening; ghost sem superfície; sem leading/trailing consistentes; story/vitrine sem matriz completa.

### IconButton

- **Visual (navegador):** `×` ghost é um glifo solto; primary e outline têm caixa 40/48. Não parece família de ícone 24×24.
- **Customização:** `label` obrigatório; `variant` primary|outline|ghost (sem secondary/destructive); `size` sm|md|lg; `loading`. Estilos em `button.css`; `icon-button.css` está **duplicado e não importado**.
- **Funcionamento:** `aria-label` + `aria-busy`. Reusa `.cf-button`. Spinner via cadeia `button.css` → `focus.css`.
- **Vitrine:** três glifos; sem `sm`, `disabled`, `loading`.
- **Lacunas:** SVG do set Cloudface; ghost precisa de alvo visível em repouso; dropar o CSS morto ou voltar a importá-lo.

### LinkButton

- **Visual:** um `a` com cara de Button outline md.
- **Customização:** só `primary|outline|ghost`, tamanho fixo `md`. Sem disabled/loading (âncora).
- **Funcionamento:** navegação nativa; `.cf-focus`. Sem `aria-current` para item de nav.
- **Vitrine:** um único “Docs” `href="#docs"`.
- **Lacunas:** tamanhos; current; visited; matriz na vitrine.

### Link

- **Visual:** texto ciano, underline no hover (`text-underline-offset: 2px`).
- **Customização:** attrs de âncora + `className`. Sem variante muted/inline.
- **Funcionamento:** link nativo + `.cf-focus`.
- **Vitrine:** uma frase.
- **Lacunas:** ícone de externo; variante discreta; visited.

---

## Formulários

### Input

- **Visual (navegador):** três campos empilhados; `sm` e `lg` quase a mesma altura que o default. Borda cinza, fundo surface. Sem hover de borda.
- **Customização:** `size` sm|md|lg; `error` (classe de borda); nativos. `className`. Sem prefixo/sufixo.
- **Funcionamento:** `aria-invalid` / `aria-describedby` se o consumidor passar `id`. Read-only dashed no CSS.
- **Vitrine:** default + sm + lg; **sem** error, disabled, read-only.
- **Lacunas:** delta visual sm/lg; hover/focus de borda além do outline; tipos search/password na vitrine.

### Label

- **Visual:** texto sm, asterisco de `required`.
- **Customização:** `required`, `optional`. `className`. Sem tamanho/peso.
- **Funcionamento:** `htmlFor` no consumidor.
- **Vitrine:** só `required`. Sem `optional`.
- **Lacunas:** demo de optional; peso alinhado a Field.

### Field

- **Visual:** label + controle + hint muted. Erro (ícone + texto) existe no código, não na vitrine.
- **Customização:** `id`, `label`, `required`/`optional`, `hint`, `error`. **Sem `className` no root.** Clona um único child.
- **Funcionamento:** liga `aria-describedby` / `aria-invalid` no filho. Não envolve Checkbox/Radio/Switch (decisão etapa 11).
- **Vitrine:** `optional` + hint; **sem error**.
- **Lacunas:** error na vitrine; `className`; story `required`.

### TextArea

- **Visual:** caixa `.cf-input` com `min-height: 96px`.
- **Customização:** `error`. Sem `size` (quebra o ritmo do Input).
- **Funcionamento:** `aria-invalid`. Resize nativo do UA.
- **Vitrine:** um campo vazio.
- **Lacunas:** sm/lg; error; rows/token de resize; contador.

### Checkbox

- **Visual:** checkbox nativo 18px + `accent-color` ciano. No macOS não casa com o resto do DS.
- **Customização:** `label` obrigatório; attrs de input; `className` no `label`.
- **Funcionamento:** label envolve o input. Sem `indeterminate` na API.
- **Vitrine:** um “Aceito” desmarcado. Sem checked/disabled/invalid.
- **Lacunas:** arte custom; indeterminate; invalid visível; tamanhos.

### Radio

- **Visual:** mesmo CSS do Checkbox (`.cf-check`). Nativo.
- **Customização:** `label`; `className`.
- **Funcionamento:** `name` no consumidor (ou RadioGroup).
- **Vitrine:** A marcado, B não. Sem disabled.
- **Lacunas:** mesma família visual do Checkbox; invalid.

### Switch

- **Visual (navegador):** o track usa `--cf-color-bg-disabled` e **desaparece no canvas**. Sobra um círculo branco — parece um rádio vazio, não um toggle 36×20.
- **Customização:** `label`; attrs de checkbox; `className`. Sem size. Sem estilo `:disabled`.
- **Funcionamento:** `role="switch"` no input escondido; foco no track via `:focus-visible`.
- **Vitrine:** um “Ativo” (a árvore a11y marcou `readonly` — padrão do input escondido).
- **Lacunas P0 visual:** track precisa de borda ou fundo que contraste com `#080C10`; estado checked ciano visível; disabled.

### Select

- **Visual:** `<select>` nativo com pele `.cf-input`. Uma opção “Um”. Chevron e popup são do SO.
- **Customização:** `error`; children `<option>`. Sem size, sem lista custom.
- **Funcionamento:** nativo. `aria-invalid`.
- **Vitrine:** um controle, uma option.
- **Lacunas:** lista Cloudface (ou documentar que Select é nativo e Combobox é a lista); placeholder; error; várias options.

### CheckboxGroup / RadioGroup

- **Visual:** `fieldset` com borda, legend em classe de label, dois controles.
- **Customização:** `legend`, `error`; RadioGroup injeta `name`. Sem `className` documentado como superfície.
- **Funcionamento:** fieldset + `aria-invalid` / describedby no erro.
- **Vitrine:** dois itens cada; sem invalid/disabled.
- **Lacunas:** error na vitrine; invalid por item.

### SearchField

- **Visual:** Field + Input + ícone SVG `IconSearch` absoluto. Melhor que o IconButton da vitrine.
- **Customização:** props de Field + Input (sem `type`/`id` soltos).
- **Funcionamento:** label via Field. Sem botão limpar.
- **Vitrine:** um “Buscar hosts”.
- **Lacunas:** clear; error/disabled; tamanho.

### Combobox

- **Visual (navegador):** input `md` **largo** (não está no `.field` 320px). Sem chevron. Lista full-width; item ativo é barra teal (`Beta` destacado com seta).
- **Customização:** `options`, `value`/`onChange`, `error`, `placeholder`. **Sem `className`, size, disabled.**
- **Funcionamento:** abre em `onFocus`, `onChange`, `ArrowDown`. Clique da vitrine às vezes não abre (blur/`setTimeout` 120ms). `aria-expanded`, `aria-controls`, `aria-activedescendant`. **`aria-selected` segue o highlight, não o valor commitado.** Enter confirma; Escape fecha. Sem empty state.
- **Vitrine:** duas options, sem label/Field, sem error.
- **Lacunas P0:** a11y APG (`aria-selected`); empty; largura; chevron; teclado na vitrine.

---

## Feedback

### Badge

- **Visual:** pílulas default/info/success/warning/error; `sm` só no warning na vitrine.
- **Customização:** `variant` + `size` sm|md. Sem fill/subtle/outline.
- **Funcionamento:** span. Sem contador/`max`.
- **Vitrine:** a mais densa do grupo (5 tons).
- **Lacunas:** estilos fill/subtle; sm em todos os tons; só-número.

### Alert

- **Visual (navegador):** faixa full-width, fundo surface-raised, **borda ciano**, ícone + “Info”. Parece um input, não um alerta. Tons = só `border-color`; fundo idêntico.
- **Customização:** `tone` info|success|warning|error; `className`. Sem título/descrição, compact, dismiss.
- **Funcionamento:** `role="alert"` no error, senão `status`.
- **Vitrine:** **só info.**
- **Lacunas P1:** fundo/ícone por tom; quatro tons na vitrine; título; dismiss opcional.

### Toast

- **Visual (navegador):** canto inferior direito; Alert success + texto “Fechar”. `aria-label` do botão é “Dispensar”.
- **Customização:** `push(message, tone)`; `dismiss`. Sem timeout, posição, max stack.
- **Funcionamento:** `ToastProvider` + `aria-live="polite"`. Sem auto-dismiss. Fila é coluna simples.
- **Vitrine:** um botão “Disparar toast” (só success).
- **Lacunas:** timeout; ícone de fechar; max stack; demais tons na demo.

### Spinner

- **Visual:** um anel. CSS vive em `shared/focus.css` (`.cf-spinner`), não em arquivo próprio.
- **Customização:** `label?`. Um tamanho.
- **Funcionamento:** `role="status"` + sr-only.
- **Vitrine:** um spinner.
- **Lacunas:** sm/md/lg; inline vs bloco.

### ProgressBar

- **Visual:** trilha 8px, fill 40%. Sem label visível na vitrine.
- **Customização:** `value`, `max`, `label?`. Sem indeterminado, sem tom.
- **Funcionamento:** `role="progressbar"`.
- **Vitrine:** `value={40}` estático.
- **Lacunas:** indeterminate; 0/100; label visível; tons.

### Tooltip

- **Visual:** tip abaixo-esquerda, sem seta, sem flip.
- **Customização:** `content` + `children`. Sem placement, delay.
- **Funcionamento:** hover/focus no wrapper `span`; Escape. **Não liga `aria-describedby` no trigger.** Filho não focável (o “Hover” da vitrine é `span`) não abre por teclado.
- **Vitrine:** um hover.
- **Lacunas P1:** describedby; placement; trigger focável na demo.

### Skeleton

- **Visual:** retângulo estático (sem shimmer). `width={180}` na vitrine.
- **Customização:** `width`, `height` inline. Sem variantes text/circle/avatar.
- **Funcionamento:** `aria-hidden`.
- **Vitrine:** um bloco.
- **Lacunas:** pulse (`prefers-reduced-motion`); formas.

---

## Navegação

### Sidebar

- **Visual:** chrome da docs: barra current ciano, labels, footer com Badge “Online” + IconButton `«`. Collapse corta header/footer/labels com width/height 0 — rail agressivo, não “ícone só”.
- **Customização:** `collapsed`; Item: `current`, `href`, `icon`. `className` no root/items.
- **Funcionamento:** `nav` + `aria-label`. Item é `button` ou `a`. **`href` omite `.cf-focus`.** Sem toggle embutido (a docs liga o `IconButton` no footer).
- **Vitrine da página Sidebar:** parágrafo. O exemplo é o layout.
- **Lacunas P1:** rail (ícones visíveis); toggle na API; focus no `a`; ícones distintos na docs.

### Tabs

- **Visual:** underline/lista simples; sem hover de tab no CSS.
- **Customização:** `tabs[]` {id,label,panel}, `defaultId`. Sem enclosed/vertical/ícone.
- **Funcionamento:** setas no tablist, `aria-selected`, tabIndex roving. **Sem `aria-controls` / `id` no panel.** Painel inativo desmonta.
- **Vitrine:** dois painéis texto.
- **Lacunas:** aria-controls; hover; Home/End; overflow.

### Breadcrumbs

- **Visual (navegador):** `Home` (ciano, underline) colado em `Docs` (branco). **Sem `/` nem chevron.** `gap` de `--cf-space-2` não basta como separador.
- **Customização:** `items[]` {href?, label}.
- **Funcionamento:** `nav` + `aria-label` + `aria-current="page"`.
- **Vitrine:** dois itens.
- **Lacunas P1:** separador no CSS (`::before` ou ícone); colapso `…`.

### Pagination

- **Visual (navegador):** ghost “Anterior”, texto `2 / 5`, ghost “Próxima”. Sem números de página.
- **Customização:** `page`, `pages`, `onChange`. Sem size, sem lista de páginas.
- **Funcionamento:** botões chamam `onChange`. **Na vitrine `onChange={() => undefined}` — clique não muda o 2/5.**
- **Vitrine:** demo morta.
- **Lacunas P1:** demo controlada; páginas numeradas; ellipsis.

### Topbar

- **Visual:** `header` 56px, slots start/end. Na vitrine “Cloudface” + link “conta”, largo e vazio.
- **Customização:** `start`, `end`; attrs de header.
- **Funcionamento:** semântica `header` só.
- **Vitrine:** um shell.
- **Lacunas:** altura; overflow; composição com PageHeader/Breadcrumbs.

### Steps

- **Visual (navegador):** `Conta` menta (done), `Rede` branco bold (current), `Pronto` muted. Três palavras. Sem círculos, números ou linha.
- **Customização:** `steps[]`, `current` index.
- **Funcionamento:** `ol` + `aria-current="step"` + `data-done`.
- **Vitrine:** três passos, current 1.
- **Lacunas P1:** marcador numérico/ícone; conector; vertical; error.

### SkipLink

- **Visual:** fora da tela até o foco; no chrome da docs funciona (alvo `#conteudo`).
- **Customização:** `href`, children, `className`.
- **Funcionamento:** âncora + foco revela.
- **Vitrine da página:** só instrução (“Tab no início”).
- **Lacunas:** instância visível na página de spec (além do chrome).

### PageHeader

- **Visual:** `h1` + breadcrumbs compostos + ação. Um dos poucos blocos “de produto”.
- **Customização:** `title`, `crumbs?`, `actions?`.
- **Funcionamento:** `header` + `Breadcrumbs` (herda a falta de separador).
- **Vitrine:** “Servidores” + Home/Infra + Button sm. Razoável.
- **Lacunas:** wrap de actions; separador via Breadcrumbs.

---

## Estrutura

### Card

- **Visual:** default composto (header/content/footer); raised (sombra); interactive é `<a href>`.
- **Customização:** `variant` default|raised|interactive (+ `href` obrigatório no interactive). `className`. Subpartes Header/Content/Footer.
- **Funcionamento:** interactive só como âncora (não `div` clicável). `.cf-focus` no interactive.
- **Vitrine:** as três variantes — das páginas mais densas.
- **Lacunas:** compact; media; hover do interactive mais explícito.

### Divider

- **Visual:** `hr` horizontal, borda default. Quase invisível em tela vazia.
- **Customização:** nenhuma (orientação/rótulo).
- **Funcionamento:** `hr`.
- **Vitrine:** um traço.
- **Lacunas:** vertical; com label; pontilhado.

### Avatar

- **Visual:** círculo 32px, iniciais “CF” de “Cloud Face”.
- **Customização:** `name`, `src?`. Um tamanho.
- **Funcionamento:** `aria-label`; `img alt=""`.
- **Vitrine:** só iniciais.
- **Lacunas:** 24/40/48; imagem; status; grupo.

### Table

- **Visual (navegador):** uma coluna “Host” / “edge-1”; caption **Hosts** embaixo (`caption-side: bottom` no CSS). Parece lista, não grid de hosts.
- **Customização:** compostos Table/Head/Body/Row/Cell/Caption; `header?` na cell. `className` por parte.
- **Funcionamento:** `th`/`td` + caption. Sem sort, seleção, sticky, densidade, hover de linha.
- **Vitrine:** 1 col, 1 row.
- **Lacunas P1:** caption top (ou spec explícita); várias colunas na demo; hover; empty; sort como composição (não precisa nascer sort interno).

### Accordion

- **Visual:** `details` nativo (seta do UA).
- **Customização:** `items[]` {title, content}. Sem type single/multiple.
- **Funcionamento:** nativo; summary clicável.
- **Vitrine:** um item “O que é”.
- **Lacunas:** ícone Cloudface; several items; single-expand.

### Modal

- **Visual (navegador):** caixa raised 480px, título “Confirmar”, corpo “texto”, botão “Fechar”. Backdrop **quase invisível** — sidebar e “Abrir” continuam nítidos. Não parece diálogo modal.
- **Customização:** `open`, `title`, `children`, `onClose`, `hideClose?`. Sem size, sem footer slot.
- **Funcionamento:** Escape; clique no backdrop `div`. Foco **permanece em Abrir**. Sem trap/restore/scroll lock. `id="cf-modal-title"` global.
- **Vitrine:** abre/fecha; conteúdo mínimo.
- **Lacunas P0:** overlay contrastado; focus trap; id único; footer de ações; fechar em IconButton.

### Drawer

- **Visual:** painel 320px + mesmo backdrop do Modal (invisível). “Fechar” secondary.
- **Customização:** `open`, `title`, `children`, `onClose`. Sem lado left/right, sem size.
- **Funcionamento:** mesmos buracos de Modal (Escape sim; trap não). `aria-label` no `aside`.
- **Vitrine:** “painel”.
- **Lacunas P0:** trap; overlay; lado; animação com `prefers-reduced-motion`.

### EmptyState

- **Visual:** título + texto centrados. Sem ilustração.
- **Customização:** `title`, `children?`, `action?`.
- **Funcionamento:** `h2`.
- **Vitrine:** “Vazio” / “Nada ainda” — **sem** `action`.
- **Lacunas:** slot de ilustração; CTA na demo; alinhamento quando dentro de Table.

### ConfirmDialog

- **Visual:** Modal + dois botões (cancelar / destrutivo). Herda overlay invisível.
- **Customização:** labels, `destructive`, `onConfirm`/`onClose`.
- **Funcionamento:** herda Modal (sem trap; id fixo). Na vitrine confirm só fecha.
- **Vitrine:** só fluxo destructive.
- **Lacunas P0:** trap via Modal; story não-destructive; overlay.

### Stat

- **Visual:** “12 ms” + “Latência”. Número não usa Barlow de destaque de forma óbvia na vitrine.
- **Customização:** `value`, `label`. Sem delta/trend/size.
- **Funcionamento:** `div`.
- **Vitrine:** um KPI.
- **Lacunas:** trend; tamanho; fonte de destaque; grupo de stats.

---

## Spec na vitrine (não são componentes)

| Página | O que mostra | Lacuna |
|---|---|---|
| Princípios | Cinco bullets | — |
| Tokens | Swatches oficiais vs proposta | Sem tipografia/espaço/raio |
| Identidade | Texto “aguardam Cloudface-ID-Visual” | Correto; assets oficiais ainda ausentes |

---

## Prioridade para ondas futuras

Não implementar nesta leva. Ordem sugerida:

### P0 — o componente mente ou trava teclado

1. Overlay de Modal/Drawer/ConfirmDialog visível no canvas escuro.
2. Focus trap + restore + scroll lock + `id` de título único.
3. Switch: track com contraste (borda ou fundo que não seja o disabled).
4. Combobox: `aria-selected` no valor; empty; não depender só de focus/blur com timeout.

### P1 — identidade e matriz

5. Breadcrumbs e Steps com separador/marcador visível.
6. Alert: fundo/ícone por tom; quatro tons na vitrine.
7. Pagination controlada na docs; páginas numeradas.
8. Table: várias colunas; caption no topo ou spec; hover de linha.
9. IconButton/Button da vitrine com SVG do set, não Unicode; ghost com alvo visível.
10. Tooltip `aria-describedby` + trigger focável.
11. Sidebar rail (ícones no collapse) + `.cf-focus` no `href`.
12. Tabs `aria-controls` / id do panel.
13. Select: ou pele custom, ou vitrine que deixe claro que é nativo.
14. Field/Input error+disabled na vitrine; TextArea com size.
15. Toast timeout + ícone fechar; Alert/Toast sem parecer input.

### P2 — cascas

16. Spinner tamanhos; Skeleton pulse; Progress indeterminate.
17. Avatar tamanhos + imagem; Divider vertical; Stat trend.
18. LinkButton sizes/current; Topbar/EmptyState slots.
19. `icon-button.css` morto: importar ou apagar.
20. Chrome da docs: ícones distintos por item; Pagination/`onChange` de verdade.

---

## Relação com os outros MDs

| Arquivo | Papel |
|---|---|
| [ui/*.md](./ui/README.md) | Spec normativa (não reescrita aqui). |
| [analise-componentes.md](./analise-componentes.md) | Maturidade A/B/C e API vs spec; §1 da vitrine está velho. |
| [analise-lacunas.md](./analise-lacunas.md) | Referências de mercado; não reler para fechar estes P0. |
| [contraste.md](./contraste.md) | Pares de token; não mediu overlay-on-canvas nem Switch track. |
| [decisoes/001-acessibilidade.md](./decisoes/001-acessibilidade.md) | Meta WCAG 2.2 AA — trap e overlay violam o espírito da ADR. |
