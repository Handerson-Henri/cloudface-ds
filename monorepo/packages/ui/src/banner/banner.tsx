import type { HTMLAttributes, ReactNode } from 'react';
import type { AlertTone } from '../alert/alert';
import { IconButton } from '../icon-button/icon-button';
import { IconClose } from '../shared/icons';
import { cx } from '../shared/cx';
import './banner.css';

export type BannerProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  tone?: AlertTone;
  title: string;
  action?: ReactNode;
  onDismiss?: () => void;
};

export function Banner({
  tone = 'info',
  title,
  children,
  action,
  onDismiss,
  className,
  ...props
}: BannerProps) {
  return (
    <div
      className={cx('cf-banner', `cf-banner--${tone}`, className)}
      role={tone === 'error' ? 'alert' : 'status'}
      {...props}
    >
      <div>
        <strong className="cf-banner__title">{title}</strong>
        {children ? <p className="cf-banner__body">{children}</p> : null}
      </div>
      {action}
      {onDismiss ? (
        <IconButton label="Dispensar" size="sm" onClick={onDismiss}>
          <IconClose />
        </IconButton>
      ) : null}
    </div>
  );
}
