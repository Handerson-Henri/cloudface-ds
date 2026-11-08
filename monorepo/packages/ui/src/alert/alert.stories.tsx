import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './alert';
const meta = { title: 'Feedback/Alert', component: Alert } satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Info: Story = { args: { tone: 'info', children: 'Info' } };
export const Success: Story = { args: { tone: 'success', children: 'Ok' } };
export const Warning: Story = { args: { tone: 'warning', children: 'Aviso' } };
export const Error: Story = { args: { tone: 'error', children: 'Erro' } };
