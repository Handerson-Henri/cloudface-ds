import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { colors } from '../dist/index.js';
import { blue, cyan, gray, mint, navy } from '../dist/primitives.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const json = JSON.parse(readFileSync(join(root, 'json/tokens.json'), 'utf8'));
const css = readFileSync(join(root, 'css/variables.css'), 'utf8');

const official = [
  ['colors.bg', colors.bg, '#080C10'],
  ['navy.950', navy[950], '#080C10'],
  ['navy.900', navy[900], '#0C141C'],
  ['gray.50', gray[50], '#EDF5FA'],
  ['gray.400', gray[400], '#A2B3BF'],
  ['cyan.500', cyan[500], '#00C2FF'],
  ['cyan.300', cyan[300], '#69DCFF'],
  ['mint.300', mint[300], '#8DF1C4'],
  ['blue.900', blue[900], '#06279E'],
];

test('HEX oficiais batem no TS, JSON e CSS', () => {
  for (const [name, token, hex] of official) {
    assert.equal(token.value.toUpperCase(), hex.toUpperCase(), `ts ${name}`);
    assert.equal(token.status, 'oficial', `status ts ${name}`);
  }
  assert.equal(json.primitives.navy[950].value.toUpperCase(), '#080C10');
  assert.match(css, /--cf-navy-950:\s*#080C10/i);
  assert.match(css, /--cf-navy-900:\s*#0C141C/i);
  assert.match(css, /--cf-gray-50:\s*#EDF5FA/i);
  assert.match(css, /--cf-gray-400:\s*#A2B3BF/i);
  assert.match(css, /--cf-cyan-500:\s*#00C2FF/i);
  assert.match(css, /--cf-cyan-300:\s*#69DCFF/i);
  assert.match(css, /--cf-mint-300:\s*#8DF1C4/i);
  assert.match(css, /--cf-blue-900:\s*#06279E/i);
});

test('tokens proposta estão marcados e não se misturam aos oficiais', () => {
  assert.equal(colors.warning.status, 'proposta');
  assert.equal(colors.error.status, 'proposta');
  assert.equal(colors.border.status, 'proposta');
  assert.equal(json.primitives.amber[400].status, 'proposta');
  assert.equal(json.primitives.rose[400].status, 'proposta');
  assert.equal(json.primitives.slate[800].status, 'proposta');
  assert.match(css, /--cf-amber-400:.*\/\* proposta \*\//);
  assert.match(css, /--cf-rose-400:.*\/\* proposta \*\//);
  assert.match(css, /--cf-slate-800:.*\/\* proposta \*\//);
  assert.match(css, /\[data-theme='light'\]/);
  assert.match(css, /--cf-color-fg-accent:\s*var\(--cf-cyan-500\)/);
});

test('forced-colors remapeia papéis para cores de sistema', () => {
  assert.match(css, /@media \(forced-colors:\s*active\)/);
  assert.match(css, /--cf-color-bg-canvas:\s*Canvas/);
  assert.match(css, /--cf-color-fg-default:\s*CanvasText/);
  assert.match(css, /--cf-color-fg-accent:\s*LinkText/);
  assert.match(css, /--cf-color-action-primary-bg:\s*ButtonText/);
  assert.match(css, /--cf-color-focus-ring:\s*Highlight/);
});
