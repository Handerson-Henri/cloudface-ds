import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '../radio/radio';
import { RadioGroup } from './radio-group';

const meta = { title: 'Formulários/RadioGroup' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <RadioGroup legend="Plano" name="plano">
      <Radio label="Edge" defaultChecked />
      <Radio label="Core" />
    </RadioGroup>
  ),
};
