import type { HTMLAttributes, ReactNode } from 'react';
import { cx } from '../shared/cx';
import './topbar.css';

export type TopbarProps = HTMLAttributes<HTMLElement> & {
  start?: ReactNode;
  end?: ReactNode;
};

export function Topbar({ start, end, className, ...props }: TopbarProps) {
  return (
    <header className={cx('cf-topbar', className)} {...props}>
      <div className="cf-topbar__start">{start}</div>
      <div className="cf-topbar__end">{end}</div>
    </header>
  );
}
