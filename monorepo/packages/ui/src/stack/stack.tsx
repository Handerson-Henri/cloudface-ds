import type { HTMLAttributes } from 'react';
import './stack.css';

export function Stack({
  gap = '4',
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { gap?: '2' | '3' | '4' | '6' | '8' }) {
  return (
    <div
      className={['cf-stack', className].filter(Boolean).join(' ')}
      style={{ gap: `var(--cf-space-${gap})` }}
      {...props}
    />
  );
}
