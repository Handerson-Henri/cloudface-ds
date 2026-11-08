import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from './code';
const meta = { title: 'Tipografia/Code', component: Code } satisfies Meta<typeof Code>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { children: 'pnpm dev' } };
