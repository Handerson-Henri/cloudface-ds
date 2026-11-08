import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from './progress';
const meta = { title: 'Feedback/ProgressBar', component: ProgressBar } satisfies Meta<typeof ProgressBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { value: 40 } };
export const Indeterminate: Story = { args: {} };
