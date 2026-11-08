import './progress.css';

export function ProgressBar({
  value,
  max = 100,
  label,
  className,
}: {
  value?: number;
  max?: number;
  label?: string;
  className?: string;
}) {
  const indeterminate = value == null;
  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label ?? 'Progresso'}
      className={['cf-progress', indeterminate ? 'cf-progress--indeterminate' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <span
        className="cf-progress__bar"
        style={indeterminate ? undefined : { width: `${((value ?? 0) / max) * 100}%` }}
      />
    </div>
  );
}
