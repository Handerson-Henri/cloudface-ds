import type { InputHTMLAttributes } from 'react';
import { Field } from '../field/field';
import { Input } from '../input/input';
import { cx } from '../shared/cx';
import './date-field.css';

export type DateFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'id' | 'size'> & {
  id: string;
  label: string;
  error?: string;
};

export function DateField({ id, label, error, className, ...props }: DateFieldProps) {
  return (
    <div className={cx('cf-date-field', className)}>
      <Field id={id} label={label} error={error}>
        <Input type="date" {...props} />
      </Field>
    </div>
  );
}
