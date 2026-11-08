import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from '../src/badge/badge';
import { Label } from '../src/label/label';
import { IconGrid } from '../src/shared/icons';
import { Sidebar } from '../src/sidebar/sidebar';
import { SidebarFooter } from '../src/sidebar/sidebar-footer';
import { SidebarGroup } from '../src/sidebar/sidebar-group';
import { SidebarHeader } from '../src/sidebar/sidebar-header';
import { SidebarItem } from '../src/sidebar/sidebar-item';
import { SidebarSection } from '../src/sidebar/sidebar-section';

function renderMenu() {
  return render(
    <Sidebar>
      <SidebarHeader>Cloudface</SidebarHeader>
      <SidebarSection>
        <Label>Infra</Label>
        <SidebarItem current>
          Servidores <Badge>3</Badge>
        </SidebarItem>
        <SidebarItem>Logs</SidebarItem>
      </SidebarSection>
      <SidebarFooter>
        <Badge variant="success">Online</Badge>
      </SidebarFooter>
    </Sidebar>,
  );
}

describe('Sidebar', () => {
  it('é um nav com rótulo acessível', () => {
    renderMenu();
    expect(screen.getByRole('navigation', { name: 'Navegação' })).toBeInTheDocument();
  });

  it('item atual é Button ghost com aria-current e Badge', () => {
    renderMenu();
    const current = screen.getByRole('button', { name: /Servidores/ });
    expect(current).toHaveClass('cf-button', 'cf-button--ghost', 'cf-button--sm');
    expect(current).toHaveAttribute('aria-current', 'page');
    expect(current.querySelector('.cf-badge')).toHaveTextContent('3');
  });

  it('item não atual não tem aria-current', () => {
    renderMenu();
    expect(screen.getByRole('button', { name: 'Logs' })).not.toHaveAttribute(
      'aria-current',
    );
  });

  it('título de seção é Label visual, sem htmlFor', () => {
    renderMenu();
    expect(screen.getByText('Infra')).toHaveClass('cf-label');
    expect(screen.getByText('Infra')).not.toHaveAttribute('for');
  });

  it('header usa texto enquanto o mark da marca não existe', () => {
    renderMenu();
    expect(screen.getByText('Cloudface')).toHaveClass('cf-sidebar__header');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('CSS do composto só usa var(--cf-*) para cor', () => {
    const css = readFileSync(
      join(dirname(fileURLToPath(import.meta.url)), '../src/sidebar/sidebar.css'),
      'utf8',
    );
    const hexes = css.match(/#[0-9A-Fa-f]{3,8}/g) ?? [];
    const rgb = css.match(/(?:rgb|hsl)a?\(/g) ?? [];
    expect(hexes).toEqual([]);
    expect(rgb).toEqual([]);
    expect(css).toMatch(/var\(--cf-color-bg-surface\)/);
    expect(css).toMatch(/var\(--cf-color-action-primary-bg\)/);
    expect(css).toMatch(/var\(--cf-color-action-primary-fg\)/);
  });

  it('pai raiz por padrão não mostra ícone mesmo com icon passado', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra" icon={<IconGrid />} defaultOpen>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    expect(
      screen.getByRole('button', { name: 'Infra' }).querySelector('.cf-button__icon'),
    ).toBeNull();
    expect(
      screen.getByRole('button', { name: 'Logs' }).querySelector('.cf-button__icon'),
    ).toBeTruthy();
  });

  it('pai raiz com showIcon mostra ícone', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra" icon={<IconGrid />} showIcon defaultOpen>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    expect(
      screen.getByRole('button', { name: 'Infra' }).querySelector('.cf-button__icon'),
    ).toBeTruthy();
  });

  it('grupo nasce aberto por padrão', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra">
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    expect(screen.getByRole('button', { name: 'Infra' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(screen.getByRole('button', { name: 'Logs' })).toBeInTheDocument();
  });

  it('grupo com defaultOpen false nasce fechado', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra" defaultOpen={false}>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    expect(screen.getByRole('button', { name: 'Infra' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(screen.queryByRole('button', { name: 'Logs' })).not.toBeInTheDocument();
  });

  it('árvore mista: pai aberto e filho fechado', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra">
          <SidebarItem icon={<IconGrid />}>Servidores</SidebarItem>
          <SidebarGroup label="Regiões" icon={<IconGrid />} defaultOpen={false}>
            <SidebarItem icon={<IconGrid />}>Oregon</SidebarItem>
          </SidebarGroup>
        </SidebarGroup>
      </Sidebar>,
    );
    expect(screen.getByRole('button', { name: 'Servidores' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Regiões' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(screen.queryByRole('button', { name: 'Oregon' })).not.toBeInTheDocument();
  });

  it('grupo não clicável aberto permanece aberto', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra" showChevron collapsible={false}>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    expect(screen.queryByRole('button', { name: 'Infra' })).not.toBeInTheDocument();
    expect(screen.getByText('Infra').closest('.cf-sidebar-group__trigger')).not.toBeNull();
    expect(document.querySelector('.cf-sidebar-group__chevron')).toBeNull();
    expect(screen.getByRole('button', { name: 'Logs' })).toBeInTheDocument();
    fireEvent.click(screen.getByText('Infra'));
    expect(screen.getByRole('button', { name: 'Logs' })).toBeInTheDocument();
  });

  it('grupo não clicável fechado permanece fechado', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra" defaultOpen={false} collapsible={false}>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    expect(screen.queryByRole('button', { name: 'Logs' })).not.toBeInTheDocument();
    fireEvent.click(screen.getByText('Infra'));
    expect(screen.queryByRole('button', { name: 'Logs' })).not.toBeInTheDocument();
  });

  it('grupo clicável alterna aberto e fechado', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra">
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    const trigger = screen.getByRole('button', { name: 'Infra' });
    expect(screen.getByRole('button', { name: 'Logs' })).toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.queryByRole('button', { name: 'Logs' })).not.toBeInTheDocument();
    fireEvent.click(trigger);
    expect(screen.getByRole('button', { name: 'Logs' })).toBeInTheDocument();
  });

  it('pai sem showChevron não renderiza setinha e ainda expande no clique', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra" defaultOpen={false}>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    const trigger = screen.getByRole('button', { name: 'Infra' });
    expect(trigger.querySelector('.cf-sidebar-group__chevron')).toBeNull();
    expect(screen.queryByRole('button', { name: 'Logs' })).not.toBeInTheDocument();
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Logs' }).querySelector('.cf-button__icon')).toBeTruthy();
  });

  it('pai com showChevron mostra setinha', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra" showChevron defaultOpen>
          <SidebarItem>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    expect(
      screen.getByRole('button', { name: 'Infra' }).querySelector('.cf-sidebar-group__chevron'),
    ).toBeTruthy();
  });

  it('três níveis: filho-grupo abre e fecha sem fechar o pai', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra" defaultOpen>
          <SidebarItem icon={<IconGrid />}>Servidores</SidebarItem>
          <SidebarGroup label="Regiões" icon={<IconGrid />} defaultOpen>
            <SidebarItem current icon={<IconGrid />}>
              São Paulo
            </SidebarItem>
            <SidebarItem icon={<IconGrid />}>Oregon</SidebarItem>
          </SidebarGroup>
        </SidebarGroup>
      </Sidebar>,
    );

    expect(
      screen.getByRole('button', { name: 'Infra' }).querySelector('.cf-sidebar-group__chevron'),
    ).toBeNull();
    expect(
      screen.getByRole('button', { name: 'Regiões' }).querySelector('.cf-sidebar-group__chevron'),
    ).toBeTruthy();
    expect(
      screen.getByRole('button', { name: 'Servidores' }).querySelector('.cf-button__icon'),
    ).toBeTruthy();
    expect(
      screen.getByRole('button', { name: 'Oregon' }).querySelector('.cf-button__icon'),
    ).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Regiões' }));
    expect(screen.queryByRole('button', { name: 'Oregon' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Servidores' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Infra' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );

    fireEvent.click(screen.getByRole('button', { name: 'Regiões' }));
    expect(screen.getByRole('button', { name: 'Oregon' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Infra' }));
    expect(screen.queryByRole('button', { name: 'Servidores' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Regiões' })).not.toBeInTheDocument();
  });

  it('grupo aninhado ganha setinha sozinho e filhos têm ícone', () => {
    render(
      <Sidebar>
        <SidebarGroup label="Infra" defaultOpen>
          <SidebarGroup label="Regiões" defaultOpen>
            <SidebarItem current icon={<IconGrid />}>
              São Paulo
            </SidebarItem>
          </SidebarGroup>
        </SidebarGroup>
      </Sidebar>,
    );
    expect(
      screen.getByRole('button', { name: 'Infra' }).querySelector('.cf-sidebar-group__chevron'),
    ).toBeNull();
    expect(
      screen.getByRole('button', { name: 'Regiões' }).querySelector('.cf-sidebar-group__chevron'),
    ).toBeTruthy();
    expect(
      screen.getByRole('button', { name: 'São Paulo' }).querySelector('.cf-button__icon'),
    ).toBeTruthy();
  });

  it('grupo aninhado abre no clique e marca o pai quando colapsado', () => {
    const { rerender } = render(
      <Sidebar>
        <SidebarGroup label="Infra">
          <SidebarItem current icon={<IconGrid />}>
            Servidores
          </SidebarItem>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    const trigger = screen.getByRole('button', { name: 'Infra' });
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Logs' })).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('button', { name: 'Logs' })).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.getByRole('button', { name: 'Logs' })).toBeInTheDocument();

    rerender(
      <Sidebar collapsed>
        <SidebarGroup label="Infra">
          <SidebarItem current icon={<IconGrid />}>
            Servidores
          </SidebarItem>
          <SidebarItem icon={<IconGrid />}>Logs</SidebarItem>
        </SidebarGroup>
      </Sidebar>,
    );
    const collapsedTrigger = screen.getByRole('button', { name: 'Infra' });
    expect(collapsedTrigger).toHaveAttribute('aria-current', 'true');
    expect(screen.queryByRole('button', { name: 'Logs' })).not.toBeInTheDocument();
  });
});
