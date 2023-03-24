import { AppBar as MuiAppBar, styled } from '@mui/material';

// Types
import type { AppBarProps as MuiAppBarProps } from '@mui/material';

// Custom Types
export interface AppBarProps extends MuiAppBarProps {}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  backgroundImage: 'none',
}));

export default AppBar;
