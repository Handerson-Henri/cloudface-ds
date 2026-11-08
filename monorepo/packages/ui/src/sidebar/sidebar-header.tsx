import type { HTMLAttributes } from 'react';

export function SidebarHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const classes = ['cf-sidebar__header', className].filter(Boolean).join(' ');
  return <div className={classes} {...props} />;
}
