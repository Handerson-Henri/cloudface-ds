# Validação contra o ID-Visual

Data: 2026-11-08  
Fonte da marca: [`packages/assets/IDENTIDADE_VISUAL.md`](../monorepo/packages/assets/IDENTIDADE_VISUAL.md) (pacote `Cloudface-ID-Visual`).

O guia oficial é **escuro**. Não há HEX light, warning nem error. Esta conferência não inventa cor: âncoras oficiais batem 1:1; o mapa claro só aponta primitivos gerados a partir delas.

## Âncoras oficiais

| Uso no guia | HEX | Primitivo | Semântico dark |
|---|---|---|---|
| Fundo principal | `#080C10` | `navy.950` | `bg.canvas` |
| Superfície | `#0C141C` | `navy.900` | `bg.surface` |
| Texto claro | `#EDF5FA` | `gray.50` | `fg.default` |
| Texto secundário | `#A2B3BF` | `gray.400` | `fg.muted` |
| Ciano Cloudface | `#00C2FF` | `cyan.500` | `action.primary.bg` / `fg.accent` |
| Ciano claro | `#69DCFF` | `cyan.300` | `action.primary.bg-hover` / `focus.ring` |
| Verde menta | `#8DF1C4` | `mint.300` | `feedback.success` |
| Azul profundo | `#06279E` | `blue.900` | `brand.deep` |

Tipografia do guia: Sora, Manrope, DM Sans, Barlow Condensed — iguais a `font.*`.

Teste: `packages/tokens/test/official-hex.test.mjs`. Contraste dark: [contraste.md](./contraste.md).

## Mapa light (derivação conferida)

Nenhum HEX light no guia. Cada papel aponta um degrau da escala gerada a partir das âncoras acima. WCAG 2.2 AA medido em [contraste.md](./contraste.md) (todos os pares light passam).

| Papel | Primitivo light | Âncora de origem |
|---|---|---|
| `bg.canvas` | `gray.50` | texto claro `#EDF5FA` |
| `bg.surface` | `navy.50` | superfície `#0C141C` + texto claro |
| `fg.default` | `navy.950` | fundo `#080C10` |
| `fg.muted` | `gray.600` | texto secundário `#A2B3BF` + fundo |
| `fg.accent` | `cyan.800` | ciano `#00C2FF` + azul profundo `#06279E` (500 falha 4.5:1 no canvas claro) |
| `action.primary.bg` | `cyan.500` | ciano oficial (fill nos dois temas) |
| `feedback.success` | `mint.600` | menta `#8DF1C4` + preto |

## Continua proposta (ausente no guia)

| Item | Por quê |
|---|---|
| `warning` / `amber.*` | O guia não define aviso |
| `error` / `rose.*` | O guia não define erro |
| `border` / `slate.800` | O guia não define borda |
| Escala tipo / espaço / raio | O guia não define números |
| Escalas `navy/gray/cyan/mint` fora das âncoras | Geradas, não oficiais |

Esses valores não sobem a **oficial**.
