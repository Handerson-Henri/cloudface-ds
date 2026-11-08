import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { Alert, type AlertTone } from '../alert/alert';
import { IconButton } from '../icon-button/icon-button';
import { IconClose } from '../shared/icons';
import './toast.css';

export function Toast({
  tone = 'info',
  onDismiss,
  timeout,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  tone?: AlertTone;
  onDismiss?: () => void;
  timeout?: number;
}) {
  useEffect(() => {
    if (!timeout || !onDismiss) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setTimeout(onDismiss, timeout);
    return () => window.clearTimeout(id);
  }, [timeout, onDismiss]);

  return (
    <Alert tone={tone} className="cf-toast" {...props}>
      <span className="cf-toast__body">{children}</span>
      {onDismiss ? (
        <IconButton label="Dispensar" size="sm" onClick={onDismiss}>
          <IconClose />
        </IconButton>
      ) : null}
    </Alert>
  );
}

type ToastItem = { id: string; tone: AlertTone; message: ReactNode; timeout?: number };

type ToastApi = {
  push: (message: ReactNode, tone?: AlertTone, timeout?: number) => void;
  dismiss: (id: string) => void;
};

const ToastContext = createContext<ToastApi | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast requer ToastProvider');
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const liveId = useId();

  const dismiss = useCallback((id: string) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const push = useCallback((message: ReactNode, tone: AlertTone = 'info', timeout = 4000) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((list) => [...list, { id, tone, message, timeout }]);
  }, []);

  const api = useMemo(() => ({ push, dismiss }), [push, dismiss]);

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="cf-toaster" aria-live="polite" aria-relevant="additions" id={liveId}>
        {toasts.map((item) => (
          <Toast
            key={item.id}
            tone={item.tone}
            timeout={item.timeout}
            onDismiss={() => dismiss(item.id)}
          >
            {item.message}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
