import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './tabs';

const meta = { title: 'Navegação/Tabs', component: Tabs } satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { id: 'a', label: 'Um', panel: 'Painel A' },
      { id: 'b', label: 'Dois', panel: 'Painel B' },
    ],
  },
};
