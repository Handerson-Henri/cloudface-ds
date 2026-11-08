import type { InputHTMLAttributes } from 'react';
import '../checkbox/checkbox.css';

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
};

export function Radio({ label, id, className, ...props }: RadioProps) {
  return (
    <label className={['cf-check', className].filter(Boolean).join(' ')}>
      <input id={id} type="radio" className="cf-check__input cf-focus" {...props} />
      <span className="cf-check__label">{label}</span>
    </label>
  );
}
