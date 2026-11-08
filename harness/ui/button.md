# Button

## Propósito
Ação. Não usar para navegação (use LinkButton) nem para ícone só (use IconButton).

## Anatomia
container, rótulo, spinner (loading).

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| variant | primary/secondary/outline/ghost/destructive | primary | Visual |
| size | sm/md/lg | md | Altura 32/40/48 |
| loading | boolean | false | aria-busy, spinner, clique bloqueado, min-width 8ch |
| icon | ReactNode | — | Ícone leading |
| disabled | boolean | false | cores disabled, fora da tabulação nativa |

## Variantes e tamanhos
Uma `primary` por contexto. sm atende 24px de alvo na altura.

## Estados
default, hover, focus-visible, active, disabled, loading. Hover/pressed nas cinco variantes.

## Tokens usados
`color.action.primary.*`, `color.fg.*`, `color.bg.disabled`, `color.feedback.error`, `color.focus.ring`, `motion.*`.

## Exemplos
Do: uma primary. Don't: várias primary na mesma barra.

## Teclado
| Tecla | Ação |
|---|---|
| Enter/Espaço | Ativa |

## Acessibilidade
`button` nativo. Loading anuncia "Carregando". WCAG 2.2 AA.

## Testes
Render de variantes, loading, disabled. axe no Storybook.

## Status e changelog
Em desenvolvimento · 2026-11-08 · estados completos.
