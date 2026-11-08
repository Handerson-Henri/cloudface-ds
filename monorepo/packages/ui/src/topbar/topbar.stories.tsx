import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../avatar/avatar';
import { IconButton } from '../icon-button/icon-button';
import { SearchField } from '../search-field/search-field';
import { IconInfo, IconMenu, IconSearch } from '../shared/icons';
import { Topbar } from './topbar';

const meta = { title: 'Navegação/Topbar' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Topbar
      start={
        <>
          <IconButton label="Menu">
            <IconMenu />
          </IconButton>
          <div className="cf-topbar__search">
            <SearchField id="topbar-search" label="Buscar" placeholder="Buscar" />
          </div>
        </>
      }
      end={
        <>
          <IconButton label="Busca">
            <IconSearch />
          </IconButton>
          <IconButton label="Informações">
            <IconInfo />
          </IconButton>
          <Avatar name="Cloudface" size="sm" />
        </>
      }
    />
  ),
};
