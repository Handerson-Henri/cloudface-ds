import type { HTMLAttributes } from 'react';
import { cx } from '../shared/cx';
import './avatar-group.css';

export type AvatarGroupProps = HTMLAttributes<HTMLDivElement>;

export function AvatarGroup({ className, ...props }: AvatarGroupProps) {
  return <div className={cx('cf-avatar-group', className)} {...props} />;
}
