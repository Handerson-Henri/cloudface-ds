# Etapa 11 — Formulários (onda 3)

Data: 2026-11-08

## Implementado

Controles nativos, teclado do browser, estados invalid/disabled/read-only onde o HTML aplica:

| Componente | Papel | Field |
|---|---|---|
| TextArea | `textarea` | sim (`error` + `aria-invalid`) |
| Select | `select` nativo | sim |
| Checkbox | `input[type=checkbox]` + rótulo | rótulo próprio (não duplicar Field) |
| Radio | `input[type=radio]` + rótulo | rótulo próprio |
| Switch | `role="switch"` em checkbox | rótulo próprio |

- TextArea e Select reutilizam `.cf-input` (borda `border.control`, erro `feedback.error`, disabled semântico, read-only dashed)
- Checkbox/Radio compartilham `.cf-check`; Switch tem trilha própria
- `cf-focus` em todos os controles
- Stories no catálogo `Formulários`; Field envolve TextArea e Select
- README §6 em cada pasta

## Decisões

- Nativos em vez de ARIA APG custom (menos superfície, teclado de graça). Switch é a exceção: checkbox + `role="switch"`.
- Field é para controles sem rótulo visível próprio (Input, TextArea, Select). Checkbox/Radio/Switch já carregam `label` — envolver em Field duplicaria 1.3.1.
- Select nativo nesta leva; listbox APG fica para quando a marca pedir visual custom.

## Pendente

- Select custom (listbox APG) se o nativo não passar no visual da marca
- Grupo de Radio com `fieldset`/`legend` composto
- Onda 4: feedback
