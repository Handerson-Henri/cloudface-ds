import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './text';
const meta = { title: 'Tipografia/Text', component: Text } satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Body: Story = { args: { children: 'Corpo Manrope.' } };
export const Content: Story = { args: { children: 'Conteúdo DM Sans.', family: 'content' } };
