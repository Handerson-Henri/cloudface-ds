import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { PageHeader } from './page-header';

const meta = { title: 'Navegação/PageHeader' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <PageHeader
      title="Servidores"
      crumbs={[
        { href: '#', label: 'Home' },
        { label: 'Infra' },
      ]}
      actions={<Button size="sm">Novo</Button>}
    />
  ),
};
