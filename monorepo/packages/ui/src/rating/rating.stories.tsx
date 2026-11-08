import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from './rating';
const meta = { title: 'Formulários/Rating', component: Rating } satisfies Meta<typeof Rating>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { name: 'r', label: 'Severidade', value: 3 } };
