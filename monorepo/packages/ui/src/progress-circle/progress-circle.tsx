import './progress-circle.css';

export type ProgressCircleProps = {
  value: number;
  max?: number;
  label?: string;
  className?: string;
};

export function ProgressCircle({
  value,
  max = 100,
  label,
  className,
}: ProgressCircleProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const r = 16;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <svg
      className={['cf-progress-circle', className].filter(Boolean).join(' ')}
      viewBox="0 0 40 40"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label ?? 'Progresso'}
    >
      <circle cx="20" cy="20" r={r} className="cf-progress-circle__track" />
      <circle
        cx="20"
        cy="20"
        r={r}
        className="cf-progress-circle__bar"
        strokeDasharray={`${dash} ${c}`}
      />
    </svg>
  );
}
