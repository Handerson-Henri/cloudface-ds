import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../shared/cx';
import './empty-state.css';

export type EmptyStateProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  action?: ReactNode;
};

export function EmptyState({
  title,
  children,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div role="status" className={cx('cf-empty', className)} {...props}>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
      {action}
    </div>
  );
}
