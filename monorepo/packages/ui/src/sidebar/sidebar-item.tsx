import {
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { Button } from '../button/button';
import { useSidebar } from './sidebar-context';

function readable(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(readable).join(' ').trim();
  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children) {
    return readable(node.props.children);
  }
  return '';
}

export type SidebarItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  current?: boolean;
  href?: string;
  icon?: ReactNode;
};

export function SidebarItem({
  current,
  href,
  icon,
  className,
  children,
  ...props
}: SidebarItemProps) {
  const { collapsed } = useSidebar();
  const classes = [
    'cf-sidebar-item',
    current ? 'cf-sidebar-item--current' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const label = collapsed ? undefined : children;
  const ariaLabel = collapsed ? readable(children) || undefined : undefined;

  if (href) {
    return (
      <a
        href={href}
        className={`cf-button cf-button--ghost cf-button--sm cf-focus ${classes}`}
        aria-current={current ? 'page' : undefined}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        {icon ? <span className="cf-sidebar-item__icon">{icon}</span> : null}
        {label}
      </a>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={classes}
      aria-current={current ? 'page' : undefined}
      aria-label={ariaLabel}
      title={ariaLabel}
      icon={icon}
      {...props}
    >
      {label}
    </Button>
  );
}
