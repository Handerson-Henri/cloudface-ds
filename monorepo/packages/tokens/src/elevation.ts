export const shadow = {
  none: { value: 'none', status: 'proposta' },
  sm: {
    value: '0 1px 2px color-mix(in srgb, #080C10 60%, transparent)',
    status: 'proposta',
  },
  md: {
    value: '0 8px 24px color-mix(in srgb, #080C10 50%, transparent)',
    status: 'proposta',
  },
} as const;

export const z = {
  base: { value: '0', status: 'proposta' },
  dropdown: { value: '20', status: 'proposta' },
  sticky: { value: '30', status: 'proposta' },
  overlay: { value: '40', status: 'proposta' },
  modal: { value: '50', status: 'proposta' },
  toast: { value: '60', status: 'proposta' },
} as const;

export const opacity = {
  hover: { value: '0.08', status: 'proposta' },
  focus: { value: '0.12', status: 'proposta' },
  pressed: { value: '0.16', status: 'proposta' },
  disabled: { value: '1', status: 'proposta' },
} as const;

export const breakpoint = {
  sm: { value: '640px', status: 'proposta' },
  md: { value: '768px', status: 'proposta' },
  lg: { value: '1024px', status: 'proposta' },
  xl: { value: '1280px', status: 'proposta' },
} as const;
