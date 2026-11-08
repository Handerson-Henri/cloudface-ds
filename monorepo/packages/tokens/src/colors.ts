import { color, colorLight } from './semantic.js';

/** Camada antiga (papel = valor). Mantida só para o teste de âncoras oficiais. */
export const colors = {
  bg: { value: '#080C10', status: 'oficial', usage: 'Fundo principal' },
  surface: { value: '#0C141C', status: 'oficial', usage: 'Cards' },
  text: { value: '#EDF5FA', status: 'oficial', usage: 'Texto' },
  'text-muted': { value: '#A2B3BF', status: 'oficial', usage: 'Texto secundário' },
  primary: { value: '#00C2FF', status: 'oficial', usage: 'Ação' },
  'primary-light': { value: '#69DCFF', status: 'oficial', usage: 'Hover' },
  success: { value: '#8DF1C4', status: 'oficial', usage: 'Sucesso' },
  'brand-deep': { value: '#06279E', status: 'oficial', usage: 'Marca' },
  warning: { value: '#FFC56B', status: 'proposta', usage: 'Aviso' },
  error: { value: '#FF6B7A', status: 'proposta', usage: 'Erro' },
  border: { value: '#1A2632', status: 'proposta', usage: 'Borda' },
} as const;

export const brandGradient =
  'linear-gradient(90deg, #00C2FF 0%, #06279E 100%)';

export type { TokenStatus } from './hex.js';
export type ColorToken = (typeof colors)[keyof typeof colors];

export { color, colorLight };
