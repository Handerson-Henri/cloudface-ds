import { useId, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { Button } from '../button/button';
import { cx } from '../shared/cx';
import { useFocusTrap } from '../shared/focus-trap';
import './modal.css';

export type ModalProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  open: boolean;
  title: string;
  onClose: () => void;
  hideClose?: boolean;
};

export function Modal({
  open,
  title,
  children,
  onClose,
  hideClose = false,
  className,
  ...props
}: ModalProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useFocusTrap(open, boxRef, onClose);

  if (!open) return null;
  return (
    <div className={cx('cf-modal', className)} role="presentation" {...props}>
      <div className="cf-modal__backdrop" role="presentation" onClick={onClose} />
      <div
        ref={boxRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="cf-modal__box"
        tabIndex={-1}
      >
        <h2 id={titleId}>{title}</h2>
        <div>{children}</div>
        {hideClose ? null : (
          <Button variant="secondary" onClick={onClose}>
            Fechar
          </Button>
        )}
      </div>
    </div>
  );
}
