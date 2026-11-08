import type { Meta, StoryObj } from '@storybook/react-vite';
import { Steps } from './steps';

const meta = { title: 'Navegação/Steps', component: Steps } satisfies Meta<typeof Steps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { steps: ['Conta', 'Rede', 'Pronto'], current: 1 },
};
