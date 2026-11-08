import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileInput } from './file-input';
const meta = { title: 'Formulários/FileInput', component: FileInput } satisfies Meta<typeof FileInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { id: 'f', label: 'Certificado' } };
