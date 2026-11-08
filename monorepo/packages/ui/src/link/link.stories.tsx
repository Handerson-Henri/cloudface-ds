import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './link';
const meta = { title: 'Ações/Link', component: Link } satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { href: '#', children: 'Documentação' } };
