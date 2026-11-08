import type { HTMLAttributes } from 'react';
import {
  IconError,
  IconInfo,
  IconSuccess,
  IconWarning,
} from '../shared/icons';
import './alert.css';

export type AlertTone = 'info' | 'success' | 'warning' | 'error';

export function Alert({
  tone = 'info',
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { tone?: AlertTone }) {
  const Icon =
    tone === 'success'
      ? IconSuccess
      : tone === 'warning'
        ? IconWarning
        : tone === 'error'
          ? IconError
          : IconInfo;
  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      className={['cf-alert', `cf-alert--${tone}`, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Icon />
      <div>{children}</div>
    </div>
  );
}
