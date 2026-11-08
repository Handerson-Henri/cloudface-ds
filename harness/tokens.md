# Tokens

Os valores marcados como **oficial** vêm do guia `IDENTIDADE_VISUAL.md` e foram conferidos em [validacao-marca.md](./validacao-marca.md). Os marcados como **proposta** não existem no guia (warning, error, borda, escalas) e não sobem a oficial.

## Cores

### Base (oficial)

| Token | HEX | Uso |
|---|---|---|
| `color.bg` | `#080C10` | Fundo principal da aplicação |
| `color.surface` | `#0C141C` | Cards, painéis, modais, inputs |
| `color.text` | `#EDF5FA` | Texto principal |
| `color.text-muted` | `#A2B3BF` | Texto secundário, legendas, placeholders |

### Marca e acentos (oficial)

| Token | HEX | Uso |
|---|---|---|
| `color.primary` | `#00C2FF` | Ações principais, links, foco, sinal/conexão |
| `color.primary-light` | `#69DCFF` | Hover de ações primárias, destaques |
| `color.success` | `#8DF1C4` | Estados positivos, sucesso |
| `color.brand-deep` | `#06279E` | Azul profundo do símbolo, gradientes de marca |

### Estados complementares (proposta)

O guia oficial não define cores de alerta e erro. Valores sugeridos:

| Token | HEX | Uso |
|---|---|---|
| `color.warning` | `#FFC56B` | Avisos |
| `color.error` | `#FF6B7A` | Erros e ações destrutivas |
| `color.border` | `#1A2632` | Bordas e divisores |

### Gradiente de marca

`linear-gradient(90deg, #00C2FF 0%, #06279E 100%)`, baseado no símbolo Möbius.

## Tema claro (proposta derivada, conferida)

Escuro é o padrão (`:root`, `color-scheme: dark`). O claro é opt-in: `data-theme="light"` no `html` ([ADR 002](./decisoes/002-tema.md)). Sem `prefers-color-scheme`. Sem HEX light oficial — o mapa aponta primitivos já gerados ([validacao-marca.md](./validacao-marca.md)).

`forced-colors: active` remapeia os mesmos papéis para cores de sistema (`Canvas`, `CanvasText`, `LinkText`, `ButtonText`, `Highlight`).

| Papel | Dark | Light |
|---|---|---|
| `bg.canvas` | `navy.950` | `gray.50` |
| `bg.surface` | `navy.900` | `navy.50` |
| `bg.surface-raised` | `navy.800` | `gray.50` |
| `fg.default` | `gray.50` | `navy.950` |
| `fg.muted` | `gray.400` | `gray.600` |
| `fg.accent` | `cyan.500` | `cyan.800` |
| `fg.accent-hover` | `cyan.300` | `cyan.900` |
| `border.default` | `slate.800` | `navy.100` |
| `border.control` | `gray.400` | `navy.400` |
| `action.primary.bg` | `cyan.500` | `cyan.500` |
| `action.primary.bg-hover` | `cyan.300` | `cyan.600` |
| `focus.ring` | `cyan.300` | `cyan.800` |
| `feedback.success` | `mint.300` | `mint.600` |
| `feedback.error` | `rose.400` | `rose.600` |
| `feedback.info` | `cyan.300` | `cyan.800` |

`fg.accent` é a cor de **texto** de acento (Link, current, outline). O fill do Button continua `action.primary.bg`.

## Tipografia

| Token | Família | Uso |
|---|---|---|
| `font.heading` | Sora | Títulos (h1 a h4) |
| `font.body` | Manrope | Interface e corpo de texto |
| `font.content` | DM Sans | Conteúdo editorial, artigos |
| `font.display` | Barlow Condensed Bold | Números, destaques, rótulos em caixa alta |

### Escala (proposta)

| Token | Tamanho | Altura de linha |
|---|---|---|
| `text.xs` | 12px | 16px |
| `text.sm` | 14px | 20px |
| `text.md` | 16px | 24px |
| `text.lg` | 18px | 28px |
| `text.xl` | 24px | 32px |
| `text.2xl` | 32px | 40px |
| `text.3xl` | 48px | 56px |

## Espaçamento (proposta)

Base de 4px: `space.1` = 4px, `space.2` = 8px, `space.3` = 12px, `space.4` = 16px, `space.6` = 24px, `space.8` = 32px, `space.12` = 48px.

## Raios (proposta)

`radius.sm` = 4px, `radius.md` = 8px, `radius.lg` = 12px, `radius.full` = 9999px.

## CSS variables

```css
:root {
  --cf-bg: #080C10;
  --cf-surface: #0C141C;
  --cf-text: #EDF5FA;
  --cf-text-muted: #A2B3BF;
  --cf-primary: #00C2FF;
  --cf-primary-light: #69DCFF;
  --cf-success: #8DF1C4;
  --cf-brand-deep: #06279E;
  --cf-warning: #FFC56B; /* proposta */
  --cf-error: #FF6B7A;   /* proposta */
  --cf-border: #1A2632;  /* proposta */

  --cf-font-heading: 'Sora', sans-serif;
  --cf-font-body: 'Manrope', sans-serif;
  --cf-font-content: 'DM Sans', sans-serif;
  --cf-font-display: 'Barlow Condensed', sans-serif;
}
```
