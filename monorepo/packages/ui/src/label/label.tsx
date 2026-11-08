import type { LabelHTMLAttributes } from 'react';
import './label.css';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
  optional?: boolean;
};

export function Label({
  className,
  required,
  optional,
  children,
  ...props
}: LabelProps) {
  const classes = ['cf-label', className].filter(Boolean).join(' ');

  return (
    <label className={classes} {...props}>
      {children}
      {required ? <span className="cf-label__req">*</span> : null}
      {optional && !required ? <span className="cf-label__opt">opcional</span> : null}
    </label>
  );
}
