import { useState, type InputHTMLAttributes } from 'react';
import './slider.css';

export function Slider({
  label,
  id,
  className,
  onInput,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string; id: string }) {
  const controlled = props.value != null;
  const [inner, setInner] = useState(Number(props.defaultValue ?? 0));
  const shown = controlled ? Number(props.value) : inner;
  return (
    <div className={['cf-slider', className].filter(Boolean).join(' ')}>
      <label htmlFor={id} className="cf-slider__label">
        {label}
        <output htmlFor={id}>{String(shown)}</output>
      </label>
      <input
        id={id}
        type="range"
        className="cf-slider__input cf-focus"
        {...props}
        onInput={(event) => {
          if (!controlled) setInner(Number(event.currentTarget.value));
          onInput?.(event);
        }}
      />
    </div>
  );
}
