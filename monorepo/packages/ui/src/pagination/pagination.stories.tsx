import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './pagination';

const meta = { title: 'Navegação/Pagination', component: Pagination } satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { page: 2, pages: 5, onChange: () => undefined },
};
export const Ellipsis: Story = {
  args: { page: 6, pages: 12, onChange: () => undefined },
};
