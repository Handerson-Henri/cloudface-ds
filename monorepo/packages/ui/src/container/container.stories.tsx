import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './container';
const meta = { title: 'Layout/Container', component: Container } satisfies Meta<typeof Container>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { children: 'conteúdo' } };
