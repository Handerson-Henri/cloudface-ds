import { useEffect, useState, type ReactNode } from 'react';
import {
  Accordion,
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Banner,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Cluster,
  Code,
  Combobox,
  ConfirmDialog,
  Container,
  DateField,
  DescriptionList,
  Divider,
  Drawer,
  EmptyState,
  Field,
  FileInput,
  Heading,
  IconButton,
  IconCheck,
  IconClose,
  IconGrid,
  IconInfo,
  IconMenu,
  IconPlus,
  IconSearch,
  Input,
  Kbd,
  Label,
  Link,
  LinkButton,
  Menu,
  Modal,
  PageHeader,
  Pagination,
  Popover,
  ProgressBar,
  ProgressCircle,
  Radio,
  RadioGroup,
  Rating,
  SearchField,
  Select,
  Sidebar,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  Skeleton,
  SkipLink,
  Slider,
  Spinner,
  Stack,
  Stat,
  Steps,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Text,
  TextArea,
  ToastProvider,
  Tooltip,
  Topbar,
  useToast,
} from '@cloudface/ui';
import { colors, radius, space, text } from '@cloudface/tokens';
import logoLight from '@cloudface/assets/logos/Cloudface-logo-light.png';
import logoDark from '@cloudface/assets/logos/Cloudface-logo-dark.png';
import mark from '@cloudface/assets/logos/Cloudface-mark.svg';
import moebiusLoop from '@cloudface/assets/movimento/cloudface-moebius-loop-symbol.svg';
import moebiusLight from '@cloudface/assets/movimento/cloudface-moebius-loop-light.svg';

type DocsTheme = 'dark' | 'light';

type Page = string;

const nav: { id: Page; label: string; group: string }[] = [
  { id: 'principios', label: 'Princípios', group: 'Spec' },
  { id: 'tokens', label: 'Tokens', group: 'Spec' },
  { id: 'identidade', label: 'Identidade', group: 'Spec' },
  { id: 'button', label: 'Button', group: 'Ações' },
  { id: 'icon-button', label: 'IconButton', group: 'Ações' },
  { id: 'link-button', label: 'LinkButton', group: 'Ações' },
  { id: 'link', label: 'Link', group: 'Ações' },
  { id: 'input', label: 'Input', group: 'Formulários' },
  { id: 'label', label: 'Label', group: 'Formulários' },
  { id: 'field', label: 'Field', group: 'Formulários' },
  { id: 'textarea', label: 'TextArea', group: 'Formulários' },
  { id: 'checkbox', label: 'Checkbox', group: 'Formulários' },
  { id: 'radio', label: 'Radio', group: 'Formulários' },
  { id: 'switch', label: 'Switch', group: 'Formulários' },
  { id: 'select', label: 'Select', group: 'Formulários' },
  { id: 'checkbox-group', label: 'CheckboxGroup', group: 'Formulários' },
  { id: 'radio-group', label: 'RadioGroup', group: 'Formulários' },
  { id: 'search-field', label: 'SearchField', group: 'Formulários' },
  { id: 'combobox', label: 'Combobox', group: 'Formulários' },
  { id: 'file-input', label: 'FileInput', group: 'Formulários' },
  { id: 'date-field', label: 'DateField', group: 'Formulários' },
  { id: 'slider', label: 'Slider', group: 'Formulários' },
  { id: 'rating', label: 'Rating', group: 'Formulários' },
  { id: 'badge', label: 'Badge', group: 'Feedback' },
  { id: 'alert', label: 'Alert', group: 'Feedback' },
  { id: 'banner', label: 'Banner', group: 'Feedback' },
  { id: 'toast', label: 'Toast', group: 'Feedback' },
  { id: 'spinner', label: 'Spinner', group: 'Feedback' },
  { id: 'progress', label: 'ProgressBar', group: 'Feedback' },
  { id: 'progress-circle', label: 'ProgressCircle', group: 'Feedback' },
  { id: 'tooltip', label: 'Tooltip', group: 'Feedback' },
  { id: 'skeleton', label: 'Skeleton', group: 'Feedback' },
  { id: 'sidebar', label: 'Sidebar', group: 'Navegação' },
  { id: 'tabs', label: 'Tabs', group: 'Navegação' },
  { id: 'breadcrumbs', label: 'Breadcrumbs', group: 'Navegação' },
  { id: 'pagination', label: 'Pagination', group: 'Navegação' },
  { id: 'topbar', label: 'Topbar', group: 'Navegação' },
  { id: 'steps', label: 'Steps', group: 'Navegação' },
  { id: 'skip-link', label: 'SkipLink', group: 'Navegação' },
  { id: 'page-header', label: 'PageHeader', group: 'Navegação' },
  { id: 'card', label: 'Card', group: 'Estrutura' },
  { id: 'divider', label: 'Divider', group: 'Estrutura' },
  { id: 'avatar', label: 'Avatar', group: 'Estrutura' },
  { id: 'avatar-group', label: 'AvatarGroup', group: 'Estrutura' },
  { id: 'table', label: 'Table', group: 'Estrutura' },
  { id: 'accordion', label: 'Accordion', group: 'Estrutura' },
  { id: 'modal', label: 'Modal', group: 'Estrutura' },
  { id: 'drawer', label: 'Drawer', group: 'Estrutura' },
  { id: 'popover', label: 'Popover', group: 'Estrutura' },
  { id: 'menu', label: 'Menu', group: 'Estrutura' },
  { id: 'empty-state', label: 'EmptyState', group: 'Estrutura' },
  { id: 'confirm-dialog', label: 'ConfirmDialog', group: 'Estrutura' },
  { id: 'stat', label: 'Stat', group: 'Estrutura' },
  { id: 'description-list', label: 'DescriptionList', group: 'Estrutura' },
  { id: 'heading', label: 'Heading', group: 'Tipografia' },
  { id: 'text', label: 'Text', group: 'Tipografia' },
  { id: 'code', label: 'Code', group: 'Tipografia' },
  { id: 'kbd', label: 'Kbd', group: 'Tipografia' },
  { id: 'stack', label: 'Stack', group: 'Layout' },
  { id: 'cluster', label: 'Cluster', group: 'Layout' },
  { id: 'container', label: 'Container', group: 'Layout' },
];

