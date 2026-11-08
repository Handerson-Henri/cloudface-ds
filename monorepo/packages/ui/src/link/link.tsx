import type { AnchorHTMLAttributes } from 'react';
import './link.css';

export function Link({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={['cf-link', 'cf-focus', className].filter(Boolean).join(' ')} {...props} />
  );
}
