import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta = {
  title: 'Ações/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { children: 'Conectar' } };
export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secundário' },
};
export const Outline: Story = {
  args: { variant: 'outline', children: 'Detalhes' },
};
export const Ghost: Story = { args: { variant: 'ghost', children: 'Discreto' } };
export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Excluir' },
};
export const Loading: Story = { args: { loading: true, children: 'Salvar' } };
export const Disabled: Story = { args: { disabled: true, children: 'Off' } };
export const WithIcon: Story = {
  args: { children: 'Conectar', icon: '→' },
};
export const Small: Story = { args: { size: 'sm', children: 'sm' } };
export const Large: Story = { args: { size: 'lg', children: 'lg' } };
