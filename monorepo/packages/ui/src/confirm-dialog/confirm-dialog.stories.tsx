import type { Meta, StoryObj } from '@storybook/react-vite';
import { ConfirmDialog } from './confirm-dialog';

const meta = { title: 'Estrutura/ConfirmDialog', component: ConfirmDialog } satisfies Meta<typeof ConfirmDialog>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Destructive: Story = {
  args: {
    open: true,
    title: 'Apagar host',
    children: 'Esta ação é irreversível.',
    destructive: true,
    onClose: () => undefined,
    onConfirm: () => undefined,
  },
};
