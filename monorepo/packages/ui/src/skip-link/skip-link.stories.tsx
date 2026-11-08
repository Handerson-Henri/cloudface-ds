import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkipLink } from './skip-link';
const meta = { title: 'Navegação/SkipLink', component: SkipLink } satisfies Meta<typeof SkipLink>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: {} };
