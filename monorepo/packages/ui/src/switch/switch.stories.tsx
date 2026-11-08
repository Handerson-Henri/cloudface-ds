import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';
const meta = { title: 'Formulários/Switch', component: Switch } satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { label: 'Ativo' } };
export const On: Story = { args: { label: 'Ativo', defaultChecked: true } };
export const Disabled: Story = { args: { label: 'Ativo', disabled: true } };
