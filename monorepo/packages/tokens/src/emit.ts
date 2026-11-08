import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { breakpoint, opacity, shadow, z } from './elevation.js';
import { motion } from './motion.js';
import {
  amber,
  blue,
  cyan,
  gray,
  mint,
  navy,
  rose,
  slate,
} from './primitives.js';
import { color, colorLight, focus } from './semantic.js';
import { radius } from './radius.js';
import { space } from './spacing.js';
import { fonts, text } from './typography.js';
import { brandGradient } from './colors.js';

function scale(prefix: string, obj: Record<string, { value: string }>): string {
  return Object.entries(obj)
    .map(([k, v]) => `  --cf-${prefix}-${k}: ${v.value};`)
    .join('\n');
}

const css = `:root {
  color-scheme: dark;
  /* primitivos — âncoras oficiais + escalas geradas (proposta) */
${scale('navy', navy)}
${scale('gray', gray)}
${scale('cyan', cyan)}
${scale('mint', mint)}
${scale('blue', blue)}
  --cf-amber-400: ${amber[400].value}; /* proposta */
  --cf-amber-600: ${amber[600].value}; /* proposta */
  --cf-amber-700: ${amber[700].value}; /* proposta */
  --cf-rose-400: ${rose[400].value}; /* proposta */
  --cf-rose-600: ${rose[600].value}; /* proposta */
  --cf-rose-700: ${rose[700].value}; /* proposta */
  --cf-slate-800: ${slate[800].value}; /* proposta */

  /* semânticos dark */
  --cf-color-bg-canvas: var(--cf-navy-950);
  --cf-color-bg-surface: var(--cf-navy-900);
  --cf-color-bg-surface-raised: var(--cf-navy-800);
  --cf-color-bg-overlay: color-mix(in srgb, black 58%, transparent);
  --cf-color-bg-disabled: var(--cf-navy-800);
  --cf-color-fg-default: var(--cf-gray-50);
  --cf-color-fg-muted: var(--cf-gray-400);
  --cf-color-fg-disabled: var(--cf-gray-600);
  --cf-color-fg-accent: var(--cf-cyan-500);
  --cf-color-fg-accent-hover: var(--cf-cyan-300);
  --cf-color-border-default: var(--cf-slate-800);
  --cf-color-border-control: var(--cf-gray-400);
  --cf-color-border-strong: var(--cf-gray-400);
  --cf-color-action-primary-bg: var(--cf-cyan-500);
  --cf-color-action-primary-bg-hover: var(--cf-cyan-300);
  --cf-color-action-primary-bg-pressed: var(--cf-cyan-600);
  --cf-color-action-primary-fg: var(--cf-navy-950);
  --cf-color-focus-ring: var(--cf-cyan-300);
  --cf-focus-ring-width: ${focus.width};
  --cf-focus-ring-offset: ${focus.offset};
  --cf-color-feedback-success: var(--cf-mint-300);
  --cf-color-feedback-warning: var(--cf-amber-400);
  --cf-color-feedback-error: var(--cf-rose-400);
  --cf-color-feedback-info: var(--cf-cyan-300);
  --cf-color-brand-deep: var(--cf-blue-900);

  --cf-font-heading: '${fonts.heading.family}', sans-serif;
  --cf-font-body: '${fonts.body.family}', sans-serif;
  --cf-font-content: '${fonts.content.family}', sans-serif;
  --cf-font-display: '${fonts.display.family}', sans-serif;
${Object.entries(text)
  .map(
    ([k, v]) =>
      `  --cf-text-${k}: ${v.size};\n  --cf-text-${k}-lh: ${v.lineHeight};\n  --cf-text-${k}-weight: ${v.weight};`,
  )
  .join('\n')}
${Object.entries(space)
  .map(([k, v]) => `  --cf-space-${k}: ${v.value};`)
  .join('\n')}
${Object.entries(radius)
  .map(([k, v]) => `  --cf-radius-${k}: ${v.value};`)
  .join('\n')}
${Object.entries(shadow)
  .map(([k, v]) => `  --cf-shadow-${k}: ${v.value};`)
  .join('\n')}
${Object.entries(z)
  .map(([k, v]) => `  --cf-z-${k}: ${v.value};`)
  .join('\n')}
${Object.entries(motion.duration)
  .map(([k, v]) => `  --cf-motion-duration-${k}: ${v.value};`)
  .join('\n')}
${Object.entries(motion.easing)
  .map(([k, v]) => `  --cf-motion-easing-${k}: ${v.value};`)
  .join('\n')}
${Object.entries(opacity)
  .map(([k, v]) => `  --cf-opacity-${k}: ${v.value};`)
  .join('\n')}
${Object.entries(breakpoint)
  .map(([k, v]) => `  --cf-breakpoint-${k}: ${v.value};`)
  .join('\n')}

  /* aliases da leva 0–7 (um ciclo) */
  --cf-bg: var(--cf-color-bg-canvas);
  --cf-surface: var(--cf-color-bg-surface);
  --cf-text: var(--cf-color-fg-default);
  --cf-text-muted: var(--cf-color-fg-muted);
  --cf-primary: var(--cf-color-action-primary-bg);
  --cf-primary-light: var(--cf-color-action-primary-bg-hover);
  --cf-success: var(--cf-color-feedback-success);
  --cf-brand-deep: var(--cf-color-brand-deep);
  --cf-warning: var(--cf-color-feedback-warning); /* proposta */
  --cf-error: var(--cf-color-feedback-error); /* proposta */
  --cf-border: var(--cf-color-border-default); /* proposta */
}

[data-theme='light'] {
  color-scheme: light;
  --cf-color-bg-canvas: var(--cf-gray-50);
  --cf-color-bg-surface: var(--cf-navy-50);
  --cf-color-bg-surface-raised: var(--cf-gray-50);
  --cf-color-bg-overlay: color-mix(in srgb, var(--cf-navy-950) 40%, transparent);
  --cf-color-bg-disabled: var(--cf-navy-100);
  --cf-color-fg-default: var(--cf-navy-950);
  --cf-color-fg-muted: var(--cf-gray-600);
  --cf-color-fg-disabled: var(--cf-gray-400);
  --cf-color-fg-accent: var(--cf-cyan-800);
  --cf-color-fg-accent-hover: var(--cf-cyan-900);
  --cf-color-border-default: var(--cf-navy-100);
  --cf-color-border-control: var(--cf-navy-400);
  --cf-color-border-strong: var(--cf-navy-400);
  --cf-color-action-primary-bg: var(--cf-cyan-500);
  --cf-color-action-primary-bg-hover: var(--cf-cyan-600);
  --cf-color-action-primary-bg-pressed: var(--cf-cyan-700);
  --cf-color-action-primary-fg: var(--cf-navy-950);
  --cf-color-focus-ring: var(--cf-cyan-800);
  --cf-color-feedback-success: var(--cf-mint-600);
  --cf-color-feedback-warning: var(--cf-amber-600);
  --cf-color-feedback-error: var(--cf-rose-600);
  --cf-color-feedback-info: var(--cf-cyan-800);
}

@media (forced-colors: active) {
  :root,
  [data-theme='light'] {
    --cf-color-bg-canvas: Canvas;
    --cf-color-bg-surface: Canvas;
    --cf-color-bg-surface-raised: Canvas;
    --cf-color-bg-overlay: Canvas;
    --cf-color-bg-disabled: GrayText;
    --cf-color-fg-default: CanvasText;
    --cf-color-fg-muted: GrayText;
    --cf-color-fg-disabled: GrayText;
    --cf-color-fg-accent: LinkText;
    --cf-color-fg-accent-hover: LinkText;
    --cf-color-border-default: ButtonText;
    --cf-color-border-control: ButtonText;
    --cf-color-border-strong: CanvasText;
    --cf-color-action-primary-bg: ButtonText;
    --cf-color-action-primary-bg-hover: Highlight;
    --cf-color-action-primary-bg-pressed: Highlight;
    --cf-color-action-primary-fg: ButtonFace;
    --cf-color-focus-ring: Highlight;
    --cf-color-feedback-success: CanvasText;
    --cf-color-feedback-warning: CanvasText;
    --cf-color-feedback-error: CanvasText;
    --cf-color-feedback-info: LinkText;
    --cf-color-brand-deep: CanvasText;
    --cf-bg: Canvas;
    --cf-surface: Canvas;
    --cf-text: CanvasText;
    --cf-text-muted: GrayText;
    --cf-primary: ButtonText;
    --cf-primary-light: Highlight;
    --cf-success: CanvasText;
    --cf-brand-deep: CanvasText;
    --cf-warning: CanvasText;
    --cf-error: CanvasText;
    --cf-border: ButtonText;
  }
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --cf-motion-duration-instant: 0ms;
    --cf-motion-duration-fast: 0ms;
    --cf-motion-duration-base: 0ms;
    --cf-motion-duration-slow: 0ms;
  }
}
`;

const json = {
  primitives: { navy, gray, cyan, mint, blue, amber, rose, slate },
  semantic: color,
  semanticLight: colorLight,
  fonts,
  text,
  space,
  radius,
  shadow,
  z,
  motion,
  opacity,
  breakpoint,
  brandGradient,
};

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
writeFileSync(join(root, 'css/variables.css'), css);
writeFileSync(join(root, 'json/tokens.json'), JSON.stringify(json, null, 2));
