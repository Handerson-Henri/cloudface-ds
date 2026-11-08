import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Toast, ToastProvider, useToast } from './toast';

const meta = { title: 'Feedback/Toast' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Static: Story = {
  render: () => <Toast tone="info">Fila na região live</Toast>,
};

function PushDemo() {
  const { push } = useToast();
  return (
    <Button onClick={() => push('Host online', 'success')}>Disparar</Button>
  );
}

export const Provider: Story = {
  render: () => (
    <ToastProvider>
      <PushDemo />
    </ToastProvider>
  ),
};
