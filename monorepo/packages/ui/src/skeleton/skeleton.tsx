import type { HTMLAttributes } from 'react';
import { cx } from '../shared/cx';
import './skeleton.css';

export type SkeletonProps = HTMLAttributes<HTMLSpanElement> & {
  width?: string | number;
  height?: number;
};

export function Skeleton({
  width = '100%',
  height = 16,
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <span
      className={cx('cf-skeleton', className)}
      style={{ width, height, ...style }}
      aria-hidden="true"
      {...props}
    />
  );
}
