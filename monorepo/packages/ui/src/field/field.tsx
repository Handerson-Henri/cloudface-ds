import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';
import { IconError } from '../shared/icons';
import { Label } from '../label/label';
import './field.css';

export type FieldProps = {
  id: string;
  label: ReactNode;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactElement;
};

export function Field({
  id,
  label,
  required,
  optional,
  hint,
  error,
  className,
  children,
}: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;
  const control = Children.only(children);
  if (!isValidElement(control)) return null;
  const described = [describedBy, (control.props as { 'aria-describedby'?: string })['aria-describedby']]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={['cf-field', className].filter(Boolean).join(' ')}>
      <Label htmlFor={id} required={required} optional={optional}>
        {label}
      </Label>
      {cloneElement(control, {
        id,
        error,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': described || undefined,
      } as never)}
      {hint && !error ? (
        <p id={hintId} className="cf-field__hint">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="cf-field__error">
          <IconError />
          {error}
        </p>
      ) : null}
    </div>
  );
}
