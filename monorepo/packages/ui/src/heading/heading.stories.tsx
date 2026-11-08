import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './heading';
const meta = { title: 'Tipografia/Heading', component: Heading } satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const H1: Story = { args: { children: 'Servidores', level: 1 } };
export const H2: Story = { args: { children: 'Rede', level: 2 } };
export const H3: Story = { args: { children: 'Hosts', level: 3 } };
