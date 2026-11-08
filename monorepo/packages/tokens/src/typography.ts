export const fonts = {
  heading: {
    family: 'Sora',
    usage: 'Títulos (h1 a h4)',
    status: 'oficial',
  },
  body: {
    family: 'Manrope',
    usage: 'Interface e corpo de texto',
    status: 'oficial',
  },
  content: {
    family: 'DM Sans',
    usage: 'Conteúdo editorial, artigos longos. Não usar em UI densa.',
    status: 'oficial',
  },
  display: {
    family: 'Barlow Condensed',
    usage: 'Números, destaques, rótulos em caixa alta. Não usar em parágrafos.',
    status: 'oficial',
  },
} as const;

export const text = {
  xs: {
    size: '12px',
    lineHeight: '16px',
    weight: '500',
    letterSpacing: '0',
    status: 'proposta',
  },
  sm: {
    size: '14px',
    lineHeight: '20px',
    weight: '500',
    letterSpacing: '0',
    status: 'proposta',
  },
  md: {
    size: '16px',
    lineHeight: '24px',
    weight: '400',
    letterSpacing: '0',
    status: 'proposta',
  },
  lg: {
    size: '18px',
    lineHeight: '28px',
    weight: '500',
    letterSpacing: '0',
    status: 'proposta',
  },
  xl: {
    size: '24px',
    lineHeight: '32px',
    weight: '600',
    letterSpacing: '-0.02em',
    status: 'proposta',
  },
  '2xl': {
    size: '32px',
    lineHeight: '40px',
    weight: '600',
    letterSpacing: '-0.02em',
    status: 'proposta',
  },
  '3xl': {
    size: '48px',
    lineHeight: '56px',
    weight: '600',
    letterSpacing: '-0.03em',
    status: 'proposta',
  },
} as const;
