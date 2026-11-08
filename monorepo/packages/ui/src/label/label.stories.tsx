import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';
const meta = { title: 'Formulários/Label', component: Label } satisfies Meta<typeof Label>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { children: 'Nome', htmlFor: 'x' } };
export const Required: Story = { args: { children: 'Nome', htmlFor: 'x', required: true } };
export const Optional: Story = { args: { children: 'Nome', htmlFor: 'x', optional: true } };
