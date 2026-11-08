import type { HTMLAttributes } from 'react';
import './code.css';

export function Code({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <code className={['cf-code', className].filter(Boolean).join(' ')} {...props} />;
}
