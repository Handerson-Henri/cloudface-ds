import { useEffect, useRef, type InputHTMLAttributes } from 'react';
import './checkbox.css';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
  indeterminate?: boolean;
};

export function Checkbox({
  label,
  id,
  className,
  disabled,
  indeterminate = false,
  ...props
}: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label className={['cf-check', className].filter(Boolean).join(' ')}>
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className="cf-check__input cf-focus"
        disabled={disabled}
        {...props}
      />
      <span className="cf-check__label">{label}</span>
    </label>
  );
}
