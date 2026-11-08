import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Checkbox } from '../src/checkbox/checkbox';
import { Alert } from '../src/alert/alert';
import { Banner } from '../src/banner/banner';
import { Button } from '../src/button/button';
import { Combobox } from '../src/combobox/combobox';
import { ConfirmDialog } from '../src/confirm-dialog/confirm-dialog';
import { DescriptionList } from '../src/description-list/description-list';
import { Drawer } from '../src/drawer/drawer';
import { Field } from '../src/field/field';
import { FileInput } from '../src/file-input/file-input';
import { Heading } from '../src/heading/heading';
import { IconButton } from '../src/icon-button/icon-button';
import { Input } from '../src/input/input';
import { Link } from '../src/link/link';
import { Menu } from '../src/menu/menu';
import { Modal } from '../src/modal/modal';
import { Pagination } from '../src/pagination/pagination';
import { ProgressCircle } from '../src/progress-circle/progress-circle';
import { Radio } from '../src/radio/radio';
import { RadioGroup } from '../src/radio-group/radio-group';
import { Rating } from '../src/rating/rating';
import { SkipLink } from '../src/skip-link/skip-link';
import { Stat } from '../src/stat/stat';
import { Switch } from '../src/switch/switch';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../src/table/table';
import { Tabs } from '../src/tabs/tabs';

