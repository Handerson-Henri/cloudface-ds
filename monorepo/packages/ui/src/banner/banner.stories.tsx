import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './banner';
const meta = { title: 'Feedback/Banner', component: Banner } satisfies Meta<typeof Banner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Info: Story = { args: { title: 'Incidente', children: 'Latência alta na borda.' } };
