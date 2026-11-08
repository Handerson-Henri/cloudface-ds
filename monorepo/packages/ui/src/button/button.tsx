import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  className,
  type = 'button',
  disabled,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    'cf-button',
    'cf-focus',
    `cf-button--${variant}`,
    `cf-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="cf-spinner" aria-hidden="true" /> : null}
      {loading ? <span className="cf-sr-only">Carregando</span> : null}
      {!loading && icon ? (
        <span className="cf-button__icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
    </button>
  );
}
