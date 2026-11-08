# ADR 001 — Acessibilidade

Status: aceito  
Data: 2026-11-08

## Decisão

Meta formal: **WCAG 2.2 nível AA**.

- Contraste de texto 4.5:1 (3:1 se texto grande).
- Componentes de UI e anel de foco 3:1 contra o entorno (1.4.11).
- Foco visível com `:focus-visible` (2.4.7, 2.4.11).
- HTML nativo primeiro; nunca `div` clicável.
- Cor nunca é o único sinal (1.4.1).
- `prefers-reduced-motion` em transições e no Möbius (quando o asset existir).
- Alvo de ponteiro ≥ 24×24 CSS px (2.5.8).

Referência: https://www.w3.org/TR/WCAG22/ e ARIA APG.
