import './divider.css';

export function Divider({
  orientation = 'horizontal',
  label,
  className,
}: {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  className?: string;
}) {
  if (label) {
    return (
      <div
        role="separator"
        className={['cf-divider', 'cf-divider--labeled', className].filter(Boolean).join(' ')}
      >
        <span>{label}</span>
      </div>
    );
  }
  return (
    <hr
      className={['cf-divider', `cf-divider--${orientation}`, className]
        .filter(Boolean)
        .join(' ')}
    />
  );
}
