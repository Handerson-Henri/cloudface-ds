import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './accordion';

const meta = { title: 'Estrutura/Accordion', component: Accordion } satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { items: [{ title: 'O que é', content: 'DS' }] },
};
