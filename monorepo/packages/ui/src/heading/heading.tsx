import type { HTMLAttributes, ReactNode } from 'react';
import './heading.css';

export function Heading({
  level = 1,
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}) {
  const Tag = `h${level}` as 'h1';
  return (
    <Tag
      className={['cf-heading', `cf-heading--${level}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}
