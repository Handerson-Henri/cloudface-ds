import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';
const meta = { title: 'Formulários/Select', component: Select } satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { 'aria-label': 'opção', children: <option>Um</option> } };
export const Invalid: Story = { args: { 'aria-label': 'opção', error: 'escolha', children: <option>Um</option> } };
