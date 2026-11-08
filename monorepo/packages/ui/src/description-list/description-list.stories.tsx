import type { Meta, StoryObj } from '@storybook/react-vite';
import { DescriptionList } from './description-list';
const meta = { title: 'Estrutura/DescriptionList', component: DescriptionList } satisfies Meta<typeof DescriptionList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { items: [{ term: 'Host', description: 'edge-1' }] },
};
