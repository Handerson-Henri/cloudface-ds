import type { HTMLAttributes } from 'react';
import { cx } from '../shared/cx';
import './breadcrumbs.css';

export type BreadcrumbItem = { href?: string; label: string };

export type BreadcrumbsProps = HTMLAttributes<HTMLElement> & {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cx('cf-crumbs', className)} {...props}>
      <ol>
        {items.map((item, i) => (
          <li key={item.label}>
            {i === items.length - 1 || !item.href ? (
              <span aria-current={i === items.length - 1 ? 'page' : undefined}>
                {item.label}
              </span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
