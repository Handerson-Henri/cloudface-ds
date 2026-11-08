import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressCircle } from './progress-circle';
const meta = { title: 'Feedback/ProgressCircle', component: ProgressCircle } satisfies Meta<typeof ProgressCircle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { value: 40 } };
