import { MenuItem as MuiMenuItem, styled } from '@mui/material';

// Types
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material';

// Custom Types
export interface MenuItemProps extends MuiMenuItemProps {}

const MenuItem = styled(MuiMenuItem)<MenuItemProps>(() => ({}));

export default MenuItem;
