import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from '../empty-state/empty-state';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from './table';

const meta = { title: 'Estrutura/Table' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Hosts da borda</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell header>Host</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>edge-1</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell header>Host</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <EmptyState title="Vazio">Nenhum host.</EmptyState>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