function groupIcon(group: string) {
  if (group === 'Formulários') return <IconSearch />;
  if (group === 'Feedback') return <IconInfo />;
  return <IconGrid />;
}

export function App() {
  return (
    <ToastProvider>
      <Shell />
    </ToastProvider>
  );
}

function Shell() {
  const [page, setPage] = useState<Page>('principios');
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState<DocsTheme>('dark');
  const groups = [...new Set(nav.map((item) => item.group))];

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [theme]);

  return (
    <div className="layout">
      <SkipLink />
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>
          {collapsed ? (
            <img className="cf-docs-mark" src={mark} alt="Cloudface" />
          ) : theme === 'light' ? (
            <span className="cf-docs-brand">
              <img className="cf-docs-mark" src={mark} alt="" />
              <span className="cf-docs-wordmark">Cloudface</span>
            </span>
          ) : (
            <img className="cf-docs-logo" src={logoLight} alt="Cloudface" />
          )}
        </SidebarHeader>
        {groups.map((group) => {
          const items = nav.filter((item) => item.group === group);
          const overlays =
            group === 'Estrutura'
              ? items.filter((item) =>
                  ['modal', 'drawer', 'popover', 'menu'].includes(item.id),
                )
              : [];
          const roots = overlays.length
            ? items.filter((item) => !overlays.some((overlay) => overlay.id === item.id))
            : items;
          return (
            <SidebarSection key={group}>
              <SidebarGroup
                label={group}
                icon={groupIcon(group)}
                defaultOpen
                collapsible={false}
              >
                {roots.map((item) => (
                  <SidebarItem
                    key={item.id}
                    current={page === item.id}
                    icon={groupIcon(group)}
                    onClick={() => setPage(item.id)}
                  >
                    {item.label}
                  </SidebarItem>
                ))}
                {overlays.length ? (
                  <SidebarGroup
                    label="Overlay"
                    icon={groupIcon(group)}
                    defaultOpen
                    collapsible={false}
                  >
                    {overlays.map((item) => (
                      <SidebarItem
                        key={item.id}
                        current={page === item.id}
                        icon={groupIcon(group)}
                        onClick={() => setPage(item.id)}
                      >
                        {item.label}
                      </SidebarItem>
                    ))}
                  </SidebarGroup>
                ) : null}
              </SidebarGroup>
            </SidebarSection>
          );
        })}
        <SidebarFooter>
          <Switch
            label="Tema claro"
            checked={theme === 'light'}
            onChange={(event) => setTheme(event.target.checked ? 'light' : 'dark')}
          />
          <Badge variant="success">Online</Badge>
        </SidebarFooter>
      </Sidebar>
      <div className="shell">
        <Topbar
          start={
            <IconButton
              label={collapsed ? 'Expandir menu' : 'Recolher menu'}
              onClick={() => setCollapsed((v) => !v)}
            >
              <IconMenu />
            </IconButton>
          }
        />
        <main className="main" id="conteudo">
          {renderPage(page)}
        </main>
      </div>
    </div>
  );
}

