import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Icon({ title, children, ...props }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconError(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconSuccess(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 8.2 7 10l4-4.5" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconInfo(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconWarning(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M8 2.5 14 13H2L8 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 6.5v3M8 11.5v.5" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 4 12 12M12 4 4 12" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m3.5 8 3 3.5 6-7" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconStar(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M8 2.5 9.7 6l3.8.4-2.8 2.6.8 3.7L8 10.8 4.5 12.7l.8-3.7L2.5 6.4 6.3 6 8 2.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function IconGrid(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="2.5" width="4" height="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9.5" y="2.5" width="4" height="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2.5" y="9.5" width="4" height="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9.5" y="9.5" width="4" height="4" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 4.5h10M3 8h10M3 11.5h10" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  );
}