describe('Field', () => {
  it('liga label, hint e erro', () => {
    render(
      <Field id="n" label="Nome" hint="completo" error="obrigatório">
        <Input />
      </Field>,
    );
    expect(screen.getByLabelText(/Nome/)).toHaveAttribute('id', 'n');
    expect(screen.getByText('obrigatório')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('Button loading', () => {
  it('anuncia busy e bloqueia clique', () => {
    render(<Button loading>Salvar</Button>);
    expect(screen.getByRole('button', { name: /Salvar/ })).toHaveAttribute(
      'aria-busy',
      'true',
    );
    expect(screen.getByRole('button', { name: /Salvar/ })).toBeDisabled();
  });
});

describe('Alert', () => {
  it('error usa role alert', () => {
    render(<Alert tone="error">Falhou</Alert>);
    expect(screen.getByRole('alert')).toHaveTextContent('Falhou');
  });
});

describe('Tabs', () => {
  it('marca a aba selecionada', () => {
    render(
      <Tabs
        tabs={[
          { id: 'a', label: 'Um', panel: 'A' },
          { id: 'b', label: 'Dois', panel: 'B' },
        ]}
      />,
    );
    expect(screen.getByRole('tab', { name: 'Um' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });
});

describe('Modal', () => {
  it('dialog quando aberto', () => {
    render(
      <Modal open title="Confirmar" onClose={() => undefined}>
        texto
      </Modal>,
    );
    expect(screen.getByRole('dialog', { name: 'Confirmar' })).toBeInTheDocument();
  });

  it('prende Tab no dialog', () => {
    render(
      <>
        <button type="button">Fora</button>
        <Modal open title="Confirmar" onClose={() => undefined}>
          texto
        </Modal>
      </>,
    );
    const dialog = screen.getByRole('dialog');
    const close = screen.getByRole('button', { name: 'Fechar' });
    close.focus();
    fireEvent.keyDown(dialog, { key: 'Tab' });
    expect(dialog.contains(document.activeElement)).toBe(true);
    expect(screen.getByRole('button', { name: 'Fora' })).not.toHaveFocus();
  });
});

describe('Field optional', () => {
  it('marca opcional no rótulo', () => {
    render(
      <Field id="n" label="Nome" optional>
        <Input />
      </Field>,
    );
    expect(screen.getByText('opcional')).toBeInTheDocument();
  });
});

describe('Input size', () => {
  it('aplica tamanho sm', () => {
    render(<Input aria-label="campo" size="sm" />);
    expect(screen.getByRole('textbox')).toHaveClass('cf-input--sm');
  });
});

describe('IconButton', () => {
  it('exige nome acessível', () => {
    render(<IconButton label="Fechar">×</IconButton>);
    expect(screen.getByRole('button', { name: 'Fechar' })).toHaveClass(
      'cf-icon-button',
    );
  });
});

describe('Link', () => {
  it('é âncora sublinhada', () => {
    render(<Link href="#x">Docs</Link>);
    expect(screen.getByRole('link', { name: 'Docs' })).toHaveClass('cf-link');
  });
});

describe('RadioGroup', () => {
  it('compartilha name', () => {
    render(
      <RadioGroup legend="Plano" name="plano">
        <Radio label="A" />
        <Radio label="B" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio', { name: 'A' })).toHaveAttribute(
      'name',
      'plano',
    );
  });
});

describe('Combobox', () => {
  it('expõe combobox', () => {
    render(
      <Combobox
        options={[
          { value: 'a', label: 'Alpha' },
          { value: 'b', label: 'Beta' },
        ]}
      />,
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('marca aria-selected no valor commitado e mostra vazio', () => {
    const { rerender } = render(
      <Combobox
        value="b"
        options={[
          { value: 'a', label: 'Alpha' },
          { value: 'b', label: 'Beta' },
        ]}
      />,
    );
    fireEvent.focus(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Beta' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    rerender(<Combobox options={[{ value: 'a', label: 'Alpha' }]} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'zzz' } });
    expect(screen.getByText('Nenhum resultado')).toBeInTheDocument();
  });
});

describe('Checkbox indeterminate', () => {
  it('expõe indeterminate no input', () => {
    render(<Checkbox label="Todos" indeterminate />);
    expect(screen.getByRole('checkbox')).toHaveProperty('indeterminate', true);
  });
});

describe('ConfirmDialog', () => {
  it('abre diálogo de confirmação', () => {
    render(
      <ConfirmDialog
        open
        title="Apagar"
        onClose={() => undefined}
        onConfirm={() => undefined}
        destructive
      >
        irreversível
      </ConfirmDialog>,
    );
    expect(screen.getByRole('dialog', { name: 'Apagar' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirmar' })).toBeInTheDocument();
  });
});

describe('SkipLink', () => {
  it('aponta para o conteúdo', () => {
    render(<SkipLink />);
    expect(screen.getByRole('link', { name: 'Ir para o conteúdo' })).toHaveAttribute(
      'href',
      '#conteudo',
    );
  });
});

describe('Stat', () => {
  it('mostra valor e rótulo', () => {
    render(<Stat value="12 ms" label="Latência" />);
    expect(screen.getByText('12 ms')).toBeInTheDocument();
    expect(screen.getByText('Latência')).toBeInTheDocument();
  });
});

describe('Switch disabled', () => {
  it('desliga o controle', () => {
    render(<Switch label="Ativo" disabled />);
    expect(screen.getByRole('switch', { name: 'Ativo' })).toBeDisabled();
  });
});

describe('Heading', () => {
  it('respeita o nível', () => {
    render(<Heading level={2}>Rede</Heading>);
    expect(screen.getByRole('heading', { level: 2, name: 'Rede' })).toHaveClass(
      'cf-heading--2',
    );
  });
});

describe('Menu', () => {
  it('abre itens de menu', () => {
    render(
      <Menu
        label="Ações"
        items={[{ id: 'e', label: 'Editar', onSelect: () => undefined }]}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Ações' }));
    expect(screen.getByRole('menuitem', { name: 'Editar' })).toBeInTheDocument();
  });
});

describe('Drawer bottom', () => {
  it('aplica o lado inferior', () => {
    const { container } = render(
      <Drawer open title="Filtros" onClose={() => undefined} side="bottom">
        painel
      </Drawer>,
    );
    expect(container.querySelector('.cf-drawer--bottom')).toBeTruthy();
  });
});

describe('FileInput', () => {
  it('associa o rótulo', () => {
    render(<FileInput id="cert" label="Certificado" />);
    expect(screen.getByLabelText('Certificado')).toHaveAttribute('type', 'file');
  });
});

describe('DescriptionList', () => {
  it('renderiza dt e dd', () => {
    render(<DescriptionList items={[{ term: 'Host', description: 'edge-1' }]} />);
    expect(screen.getByText('Host')).toBeInTheDocument();
    expect(screen.getByText('edge-1')).toBeInTheDocument();
  });
});

describe('ProgressCircle', () => {
  it('expõe progressbar', () => {
    render(<ProgressCircle value={40} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '40');
  });
});

describe('Rating', () => {
  it('marca o valor', () => {
    render(<Rating name="sev" label="Severidade" value={3} />);
    expect(screen.getByRole('radio', { name: '3' })).toBeChecked();
  });
});

describe('Pagination', () => {
  it('mostra números e ellipsis', () => {
    render(<Pagination page={6} pages={12} onChange={() => undefined} />);
    expect(screen.getByRole('button', { name: '6' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getAllByText('…').length).toBeGreaterThan(0);
  });
});

describe('Banner', () => {
  it('usa alert no tom error', () => {
    render(
      <Banner title="Queda" tone="error">
        borda
      </Banner>,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Queda');
  });
});

describe('Table', () => {
  it('compõe head e células', () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell header>Host</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>edge-1</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    expect(screen.getByRole('columnheader', { name: 'Host' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'edge-1' })).toBeInTheDocument();
  });
});
