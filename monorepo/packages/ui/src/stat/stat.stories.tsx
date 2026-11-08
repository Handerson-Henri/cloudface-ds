import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stat } from './stat';
const meta = { title: 'Estrutura/Stat', component: Stat } satisfies Meta<typeof Stat>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { value: '12 ms', label: 'Latência' } };
export const Delta: Story = { args: { value: '12 ms', label: 'Latência', delta: '-4%' } };
