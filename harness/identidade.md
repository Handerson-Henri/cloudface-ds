# Identidade Cloudface

## Direção visual

- **Personalidade:** infraestrutura de rede, precisão técnica e movimento contínuo.
- **Base:** azul-marinho quase preto e superfícies grafite.
- **Acentos:** ciano elétrico para sinal e conexão, verde menta para estados positivos.
- **Tipografia digital:** Sora para títulos e Manrope para textos e interface.
- **Tipografia de conteúdo:** DM Sans e Barlow Condensed Bold.

## Paleta oficial

| Uso | HEX |
|---|---|
| Fundo principal | `#080C10` |
| Superfície | `#0C141C` |
| Texto claro | `#EDF5FA` |
| Texto secundário | `#A2B3BF` |
| Ciano Cloudface | `#00C2FF` |
| Ciano claro | `#69DCFF` |
| Verde menta | `#8DF1C4` |
| Azul profundo do símbolo | `#06279E` |

## Logos

Arquivos em `monorepo/packages/assets/logos/` (pacote `Cloudface-ID-Visual`):

| Arquivo | Descrição |
|---|---|
| `logos/Cloudface-logo-light.png` | Logo completo claro (para fundos escuros) |
| `logos/Cloudface-logo-dark.png` | Logo completo escuro (para fundos claros) |
| `logos/Cloudface-mark.svg` | Símbolo isolado |
| `logos/Cloudface-mark-site.svg` | Símbolo isolado, versão para o site |

O logo completo só existe em PNG. Para o símbolo em vetor, use `Cloudface-mark.svg`.

## Símbolo Möbius e movimento

A pasta `movimento/` traz o sistema Möbius em SVG:

| Tipo | Arquivos |
|---|---|
| Estático | `cloudface-moebius-static-dark.svg`, `-light.svg`, `-symbol.svg` |
| Formação | `cloudface-moebius-formation-dark.svg`, `-light.svg`, `-symbol.svg` |
| Loop | `cloudface-moebius-loop-dark.svg`, `-light.svg`, `-symbol.svg` |

## Produção física

A pasta `produção-pvc/` tem os arquivos do painel de PVC de 10 mm com 150 × 50 cm: vetor em PDF e SVG, PNG transparente, prévia e ficha para o fornecedor.

## Guidelines de uso

O guia oficial não define regras formais de área de proteção, tamanho mínimo ou usos proibidos. Recomendações deste design system, ainda a validar:

- Prefira o logo claro sobre `#080C10` ou `#0C141C`.
- Mantenha ao redor do logo um espaço livre de pelo menos a altura da letra "C".
- Não distorça, recolora ou aplique efeitos no logo.
- Use o ciano para destacar sinal e ação, nunca como cor de fundo dominante.
- Reserve o verde menta para estados positivos.
