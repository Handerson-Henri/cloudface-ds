import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './tooltip';

const meta = { title: 'Feedback/Tooltip', component: Tooltip } satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Ajuda persistente',
    children: <span style={{ color: 'var(--cf-color-fg-default)' }}>Hover</span>,
  },
};
