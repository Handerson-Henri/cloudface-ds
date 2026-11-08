import type { InputHTMLAttributes } from 'react';
import './input.css';

export type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  error?: string;
  size?: InputSize;
};

export function Input({ error, size = 'md', className, id, ...props }: InputProps) {
  const inputClass = [
    'cf-input',
    'cf-focus',
    `cf-input--${size}`,
    error ? 'cf-input--error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const errorId = error && id ? `${id}-error` : undefined;

  return (
    <input
      id={id}
      className={inputClass}
      aria-invalid={error ? true : undefined}
      aria-describedby={errorId}
      {...props}
    />
  );
}
