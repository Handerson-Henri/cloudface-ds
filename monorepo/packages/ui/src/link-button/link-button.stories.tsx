import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkButton } from './link-button';
const meta = { title: 'Ações/LinkButton', component: LinkButton } satisfies Meta<typeof LinkButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Outline: Story = { args: { href: '#', children: 'Docs' } };
export const Primary: Story = { args: { href: '#', variant: 'primary', children: 'Abrir' } };
export const Ghost: Story = { args: { href: '#', variant: 'ghost', children: 'Ver' } };
