import assert from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { color, colorLight } from '../dist/semantic.js';
import { contrastRatio } from '../dist/hex.js';

function collect(map, prefix) {
  return [
    [`${prefix} fg.default / bg.canvas`, map.fg.default.value, map.bg.canvas.value, 4.5, 'texto'],
    [`${prefix} fg.default / bg.surface`, map.fg.default.value, map.bg.surface.value, 4.5, 'texto'],
    [`${prefix} fg.muted / bg.canvas`, map.fg.muted.value, map.bg.canvas.value, 4.5, 'texto'],
    [`${prefix} fg.muted / bg.surface`, map.fg.muted.value, map.bg.surface.value, 4.5, 'texto'],
    [`${prefix} fg.accent / bg.canvas`, map.fg.accent.value, map.bg.canvas.value, 4.5, 'texto'],
    [`${prefix} fg.accent / bg.surface`, map.fg.accent.value, map.bg.surface.value, 4.5, 'texto'],
    [
      `${prefix} on-primary / primary`,
      map.action.primary.fg.value,
      map.action.primary.bg.value,
      4.5,
      'texto',
    ],
    [`${prefix} focus.ring / canvas`, map.focus.ring.value, map.bg.canvas.value, 3, 'ui'],
    [`${prefix} focus.ring / surface`, map.focus.ring.value, map.bg.surface.value, 3, 'ui'],
    [`${prefix} border.control / surface`, map.border.control.value, map.bg.surface.value, 3, 'ui'],
    [`${prefix} feedback.success / canvas`, map.feedback.success.value, map.bg.canvas.value, 3, 'ui'],
    [`${prefix} feedback.error / canvas`, map.feedback.error.value, map.bg.canvas.value, 3, 'ui'],
  ];
}

function table(rows) {
  return `| Par | Frente | Fundo | Razão | Mínimo | Resultado |
|---|---|---|---|---|---|
${rows
  .map(
    (r) =>
      `| ${r.name} | \`${r.fg}\` | \`${r.bg}\` | ${r.ratio}:1 | ${r.min}:1 (${r.kind}) | ${r.ok ? 'passa' : 'reprova'} |`,
  )
  .join('\n')}`;
}

test('contraste WCAG 2.2 dos pares semânticos dark e light', () => {
  const fails = [];
  const darkRows = [];
  const lightRows = [];

  for (const [name, fg, bg, min, kind] of collect(color, 'dark')) {
    const ratio = contrastRatio(fg, bg);
    const ok = ratio + 1e-6 >= min;
    darkRows.push({ name: name.replace(/^dark /, ''), fg, bg, ratio: ratio.toFixed(2), min, kind, ok });
    if (!ok) fails.push(`${name}: ${ratio.toFixed(2)}:1 < ${min}:1`);
  }

  for (const [name, fg, bg, min, kind] of collect(colorLight, 'light')) {
    const ratio = contrastRatio(fg, bg);
    const ok = ratio + 1e-6 >= min;
    lightRows.push({
      name: name.replace(/^light /, ''),
      fg,
      bg,
      ratio: ratio.toFixed(2),
      min,
      kind,
      ok,
    });
    if (!ok) fails.push(`${name}: ${ratio.toFixed(2)}:1 < ${min}:1`);
  }

  const md = `# Contraste medido (WCAG 2.2)

Data: 2026-11-08. Fórmula WCAG 2 relativa luminance. Âncoras oficiais não foram alteradas. Mapa light = proposta (onda 26).

## Dark (\`:root\`)

${table(darkRows)}

## Light (\`[data-theme="light"]\`, proposta)

${table(lightRows)}

Pares reprovados exigem ajuste de **semântico proposta**, nunca do HEX oficial.

## Overlay (onda 19 / 26)

- Dark: \`color-mix(in srgb, black 58%, transparent)\`.
- Light: \`color-mix(in srgb, navy.950 40%, transparent)\`.

Não é par texto/fundo; o critério é o dimming visível sobre a página, medido na vitrine.

## Proibidos

| Par | Razão | Uso permitido |
|---|---|---|
| \`color.brand.deep\` (#06279E) sobre canvas dark | ~1.67:1 | Só marca/gradiente, nunca texto ou ícone necessário |
`;
  writeFileSync(
    join(dirname(fileURLToPath(import.meta.url)), '../../../../harness/contraste.md'),
    md,
  );
  assert.equal(fails.join('\n'), '', fails.join('\n'));
});
