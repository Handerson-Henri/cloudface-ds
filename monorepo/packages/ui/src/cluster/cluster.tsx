import type { HTMLAttributes } from 'react';
import './cluster.css';

export function Cluster({
  gap = '3',
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { gap?: '2' | '3' | '4' | '6' }) {
  return (
    <div
      className={['cf-cluster', className].filter(Boolean).join(' ')}
      style={{ gap: `var(--cf-space-${gap})` }}
      {...props}
    />
  );
}
