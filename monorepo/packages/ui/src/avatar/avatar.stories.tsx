import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './avatar';
const meta = { title: 'Estrutura/Avatar', component: Avatar } satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Initials: Story = { args: { name: 'Cloud Face' } };
export const Small: Story = { args: { name: 'Cloud Face', size: 'sm' } };
export const Large: Story = { args: { name: 'Cloud Face', size: 'lg' } };
