import type { Meta } from '@storybook/react-vite';
import { Avatar } from '../avatar/avatar';
import { AvatarGroup } from './avatar-group';
const meta = { title: 'Estrutura/AvatarGroup', component: AvatarGroup } satisfies Meta<typeof AvatarGroup>;
export default meta;
export const Default = {
  render: () => (
    <AvatarGroup>
      <Avatar name="Ana" />
      <Avatar name="Bruno" />
    </AvatarGroup>
  ),
};
