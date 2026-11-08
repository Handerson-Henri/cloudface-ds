export const motion = {
  duration: {
    instant: { value: '0ms', status: 'proposta' },
    fast: { value: '120ms', status: 'proposta' },
    base: { value: '200ms', status: 'proposta' },
    slow: { value: '320ms', status: 'proposta' },
  },
  easing: {
    standard: { value: 'cubic-bezier(0.2, 0, 0, 1)', status: 'proposta' },
    emphasized: { value: 'cubic-bezier(0.2, 0, 0, 1)', status: 'proposta' },
  },
} as const;
