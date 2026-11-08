import type { HTMLAttributes } from 'react';
import './container.css';

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={['cf-container', className].filter(Boolean).join(' ')} {...props} />;
}
