import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './divider';
const meta = { title: 'Estrutura/Divider', component: Divider } satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: {} };
export const Labeled: Story = { args: { label: 'ou' } };
export const Vertical: Story = { args: { orientation: 'vertical' } };
