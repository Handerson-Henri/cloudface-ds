import type { AnchorHTMLAttributes } from 'react';
import './skip-link.css';

export function SkipLink({
  href = '#conteudo',
  children = 'Ir para o conteúdo',
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={['cf-skip', 'cf-focus', className].filter(Boolean).join(' ')} href={href} {...props}>
      {children}
    </a>
  );
}
