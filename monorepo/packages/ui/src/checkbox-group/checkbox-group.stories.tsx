import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../checkbox/checkbox';
import { CheckboxGroup } from './checkbox-group';

const meta = { title: 'Formulários/CheckboxGroup' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <CheckboxGroup legend="Regiões">
      <Checkbox label="sa-east-1" />
      <Checkbox label="us-east-1" />
    </CheckboxGroup>
  ),
};

export const Invalid: Story = {
  render: () => (
    <CheckboxGroup legend="Regiões" error="escolha uma">
      <Checkbox label="sa-east-1" />
    </CheckboxGroup>
  ),
};
