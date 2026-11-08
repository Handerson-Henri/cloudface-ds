import type { HTMLAttributes } from 'react';

export function SidebarSection({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const classes = ['cf-sidebar__section', className].filter(Boolean).join(' ');
  return <div className={classes} {...props} />;
}
