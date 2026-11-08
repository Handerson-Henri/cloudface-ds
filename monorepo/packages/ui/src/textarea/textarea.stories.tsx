import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './textarea';
const meta = { title: 'Formulários/TextArea', component: TextArea } satisfies Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { 'aria-label': 'bio' } };
export const Invalid: Story = { args: { 'aria-label': 'bio', error: 'obrigatório' } };
export const Disabled: Story = { args: { 'aria-label': 'bio', disabled: true } };
