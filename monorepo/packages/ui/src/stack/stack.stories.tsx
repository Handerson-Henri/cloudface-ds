import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from './stack';
const meta = { title: 'Layout/Stack', component: Stack } satisfies Meta<typeof Stack>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { children: 'item' } };
