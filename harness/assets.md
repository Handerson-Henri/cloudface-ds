# Assets da marca

Status: **no monorepo** (`@cloudface/assets`, copiado de `Cloudface-ID-Visual.zip` em 2026-11-08).

Código: `monorepo/packages/assets`. Oficial do pacote: [IDENTIDADE_VISUAL.md](../monorepo/packages/assets/IDENTIDADE_VISUAL.md). `produção-pvc/` e `referencias/` **não** entram no monorepo.

## Inventário

### logos/

| Arquivo | Descrição | Status |
|---|---|---|
| `Cloudface-logo-light.png` | Logo completo claro (fundos escuros) | no pacote |
| `Cloudface-logo-dark.png` | Logo completo escuro (fundos claros) | no pacote |
| `Cloudface-mark.svg` | Símbolo isolado | no pacote |
| `Cloudface-mark-site.svg` | Símbolo isolado, versão para o site | no pacote |

O logo completo só existe em PNG. Para o símbolo em vetor, usar `Cloudface-mark.svg`.

### movimento/

| Tipo | Arquivos | Status |
|---|---|---|
| Estático | `cloudface-moebius-static-dark.svg`, `-light.svg`, `-symbol.svg` | no pacote |
| Formação | `cloudface-moebius-formation-dark.svg`, `-light.svg`, `-symbol.svg` | no pacote |
| Loop | `cloudface-moebius-loop-dark.svg`, `-light.svg`, `-symbol.svg` | no pacote |

### fonts/

| Arquivo | Família |
|---|---|
| `Sora-Variable.woff2` | Sora |
| `Manrope-Variable.woff2` | Manrope |
| `DMSans.ttf` | DM Sans |
| `BarlowCondensed-Bold.ttf` | Barlow Condensed Bold |

`css/fonts.css` aponta para esses arquivos (`@font-face` + `url()`).

## Guidelines (ainda a validar com a marca)

- Logo claro sobre `#080C10` ou `#0C141C`.
- Espaço livre ao redor do logo de pelo menos a altura da letra "C".
- Não distorcer, recolorir ou aplicar efeitos no logo.
- Ciano para sinal e ação; nunca como fundo dominante.
- Verde menta só para estados positivos.
