import type { HTMLAttributes } from 'react';
import './kbd.css';

export function Kbd({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <kbd className={['cf-kbd', className].filter(Boolean).join(' ')} {...props} />;
}
