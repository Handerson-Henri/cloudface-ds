import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../input/input';
import { Field } from './field';

const meta = {
  title: 'Formulários/Field',
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'email',
    label: 'E-mail',
    hint: 'trabalho',
    children: <Input />,
  },
};

export const Invalid: Story = {
  args: {
    id: 'email-erro',
    label: 'E-mail',
    error: 'E-mail inválido',
    children: <Input />,
  },
};

export const Optional: Story = {
  args: {
    id: 'nick',
    label: 'Apelido',
    optional: true,
    children: <Input />,
  },
};
