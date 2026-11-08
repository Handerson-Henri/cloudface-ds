import { mixHex, type TokenStatus } from './hex.js';

export type Primitive = { value: string; status: TokenStatus };

const WHITE = '#EDF5FA';
const BLACK = '#080C10';

function step(
  dark: string,
  light: string,
  t: number,
  status: TokenStatus = 'proposta',
): Primitive {
  return { value: mixHex(dark, light, t), status };
}

/** Âncoras oficiais: navy.950 #080C10, navy.900 #0C141C. Restante gerado. */
export const navy = {
  50: step('#0C141C', WHITE, 0.92),
  100: step('#0C141C', WHITE, 0.78),
  200: step('#0C141C', WHITE, 0.62),
  300: step('#0C141C', WHITE, 0.48),
  400: step('#0C141C', WHITE, 0.35),
  500: step('#0C141C', WHITE, 0.24),
  600: step('#0C141C', WHITE, 0.16),
  700: step('#0C141C', WHITE, 0.1),
  800: step('#0C141C', WHITE, 0.05),
  900: { value: '#0C141C', status: 'oficial' },
  950: { value: '#080C10', status: 'oficial' },
} as const satisfies Record<string, Primitive>;

/** Âncoras oficiais: gray.50 #EDF5FA, gray.400 #A2B3BF. */
export const gray = {
  50: { value: '#EDF5FA', status: 'oficial' },
  100: step('#A2B3BF', WHITE, 0.7),
  200: step('#A2B3BF', WHITE, 0.45),
  300: step('#A2B3BF', WHITE, 0.22),
  400: { value: '#A2B3BF', status: 'oficial' },
  500: step('#080C10', '#A2B3BF', 0.72),
  600: step('#080C10', '#A2B3BF', 0.52),
  700: step('#080C10', '#A2B3BF', 0.34),
  800: step('#080C10', '#A2B3BF', 0.18),
  900: step('#080C10', '#A2B3BF', 0.08),
} as const satisfies Record<string, Primitive>;

/** Âncoras oficiais: cyan.500 #00C2FF, cyan.300 #69DCFF. */
export const cyan = {
  50: step('#00C2FF', WHITE, 0.88),
  100: step('#00C2FF', WHITE, 0.72),
  200: step('#00C2FF', '#69DCFF', 0.7),
  300: { value: '#69DCFF', status: 'oficial' },
  400: step('#00C2FF', '#69DCFF', 0.45),
  500: { value: '#00C2FF', status: 'oficial' },
  600: step('#06279E', '#00C2FF', 0.72),
  700: step('#06279E', '#00C2FF', 0.48),
  800: step('#06279E', '#00C2FF', 0.24),
  900: step('#06279E', '#00C2FF', 0.08),
} as const satisfies Record<string, Primitive>;

/** Âncora oficial: mint.300 #8DF1C4. */
export const mint = {
  50: step('#8DF1C4', WHITE, 0.8),
  100: step('#8DF1C4', WHITE, 0.55),
  200: step('#8DF1C4', WHITE, 0.28),
  300: { value: '#8DF1C4', status: 'oficial' },
  400: step(BLACK, '#8DF1C4', 0.82),
  500: step(BLACK, '#8DF1C4', 0.64),
  600: step(BLACK, '#8DF1C4', 0.46),
  700: step(BLACK, '#8DF1C4', 0.3),
  800: step(BLACK, '#8DF1C4', 0.16),
  900: step(BLACK, '#8DF1C4', 0.06),
} as const satisfies Record<string, Primitive>;

/** Âncora oficial: blue.900 #06279E. */
export const blue = {
  50: step('#06279E', WHITE, 0.88),
  100: step('#06279E', WHITE, 0.7),
  300: step('#06279E', WHITE, 0.4),
  500: step('#06279E', WHITE, 0.18),
  700: step('#06279E', BLACK, 0.15),
  900: { value: '#06279E', status: 'oficial' },
} as const satisfies Record<string, Primitive>;

export const amber = {
  400: { value: '#FFC56B', status: 'proposta' },
  600: step(BLACK, '#FFC56B', 0.46),
  700: step(BLACK, '#FFC56B', 0.3),
} as const satisfies Record<string, Primitive>;

export const rose = {
  400: { value: '#FF6B7A', status: 'proposta' },
  600: step(BLACK, '#FF6B7A', 0.46),
  700: step(BLACK, '#FF6B7A', 0.3),
} as const satisfies Record<string, Primitive>;

export const slate = {
  800: { value: '#1A2632', status: 'proposta' },
} as const satisfies Record<string, Primitive>;

export const primitives = { navy, gray, cyan, mint, blue, amber, rose, slate };
