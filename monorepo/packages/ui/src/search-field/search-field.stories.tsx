import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchField } from './search-field';

const meta = { title: 'Formulários/SearchField', component: SearchField } satisfies Meta<typeof SearchField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { id: 'q', label: 'Buscar hosts', placeholder: 'edge-' },
};
export const Optional: Story = {
  args: { id: 'q2', label: 'Filtro', optional: true },
};
