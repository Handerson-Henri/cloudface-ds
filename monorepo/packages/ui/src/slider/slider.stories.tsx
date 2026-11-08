import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './slider';
const meta = { title: 'Formulários/Slider', component: Slider } satisfies Meta<typeof Slider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { id: 's', label: 'CPU', defaultValue: 40 } };
