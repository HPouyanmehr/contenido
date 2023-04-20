// Types
import type { FC } from 'react';

// Custom Core Components
import AppBar from 'components/core/AppBar';
import ButtonLink from 'components/core/ButtonLink';
import Stack from 'components/core/Stack';
import StackDivider from 'components/core/StackDivider';
import Toolbar from 'components/core/Toolbar';

// Custom Common Components
import GitHubIconButtonLink from 'components/common/Link/GitHub';
import Logo from 'components/common/Link/Logo';
import ThemeTogglerIconButton from 'components/common/IconButton/ThemeToggler';
import MenuToggler from 'components/common/IconButton/MenuToggler';

// Custom Data
import links from 'data/links.json';

// Custom Types
import type { AppBarProps } from 'components/core/AppBar';
export interface HeaderProps extends AppBarProps {}

interface MenuItemProps {
  title: string;
  link: string;
  disabled?: boolean;
}

const menuItems: MenuItemProps[] = [
  { title: 'docs', link: links.docs },
  { title: 'blog', link: links.blog },
  { title: 'examples', link: links.examples, disabled: true },
];

const Header: FC<HeaderProps> = (props) => {
  // Props
  const { position = 'absolute', ...otherProps } = props;

  return (
    <AppBar position={position} {...otherProps}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo />
        <Stack
          divider={<StackDivider />}
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
          </Stack>
          <Stack>
            <ThemeTogglerIconButton />
            <GitHubIconButtonLink />
          </Stack>
        </Stack>
        <MenuToggler
          sx={({ breakpoints }) => ({
            [breakpoints.up('md')]: { display: 'none' },
          })}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
