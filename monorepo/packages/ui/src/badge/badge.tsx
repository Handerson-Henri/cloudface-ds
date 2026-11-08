import type { HTMLAttributes, ReactNode } from 'react';
import {
  IconError,
  IconInfo,
  IconSuccess,
  IconWarning,
} from '../shared/icons';
import './badge.css';

export type BadgeVariant = 'default' | 'info' | 'success' | 'warning' | 'error';
export type BadgeSize = 'sm' | 'md';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: boolean;
};

const statusIcon: Record<BadgeVariant, ReactNode> = {
  default: <IconInfo />,
  info: <IconInfo />,
  success: <IconSuccess />,
  warning: <IconWarning />,
  error: <IconError />,
};

export function Badge({
  variant = 'default',
  size = 'md',
  icon = variant !== 'default',
  className,
  children,
  ...props
}: BadgeProps) {
  const classes = [
    'cf-badge',
    `cf-badge--${variant}`,
    `cf-badge--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {icon ? statusIcon[variant] : null}
      {children}
    </span>
  );
}
