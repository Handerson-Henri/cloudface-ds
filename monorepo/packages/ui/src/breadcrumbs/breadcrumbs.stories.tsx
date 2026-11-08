import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './breadcrumbs';

const meta = { title: 'Navegação/Breadcrumbs', component: Breadcrumbs } satisfies Meta<typeof Breadcrumbs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { href: '#', label: 'Home' },
      { label: 'Docs' },
    ],
  },
};
