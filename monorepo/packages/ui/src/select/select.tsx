import type { SelectHTMLAttributes } from 'react';
import '../input/input.css';
import './select.css';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
};

export function Select({ error, className, children, ...props }: SelectProps) {
  return (
    <span className={['cf-select', className].filter(Boolean).join(' ')}>
      <select
        className={['cf-input', 'cf-select__el', 'cf-focus', error ? 'cf-input--error' : '']
          .filter(Boolean)
          .join(' ')}
        aria-invalid={error ? true : undefined}
        {...props}
      >
        {children}
      </select>
    </span>
  );
}
