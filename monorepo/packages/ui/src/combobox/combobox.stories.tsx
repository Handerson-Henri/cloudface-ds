import type { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox } from './combobox';

const meta = { title: 'Formulários/Combobox', component: Combobox } satisfies Meta<typeof Combobox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'b',
    options: [
      { value: 'a', label: 'Alpha' },
      { value: 'b', label: 'Beta' },
    ],
  },
};

export const Empty: Story = {
  args: {
    options: [],
    placeholder: 'Nada',
  },
};
