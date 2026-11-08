# Etapa 12 — Feedback (onda 4)

Data: 2026-11-08

## Implementado

| Componente | Papel / notas |
|---|---|
| Alert | `role="alert"` em error; `role="status"` nos demais; ícone + texto; tons `info/success/warning/error` nos tokens `feedback.*` |
| Toast | reusa Alert (mesmo mapeamento de role) |
| Spinner | `role="status"` + texto acessível; animação respeita `prefers-reduced-motion` |
| ProgressBar | `role="progressbar"` + `aria-valuenow/min/max` |
| Tooltip | Esc fecha; ponta com `pointer-events: auto` (1.4.13); abre em hover e foco |
| Skeleton | `aria-hidden`; pulse via tokens de motion |

- Tokens usados: `color.feedback.info/success/warning/error`, `color.bg.surface-raised`, `color.focus.ring`
- Stories no catálogo `Feedback`
- Teste: Alert error expõe `role="alert"`

## Decisões

- Toast não tem fila/portal nesta leva: é o mesmo átomo do Alert, para o consumidor posicionar. Fila, timeout e `aria-live` de região ficam para um composto de aplicação.
- Tooltip não usa `title` nativo (pouco persistente). Conteúdo em `role="tooltip"`.
- Skeleton não anuncia: o conteúdo real deve substituí-lo; quem espera dado usa Spinner/`aria-busy`.

## Pendente

- Fila de toasts, dismiss e região `aria-live` politeness
- Tooltip: delay de abertura e hover da ponta testado com ponteiro real
- Onda 5: navegação
