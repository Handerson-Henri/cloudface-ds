import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './icon-button';
import { IconCheck, IconClose, IconPlus } from '../shared/icons';

const meta = { title: 'Ações/IconButton', component: IconButton } satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Ghost: Story = { args: { label: 'Fechar', children: <IconClose /> } };
export const Primary: Story = {
  args: { label: 'OK', children: <IconCheck />, variant: 'primary' },
};
export const Outline: Story = {
  args: { label: 'Mais', children: <IconPlus />, variant: 'outline' },
};
export const Large: Story = { args: { label: 'Fechar', children: <IconClose />, size: 'lg' } };
export const Loading: Story = { args: { label: 'Salvar', children: <IconClose />, loading: true } };
