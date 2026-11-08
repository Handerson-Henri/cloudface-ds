import type { HTMLAttributes, ReactNode } from 'react';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';
import { Heading } from '../heading/heading';
import { cx } from '../shared/cx';
import './page-header.css';

export type PageHeaderProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  title: string;
  crumbs?: { href?: string; label: string }[];
  actions?: ReactNode;
};

export function PageHeader({
  title,
  crumbs,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <header className={cx('cf-page-header', className)} {...props}>
      {crumbs ? <Breadcrumbs items={crumbs} /> : null}
      <div className="cf-page-header__row">
        <Heading level={1} className="cf-page-header__title">
          {title}
        </Heading>
        {actions ? <div className="cf-page-header__actions">{actions}</div> : null}
      </div>
    </header>
  );
}
