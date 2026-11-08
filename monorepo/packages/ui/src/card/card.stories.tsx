import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Card, CardContent, CardFooter, CardHeader } from './card';

const meta = { title: 'Estrutura/Card' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>Servidor principal</CardHeader>
      <CardContent>Latência média de 12 ms.</CardContent>
      <CardFooter>
        <Button size="sm">Ver logs</Button>
      </CardFooter>
    </Card>
  ),
};

export const Raised: Story = {
  render: () => (
    <Card variant="raised">
      <CardHeader>Elevado</CardHeader>
      <CardContent>Popover / modal.</CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card variant="interactive" href="#servidor">
      <CardHeader>Abrir host</CardHeader>
      <CardContent>Card como âncora.</CardContent>
    </Card>
  ),
};
