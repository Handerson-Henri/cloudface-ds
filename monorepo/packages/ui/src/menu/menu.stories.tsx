import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './menu';
const meta = { title: 'Estrutura/Menu', component: Menu } satisfies Meta<typeof Menu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: 'Ações',
    items: [
      { id: 'a', label: 'Editar', onSelect: () => undefined },
      { id: 'b', label: 'Apagar', onSelect: () => undefined },
    ],
  },
};
