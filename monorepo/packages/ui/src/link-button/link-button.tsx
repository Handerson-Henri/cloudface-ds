import type { AnchorHTMLAttributes } from 'react';
import type { ButtonSize } from '../button/button';
import '../button/button.css';

export function LinkButton({
  variant = 'outline',
  size = 'md',
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: ButtonSize;
}) {
  return (
    <a
      className={[
        'cf-button',
        'cf-focus',
        `cf-button--${variant}`,
        `cf-button--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
}
