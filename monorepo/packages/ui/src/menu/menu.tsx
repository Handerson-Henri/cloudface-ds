import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Button } from '../button/button';
import { Popover } from '../popover/popover';
import './menu.css';

export type MenuItem = { id: string; label: string; onSelect: () => void };

export type MenuProps = {
  label: string;
  items: MenuItem[];
  className?: string;
};

export function Menu({ label, items, className }: MenuProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) listRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]')[active]?.focus();
  }, [open, active]);

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, items.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    }
    if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
    }
    if (e.key === 'End') {
      e.preventDefault();
      setActive(items.length - 1);
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      items[active]?.onSelect();
      setOpen(false);
    }
  }

  return (
    <Popover
      open={open}
      onClose={() => setOpen(false)}
      className={className}
      trigger={
        <Button
          variant="outline"
          size="sm"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {label}
        </Button>
      }
    >
      <div ref={listRef} role="menu" className="cf-menu" onKeyDown={onKey}>
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="menuitem"
            className="cf-menu__item cf-focus"
            tabIndex={i === active ? 0 : -1}
            onClick={() => {
              item.onSelect();
              setOpen(false);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </Popover>
  );
}
