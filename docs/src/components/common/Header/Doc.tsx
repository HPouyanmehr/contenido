import { alpha } from '@mui/material';

// Types
import type { FC } from 'react';

// Custom Core Components
import AppBar from 'components/core/AppBar';
import ButtonLink from 'components/core/ButtonLink';
import Divider from 'components/core/Divider';
import Stack from 'components/core/Stack';
import Toolbar from 'components/core/Toolbar';

// Custom Common Components
import GitHubIconButtonLink from 'components/common/Link/GitHub';
import Logo from 'components/common/Link/Logo';
import MenuToggler from 'components/common/IconButton/MenuToggler';

// Custom Data
import links from 'data/links.json';

// Custom Types
import type { AppBarProps } from 'components/core/AppBar';
export interface DocHeaderProps extends AppBarProps {}

interface MenuItemProps {
  title: string;
  link: string;
  disabled?: boolean;
}

const menuItems: MenuItemProps[] = [
  { title: 'docs', link: links.docs },
  { title: 'blog', link: links.blog, disabled: true },
  { title: 'examples', link: links.examples, disabled: true },
];

const DocHeader: FC<DocHeaderProps> = (props) => {
  // Props
  const { position = 'fixed', sx, ...otherProps } = props;

  return (
    <AppBar
      position={position}
      sx={({ zIndex, palette }) => ({
        zIndex: zIndex.drawer + 1,
        backgroundColor: alpha(palette.background.paper, 0.5),
        backdropFilter: 'blur(6px)',
      })}
      {...otherProps}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo />
        <Stack
          sx={({ breakpoints }) => ({
            display: 'none',
            [breakpoints.up('md')]: {
              display: 'flex',
            },
          })}
        >
          <Stack>
            {menuItems.map((item, index) => (
              <ButtonLink
                sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
                href={item.link}
                disabled={item.disabled}
                key={item.link + item.title + index}
              >
                {item.title}
              </ButtonLink>
            ))}
            <GitHubIconButtonLink />
          </Stack>
        </Stack>
        <MenuToggler
          sx={({ breakpoints }) => ({
            [breakpoints.up('md')]: { display: 'none' },
          })}
        />
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default DocHeader;
