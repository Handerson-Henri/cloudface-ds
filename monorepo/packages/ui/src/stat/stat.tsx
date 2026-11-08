import type { ReactNode } from 'react';
import './stat.css';

export function Stat({
  value,
  label,
  delta,
  className,
}: {
  value: ReactNode;
  label: string;
  delta?: string;
  className?: string;
}) {
  return (
    <div className={['cf-stat', className].filter(Boolean).join(' ')}>
      <span className="cf-stat__value">{value}</span>
      {delta ? <span className="cf-stat__delta">{delta}</span> : null}
      <span className="cf-stat__label">{label}</span>
    </div>
  );
}
