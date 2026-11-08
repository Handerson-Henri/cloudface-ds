import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateField } from './date-field';
const meta = { title: 'Formulários/DateField', component: DateField } satisfies Meta<typeof DateField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { id: 'd', label: 'Início' } };
