import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';
const meta = { title: 'Feedback/Spinner', component: Spinner } satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: {} };
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };
