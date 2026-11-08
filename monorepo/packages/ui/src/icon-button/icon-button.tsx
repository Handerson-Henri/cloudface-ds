import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonSize, ButtonVariant } from '../button/button';
import '../button/button.css';
import './icon-button.css';

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
  variant?: Extract<ButtonVariant, 'primary' | 'outline' | 'ghost'>;
  size?: ButtonSize;
  loading?: boolean;
};

export function IconButton({
  label,
  children,
  variant = 'ghost',
  size = 'md',
  loading = false,
  className,
  type = 'button',
  disabled,
  ...props
}: IconButtonProps) {
  const classes = [
    'cf-button',
    'cf-icon-button',
    'cf-focus',
    `cf-button--${variant}`,
    `cf-icon-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      aria-label={label}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="cf-spinner" aria-hidden="true" /> : children}
      {loading ? <span className="cf-sr-only">Carregando</span> : null}
    </button>
  );
}
