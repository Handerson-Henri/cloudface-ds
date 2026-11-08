import type { ReactNode } from 'react';
import { Button } from '../button/button';
import { Modal } from '../modal/modal';
import './confirm-dialog.css';

export type ConfirmDialogProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onClose: () => void;
  className?: string;
};

export function ConfirmDialog({
  open,
  title,
  children,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  destructive = false,
  onConfirm,
  onClose,
  className,
}: ConfirmDialogProps) {
  return (
    <Modal open={open} title={title} onClose={onClose} hideClose className={className}>
      <div className="cf-confirm">
        <div>{children}</div>
        <div className="cf-confirm__actions">
          <Button variant="secondary" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button
            variant={destructive ? 'destructive' : 'primary'}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
