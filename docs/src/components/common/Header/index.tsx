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

// Custom Types
import type { AppBarProps } from 'components/core/AppBar';
export interface HeaderProps extends AppBarProps {}

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
            {['Docs', 'Blog', 'Example'].map((item) => (
              <ButtonLink sx={{ fontWeight: 'bold' }} href='/' key={item}>
                {item}
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