function Demo({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <h1>{title}</h1>
      <p className="muted">Spec em harness/ui. Esta página é só a vitrine ao vivo.</p>
      {children}
    </>
  );
}

function ToastPage() {
  const { push } = useToast();
  return (
    <Demo title="Toast">
      <Button onClick={() => push('Host online', 'success')}>Disparar toast</Button>
    </Demo>
  );
}

function PaginationPage() {
  const [page, setPage] = useState(2);
  return (
    <Demo title="Pagination">
      <Pagination page={page} pages={12} onChange={setPage} />
    </Demo>
  );
}

function OverlayPage({
  title,
  kind,
}: {
  title: string;
  kind: 'modal' | 'confirm';
}) {
  const [open, setOpen] = useState(false);
  return (
    <Demo title={title}>
      <Button onClick={() => setOpen(true)}>Abrir</Button>
      {kind === 'modal' ? (
        <Modal open={open} title="Confirmar" onClose={() => setOpen(false)}>
          texto
        </Modal>
      ) : null}
      {kind === 'confirm' ? (
        <ConfirmDialog
          open={open}
          title="Apagar host"
          destructive
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        >
          Esta ação é irreversível.
        </ConfirmDialog>
      ) : null}
    </Demo>
  );
}

function DrawerPage() {
  const [side, setSide] = useState<'right' | 'bottom' | null>(null);
  return (
    <Demo title="Drawer">
      <div className="row">
        <Button onClick={() => setSide('right')}>Lateral</Button>
        <Button onClick={() => setSide('bottom')}>Embaixo</Button>
      </div>
      <Drawer
        open={side != null}
        title="Filtros"
        onClose={() => setSide(null)}
        side={side ?? 'right'}
      >
        painel
      </Drawer>
    </Demo>
  );
}

function RatingPage() {
  const [value, setValue] = useState(3);
  return (
    <Demo title="Rating">
      <Rating name="sev" label="Severidade" value={value} onChange={setValue} />
    </Demo>
  );
}

function PopoverPage() {
  const [open, setOpen] = useState(false);
  return (
    <Demo title="Popover">
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        trigger={
          <Button size="sm" onClick={() => setOpen((v) => !v)}>
            Abrir
          </Button>
        }
      >
        Filtros da borda
      </Popover>
    </Demo>
  );
}

