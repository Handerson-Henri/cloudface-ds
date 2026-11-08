import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';
import { IconError } from '../shared/icons';
import '../field/field.css';
import '../checkbox-group/group.css';

export type RadioGroupProps = {
  legend: string;
  name: string;
  error?: string;
  children: ReactNode;
  className?: string;
};

export function RadioGroup({
  legend,
  name,
  error,
  children,
  className,
}: RadioGroupProps) {
  const errorId = error ? `${name}-error` : undefined;
  return (
    <fieldset
      className={['cf-group', className].filter(Boolean).join(' ')}
      aria-invalid={error ? true : undefined}
      aria-describedby={errorId}
    >
      <legend className="cf-label">{legend}</legend>
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child as ReactElement<{ name?: string }>, { name })
          : child,
      )}
      {error ? (
        <p id={errorId} className="cf-field__error">
          <IconError />
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
