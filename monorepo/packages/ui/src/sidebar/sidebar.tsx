import type { HTMLAttributes } from 'react';
import { SidebarContext } from './sidebar-context';
import './sidebar.css';

export type SidebarProps = HTMLAttributes<HTMLElement> & {
  label?: string;
  collapsed?: boolean;
};

export function Sidebar({
  className,
  label = 'Navegação',
  collapsed = false,
  children,
  ...props
}: SidebarProps) {
  const classes = [
    'cf-sidebar',
    collapsed ? 'cf-sidebar--collapsed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <SidebarContext.Provider value={{ collapsed }}>
      <nav className={classes} aria-label={label} {...props}>
        {children}
      </nav>
    </SidebarContext.Provider>
  );
}
