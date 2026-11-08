import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './drawer';

const meta = { title: 'Estrutura/Drawer', component: Drawer } satisfies Meta<typeof Drawer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: { open: true, title: 'Filtros', children: 'painel', onClose: () => undefined },
};

export const Bottom: Story = {
  args: {
    open: true,
    title: 'Filtros',
    children: 'painel',
    onClose: () => undefined,
    side: 'bottom',
  },
};
