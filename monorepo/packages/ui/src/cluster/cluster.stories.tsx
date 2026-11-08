import type { Meta, StoryObj } from '@storybook/react-vite';
import { Cluster } from './cluster';
const meta = { title: 'Layout/Cluster', component: Cluster } satisfies Meta<typeof Cluster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { children: 'item' } };
