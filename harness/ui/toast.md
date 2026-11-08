# Toast

## Propósito
Mensagem temporária. Use Alert para estático na página.

## API
| Peça | Papel |
|---|---|
| Toast | visual (Alert + dismiss) |
| ToastProvider | fila + `aria-live="polite"` |
| useToast().push(message, tone) | dispara |

## Variantes e tamanhos
Tons do Alert: info/success/warning/error.

## Estados
visível, dismiss.

## Tokens usados
`feedback.*`, `z.toast`.

## Exemplos
Storybook Feedback/Toast Provider.

## Teclado
Botão Fechar.

## Acessibilidade
Região live. Não move o foco (4.1.3).

## Testes
Alert cobre o role; fila exercitada nas docs.

## Status e changelog
Em desenvolvimento · 2026-11-08 · provider.
