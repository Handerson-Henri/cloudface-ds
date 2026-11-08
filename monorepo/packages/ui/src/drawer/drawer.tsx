import { useRef, type HTMLAttributes, type ReactNode } from 'react';
import { Button } from '../button/button';
import { cx } from '../shared/cx';
import { useFocusTrap } from '../shared/focus-trap';
import './drawer.css';

export type DrawerSide = 'right' | 'bottom';

export type DrawerProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  open: boolean;
  title: string;
  onClose: () => void;
  side?: DrawerSide;
};

export function Drawer({
  open,
  title,
  children,
  onClose,
  side = 'right',
  className,
  ...props
}: DrawerProps) {
  const panelRef = useRef<HTMLElement>(null);
  useFocusTrap(open, panelRef, onClose);

  if (!open) return null;
  return (
    <div className={cx('cf-drawer', `cf-drawer--${side}`, className)} {...props}>
      <div className="cf-modal__backdrop" role="presentation" onClick={onClose} />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="cf-drawer__panel"
        tabIndex={-1}
      >
        <h2>{title}</h2>
        {children}
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
      </aside>
    </div>
  );
}
