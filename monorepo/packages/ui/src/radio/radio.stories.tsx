import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './radio';
const meta = { title: 'Formulários/Radio', component: Radio } satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { label: 'A', name: 'r' } };
export const Checked: Story = { args: { label: 'A', name: 'r', defaultChecked: true } };
