import type { TextareaHTMLAttributes } from 'react';
import type { InputSize } from '../input/input';
import './textarea.css';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
  size?: InputSize;
};

export function TextArea({
  error,
  size = 'md',
  className,
  id,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      id={id}
      className={[
        'cf-input',
        'cf-textarea',
        'cf-focus',
        `cf-input--${size}`,
        error ? 'cf-input--error' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );
}
