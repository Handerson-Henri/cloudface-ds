import type { InputHTMLAttributes } from 'react';
import './switch.css';

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
};

export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <label className={['cf-switch', className].filter(Boolean).join(' ')}>
      <input type="checkbox" role="switch" className="cf-switch__input cf-focus" {...props} />
      <span className="cf-switch__track" aria-hidden="true" />
      <span>{label}</span>
    </label>
  );
}
