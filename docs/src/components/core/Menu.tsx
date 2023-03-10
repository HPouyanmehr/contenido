import { Menu as MuiMenu, styled } from '@mui/material';

// Types
import type { MenuProps as MuiMenuProps } from '@mui/material';

// Custom Types
export interface MenuProps extends MuiMenuProps {}

const Menu = styled(MuiMenu)<MenuProps>(() => ({}));

export default Menu;
