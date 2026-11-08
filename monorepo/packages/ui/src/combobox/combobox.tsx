import { useId, useMemo, useState, type KeyboardEvent } from 'react';
import '../input/input.css';
import './combobox.css';

export type ComboboxOption = { value: string; label: string };

export function Combobox({
  id,
  options,
  value,
  onChange,
  error,
  placeholder = 'Buscar',
  className,
}: {
  id?: string;
  options: ComboboxOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
  className?: string;
}) {
  const uid = useId();
  const inputId = id ?? uid;
  const listId = `${inputId}-list`;
  const selected = options.find((o) => o.value === value);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(selected?.label ?? '');
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, query]);

  function commit(option: ComboboxOption) {
    setQuery(option.label);
    onChange?.(option.value);
    setOpen(false);
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
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
      setActive(Math.max(filtered.length - 1, 0));
    }
    if (e.key === 'Enter' && open && filtered[active]) {
      e.preventDefault();
      commit(filtered[active]);
    }
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  const activeId = filtered[active] ? `${inputId}-opt-${filtered[active].value}` : undefined;

  return (
    <div className={['cf-combo', className].filter(Boolean).join(' ')}>
      <input
        id={inputId}
        className={['cf-input', 'cf-focus', 'cf-input--md', error ? 'cf-input--error' : '']
          .filter(Boolean)
          .join(' ')}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? activeId : undefined}
        aria-autocomplete="list"
        aria-invalid={error ? true : undefined}
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setActive(0);
        }}
        onMouseDown={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          const next = e.relatedTarget as Node | null;
          if (next && e.currentTarget.parentElement?.contains(next)) return;
          setOpen(false);
        }}
        onKeyDown={onKey}
      />
      {open ? (
        <ul id={listId} role="listbox" className="cf-combo__list">
          {filtered.length === 0 ? (
            <li className="cf-combo__opt cf-combo__opt--empty" role="presentation">
              Nenhum resultado
            </li>
          ) : (
            filtered.map((option, i) => (
              <li
                key={option.value}
                id={`${inputId}-opt-${option.value}`}
                role="option"
                aria-selected={option.value === value}
                className={[
                  'cf-combo__opt',
                  i === active ? 'cf-combo__opt--active' : '',
                  option.value === value ? 'cf-combo__opt--selected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onMouseDown={(ev) => {
                  ev.preventDefault();
                  commit(option);
                }}
              >
                {option.label}
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
