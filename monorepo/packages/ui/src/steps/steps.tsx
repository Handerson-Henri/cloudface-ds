import './steps.css';

export function Steps({
  steps,
  current,
  className,
}: {
  steps: string[];
  current: number;
  className?: string;
}) {
  return (
    <ol className={['cf-steps', className].filter(Boolean).join(' ')}>
      {steps.map((label, i) => (
        <li
          key={label}
          aria-current={i === current ? 'step' : undefined}
          data-done={i < current ? 'true' : undefined}
        >
          {label}
        </li>
      ))}
    </ol>
  );
}
