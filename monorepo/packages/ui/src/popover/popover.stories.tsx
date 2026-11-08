import { useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Popover } from './popover';

const meta = { title: 'Estrutura/Popover', component: Popover } satisfies Meta<typeof Popover>;
export default meta;

export const Default = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        trigger={
          <Button size="sm" onClick={() => setOpen((v) => !v)}>
            Abrir
          </Button>
        }
      >
        Painel
      </Popover>
    );
  },
};
