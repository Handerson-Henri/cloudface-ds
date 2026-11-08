import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './accordion/accordion';
import { Alert } from './alert/alert';
import { Avatar } from './avatar/avatar';
import { Badge } from './badge/badge';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { Checkbox } from './checkbox/checkbox';
import { Divider } from './divider/divider';
import { Drawer } from './drawer/drawer';
import { EmptyState } from './empty-state/empty-state';
import { Field } from './field/field';
import { IconButton } from './icon-button/icon-button';
import { IconClose } from './shared/icons';
import { LinkButton } from './link-button/link-button';
import { Modal } from './modal/modal';
import { Pagination } from './pagination/pagination';
import { ProgressBar } from './progress/progress';
import { Radio } from './radio/radio';
import { Select } from './select/select';
import { Skeleton } from './skeleton/skeleton';
import { Spinner } from './spinner/spinner';
import { Steps } from './steps/steps';
import { Switch } from './switch/switch';
import { Table } from './table/table';
import { Tabs } from './tabs/tabs';
import { TextArea } from './textarea/textarea';
import { Toast } from './toast/toast';
import { Tooltip } from './tooltip/tooltip';
import { Topbar } from './topbar/topbar';

const meta = { title: 'Catálogo' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Feedback: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Alert tone="info">Info</Alert>
      <Alert tone="success">Ok</Alert>
      <Alert tone="warning">Aviso</Alert>
      <Alert tone="error">Erro</Alert>
      <Toast tone="info">Toast</Toast>
      <Spinner />
      <ProgressBar value={40} />
      <Skeleton width={180} />
      <Tooltip content="Ajuda persistente">
        <span style={{ color: 'var(--cf-color-fg-default)' }}>Hover</span>
      </Tooltip>
      <Badge variant="success">Online</Badge>
    </div>
  ),
};

export const Forms: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, color: 'var(--cf-color-fg-default)' }}>
      <Field id="bio" label="Bio">
        <TextArea />
      </Field>
      <Checkbox label="Aceito" />
      <Radio name="r" label="A" defaultChecked />
      <Radio name="r" label="B" />
      <Switch label="Ativo" />
      <Field id="opcao" label="Opção">
        <Select>
          <option>Um</option>
        </Select>
      </Field>
    </div>
  ),
};

export const Navigation: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Topbar
        start="Cloudface"
        end={
          <>
            <IconButton label="Fechar">
              <IconClose />
            </IconButton>
            <LinkButton href="#docs">Docs</LinkButton>
          </>
        }
      />
      <Breadcrumbs
        items={[
          { href: '#', label: 'Home' },
          { label: 'Docs' },
        ]}
      />
      <Tabs
        tabs={[
          { id: 'a', label: 'Um', panel: 'Painel A' },
          { id: 'b', label: 'Dois', panel: 'Painel B' },
        ]}
      />
      <Pagination page={2} pages={5} onChange={() => undefined} />
    </div>
  ),
};

export const Structure: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, color: 'var(--cf-color-fg-default)' }}>
      <Avatar name="Cloud Face" />
      <Divider />
      <Table>
        <thead>
          <tr>
            <th>Host</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>edge-1</td>
          </tr>
        </tbody>
      </Table>
      <Accordion items={[{ title: 'O que é', content: 'DS' }]} />
      <EmptyState title="Vazio">Nada ainda.</EmptyState>
      <Steps steps={['Conta', 'Rede', 'Pronto']} current={1} />
      <Modal open title="Confirmar" onClose={() => undefined}>
        texto
      </Modal>
      <Drawer open={false} title="Filtros" onClose={() => undefined}>
        painel
      </Drawer>
    </div>
  ),
};
