import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';
const meta = { title: 'Formulários/Checkbox', component: Checkbox } satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { label: 'Aceito' } };
export const Checked: Story = { args: { label: 'Aceito', defaultChecked: true } };
export const Disabled: Story = { args: { label: 'Aceito', disabled: true } };
export const Indeterminate: Story = { args: { label: 'Todos', indeterminate: true } };
