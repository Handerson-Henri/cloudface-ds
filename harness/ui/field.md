# Field

## Propósito
Agrupa Label + controle + ajuda/erro.

## API
| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| id | string | — | Liga label |
| label | ReactNode | — | Rótulo |
| required | boolean | false | asterisco |
| optional | boolean | false | texto “opcional” |
| hint | string | — | ajuda |
| error | string | — | erro + ícone |

## Variantes e tamanhos
Único layout.

## Estados
default, invalid.

## Tokens usados
`color.fg.muted`, `color.feedback.error`.

## Exemplos
Do: erro com texto e ícone. Don't: erro só por cor.

## Teclado
Segue o controle filho.

## Acessibilidade
for/id, aria-describedby, aria-invalid.

## Testes
extras.test.tsx.

## Status e changelog
Em desenvolvimento · 2026-11-08 · optional.
