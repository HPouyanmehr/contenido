import { alpha } from '@mui/material';

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
import Divider from 'components/core/Divider';
export interface DocHeaderProps extends AppBarProps {}

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
            {['Docs', 'Blog', 'Example'].map((item) => (
              <ButtonLink sx={{ fontWeight: 'bold' }} href='/' key={item}>
                {item}
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
