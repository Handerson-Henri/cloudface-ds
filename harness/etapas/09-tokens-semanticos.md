# Etapa 9 — Tokens em 3 camadas

Data: 2026-11-08

## Implementado

- Primitivos `navy/gray/cyan/mint/blue` com âncoras oficiais e escalas geradas (mix sRGB, **proposta**)
- Semânticos da tabela 5.1; `info` → `cyan.300`
- `fg.disabled` / `bg.disabled` próprios (não opacidade 40%)
- `focus.ring` = cyan.300 (melhor contraste no canvas que cyan.500)
- motion, shadow, z, opacity, breakpoint
- `prefers-reduced-motion` zera durações
- Aliases `--cf-bg` etc. por um ciclo
- Testes HEX + contraste; [contraste.md](../contraste.md)
- `brand.deep` sobre canvas **proibido** para texto/ícone (~1.67:1)

## Decisões

- Método de escala: mix sRGB documentado, não OKLCH completo (biblioteca extra evitada).
- Borda de controle = `gray.400` (≥ 3:1 em surface).

## Pendente

- Validação da marca (warning/error/border)
- Möbius pausável quando o asset existir
- Onda 2: estados nas bases, Field, Storybook
