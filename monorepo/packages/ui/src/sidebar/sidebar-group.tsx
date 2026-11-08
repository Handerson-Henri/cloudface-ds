import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useId,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { Button } from '../button/button';
import { cx } from '../shared/cx';
import { IconChevron } from '../shared/icons';
import { useSidebar } from './sidebar-context';

const SidebarNesting = createContext(false);

function readable(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(readable).join(' ').trim();
  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children) {
    return readable(node.props.children);
  }
  return '';
}

function hasCurrentDescendant(node: ReactNode): boolean {
  return Children.toArray(node).some((child) => {
    if (!isValidElement<{ current?: boolean; children?: ReactNode }>(child)) {
      return false;
    }
    if (child.props.current) return true;
    return hasCurrentDescendant(child.props.children);
  });
}

export type SidebarGroupProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactNode;
  icon?: ReactNode;
  showIcon?: boolean;
  showChevron?: boolean;
  defaultOpen?: boolean;
  collapsible?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function SidebarGroup({
  label,
  icon,
  showIcon,
  showChevron,
  defaultOpen = true,
  collapsible = true,
  open: openProp,
  onOpenChange,
  className,
  children,
  ...props
}: SidebarGroupProps) {
  const { collapsed } = useSidebar();
  const nested = useContext(SidebarNesting);
  const chevron = collapsible && (showChevron ?? nested);
  const parentIcon = (showIcon ?? nested) ? icon : undefined;
  const panelId = useId();
  const currentChild = hasCurrentDescendant(children);
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = collapsible ? (openProp ?? uncontrolled) : defaultOpen;

  function setOpen(next: boolean) {
    if (!collapsible) return;
    if (openProp === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  }

  const name = readable(label) || undefined;
  const current = collapsed && currentChild;
  const triggerClass = cx(
    'cf-sidebar-item',
    'cf-sidebar-group__trigger',
    !collapsible && 'cf-sidebar-group__trigger--static',
    current && 'cf-sidebar-item--current',
  );

  return (
    <div
      className={cx(
        'cf-sidebar-group',
        open && 'cf-sidebar-group--open',
        className,
      )}
      {...props}
    >
      {collapsible ? (
        <Button
          variant="ghost"
          size="sm"
          className={triggerClass}
          icon={parentIcon}
          aria-expanded={open}
          aria-controls={panelId}
          aria-current={current ? 'true' : undefined}
          aria-label={collapsed ? name : undefined}
          title={collapsed ? name : undefined}
          onClick={(event) => {
            event.stopPropagation();
            setOpen(collapsed ? true : !open);
          }}
        >
          {collapsed ? null : (
            <>
              {label}
              {chevron ? <IconChevron className="cf-sidebar-group__chevron" /> : null}
            </>
          )}
        </Button>
      ) : (
        <div
          className={cx('cf-button', 'cf-button--ghost', 'cf-button--sm', triggerClass)}
          title={collapsed ? name : undefined}
        >
          {parentIcon ? (
            <span className="cf-button__icon" aria-hidden="true">
              {parentIcon}
            </span>
          ) : null}
          {collapsed ? null : label}
        </div>
      )}
      <SidebarNesting.Provider value={true}>
        <div
          id={panelId}
          role="group"
          hidden={!open || collapsed}
          className="cf-sidebar-group__items"
          aria-label={name}
        >
          {children}
        </div>
      </SidebarNesting.Provider>
    </div>
  );
}
