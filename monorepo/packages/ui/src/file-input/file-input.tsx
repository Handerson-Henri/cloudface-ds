import type { InputHTMLAttributes } from 'react';
import { Label } from '../label/label';
import '../input/input.css';
import './file-input.css';

export function FileInput({
  label,
  id,
  className,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string; id: string }) {
  return (
    <div className={['cf-file', className].filter(Boolean).join(' ')}>
      <Label htmlFor={id}>{label}</Label>
      <input id={id} type="file" className="cf-input cf-focus cf-input--md" {...props} />
    </div>
  );
}
