import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './modal';

const meta = { title: 'Estrutura/Modal', component: Modal } satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: { open: true, title: 'Confirmar', children: 'texto', onClose: () => undefined },
};
