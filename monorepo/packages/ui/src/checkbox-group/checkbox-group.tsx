import { useId, type FieldsetHTMLAttributes, type ReactNode } from 'react';
import { IconError } from '../shared/icons';
import { cx } from '../shared/cx';
import '../field/field.css';
import './group.css';

export type CheckboxGroupProps = Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'title'> & {
  legend: string;
  error?: string;
  children: ReactNode;
};

export function CheckboxGroup({
  legend,
  error,
  children,
  className,
  ...props
}: CheckboxGroupProps) {
  const uid = useId();
  const errorId = error ? `${uid}-error` : undefined;
  return (
    <fieldset
      className={cx('cf-group', className)}
      aria-invalid={error ? true : undefined}
      aria-describedby={errorId}
      {...props}
    >
      <legend className="cf-label">{legend}</legend>
      {children}
      {error ? (
        <p id={errorId} className="cf-field__error">
          <IconError />
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
