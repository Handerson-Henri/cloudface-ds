import '../shared/focus.css';
import '../shared/sr-only.css';

export function Spinner({
  label = 'Carregando',
  size = 'md',
  className,
}: {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <span role="status" className={className}>
      <span className={`cf-spinner cf-spinner--${size}`} aria-hidden="true" />
      <span className="cf-sr-only">{label}</span>
    </span>
  );
}
