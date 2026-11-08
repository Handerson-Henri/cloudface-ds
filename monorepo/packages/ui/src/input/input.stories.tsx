import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';

const meta = { title: 'Formulários/Input', component: Input } satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { 'aria-label': 'campo' } };
export const Small: Story = { args: { 'aria-label': 'campo', size: 'sm' } };
export const Large: Story = { args: { 'aria-label': 'campo', size: 'lg' } };
export const Invalid: Story = { args: { 'aria-label': 'campo', error: 'inválido' } };
export const Disabled: Story = { args: { 'aria-label': 'campo', disabled: true } };
export const ReadOnly: Story = { args: { 'aria-label': 'campo', readOnly: true, defaultValue: 'só leitura' } };
