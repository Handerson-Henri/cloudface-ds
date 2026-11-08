import { useId, useState, type HTMLAttributes, type KeyboardEvent, type ReactNode } from 'react';
import { cx } from '../shared/cx';
import './tabs.css';

export type TabItem = { id: string; label: string; panel: ReactNode };

export type TabsProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  tabs: TabItem[];
  defaultId?: string;
  value?: string;
  onChange?: (id: string) => void;
};

export function Tabs({
  tabs,
  defaultId,
  value,
  onChange,
  className,
  ...props
}: TabsProps) {
  const uid = useId();
  const [uncontrolled, setUncontrolled] = useState(defaultId ?? tabs[0]?.id);
  const current = value ?? uncontrolled;

  function select(id: string) {
    if (value == null) setUncontrolled(id);
    onChange?.(id);
  }

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const ids = tabs.map((t) => t.id);
    const i = ids.indexOf(current ?? '');
    const next = ids[(i + 1) % ids.length];
    const prev = ids[(i - 1 + ids.length) % ids.length];
    if (e.key === 'ArrowRight' && next) select(next);
    if (e.key === 'ArrowLeft' && prev) select(prev);
    if (e.key === 'Home' && ids[0]) {
      e.preventDefault();
      select(ids[0]);
    }
    const last = ids[ids.length - 1];
    if (e.key === 'End' && last) {
      e.preventDefault();
      select(last);
    }
  }

  return (
    <div className={cx('cf-tabs', className)} {...props}>
      <div role="tablist" className="cf-tabs__list" onKeyDown={onKey}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`${uid}-tab-${tab.id}`}
            role="tab"
            type="button"
            className="cf-tabs__tab cf-focus"
            aria-selected={current === tab.id}
            aria-controls={`${uid}-panel-${tab.id}`}
            tabIndex={current === tab.id ? 0 : -1}
            onClick={() => select(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) =>
        current === tab.id ? (
          <div
            key={tab.id}
            id={`${uid}-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`${uid}-tab-${tab.id}`}
            className="cf-tabs__panel"
          >
            {tab.panel}
          </div>
        ) : null,
      )}
    </div>
  );
}