function renderPage(page: Page) {
  switch (page) {
    case 'principios':
      return (
        <>
          <h1>Princípios</h1>
          <p>Infraestrutura de rede, precisão técnica e movimento contínuo.</p>
        </>
      );
    case 'tokens': {
      const official = Object.entries(colors).filter(([, t]) => t.status === 'oficial');
      const proposed = Object.entries(colors).filter(([, t]) => t.status === 'proposta');
      return (
        <>
          <h1>Tokens</h1>
          <h2>Oficiais</h2>
          <div className="row">
            {official.map(([name, token]) => (
              <div className="swatch" key={name}>
                <div className="swatch__chip" style={{ background: token.value }} />
                <span>{name}</span>
                <span className="muted">{token.value}</span>
              </div>
            ))}
          </div>
          <h2>Proposta</h2>
          <div className="row">
            {proposed.map(([name, token]) => (
              <div className="swatch" key={name}>
                <div className="swatch__chip" style={{ background: token.value }} />
                <span>{name}</span>
                <span className="muted">{token.value} · proposta</span>
              </div>
            ))}
          </div>
          <h2>Espaço</h2>
          <div className="row">
            {Object.entries(space).map(([name, token]) => (
              <div className="swatch" key={name}>
                <div
                  className="swatch__chip"
                  style={{
                    width: token.value,
                    height: token.value,
                    background: 'var(--cf-color-action-primary-bg)',
                  }}
                />
                <span>{name}</span>
                <span className="muted">{token.value}</span>
              </div>
            ))}
          </div>
          <h2>Raio</h2>
          <div className="row">
            {Object.entries(radius).map(([name, token]) => (
              <div className="swatch" key={name}>
                <div
                  className="swatch__chip"
                  style={{
                    width: 40,
                    height: 40,
                    background: 'var(--cf-color-bg-surface-raised)',
                    border: '1px solid var(--cf-color-border-control)',
                    borderRadius: token.value,
                  }}
                />
                <span>{name}</span>
                <span className="muted">{token.value}</span>
              </div>
            ))}
          </div>
          <h2>Texto</h2>
          <div className="row">
            {Object.entries(text).map(([name, token]) => (
              <div className="swatch" key={name}>
                <span style={{ fontSize: token.size, lineHeight: token.lineHeight }}>Aa</span>
                <span>{name}</span>
                <span className="muted">
                  {token.size}/{token.lineHeight}
                </span>
              </div>
            ))}
          </div>
        </>
      );
    }
    case 'identidade':
      return (
        <>
          <h1>Identidade</h1>
          <p className="muted">Pacote Cloudface-ID-Visual em @cloudface/assets. PVC e referências ficam fora do monorepo.</p>
          <h2>Logo claro</h2>
          <div className="cf-docs-asset cf-docs-asset--dark">
            <img src={logoLight} alt="Cloudface em fundo escuro" style={{ maxWidth: 240, height: 'auto' }} />
          </div>
          <h2>Logo escuro</h2>
          <p className="muted">Arquivo oficial `Cloudface-logo-dark.png`: wordmark claro, lê-se sobre fundo escuro.</p>
          <div className="cf-docs-asset cf-docs-asset--dark">
            <img src={logoDark} alt="Cloudface (arquivo dark do pacote)" style={{ maxWidth: 240, height: 'auto' }} />
          </div>
          <h2>Símbolo</h2>
          <img src={mark} alt="Símbolo Cloudface" width={48} height={48} />
          <h2>Möbius em loop</h2>
          <img src={moebiusLoop} alt="Fita de Möbius em movimento" style={{ maxWidth: 160, height: 'auto' }} />
          <h2>Möbius claro</h2>
          <div className="cf-docs-asset cf-docs-asset--light">
            <img src={moebiusLight} alt="Möbius para fundo claro" style={{ maxWidth: 240, height: 'auto' }} />
          </div>
        </>
      );
    case 'button':
      return (
        <Demo title="Button">
          <div className="row">
            <Button icon={<IconPlus />}>Conectar</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="outline">Detalhes</Button>
            <Button variant="ghost">Discreto</Button>
            <Button variant="destructive">Excluir</Button>
            <Button loading>Salvar</Button>
            <Button disabled>Off</Button>
            <Button size="sm">sm</Button>
          </div>
        </Demo>
      );
    case 'icon-button':
      return (
        <Demo title="IconButton">
          <div className="row">
            <IconButton label="Fechar">
              <IconClose />
            </IconButton>
            <IconButton label="Ok" variant="primary">
              <IconCheck />
            </IconButton>
            <IconButton label="Mais" variant="outline" size="lg">
              <IconPlus />
            </IconButton>
            <IconButton label="Off" disabled>
              <IconClose />
            </IconButton>
          </div>
        </Demo>
      );
    case 'link-button':
      return (
        <Demo title="LinkButton">
          <div className="row">
            <LinkButton href="#docs">Docs</LinkButton>
            <LinkButton href="#docs" variant="primary" size="sm">
              sm
            </LinkButton>
            <LinkButton href="#docs" aria-current="page">
              atual
            </LinkButton>
          </div>
        </Demo>
      );
    case 'link':
      return (
        <Demo title="Link">
          <p>
            Veja a <Link href="#docs">documentação</Link>.
          </p>
        </Demo>
      );
    case 'input':
      return (
        <Demo title="Input">
          <div className="field">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="voce@cloudface.com" />
          </div>
          <div className="field">
            <Input aria-label="erro" error="inválido" placeholder="erro" />
            <Input aria-label="off" disabled placeholder="disabled" />
            <Input aria-label="ro" readOnly value="somente leitura" />
          </div>
        </Demo>
      );
    case 'label':
      return (
        <Demo title="Label">
          <Label htmlFor="nome" required>
            Nome
          </Label>
          <Label htmlFor="op" optional>
            Apelido
          </Label>
        </Demo>
      );
    case 'field':
      return (
        <Demo title="Field">
          <Field id="f" label="E-mail" hint="trabalho" optional>
            <Input />
          </Field>
          <Field id="e" label="Host" error="obrigatório">
            <Input />
          </Field>
          <Field id="off" label="Desligado">
            <Input disabled />
          </Field>
        </Demo>
      );
    case 'textarea':
      return (
        <Demo title="TextArea">
          <TextArea aria-label="bio sm" size="sm" placeholder="sm" />
          <TextArea aria-label="bio md" size="md" placeholder="md" />
          <TextArea aria-label="bio lg" size="lg" placeholder="lg" />
          <TextArea aria-label="off" disabled placeholder="disabled" />
          <TextArea aria-label="ro" readOnly value="somente leitura" />
        </Demo>
      );
    case 'checkbox':
      return (
        <Demo title="Checkbox">
          <Checkbox label="Aceito" />
          <Checkbox label="Todos" indeterminate />
          <Checkbox label="Off" disabled />
        </Demo>
      );
    case 'radio':
      return (
        <Demo title="Radio">
          <Radio name="r" label="A" defaultChecked />
          <Radio name="r" label="B" />
          <Radio name="r" label="Off" disabled />
        </Demo>
      );
    case 'switch':
      return (
        <Demo title="Switch">
          <Switch label="Ativo" />
          <Switch label="Off" disabled />
        </Demo>
      );
    case 'select':
      return (
        <Demo title="Select">
          <p className="muted">Nativo, listas curtas. Combobox para busca.</p>
          <Select aria-label="região">
            <option>sa-east-1</option>
            <option>us-east-1</option>
            <option>eu-west-1</option>
            <option>ap-southeast-1</option>
          </Select>
        </Demo>
      );
    case 'checkbox-group':
      return (
        <Demo title="CheckboxGroup">
          <CheckboxGroup legend="Regiões">
            <Checkbox label="sa-east-1" />
            <Checkbox label="us-east-1" />
          </CheckboxGroup>
        </Demo>
      );
    case 'radio-group':
      return (
        <Demo title="RadioGroup">
          <RadioGroup legend="Plano" name="plano">
            <Radio label="Edge" defaultChecked />
            <Radio label="Core" />
          </RadioGroup>
        </Demo>
      );
    case 'search-field':
      return (
        <Demo title="SearchField">
          <SearchField id="q" label="Buscar hosts" placeholder="edge-" />
        </Demo>
      );
    case 'combobox':
      return (
        <Demo title="Combobox">
          <div className="field">
            <Combobox
              options={[
                { value: 'a', label: 'Alpha' },
                { value: 'b', label: 'Beta' },
              ]}
            />
            <Combobox options={[]} />
          </div>
        </Demo>
      );
    case 'file-input':
      return (
        <Demo title="FileInput">
          <FileInput id="cert" label="Certificado" />
        </Demo>
      );
    case 'date-field':
      return (
        <Demo title="DateField">
          <DateField id="ini" label="Início" />
        </Demo>
      );
    case 'slider':
      return (
        <Demo title="Slider">
          <Slider id="cpu" label="CPU" defaultValue={40} />
        </Demo>
      );
    case 'rating':
      return <RatingPage />;
    case 'badge':
      return (
        <Demo title="Badge">
          <div className="row">
            <Badge>default</Badge>
            <Badge variant="info">info</Badge>
            <Badge variant="success">Online</Badge>
            <Badge variant="warning" size="sm">
              sm
            </Badge>
            <Badge variant="error">Offline</Badge>
          </div>
        </Demo>
      );
    case 'alert':
      return (
        <Demo title="Alert">
          <Stack>
            <Alert tone="info">Info</Alert>
            <Alert tone="success">Ok</Alert>
            <Alert tone="warning">Atenção</Alert>
            <Alert tone="error">Falhou</Alert>
          </Stack>
        </Demo>
      );
    case 'banner':
      return (
        <Demo title="Banner">
          <Banner title="Incidente" tone="warning" action={<Button size="sm">Ver</Button>}>
            Latência alta na borda.
          </Banner>
        </Demo>
      );
    case 'toast':
      return <ToastPage />;
    case 'spinner':
      return (
        <Demo title="Spinner">
          <div className="row">
            <Spinner size="sm" />
            <Spinner />
            <Spinner size="lg" />
          </div>
        </Demo>
      );
    case 'progress':
      return (
        <Demo title="ProgressBar">
          <ProgressBar value={40} />
          <ProgressBar />
        </Demo>
      );
    case 'progress-circle':
      return (
        <Demo title="ProgressCircle">
          <ProgressCircle value={40} />
        </Demo>
      );
    case 'tooltip':
      return (
        <Demo title="Tooltip">
          <Tooltip content="Ajuda">
            <Button size="sm">Foco</Button>
          </Tooltip>
        </Demo>
      );
    case 'skeleton':
      return (
        <Demo title="Skeleton">
          <Skeleton width={180} />
        </Demo>
      );
    case 'sidebar':
      return (
        <Demo title="Sidebar">
          <p>O menu à esquerda é o exemplo ao vivo, inclusive o rail colapsado.</p>
          <Sidebar>
            <SidebarHeader>Mini</SidebarHeader>
            <SidebarSection>
              <SidebarGroup label="Infra" icon={<IconGrid />} defaultOpen>
                <SidebarItem icon={<IconGrid />}>Hosts</SidebarItem>
                <SidebarGroup label="Regiões" icon={<IconGrid />} defaultOpen>
                  <SidebarItem icon={<IconGrid />} current>
                    São Paulo
                  </SidebarItem>
                  <SidebarItem icon={<IconGrid />}>Oregon</SidebarItem>
                </SidebarGroup>
              </SidebarGroup>
            </SidebarSection>
          </Sidebar>
        </Demo>
      );
    case 'tabs':
      return (
        <Demo title="Tabs">
          <Tabs
            tabs={[
              { id: 'a', label: 'Um', panel: 'Painel A' },
              { id: 'b', label: 'Dois', panel: 'Painel B' },
            ]}
          />
        </Demo>
      );
    case 'breadcrumbs':
      return (
        <Demo title="Breadcrumbs">
          <Breadcrumbs items={[{ href: '#', label: 'Home' }, { label: 'Docs' }]} />
        </Demo>
      );
    case 'pagination':
      return <PaginationPage />;
    case 'topbar':
      return (
        <Demo title="Topbar">
          <Topbar
            start={
              <>
                <IconButton label="Menu">
                  <IconMenu />
                </IconButton>
                <div className="cf-topbar__search">
                  <SearchField id="docs-topbar-search" label="Buscar" placeholder="Buscar" />
                </div>
              </>
            }
            end={
              <>
                <IconButton label="Informações">
                  <IconInfo />
                </IconButton>
                <Avatar name="Cloudface" size="sm" />
              </>
            }
          />
        </Demo>
      );
    case 'steps':
      return (
        <Demo title="Steps">
          <Steps steps={['Conta', 'Rede', 'Pronto']} current={1} />
        </Demo>
      );
    case 'skip-link':
      return (
        <Demo title="SkipLink">
          <p>Tab no início da página para revelar “Ir para o conteúdo”.</p>
          <SkipLink />
        </Demo>
      );
    case 'page-header':
      return (
        <Demo title="PageHeader">
          <PageHeader
            title="Servidores"
            crumbs={[{ href: '#', label: 'Home' }, { label: 'Infra' }]}
            actions={<Button size="sm">Novo</Button>}
          />
        </Demo>
      );
    case 'card':
      return (
        <Demo title="Card">
          <Card>
            <CardHeader>Servidor principal</CardHeader>
            <CardContent>Latência média de 12 ms.</CardContent>
            <CardFooter>
              <Button size="sm">Ver logs</Button>
            </CardFooter>
          </Card>
        </Demo>
      );
    case 'divider':
      return (
        <Demo title="Divider">
          <Divider />
          <Divider label="ou" />
          <div className="row" style={{ height: 48 }}>
            <Divider orientation="vertical" />
          </div>
        </Demo>
      );
    case 'avatar':
      return (
        <Demo title="Avatar">
          <div className="row">
            <Avatar name="Cloud Face" size="sm" />
            <Avatar name="Cloud Face" />
            <Avatar name="Cloud Face" size="lg" />
            <Avatar
              name="Ciano"
              src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><rect width='48' height='48' fill='%2300C2FF'/></svg>"
            />
          </div>
        </Demo>
      );
    case 'avatar-group':
      return (
        <Demo title="AvatarGroup">
          <AvatarGroup>
            <Avatar name="Ana" />
            <Avatar name="Bruno Costa" />
          </AvatarGroup>
        </Demo>
      );
    case 'table':
      return (
        <Demo title="Table">
          <Table>
            <TableCaption>Hosts</TableCaption>
            <TableHead>
              <TableRow>
                <TableCell header>Host</TableCell>
                <TableCell header>Região</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>edge-1</TableCell>
                <TableCell>sa-east-1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Demo>
      );
    case 'accordion':
      return (
        <Demo title="Accordion">
          <Accordion items={[{ title: 'O que é', content: 'DS' }]} />
        </Demo>
      );
    case 'modal':
      return <OverlayPage title="Modal" kind="modal" />;
    case 'drawer':
      return <DrawerPage />;
    case 'popover':
      return <PopoverPage />;
    case 'menu':
      return (
        <Demo title="Menu">
          <Menu
            label="Ações"
            items={[
              { id: 'e', label: 'Editar', onSelect: () => undefined },
              { id: 'x', label: 'Apagar', onSelect: () => undefined },
            ]}
          />
        </Demo>
      );
    case 'empty-state':
      return (
        <Demo title="EmptyState">
          <EmptyState title="Vazio" action={<Button size="sm">Criar</Button>}>
            Nada ainda.
          </EmptyState>
        </Demo>
      );
    case 'confirm-dialog':
      return <OverlayPage title="ConfirmDialog" kind="confirm" />;
    case 'stat':
      return (
        <Demo title="Stat">
          <Stat value="12 ms" label="Latência" delta="-4%" />
        </Demo>
      );
    case 'description-list':
      return (
        <Demo title="DescriptionList">
          <DescriptionList
            items={[
              { term: 'Host', description: 'edge-1' },
              { term: 'Região', description: 'sa-east-1' },
            ]}
          />
        </Demo>
      );
    case 'heading':
      return (
        <Demo title="Heading">
          <Heading level={1}>Servidores</Heading>
          <Heading level={2}>Rede</Heading>
          <Heading level={3}>Hosts</Heading>
        </Demo>
      );
    case 'text':
      return (
        <Demo title="Text">
          <Text>Manrope no corpo.</Text>
          <Text family="content">DM Sans no conteúdo.</Text>
        </Demo>
      );
    case 'code':
      return (
        <Demo title="Code">
          <Code>pnpm --filter docs dev</Code>
        </Demo>
      );
    case 'kbd':
      return (
        <Demo title="Kbd">
          <Kbd>Esc</Kbd>
        </Demo>
      );
    case 'stack':
      return (
        <Demo title="Stack">
          <Stack>
            <Badge>um</Badge>
            <Badge>dois</Badge>
          </Stack>
        </Demo>
      );
    case 'cluster':
      return (
        <Demo title="Cluster">
          <Cluster>
            <Badge>um</Badge>
            <Badge>dois</Badge>
          </Cluster>
        </Demo>
      );
    case 'container':
      return (
        <Demo title="Container">
          <Container>Largura máxima tokenizada.</Container>
        </Demo>
      );
    default:
      return <h1>Não encontrado</h1>;
  }
}
