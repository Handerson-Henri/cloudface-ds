import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { EmptyState } from './empty-state';

const meta = { title: 'Estrutura/EmptyState', component: EmptyState } satisfies Meta<
  typeof EmptyState
>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { title: 'Vazio', children: 'Nada ainda.' } };
export const WithAction: Story = {
  args: {
    title: 'Vazio',
    children: 'Nada ainda.',
    action: <Button size="sm">Criar</Button>,
  },
};
