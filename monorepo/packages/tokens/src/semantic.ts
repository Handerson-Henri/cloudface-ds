import { amber, cyan, gray, mint, navy, rose, slate } from './primitives.js';

/**
 * Papéis. Componentes usam só esta camada.
 * Dark = :root (ADR 002). info → cyan.300 (decisão 2026-11-08).
 * Light = [data-theme="light"], proposta, primitivos já gerados.
 */
export const color = {
  bg: {
    canvas: navy[950],
    surface: navy[900],
    'surface-raised': navy[800],
    overlay: navy[950],
    disabled: navy[800],
  },
  fg: {
    default: gray[50],
    muted: gray[400],
    disabled: gray[600],
    accent: cyan[500],
    'accent-hover': cyan[300],
  },
  border: {
    default: slate[800],
    control: gray[400],
    strong: gray[400],
  },
  action: {
    primary: {
      bg: cyan[500],
      'bg-hover': cyan[300],
      'bg-pressed': cyan[600],
      fg: navy[950],
    },
  },
  focus: {
    ring: cyan[300],
  },
  feedback: {
    success: mint[300],
    warning: amber[400],
    error: rose[400],
    info: cyan[300],
  },
  brand: {
    deep: { value: '#06279E', status: 'oficial' as const },
  },
} as const;

/** Mapa claro (proposta). Mesmos papéis, primitivos diferentes. */
export const colorLight = {
  bg: {
    canvas: gray[50],
    surface: navy[50],
    'surface-raised': gray[50],
    overlay: navy[950],
    disabled: navy[100],
  },
  fg: {
    default: navy[950],
    muted: gray[600],
    disabled: gray[400],
    accent: cyan[800],
    'accent-hover': cyan[900],
  },
  border: {
    default: navy[100],
    control: navy[400],
    strong: navy[400],
  },
  action: {
    primary: {
      bg: cyan[500],
      'bg-hover': cyan[600],
      'bg-pressed': cyan[700],
      fg: navy[950],
    },
  },
  focus: {
    ring: cyan[800],
  },
  feedback: {
    success: mint[600],
    warning: amber[600],
    error: rose[600],
    info: cyan[800],
  },
  brand: {
    deep: { value: '#06279E', status: 'oficial' as const },
  },
} as const;

export const focus = {
  width: '2px',
  offset: '2px',
} as const;
