import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../badge/badge';
import { IconGrid } from '../shared/icons';
import { Label } from '../label/label';
import { Sidebar } from './sidebar';
import { SidebarFooter } from './sidebar-footer';
import { SidebarGroup } from './sidebar-group';
import { SidebarHeader } from './sidebar-header';
import { SidebarItem } from './sidebar-item';
import { SidebarSection } from './sidebar-section';

const meta = { title: 'Navegação/Sidebar' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <Label>Infra</Label>
        <SidebarItem current icon={<IconGrid />}>
          Servidores <Badge>3</Badge>
        </SidebarItem>
        <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
      </SidebarSection>
      <SidebarFooter>
        <Badge variant="success">Online</Badge>
      </SidebarFooter>
    </Sidebar>
  ),
};

export const Nested: Story = {
  render: () => (
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <SidebarGroup label="Infra" icon={<IconGrid />}>
          <SidebarItem current icon={<IconGrid />}>
            Servidores
          </SidebarItem>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
        <SidebarGroup label="Conta" icon={<IconGrid />}>
          <SidebarItem icon={<IconGrid />}>Perfil</SidebarItem>
          <SidebarItem icon={<IconGrid />}>Sessões</SidebarItem>
        </SidebarGroup>
      </SidebarSection>
      <SidebarFooter>
        <Badge variant="success">Online</Badge>
      </SidebarFooter>
    </Sidebar>
  ),
};

export const NestedParentIcon: Story = {
  name: 'Pai com ícone',
  render: () => (
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <SidebarGroup
          label="Infra"
          icon={<IconGrid />}
          showIcon
          defaultOpen
        >
          <SidebarItem current icon={<IconGrid />}>
            Servidores
          </SidebarItem>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </SidebarSection>
    </Sidebar>
  ),
};

export const NestedClosed: Story = {
  name: 'Default fechado',
  render: () => (
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <SidebarGroup label="Infra" icon={<IconGrid />} defaultOpen={false}>
          <SidebarItem icon={<IconGrid />}>Servidores</SidebarItem>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </SidebarSection>
    </Sidebar>
  ),
};

export const NestedMixed: Story = {
  name: 'Níveis mistos',
  render: () => (
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <SidebarGroup label="Infra" icon={<IconGrid />}>
          <SidebarItem icon={<IconGrid />}>Servidores</SidebarItem>
          <SidebarGroup label="Regiões" icon={<IconGrid />} defaultOpen={false}>
            <SidebarItem current icon={<IconGrid />}>
              São Paulo
            </SidebarItem>
            <SidebarItem icon={<IconGrid />}>Oregon</SidebarItem>
          </SidebarGroup>
        </SidebarGroup>
      </SidebarSection>
    </Sidebar>
  ),
};

export const NestedStaticOpen: Story = {
  name: 'Não clicável aberto',
  render: () => (
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <SidebarGroup label="Infra" icon={<IconGrid />} collapsible={false}>
          <SidebarItem current icon={<IconGrid />}>
            Servidores
          </SidebarItem>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </SidebarSection>
    </Sidebar>
  ),
};

export const NestedStaticClosed: Story = {
  name: 'Não clicável fechado',
  render: () => (
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <SidebarGroup
          label="Infra"
          icon={<IconGrid />}
          defaultOpen={false}
          collapsible={false}
        >
          <SidebarItem icon={<IconGrid />}>Servidores</SidebarItem>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </SidebarSection>
    </Sidebar>
  ),
};

export const NestedChevron: Story = {
  render: () => (
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <SidebarGroup label="Infra" icon={<IconGrid />} showChevron defaultOpen>
          <SidebarItem current icon={<IconGrid />}>
            Servidores
          </SidebarItem>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </SidebarSection>
    </Sidebar>
  ),
};

export const NestedDeep: Story = {
  name: 'Três níveis',
  render: () => (
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <SidebarGroup label="Infra" icon={<IconGrid />} defaultOpen>
          <SidebarItem icon={<IconGrid />}>Servidores</SidebarItem>
          <SidebarGroup label="Regiões" icon={<IconGrid />} defaultOpen>
            <SidebarItem current icon={<IconGrid />}>
              São Paulo
            </SidebarItem>
            <SidebarItem icon={<IconGrid />}>Oregon</SidebarItem>
          </SidebarGroup>
        </SidebarGroup>
      </SidebarSection>
      <SidebarFooter>
        <Badge variant="success">Online</Badge>
      </SidebarFooter>
    </Sidebar>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Sidebar collapsed>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <Label>Infra</Label>
        <SidebarItem current icon={<IconGrid />}>
          Servidores
        </SidebarItem>
        <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
      </SidebarSection>
    </Sidebar>
  ),
};
