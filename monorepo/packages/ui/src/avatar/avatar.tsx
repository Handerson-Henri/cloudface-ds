import './avatar.css';

export type AvatarSize = 'sm' | 'md' | 'lg';

export function Avatar({
  name,
  src,
  size = 'md',
  className,
}: {
  name: string;
  src?: string;
  size?: AvatarSize;
  className?: string;
}) {
  const initials = name
    .split(' ')
    .map((p) => p[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      className={['cf-avatar', `cf-avatar--${size}`, className].filter(Boolean).join(' ')}
      aria-label={name}
    >
      {src ? <img src={src} alt="" /> : initials}
    </span>
  );
}
