import { IconStar } from '../shared/icons';
import { cx } from '../shared/cx';
import './rating.css';

export type RatingProps = {
  name: string;
  label: string;
  value?: number;
  onChange?: (n: number) => void;
  max?: number;
  className?: string;
};

export function Rating({
  name,
  label,
  value,
  onChange,
  max = 5,
  className,
}: RatingProps) {
  return (
    <fieldset className={cx('cf-rating', className)}>
      <legend>{label}</legend>
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <label key={n} className="cf-rating__opt">
          <input
            type="radio"
            name={name}
            value={n}
            checked={value === n}
            onChange={() => onChange?.(n)}
            className="cf-sr-only cf-focus"
          />
          <IconStar aria-hidden />
          <span className="cf-sr-only">{n}</span>
        </label>
      ))}
    </fieldset>
  );
}
