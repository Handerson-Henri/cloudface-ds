import type { HTMLAttributes, ReactNode } from 'react';
import './text.css';

export function Text({
  family = 'body',
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & {
  family?: 'body' | 'content';
  children: ReactNode;
}) {
  return (
    <p
      className={['cf-text', `cf-text--${family}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </p>
  );
}
