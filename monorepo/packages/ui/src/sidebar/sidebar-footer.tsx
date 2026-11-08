import type { HTMLAttributes } from 'react';

export function SidebarFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const classes = ['cf-sidebar__footer', className].filter(Boolean).join(' ');
  return <div className={classes} {...props} />;
}
