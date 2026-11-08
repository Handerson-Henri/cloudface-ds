import { useRef, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../shared/cx';
import { useFocusTrap } from '../shared/focus-trap';
import './popover.css';

export type PopoverProps = HTMLAttributes<HTMLSpanElement> & {
  open: boolean;
  onClose: () => void;
  trigger: ReactNode;
};

export function Popover({
  open,
  onClose,
  trigger,
  children,
  className,
  ...props
}: PopoverProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(open, panelRef, onClose);

  return (
    <span className={cx('cf-popover', className)} {...props}>
      {trigger}
      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          className="cf-popover__panel"
          tabIndex={-1}
        >
          {children}
        </div>
      ) : null}
    </span>
  );
}
