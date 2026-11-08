# Contraste medido (WCAG 2.2)

Data: 2026-11-08. Fórmula WCAG 2 relativa luminance. Âncoras oficiais não foram alteradas. Mapa light = proposta (onda 26).

## Dark (`:root`)

| Par | Frente | Fundo | Razão | Mínimo | Resultado |
|---|---|---|---|---|---|
| fg.default / bg.canvas | `#EDF5FA` | `#080C10` | 17.79:1 | 4.5:1 (texto) | passa |
| fg.default / bg.surface | `#EDF5FA` | `#0C141C` | 16.81:1 | 4.5:1 (texto) | passa |
| fg.muted / bg.canvas | `#A2B3BF` | `#080C10` | 9.10:1 | 4.5:1 (texto) | passa |
| fg.muted / bg.surface | `#A2B3BF` | `#0C141C` | 8.60:1 | 4.5:1 (texto) | passa |
| fg.accent / bg.canvas | `#00C2FF` | `#080C10` | 9.49:1 | 4.5:1 (texto) | passa |
| fg.accent / bg.surface | `#00C2FF` | `#0C141C` | 8.97:1 | 4.5:1 (texto) | passa |
| on-primary / primary | `#080C10` | `#00C2FF` | 9.49:1 | 4.5:1 (texto) | passa |
| focus.ring / canvas | `#69DCFF` | `#080C10` | 12.41:1 | 3:1 (ui) | passa |
| focus.ring / surface | `#69DCFF` | `#0C141C` | 11.73:1 | 3:1 (ui) | passa |
| border.control / surface | `#A2B3BF` | `#0C141C` | 8.60:1 | 3:1 (ui) | passa |
| feedback.success / canvas | `#8DF1C4` | `#080C10` | 14.49:1 | 3:1 (ui) | passa |
| feedback.error / canvas | `#FF6B7A` | `#080C10` | 7.13:1 | 3:1 (ui) | passa |

## Light (`[data-theme="light"]`, proposta)

| Par | Frente | Fundo | Razão | Mínimo | Resultado |
|---|---|---|---|---|---|
| fg.default / bg.canvas | `#080C10` | `#EDF5FA` | 17.79:1 | 4.5:1 (texto) | passa |
| fg.default / bg.surface | `#080C10` | `#DBE3E8` | 15.10:1 | 4.5:1 (texto) | passa |
| fg.muted / bg.canvas | `#58636B` | `#EDF5FA` | 5.58:1 | 4.5:1 (texto) | passa |
| fg.muted / bg.surface | `#58636B` | `#DBE3E8` | 4.74:1 | 4.5:1 (texto) | passa |
| fg.accent / bg.canvas | `#054CB5` | `#EDF5FA` | 7.03:1 | 4.5:1 (texto) | passa |
| fg.accent / bg.surface | `#054CB5` | `#DBE3E8` | 5.97:1 | 4.5:1 (texto) | passa |
| on-primary / primary | `#080C10` | `#00C2FF` | 9.49:1 | 4.5:1 (texto) | passa |
| focus.ring / canvas | `#054CB5` | `#EDF5FA` | 7.03:1 | 3:1 (ui) | passa |
| focus.ring / surface | `#054CB5` | `#DBE3E8` | 5.97:1 | 3:1 (ui) | passa |
| border.control / surface | `#5B636A` | `#DBE3E8` | 4.70:1 | 3:1 (ui) | passa |
| feedback.success / canvas | `#457563` | `#EDF5FA` | 4.79:1 | 3:1 (ui) | passa |
| feedback.error / canvas | `#7A3841` | `#EDF5FA` | 7.71:1 | 3:1 (ui) | passa |

Pares reprovados exigem ajuste de **semântico proposta**, nunca do HEX oficial.

## Overlay (onda 19 / 26)

- Dark: `color-mix(in srgb, black 58%, transparent)`.
- Light: `color-mix(in srgb, navy.950 40%, transparent)`.

Não é par texto/fundo; o critério é o dimming visível sobre a página, medido na vitrine.

## Proibidos

| Par | Razão | Uso permitido |
|---|---|---|
| `color.brand.deep` (#06279E) sobre canvas dark | ~1.67:1 | Só marca/gradiente, nunca texto ou ícone necessário |
