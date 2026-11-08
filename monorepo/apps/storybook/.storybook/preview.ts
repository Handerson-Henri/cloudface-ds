import type { Preview } from '@storybook/react-vite';
import { primitives } from '@cloudface/tokens';
import '@cloudface/tokens/css/variables.css';
import '@cloudface/assets/css/fonts.css';
import './preview.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Tema Cloudface',
      toolbar: {
        title: 'Tema',
        items: [
          { value: 'dark', title: 'Escuro' },
          { value: 'light', title: 'Claro' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      options: {
        canvas: { name: 'canvas', value: 'var(--cf-color-bg-canvas)' },
        surface: { name: 'surface', value: 'var(--cf-color-bg-surface)' },
        canvasLight: { name: 'canvas light', value: primitives.gray[50].value },
        surfaceLight: { name: 'surface light', value: primitives.navy[50].value },
      },
    },
    a11y: { test: 'error' },
  },
  initialGlobals: {
    theme: 'dark',
    backgrounds: { value: 'canvas' },
  },
  decorators: [
    (Story, context) => {
      const light = context.globals.theme === 'light';
      const root = document.documentElement;
      if (light) {
        root.setAttribute('data-theme', 'light');
      } else {
        root.removeAttribute('data-theme');
      }
      const bg = 'var(--cf-color-bg-canvas)';
      root.style.background = bg;
      document.body.style.background = bg;
      document.body.style.color = 'var(--cf-color-fg-default)';
      for (const el of document.querySelectorAll<HTMLElement>('.sb-show-main, #storybook-root')) {
        el.style.background = bg;
      }
      return Story();
    },
  ],
};

export default preview;
