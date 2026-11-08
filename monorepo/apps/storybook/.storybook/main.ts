import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const monorepoRoot = fileURLToPath(new URL('../../..', import.meta.url));

const config: StorybookConfig = {
  stories: ['../../../packages/ui/src/**/*.stories.tsx'],
  addons: ['@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
  async viteFinal(viteConfig) {
    const assetsRoot = fileURLToPath(new URL('../../../packages/assets', import.meta.url));
    viteConfig.resolve = {
      ...viteConfig.resolve,
      alias: {
        ...(typeof viteConfig.resolve?.alias === 'object' && !Array.isArray(viteConfig.resolve.alias)
          ? viteConfig.resolve.alias
          : {}),
        '@cloudface/assets': assetsRoot,
      },
    };
    viteConfig.server = {
      ...viteConfig.server,
      allowedHosts: true,
      fs: {
        ...viteConfig.server?.fs,
        allow: [...new Set([...(viteConfig.server?.fs?.allow ?? []), monorepoRoot])],
      },
    };
    return viteConfig;
  },
};

export default config;
