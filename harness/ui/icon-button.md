# IconButton

## Propósito
Ação só com ícone. Não usar para navegação.

## Anatomia
botão quadrado, ícone, spinner (loading).

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| label | string | — | `aria-label` obrigatório |
| variant | primary/outline/ghost | ghost | Visual |
| size | sm/md/lg | md | 32/40/48 (mínimo 24×24) |
| loading | boolean | false | aria-busy |

## Variantes e tamanhos
Sem destructive nesta leva.

## Estados
default, hover, focus-visible, active, disabled, loading.

## Tokens usados
Os do Button.

## Exemplos
Do: `label="Fechar"`. Don't: ícone sem nome.

## Teclado
Enter/Espaço.

## Acessibilidade
Nome acessível = `label`. WCAG 2.5.3 / 4.1.2.

## Testes
extras.test.tsx IconButton.

## Status e changelog
Em desenvolvimento · 2026-11-08 · componente próprio.
